import React from 'react'
import { NavLink } from 'react-router-dom';
import s from './../Messages.module.css'

const Dialog = (props) => {
    return (
        <div className={s.dialog}>
            <img className={s.gostIcon} src={props.icon} alt="" />
            {props.dialog}
        </div>
    )
}

export default Dialog;