import React from 'react';
import s from './Post.module.css';
import icon from './../../../img/alone-with-his-thoughts-1080x720.jpg'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src={icon}></img>
            {props.message}
            <div>
                <span>{props.likeCount} like</span>
            </div>
        </div>
    )
}

export default Post;