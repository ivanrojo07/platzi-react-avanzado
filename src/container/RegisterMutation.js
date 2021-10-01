import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "../hoc/withPhotos";


export const RegisterMutation = ()=>{
    const [registerMutation, {data, loading, error} ] = useMutation(REGISTER_USER)
    return [registerMutation, {data, loading, error} ]
    
}