import style from './Sidebar.module.css';

const Sidebar = ()=> {
    return (
        <nav className={style.sidebar}>
            <div className={style.menuItem}>
                <a>Profile</a>
            </div>
            <div className={style.menuItem}>
                <a>Messages</a>
            </div>
            <div className={style.menuItem}>
                <a>News</a>
            </div>
            <div className={style.menuItem}>
                <a>Music</a>
            </div>
            <div className={style.menuItem}>
                <a>Settings</a>
            </div>
        </nav>
    )
};

export default Sidebar;