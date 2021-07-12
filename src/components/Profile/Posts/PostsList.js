import Post from "./Post";
import style from './PostsLists.module.css';

const PostsList = () => {
    return (
        <div className={style.grid}>
            <textarea></textarea>
            <button>Add post</button>
            <button>Remove post</button>
            <Post/>
            <Post/>
            <Post/>
        </div>)
}

export default PostsList;