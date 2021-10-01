import React from 'react'
import ReactDOM from 'react-dom'
import  { ApolloClient, ApolloLink, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error'
import Context from './Context'

import App from './App'

const httpLink = createHttpLink({
    uri: 'https://petgram-server-ivan.vercel.app/graphql'
})

const authLink = setContext((_,{headers})=>{
    const token = window.sessionStorage.getItem('token');
    return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : "",
        }
      }
})
const linkError = onError(({ graphQLErrors, networkError, operation, forward })=>{
    console.log("onError called",{ graphQLErrors, networkError, operation, forward });
    if(graphQLErrors){
        for (let index = 0; index < graphQLErrors.length; index++) {
            const graph_error = graphQLErrors[index];
            if(graph_error.extensions.code === "INTERNAL_SERVER_ERROR" && graph_error.message === 'user does not exist'){
                window.sessionStorage.removeItem('token')
                window.location.href="/"
            }
            if(graph_error.extensions.code === "invalid_token" && graph_error.message === 'user does not exist'){
                window.sessionStorage.removeItem('token')
                window.location.href="/"
            }
        }
    }
})


const client = new ApolloClient({
    link: ApolloLink.from([
        
        linkError,
        authLink.concat(httpLink),
    ]),
    cache: new InMemoryCache()
    
    
})



ReactDOM.render(
    <Context.Provider>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </Context.Provider>
, document.getElementById('app'))
