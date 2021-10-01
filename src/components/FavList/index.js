import React from "react";
import { Grid, Image, Link } from "./styles";
import PropTypes from 'prop-types'
export const FavList = ({favs=[]})=>{
    return <Grid>
        {
            favs.map(fav=>{
                return <Link key={fav.id} to={`/detail/${fav.id}`}>
                        <Image key={fav.id} src={fav.src} />
                    </Link> 
            })

        }
    </Grid>

}

FavList.propTypes = {
    favs: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            src: PropTypes.string.isRequired
        })
    )
}