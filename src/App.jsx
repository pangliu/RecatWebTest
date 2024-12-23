import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Announcement from './pages/Announcement';
import RegistrationPage from './pages/RegistrationPage';
import Login from './pages/Login';

function App() {
    return (
        <Router>
            <Routes>
                {/* 註冊頁面 - 不包含側邊欄 */}
                <Route path="/register" element={<RegistrationPage />} />
                <Route path="/login" element={<Login />} />
                {/* 將 Layout 作為固定框架 */}
                <Route path="/home" element={<Layout />}>
                    {/* 嵌套路由切換右側內容 */}
                    <Route index element={<Home />} />
                    {/* <Route path="home" element={<Home />} /> */}
                    <Route path="about" element={<About />} />
                    <Route path="announcement" element={<Announcement />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
