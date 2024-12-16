import React, { useState } from 'react';
import './App.css';
import axios from 'axios';


function RegistrationPage() {
    const [formData, setFormData] = useState({
        account: '',
        email: '',
        promotionCode:'',
        password: '',
        confirmPassword:'',
        phoneNumber:'',
        firstName:'',
        secondName:'',
        cardNo:'',
        mpin:''
    });
    const [resp, setResponse] = useState({
        code:'',
        error_msg:'',
        result: {
            regist:''
        }
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log("handleChange name: ", name, ' + value: ', value)
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async(event) => {
        event.preventDefault();
        console.log('Form submitted:', formData);
        // Add form submission logic here
        axios.post(
            'https://run.mocky.io/v3/bc0997ca-458a-478c-b9f5-efbaa306ff8d', 
            formData)
        .then(response => {
            setResponse(response.data)
            // setResponse(response.data);
            
            var code = resp.result.regist
            console.log('resp code: ', code)
            // alert('response code: ', code);
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
                <label className='label-title'>Bank Information</label>
                <div className='form-type'>
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