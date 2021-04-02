import React from 'react'
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';



const Navbar = () => {
    return (
        <nav className={s.header__navbar}>
            <div className={s.menu}>
                <NavLink
                    className={s.menu__item}
                    activeClassName={s.activeLink} to="/home">Home</NavLink>
            </div>
            <div className={s.menu}>
                <NavLink
                    className={s.menu__item}
                    activeClassName={s.activeLink} to="/messages">Messages</NavLink>
            </div>
            <div className={s.menu}>
                <NavLink
                    className={s.menu__item}
                    activeClassName={s.activeLink} to="/friends">Friends</NavLink>
            </div>
            <div className={s.menu}>
                <NavLink
                    className={s.menu__item}
                    activeClassName={s.activeLink} to="/photos">Photos</NavLink>
            </div>
            <div className={s.menu}>
                <NavLink
                    className={s.menu__item}
                    activeClassName={s.activeLink} to="/news">News</NavLink>
            </div>
            <div className={s.menu}>
                <NavLink
                    className={s.menu__item}
                    activeClassName={s.activeLink} to="/community">Community</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;