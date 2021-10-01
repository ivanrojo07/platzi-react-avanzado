import React from "react";
import { Link, Nav } from "./styles";
import { MdHome, MdFavoriteBorder, MdPerson} from 'react-icons/md'
export const NavBar = () =>{
    const SIZE = '32px';
    return (
        <Nav>
            <Link exact to="/"><MdHome size={SIZE} /> Home </Link>
            <Link exact to="/favs"><MdFavoriteBorder size={SIZE} /> Favorites </Link>
            <Link exact to="/user"><MdPerson size={SIZE} /> User </Link>
        </Nav>
    )
}