import React from "react";
import { useParams } from "react-router-dom";
import { PhotoCardShow } from "../components/PhotoCardShow";
import { Layout } from "../components/Layout";

export const Detail = ()=>{
    let {detailId} = useParams();

    return (
        <Layout title={`Fotografía ${detailId}`}>
            <PhotoCardShow id={detailId}/>
        </Layout>
        )
}