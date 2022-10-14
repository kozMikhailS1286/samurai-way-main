import s from './Post.module.css';

type PostPropsType = {
    message: string
    likesCount: string
}

const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}>
            <img src='https://cdn1.flamp.ru/489671bbc112e7621d7d9f013bbb8a49_100_100.jpg'/>
            {props.message}
            <div>
                <span> like </span> {props.likesCount}
            </div>
        </div>
    );
}

export default Post;