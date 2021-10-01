import React, { Fragment, useEffect, useRef, useState } from 'react'

import { ImgWrapper, Img, Article } from './styles'

import useLocalStorage from '../../hooks/useLocalStorage';
import useNearScreen from '../../hooks/useNearScreen';
import { FavButton } from '../FavButton';
// import { ANONYMOUSLIKE } from '../../hoc/withPhotos';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LIKE_PHOTO } from '../../hoc/withPhotos';
import PropTypes from 'prop-types'

export const PhotoCard = ({
    id, liked, likes=0, src='https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_dogs.jpg'
}) => {
    const [show,ref] = useNearScreen();
    // const key = `like-${id}`
    // const [liked, setLiked] = useLocalStorage(key,false)
    
    const [incrementLike, {data, loading, error}] = useMutation(LIKE_PHOTO);


    const handleFavClick = ()=> {
        incrementLike({variables:{"input": {"id":id}}})
            // .then(({data})=>{
            //     if(data.likePhoto){
            //         setLiked(data.likedPhoto.liked)
            //     }
            // })
        // setLiked(true)
    }

    return (
        <Article ref={ref}>
            {
                show && <Fragment>
                    <Link to={`/detail/${id}`}>
                        <ImgWrapper>
                            <Img src={src} />
                        </ImgWrapper>
                    </Link>

                    <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
                </Fragment>
            }
        </Article>
    )
}

PhotoCard.propTypes = {
    id : PropTypes.string.isRequired,
    liked : PropTypes.bool.isRequired,
    src : PropTypes.string.isRequired,
    likes : function(props, propName, componentName){
        const propValue = props[propName]

        if(propValue === undefined){
            return new Error (`${propName} value must be defined`)
        }
        if(propValue < 0){
            return new Error(`${propName} value must be greater than 0`)
        }
    }
}