import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import RegistrationPage from './pages/RegistrationPage';

function App() {
    return (
        <Router basename="/RecatWebTest">
            <Routes>
                {/* 註冊頁面 - 不包含側邊欄 */}
                <Route path="/register" element={<RegistrationPage />} />
                {/* 將 Layout 作為固定框架 */}
                <Route path="/" element={<Layout />}>
                    {/* 嵌套路由切換右側內容 */}
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="services" element={<Services />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
