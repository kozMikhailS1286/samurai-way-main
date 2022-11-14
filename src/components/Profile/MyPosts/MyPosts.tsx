import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css'
import { PostType } from './../../../redux/state';

type MyPostType = {
    posts: PostType[]
    addPostCallback: (postMessage: string) => void
}

const MyPosts = (props: MyPostType) => {

    let postsElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount} /> )

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        let text = newPostElement.current ? newPostElement.current.value: "---";
        props.addPostCallback(text);
        if(newPostElement.current){
            newPostElement.current.value = "";
        }
    }

    return (
       <div className={s.postsBlock}>
           <h3> My posts </h3>
           <div>
                <div>
                    <textarea ref={ newPostElement }></textarea>
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