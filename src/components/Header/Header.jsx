import React from 'react'
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import icon from './../../img/PSX_20190908_140348.jpg'
import Navbar from './Navbar/Navbar';


const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.header__top}>
                <img className={s.header__logo} src="https://image.flaticon.com/icons/png/128/3585/3585972.png" alt="logo" ></img>
                <div className={s.buttons}>
                    <button className={s.buttons__button}><span>Register</span></button>
                    <button className={s.buttons__button}><span>Sign up</span></button>
                </div>
            </div>
            <div className={s.header__title}>
                <div className={s.header__fhoto}>
                    <img className={s.header__icon} src={icon} alt="icon" />
                </div>
                <div className={s.title}>
                    <h2 className={s.title__pageTitle}>STEPANENKO Serhii</h2>
                    <div className={s.navigation}>
                        <p className={s.navigation__cityName}>City Name</p>
                        <p className={s.navigation__countryName}>Country Name</p>
                        <p className={s.navigation__settings}><a className={s.navigation__settings}href='#'>setings</a></p>
                    </div>

                </div>
            </div>
            <hr className={s.header__point}></hr>
            <Navbar />
        </header>
    )
}

export default Header;