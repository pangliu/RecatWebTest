import React, { useState } from 'react';

function Announcement() {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        text: ''
    });
    const handleSubmit = async (event) => {
        event.preventDefault();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    return (
        <div>
            <h1>Announcement</h1>
            <form onSubmit={handleSubmit}>
                <input
                    className="form-ann-input"
                    type="text"
                    value={formData.Announcement}
                    onChange={handleChange}
                    required="required"
                />
            </form>
        </div>
    );
}
export default Announcement;
