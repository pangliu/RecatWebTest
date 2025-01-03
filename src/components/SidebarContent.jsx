// SidebarContent.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import styles from './Sidebar.module.css'

const SidebarContent = () => {
    const navigate = useNavigate();
    // const [sidebar, setSidear] = useState(false);
    const showSidebar = () => setSidear(!sidebar);

    return (
        <div>
            <h2>Menu</h2>
            <ul className={styles.menuList}>
                {SidebarData.map((item, index) => {
                    return (
                        <li key={index} className={styles.menuItem}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default SidebarContent;
