import React from 'react';
import { Outlet } from 'react-router-dom'; // 用於渲染子路由內容
import SidebarContent from './SidebarContent';

const Layout = () => {
    return (
        <div style={{ display: 'flex' }}>
            {/* 左側側邊欄，固定不變 */}
            <aside
                style={{
                    width: '250px',
                    background: '#f0f0f0',
                    padding: '20px',
                    height: '100vh', // 側邊欄高度填滿視窗
                    boxShadow: '2px 0 5px rgba(0,0,0,0.1)'
                }}
            >
                <SidebarContent />
            </aside>

            {/* 右側動態內容 */}
            <main style={{ flex: 1, padding: '20px' }}>
                <Outlet /> {/* 渲染對應路由的內容 */}
            </main>
        </div>
    );
};

export default Layout;
