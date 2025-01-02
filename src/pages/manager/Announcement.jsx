import React, { useState } from 'react';
import { OrbitProgress } from 'react-loading-indicators';
import ApiService from '../../services/apiService';
import ApiUrls from '../../services/apiUrls';
import './Announcement.css';

const apiService = new ApiService(ApiUrls.TEST_BASE_URL);

function Loader() {
    return (
        <div className="loader-ann">
            <OrbitProgress
                variant="spokes"
                color="#f10a0a"
                size="medium"
                text=""
                textColor=""
            />
        </div>
    );
}
function Announcement() {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        announcement: ''
    });
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        const response = await apiService.post(ApiUrls.TEST_REGISTER, formData);
        console.log('response: ', response);
        try {
            if (response.code == 200) {
                alert('Registration successful');
            } else {
                console.log('code: ', response.code);
                alert(response.error_msg);
            }
        } catch (error) {
            console.log('code: ', response.code);
            alert(response.data.error_msg);
        } finally {
            setIsLoading(false);
            setFormData({ announcement: '' });
        }
    };
    return (
        <div>
            <h1>Announcement</h1>
            <form className="form-ann" onSubmit={handleSubmit}>
                <textarea
                    className="textarea-ann"
                    type="text"
                    name="announcement"
                    value={formData.announcement}
                    onChange={handleChange}
                    required="required"
                />
                <button type="submit" className="btn-ann" disabled={isLoading}>
                    {isLoading ? 'Submit...' : 'Submit'}
                </button>
                {isLoading && <Loader />}
            </form>
        </div>
    );
}
export default Announcement;
