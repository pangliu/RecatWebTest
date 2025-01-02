import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/manager/Home';
import Announcement from './pages/manager/Announcement';
import Login from './pages/manager/Login';
import Download from './pages/register/Download';
import Pending from './pages/register/Pending';
import RegisterBank from './pages/register/RegisterBank';
import Register from './pages/register/Register'

function App() {
    return (
        <Router>
            <Routes>
                {/* 註冊頁面 - 不包含側邊欄 */}
                <Route path="/register" element={<Register />} />
                <Route path="/pending" element={<Pending />} />
                <Route path="/register_bank" element={<RegisterBank />} />
                <Route path="/download" element={<Download />} />
                <Route path="/login" element={<Login />} />
                {/* 將 Layout 作為固定框架 */}
                <Route path="/home" element={<Layout />}>
                    {/* 嵌套路由切換右側內容 */}
                    <Route index element={<Home />} />
                    <Route path="announcement" element={<Announcement />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
