import style from './Post.module.css';

const Post = (props) => {
    return (
        <div className={style.post}>
            <span>{props.message}</span>
        </div>);
}

export default Post;