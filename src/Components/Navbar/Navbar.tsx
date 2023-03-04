import React from 'react'
import { Layout } from 'antd'
import NavbarItem from './NavbarItem/NavbarItem'
import { routes } from '../../config'

const { Header } = Layout

const Navbar: React.FC = () => {
    return (
        <Header>
            <NavbarItem 
                content='Home'
                route={routes['startPage']}
            />
            <NavbarItem 
                content='Sign In'
                route={routes['signin']}
            />
        </Header>
    )
}

export default Navbar