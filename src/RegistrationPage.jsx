import React, { useState } from 'react';
import './App.css';


function RegistrationPage() {
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        password: '',
        phoneNumber:''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('onClick')
        // Add form submission logic here
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
                <FormInput
                    label="UserName"
                    type="text"
                    id="user_name"
                    name="user_name"
                    value={formData.username}
                    handleChange={handleChange}
                    required
                />
                <FormInput
                    label="Email"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    handleChange={handleChange}
                    required
                />
                <FormInput
                    label="Password"
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    handleChange={handleChange}
                    required
                />
                <FormInput
                    label="phoneNumber"
                    type="phone"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    handleChange={handleChange}
                    required
                />
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