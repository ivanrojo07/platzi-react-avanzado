import React from "react";
import { FavList } from "../components/FavList";
import { GetFavorites } from "../container/GetFavorites";
import { Helmet } from "react-helmet";
import { Layout } from "../components/Layout";
export default ()=>{
    const {data, loading, error} = GetFavorites();
    console.log({data, loading, error})
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error!</p>
    console.log(data.favs)
    return (
        <Layout title={`Petgram 🐱 | mis favoritos`} subtitle={`Mis fotos favoritas donde quieras`}>
            {
                data.favs && data.favs.length >0 ? 
                <FavList favs={data.favs}></FavList>
                : <h1>No tienes Favs</h1>
            }
        </Layout>
    )
}