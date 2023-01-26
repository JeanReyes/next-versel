import React from 'react'
import nav from './NavBar.module.css';
import { ActiveLink } from './ActiveLink';

const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];


export const Navbar = () => {
    return (
        <nav className={nav['menu-container']}>
            {menuItems.map(({text, href}) => (
                <ActiveLink key={text} text={text} href={href}/>
            ))}
        </nav>
    )
}
