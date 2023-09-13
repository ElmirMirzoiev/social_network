import React from 'react';
import {NavLink} from "react-router-dom";
import Button from "@mui/material/Button";
import styles from "./Navbar.module.scss";


function Navbar() {

    const navLinks = [
        {
            path: '/profile/21568',
            title: 'My Profile'
        },
        {
            path: '/users/',
            title: 'Users'
        },
        {
            path: '/friends/',
            title: 'Friends'
        },
        {
            path: '/messages/',
            title: 'Messages'
        },
        {
            path: '/settings/',
            title: 'Settings'
        },
    ]

    return (
        <nav className={styles.nav}>
            {navLinks.map(nav => <Button key={nav.title}>
                <NavLink to={nav.path}> {nav.title} </NavLink>
            </Button>)}
        </nav>
    );
}

export default Navbar;