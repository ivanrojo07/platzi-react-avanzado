import React from "react";
import { PhotoCard } from "../PhotoCard";

import { gql, useQuery } from '@apollo/client';
import { SINGLEPHOTO } from "../../hoc/withPhotos";


export const PhotoCardShow = (props)=>{
    const {loading, error, data} = useQuery(SINGLEPHOTO,{
        
        variables: {"id":props.id}
        
    })
    console.log({loading, error, data});
    if(loading) return <h1>Loading...</h1>
    if(error) return <h1>Error: {error}</h1>
    return <PhotoCard  {...data.photo}/>
}