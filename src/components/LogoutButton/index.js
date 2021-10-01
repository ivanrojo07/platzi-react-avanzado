import React, { useContext } from "react";
import { Context } from "../../Context";
import { Button } from "./styles";

const LogoutButton = ()=>{
    const {removeAuth} = useContext(Context)
    return (
        <Button onClick={removeAuth}>Cerrar Sesión</Button>
    )
}

export default LogoutButton