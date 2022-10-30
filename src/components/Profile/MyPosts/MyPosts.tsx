import Post from './Post/Post';
import s from './MyPosts.module.css'

export type PostPropsType = {
    message: string
    likesCount: number
} 

const MyPosts = () => {

    let posts = [
        {id: 1, message: "Hi, howe are you?", likesCount: 12},
        {id: 2, message: "It`s my first post", likesCount: 11},
        {id: 3, message: "Blabla", likesCount: 11},
        {id: 4, message: "Dada", likesCount: 11},
    ]

    let postsElements = posts.map (p => <Post message={p.message} likesCount={p.likesCount} /> )

    return (
       <div className={s.postsBlock}>
           <h3> My posts </h3>
           <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>    
                    <button> Add post </button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>
       </div>
    );
}

export default MyPosts;