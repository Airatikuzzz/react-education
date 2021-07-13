import Post from "./Post";
import style from './PostsLists.module.css';

const PostsList = () => {
    return (
        <div className={style.grid}>
            <textarea></textarea>
            <button>Add post</button>
            <button>Remove post</button>
            <Post message = 'First'/>
            <Post message = 'Second'/>
            <Post message = 'Third'/>
            <Post/>
            <Post/>
        </div>)
}

export default PostsList;