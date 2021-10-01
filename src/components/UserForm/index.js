import React, { Fragment } from 'react'
import useInputValue from '../../hooks/useInputValue'
import { Form, Input, Button, Title, Error } from './styles'
export const UserForm = ({onSubmit,title,loading,error})=>{
    const email = useInputValue('')
    const password = useInputValue('')
    const handleSubmit = (e)=>{
        e.preventDefault();
        return onSubmit({email,password})
    }
    return (
        <Fragment>
            <Title>{title}</Title>
            <Form onSubmit={handleSubmit}>
                <Input disabled={loading ? true : false} placeholder="Email" {...email} type="text" />
                <Input disabled={loading ? true : false} placeholder="Password" {...password} type="password" />
                {/* <input placeholder="Email" value={email.value} onChange={email.onChange} type="text" />
                <input placeholder="Password" value={password.value} onChange={password.onChange} type="password" /> */}
                <Button disabled={loading ? true : false}>{title}</Button>  
            </Form>
            {
                error && <Error>Error: {error.message}</Error>
            }
        </Fragment>
    )
}