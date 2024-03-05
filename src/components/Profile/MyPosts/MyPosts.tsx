import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css'
import {PostType} from '../../../redux/store'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/required";
import {Textarea} from "../../common/FormControls/FormControls";

type MyPostType = {
    updateNewPostText: (text: string) => void
    addPost: (newMessagePost: string) => void
    posts: Array<PostType>
    newPostText: string
}


let maxLength10 = maxLengthCreator(10)


// Но с коннектом в Реакт Мемо нет необходимости, т.к. это в этом случае делает сам Реакт.

const MyPosts = React.memo((props: MyPostType) => {
    console.log("MyPosts", props)
    let postsElements =
        props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    let addPost = (values: any) => {
        props.addPost(values.newMessagePost);
    }

    return (
        <div className={s.postsBlock}>
            <h3> My posts </h3>

            <AddMyPostFormRedux onSubmit={addPost}/>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
})

const AddMyPostForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newMessagePost" component={Textarea} placeholder="Enter your post message"
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <button> Add post </button>
            </div>
        </form>
    )
}

const AddMyPostFormRedux = reduxForm({form: "postAddMessageForm"})(AddMyPostForm)

export default MyPosts;