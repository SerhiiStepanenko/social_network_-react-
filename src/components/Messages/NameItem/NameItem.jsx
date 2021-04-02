import React from 'react'
import { NavLink } from 'react-router-dom';
import s from './../Messages.module.css'

const NameItem = (props) => {
    let id = '/messages/' + props.id;
    return (
        <div className={s.item}>
            <div className={s.item__user}>
                <img className={s.gostIcon} src={props.icon} alt="" />
                <NavLink className={s.name} to={id}>{props.name}</NavLink>
            </div>

        </div>
    )
}

export default NameItem;