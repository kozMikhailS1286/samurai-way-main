import Post from './Post/Post';
import s from './MyPosts.module.css'


const MyPosts = () => {
    return (
       <div>
           My posts
           <div>
                <textarea></textarea>
                <button> Add post </button>
            </div>

            <div className={s.posts}>
                <Post message="Hi, howe are you?" likesCount='15' />
                <Post message="It`s my first post" likesCount='20' />
            </div>
       </div>
    );
}

export default MyPosts;