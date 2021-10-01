import { useQuery } from '@apollo/client';
import { FAVS_USER } from '../hoc/withPhotos';

export const GetFavorites = () =>{
    const {loading, error, data} = useQuery(FAVS_USER,
        { fetchPolicy: "network-only" })
    return {loading, error, data}
}