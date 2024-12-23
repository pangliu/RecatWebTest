import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SiderbarData = [
    {
        title: 'Home',
        path: '/home',
        icon: (
            <AiIcons.AiFillHome style={{ fontSize: '25px', color: '#555' }} />
        ),
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: 'about',
        icon: (
            <IoIcons.IoIosPaper style={{ fontSize: '25px', color: '#555' }} />
        ),
        cName: 'nav-text'
    },
    {
        title: 'Announcement',
        path: 'announcement',
        icon: (
            <IoIcons.IoIosPaperPlane
                style={{ fontSize: '25px', color: '#555' }}
            />
        ),
        cName: 'nav-text'
    }
];
