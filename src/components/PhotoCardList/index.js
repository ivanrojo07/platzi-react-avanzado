import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { useQuery } from '@apollo/client'

import {PHOTOS} from '../../hoc/withPhotos'


export const PhotoCardList = ({categoryId})=>{
    const { loading, error, data } = useQuery(PHOTOS,{variables:{categoryId}});
    console.log({loading, error, data});
    if (loading) return <p>Loading...</p>
    if(error) return <p>{`Error! ${error}`}</p>
    return (
        <ul>
            {data.photos.map(photo=><PhotoCard key={photo.id} { ...photo }  />)}
        </ul>
    )
}