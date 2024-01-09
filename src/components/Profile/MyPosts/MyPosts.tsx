import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css'
import {PostType} from '../../../redux/store'
import {Field, reduxForm} from "redux-form";

type MyPostType = {
    updateNewPostText: (text: string) => void
    addPost: (newMessagePost: string) => void
    posts: Array<PostType>
    newPostText: string
}


const MyPosts = (props: MyPostType) => {
    console.log("MyPosts", props)
    let postsElements =
        props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount} /> )

    let addPost = (values: any) => {
        props.addPost(values.newMessagePost);
    }

    return (
       <div className={s.postsBlock}>
           <h3> My posts </h3>

           <AddMyPostFormRedux onSubmit={addPost} />

            <div className={s.posts}>
                {postsElements}
            </div>
       </div>
    );
}

const AddMyPostForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newMessagePost" component="textarea" placeholder="Enter your post message" />
            </div>
            <div>
                <button> Add post </button>
            </div>
        </form>
    )
}

const AddMyPostFormRedux = reduxForm({form: "postAddMessageForm"})(AddMyPostForm)

export default MyPosts;