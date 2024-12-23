import React, { useState } from 'react';
import * as IoIcons from 'react-icons/io'
import { PiPasswordFill } from "react-icons/pi";
import { ClipLoader } from 'react-spinners';
import ApiService from '../services/apiService';
import ApiUrls from '../services/apiUrls';
import { useNavigate } from 'react-router-dom';
import {OrbitProgress} from 'react-loading-indicators'

const apiService = new ApiService(ApiUrls.TEST_BASE_URL);

function FormInput({type, name, value, handleChange, required }) {
    return (
        <div className="form-login-group">
            <input
                type={type}
                name={name}
                value={value}
                onChange={handleChange}
                required={required}
            />
        </div>
    );
}

function Loader() {
    return (
        <div className="loader-container">
            {/* <ClipLoader color="#EEEEEE" size={70} loading={true} /> */}
            <OrbitProgress variant="spokes" color="#f10a0a" size="medium" text="" textColor="" />
        </div>
    );
}

function Login() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        account: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('code: ', formData);
        setIsLoading(true);
        const response = await apiService.post(
            ApiUrls.TEST_REGISTER,
            formData
        );
        try {
            if (response.code == 200) {
                alert('Registration successful');
                navigate('/home');
            } else {
                console.log('code: ', response.code);
                alert(response.error_msg);
            }
        } catch (error) {

        } finally {
            setIsLoading(false);
        }
    }

    return(
        <div className='login-container'>
            <h1>Ninja Manager Login</h1>
            <form className='form-login' onSubmit={handleSubmit}>
                <div>
                    <div className='form-login-edit'>
                    <IoIcons.IoIosPerson style={{ fontSize: '32px', color: '#555' }}/>
                    <FormInput 
                        type="text"
                        name="account"
                        value={formData.account}
                        handleChange={handleChange}
                        required />
                    </div>
                    <div className='form-login-edit'>
                    <PiPasswordFill  style={{ fontSize: '32px', color: '#555' }}/>
                    <FormInput
                        type="password"
                        name="password"
                        value={formData.password}
                        handleChange={handleChange}
                        required />
                    </div>
                    <button
                        type="submit"
                        className="submit-login-btn"
                        disabled={isLoading}>
                            {isLoading ? 'Logining...' : 'Login'}
                    </button>
                    {/* 顯示 ClipLoader 並套用位置樣式 */}
                    {isLoading && <Loader />}
                </div>
            </form>
        </div>
    )
}

export default Login;