import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import ApiService from '../services/apiService';
import ApiUrls from '../services/apiUrls';
import { ClipLoader } from 'react-spinners';

const apiService = new ApiService(ApiUrls.BASE_URL);

function RegistrationPage() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        account: '',
        mail: '',
        promotion_code: '',
        password: '',
        confirm_password: '',
        phone: '',
        first_name: '',
        second_name: '',
        card_no: '',
        mpin: ''
    });
    const [resp, setResponse] = useState({
        code: '',
        error_msg: '',
        result: {
            regist: ''
        }
    });

    // 過濾空白欄位
    const filterEmptyFields = (data) => {
        return Object.fromEntries(
            Object.entries(data).filter(([_, value]) => value.trim() !== '')
        );
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // 先判斷 confirm password 是否與 password 相同
        if (formData.confirm_password != formData.password) {
            alert('The passwords do not match, please double-check.');
            return;
        }
        setIsLoading(true)
        try {
            const filteredData = filterEmptyFields(formData);
            // 移除 confirm_password
            const { confirm_password, ...dataToSubmit } = filteredData;
            const response = await apiService.post(
                ApiUrls.REGISTER, 
                dataToSubmit
            );
            if(response.code == 200) {
                alert('Registration successful');
                navigate('/home');
            } else {
                alert(response.data.error_msg);
            }
        } catch(error) {
            alert('Registration failed. Please try again.', error);
        } finally {
            setIsLoading(false)
        }
    };

    return (
        <div className="registration-container">
            <h1>Register</h1>
            <RegistrationForm
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                isLoading={isLoading}
            />
        </div>
    );
}

function RegistrationForm({ formData, handleChange, handleSubmit, isLoading}) {
    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label className="label-title">User Information</label>
                <div className="form-type">
                    <FormInput
                        label="*Account"
                        type="text"
                        id="account"
                        name="account"
                        value={formData.account}
                        handleChange={handleChange}
                        required
                    />
                    <FormInput
                        label="*Email"
                        type="email"
                        id="mail"
                        name="mail"
                        value={formData.mail}
                        handleChange={handleChange}
                        required
                    />
                    <FormInput
                        label="*Promotion Code"
                        type="text"
                        id="promotion_code"
                        name="promotion_code"
                        value={formData.promotion_code}
                        handleChange={handleChange}
                        required
                    />
                    <FormInput
                        label="*Password"
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        handleChange={handleChange}
                        required
                    />
                    <FormInput
                        label="*Confirm Password"
                        type="password"
                        id="confirm_password"
                        name="confirm_password"
                        value={formData.confirm_password}
                        handleChange={handleChange}
                        required
                    />
                    <FormInput
                        label="*phone"
                        type="number"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        handleChange={handleChange}
                        required
                    />
                    <FormInput
                        label="First Name"
                        type="text"
                        id="first_name"
                        name="first_name"
                        value={formData.first_name}
                        handleChange={handleChange}
                    />
                    <FormInput
                        label="Second Name"
                        type="text"
                        id="second_name"
                        name="second_name"
                        value={formData.second_name}
                        handleChange={handleChange}
                    />
                </div>
                <label className="label-title" hidden>
                    Bank Information
                </label>
                <div className="form-type" hidden>
                    <FormInput
                        label="card No."
                        type="number"
                        id="card_no"
                        name="card_no"
                        value={formData.card_no}
                        handleChange={handleChange}
                    />
                    <FormInput
                        label="mpin"
                        type="number"
                        id="mpin"
                        name="mpin"
                        value={formData.mpin}
                        handleChange={handleChange}
                    />
                </div>
                <button type="submit" className="submit-btn" disabled={isLoading}>
                    {isLoading ? 'Registering...' : 'Register'}
                </button>
            </form>
            {/* 顯示 ClipLoader 並套用位置樣式 */}
            {isLoading && (<Loader />)}
        </div>
    );
}

function FormInput({ label, type, id, name, value, handleChange, required }) {
    return (
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={handleChange}
                required={required}
            />
        </div>
    );
}

function Loader() {
    return(
        <div className="loader-container">
            <ClipLoader
                color="#EEEEEE"
                size={70}
                loading={true}

            />
        </div>
    )
}

export default RegistrationPage;
