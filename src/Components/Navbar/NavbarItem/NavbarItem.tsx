import React from 'react'
import { Link } from 'react-router-dom'
import css from './NavbarItem.module.css'

export type NavbarItemType = {
    route: string,
    content: string
} 
  
const NavbarItem: React.FC<NavbarItemType> = (props) => {
    return (
        <Link 
            className={css.navbarItem}
            to={props.route}
        >
            {props.content}
        </Link>
    )
} 

export default NavbarItem