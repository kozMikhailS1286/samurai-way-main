import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css'
import { PostType } from './../../../redux/state';

type MyPostType = {
    posts: PostType[]
}

const MyPosts = (props: MyPostType) => {

    let postsElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount} /> )

    let newPostElement: any = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
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