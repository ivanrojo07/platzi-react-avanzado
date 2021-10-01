import React, { Fragment } from "react";
import { useParams } from "react-router-dom";

import { CategoryList } from '../components/CategoryList'
import { PhotoCardList } from '../components/PhotoCardList'

import { Helmet } from "react-helmet";

const HomePage = ()=>{
    let {id} = useParams();
    return (
        <Fragment>
            <Helmet>
                <title>
                    Petgram - Tu app de fotos de mascotas
                </title>
                <meta name="description" content='Con petgram puedes encontrar fotos de animales domesticos muy bonitos' />
            </Helmet>
            <CategoryList />
            <PhotoCardList categoryId={id} />
        </Fragment>
    )
}

const Home = React.memo(HomePage,(prevProps, props)=>{
    return prevProps.id === props.id
})

export default Home