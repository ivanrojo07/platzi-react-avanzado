import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../hoc/withPhotos";


export const LoginMutation = ()=>{
    const [loginMutation, {data, loading, error}] = useMutation(LOGIN_USER)
    return [loginMutation, {data, loading, error}]
}
