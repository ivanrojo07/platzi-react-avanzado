import React, { Fragment, useContext, Suspense } from 'react'


import { GlobalStyle } from './styles/GlobalStyles'

import Logo from './components/Logo'

import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom'
import { Detail } from './pages/Detail'
import { NavBar } from './components/NavBar'
import { NotFound } from './pages/NotFound'
import { NotRegisteredUser } from './pages/NotRegisteredUser'

import {Context} from './Context'


// Cargar solo cuando el usuario lo necesite
const Favs = React.lazy(()=>{
  return import('./pages/Favs');
})
const Home = React.lazy(()=> import('./pages/Home'))
const User = React.lazy(()=>import('./pages/User'))

// const UserLogged = ({children})=>{
//   return children({isAuth:false});
// }

const App = ()=>{
  const { isAuth } = useContext(Context)
  console.log(isAuth)
  // const urlParams = new window.URLSearchParams(window.location.search)
  // const detailId = urlParams.get('detail')
  
  return (
    <Router>
      <Suspense fallback={<div/>}>
      <GlobalStyle />
      <Logo />
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pet/:id" component={Home} />
        <Route exact path='/detail/:detailId' component={Detail} />
        {!isAuth && <Route exact path='/login' component={NotRegisteredUser} />}
        {!isAuth && <Redirect from='/favs' to='/login' />}
        {!isAuth && <Redirect from='/user' to='/login' />}
        {isAuth && <Redirect from='/login' to='/' />}

        <Route exact path="/favs" component={Favs} />
        <Route exact path="/user" component={User} />
        <Route path='*' component={NotFound}/>
        
      </Switch>
      <NavBar />
      </Suspense>
    </Router>
  )
  
}

export default App
