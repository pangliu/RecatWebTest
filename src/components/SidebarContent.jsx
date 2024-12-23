// SidebarContent.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SiderbarData } from './SiderbarData';
import './Sidebar.css';

const SidebarContent = () => {
    const navigate = useNavigate();
    // const [sidebar, setSidear] = useState(false);
    const showSidebar = () => setSidear(!sidebar);

    return (
        <div>
            <h2>Menu</h2>
            <ul className='menu-list'>
                {SiderbarData.map((item, index) => {
                    return(
                        <li key={index} className={item.cName}>
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
