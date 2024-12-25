import React, { useState } from 'react';
import './Register.css';
import ApiService from '../services/apiService';
import ApiUrls from '../services/apiUrls';
import { useNavigate } from 'react-router-dom';
import { OrbitProgress } from 'react-loading-indicators';

const apiService = new ApiService(ApiUrls.BASE_URL);

function Loader() {
    return (
        <div className="loader-container">
            <OrbitProgress
                variant="spokes"
                color="#dcd6d6"
                size="medium"
                text=""
                textColor=""
            />
        </div>
    );
}

function FormInput({ type, name, value, handleChange, required }) {
    return (
        <div>
            <input
                className="forminput-style"
                type={type}
                name={name}
                value={value}
                onChange={handleChange}
                required={required}
            />
        </div>
    );
}

function Register() {
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
        second_name: ''
    });
    // 檢查必填欄位是否完成
    const isFormValid =
        formData.account.trim() !== '' &&
        formData.password.trim() !== '' &&
        formData.confirm_password.trim() !== '' &&
        formData.mail.trim() !== '' &&
        formData.phone.trim() !== '' &&
        formData.promotion_code.trim() !== '';

    const handleChange = (e) => {
        console.log('isFormValid: ', isFormValid);
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    // 過濾空白欄位
    const filterEmptyFields = (data) => {
        return Object.fromEntries(
            Object.entries(data).filter(([_, value]) => value.trim() !== '')
        );
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // 先判斷 confirm password 是否與 password 相同
        if (formData.confirm_password != formData.password) {
            alert('The passwords do not match, please double-check.');
            return;
        }
        setIsLoading(true);
        try {
            const filteredData = filterEmptyFields(formData);
            // 移除 confirm_password
            const { confirm_password, ...dataToSubmit } = filteredData;
            const response = await apiService.post(
                ApiUrls.REGISTER,
                dataToSubmit
            );
            console.log('response: ', response);
            if (response.code == 200) {
                alert('Registration successful');
                navigate('/pending');
            } else {
                console.log('code: ', response.code);
                alert(response.error_msg);
            }
        } catch (error) {
            alert('Registration failed. Please try again.', error);
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <div>
            <div className="bg-top"></div>
            <div className="ic-top-left"></div>
            <div className="page-title">Register</div>
            <div className="register-container">
                <div>
                    <span className="content-text-black">
                        Please provide complete and accurate details for
                    </span>
                    <span className="content-text-red "> manual review.</span>
                </div>
                <div>
                    <span className="content-text-red ">
                        Incomplete or incorrect
                    </span>
                    <span className="content-text-black">
                        {' '}
                        info may lead to
                    </span>
                    <span className="content-text-red ">
                        {' '}
                        registration rejection.
                    </span>
                </div>
                <img className="divider"></img>
                <form
                    className="form-register-container"
                    onSubmit={handleSubmit}
                >
                    <label className="label-input">*Account</label>
                    <FormInput
                        type="text"
                        name="account"
                        value={formData.account}
                        handleChange={handleChange}
                        required
                    />
                    <label className="label-input">*Password</label>
                    <FormInput
                        type="password"
                        name="password"
                        value={formData.password}
                        handleChange={handleChange}
                        required
                    />
                    <label className="label-input">*Confirm Password</label>
                    <FormInput
                        type="password"
                        name="confirm_password"
                        value={formData.confirm_password}
                        handleChange={handleChange}
                        required
                    />
                    <label className="label-input">First Name</label>
                    <FormInput
                        type="text"
                        name="first_name"
                        value={formData.first_name}
                        handleChange={handleChange}
                    />
                    <label className="label-input">Last Name</label>
                    <FormInput
                        type="text"
                        name="second_name"
                        value={formData.second_name}
                        handleChange={handleChange}
                    />
                    <label className="label-input">*Email</label>
                    <FormInput
                        type="email"
                        name="mail"
                        value={formData.mail}
                        handleChange={handleChange}
                        required
                    />
                    <label className="label-input">*Phone</label>
                    <FormInput
                        type="number"
                        name="phone"
                        value={formData.phone}
                        handleChange={handleChange}
                        required
                    />
                    <label className="label-input">*Promotion Code</label>
                    <FormInput
                        type="text"
                        name="promotion_code"
                        value={formData.promotion_code}
                        handleChange={handleChange}
                        required
                    />
                    <button
                        type="submit"
                        className="submit-btn"
                        disabled={!isFormValid}
                        style={{
                            backgroundColor: isFormValid ? '#DF4A3B' : '#BBBBBB'
                        }}
                    >
                        {isLoading ? 'Registering...' : 'Register'}
                    </button>
                </form>
                {isLoading && <Loader />}
            </div>
        </div>
    );
}

export default Register;
