import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
    let postElements = props.state.postData.map(p => <Post message={p.message} likeCount={p.likeCount} />)
    return (
        <div className={s.myPosts}>
            <h3 className={s.posts__myPost}>My posts</h3>
            <div>
                <textarea></textarea>
                <div className={s.button}>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts__item}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;