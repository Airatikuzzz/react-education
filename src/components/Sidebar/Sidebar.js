import style from './Sidebar.module.css';
import {NavLink} from "react-router-dom";

const Sidebar = ()=> {
    return (
        <nav className={style.sidebar}>
            <div className={style.menuItem}>
                <NavLink to="/profile" activeClassName={style.activeLink}>Profile</NavLink>
            </div>
            <div className={style.menuItem}>
                <NavLink to="/dialogs" activeClassName={style.activeLink}>Messages</NavLink>
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