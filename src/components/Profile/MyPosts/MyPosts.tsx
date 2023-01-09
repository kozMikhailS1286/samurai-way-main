import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css'
import { PostType, ProfilePageType } from './../../../redux/state';

type MyPostType = {
    profilePage: ProfilePageType
    addPostCallback: () => void
    updateNewPostText: (newText: string) => void
}

const MyPosts = (props: MyPostType) => {

    let postsElements = props.profilePage.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount} /> )

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        props.addPostCallback();
    }

    let onPostChange = () => {
        if(newPostElement.current) {
            let text = newPostElement.current.value;
            props.updateNewPostText(text)
        }
    }

    
    return (
       <div className={s.postsBlock}>
           <h3> My posts </h3>
           <div>
                <div>
                    <textarea onChange={onPostChange} ref={ newPostElement }
                                value={props.profilePage.newPostText}            
                    />
                </div>
                <div>    
                    <button onClick={ addPost }> Add post </button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>
       </div>
    );
}

export default MyPosts;