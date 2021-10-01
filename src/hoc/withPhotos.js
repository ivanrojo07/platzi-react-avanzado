import { gql } from 'graphql-tag'

const PHOTOS = gql`
    query getPhotos($categoryId: ID){
        photos(categoryId:$categoryId){
            id
            categoryId
            src
            likes
            userId
            liked
        }
    }
`
const SINGLEPHOTO = gql`
query getSinglePhoto($id:ID!){
    photo(id:$id){
        id
        categoryId
        src
        likes
        userId
        liked
    }
}`

const ANONYMOUSLIKE = gql`
mutation likeAnonymousPhoto($input: LikePhoto!){
    likeAnonymousPhoto(input:$input){
      id
      liked
      likes
    }
  }
`
const LIKE_PHOTO = gql`
mutation likePhoto($input: LikePhoto!){
    likePhoto(input:$input){
      id
      liked
      likes
    }
  }
`

const REGISTER_USER = gql`
    mutation signup($input:UserCredentials!){
        signup(input:$input)
    }
`

const LOGIN_USER = gql`
    mutation login($input:UserCredentials!){
        login(input:$input)
    }
`

const FAVS_USER = gql`
    query getFavs {
        favs{
            id
            categoryId
            src
            likes
            userId
        }
    }
`

export {PHOTOS, SINGLEPHOTO, ANONYMOUSLIKE, REGISTER_USER, LOGIN_USER, LIKE_PHOTO, FAVS_USER}