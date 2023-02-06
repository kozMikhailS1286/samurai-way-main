import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css'
import { addPostAC, changeNewTextAC } from './../../../redux/profile-reducer';
import {ActionsType, PostType, ProfilePageType} from '../../../redux/store'

type MyPostType = {
    updateNewPostText: (text: string) => void
    addPost: () => void

    posts: Array<PostType>
    newPostText: string
}


const MyPosts = (props: MyPostType) => {
    let postsElements =
        props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount} /> )

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current?.value
        text && props.updateNewPostText(text)
    }

    
    return (
       <div className={s.postsBlock}>
           <h3> My posts </h3>
           <div>
                <div>
                    <textarea onChange={onPostChange} ref={ newPostElement }
                                value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={ onAddPost }> Add post </button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>
       </div>
    );
}

export default MyPosts;