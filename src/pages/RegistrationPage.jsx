import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


function RegistrationPage() {
    const navigate = useNavigate(); // 用於跳轉的鉤子
    const [formData, setFormData] = useState({
        account: '',
        email: '',
        promotionCode: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        firstName: '',
        secondName: '',
        cardNo: '',
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
        // console.log("handleChange name: ", name, ' + value: ', value)
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // 先判斷 confirm password 是否與 password 相同
        if (formData.confirmPassword != formData.password) {
            alert('The passwords do not match, please double-check.')
            return
        }
        const filteredData = filterEmptyFields(formData);
        console.log('filteredData submitted:', filteredData);
        axios.post(
            'https://run.mocky.io/v3/bc0997ca-458a-478c-b9f5-efbaa306ff8d',
            filteredData)
            .then(response => {
                setResponse(response.data)
                if (response.data.code == 200) {
                    alert('Registration successful')
                    navigate('/home')
                } else {
                    alert(response.data.error_msg)
                }
            })
            .catch(error => {
                alert('error: ', error);
            });
    };

    return (
        <div className="registration-container">
            <h1>Register</h1>
            <RegistrationForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
        </div>
    );
}

function RegistrationForm({ formData, handleChange, handleSubmit }) {
    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <label className='label-title'>User Information</label>
                <div className='form-type'>
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
                        id="email"
                        name="email"
                        value={formData.email}
                        handleChange={handleChange}
                        required
                    />
                    <FormInput
                        label="*Promotion Code"
                        type="text"
                        id="promotionCode"
                        name="promotionCode"
                        value={formData.promotionCode}
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
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        handleChange={handleChange}
                        required
                    />
                    <FormInput
                        label="*phone"
                        type="number"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        handleChange={handleChange}
                        required
                    />
                    <FormInput
                        label="First Name"
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        handleChange={handleChange}
                    />
                    <FormInput
                        label="Second Name"
                        type="text"
                        id="secondName"
                        name="secondName"
                        value={formData.secondName}
                        handleChange={handleChange}
                    />
                </div>
                <label className='label-title' hidden>Bank Information</label>
                <div className='form-type' hidden>
                    <FormInput
                        label="card No."
                        type="number"
                        id="cardNo"
                        name="cardNo"
                        value={formData.cardNo}
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
                <button type="submit" className="submit-btn" >register</button>
            </form>
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

export default RegistrationPage;