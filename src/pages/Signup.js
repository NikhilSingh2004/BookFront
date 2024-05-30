import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
        first_name: '',
        last_name: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await api.post('/register/', formData);
        navigate('/login');
    };

    return (
        <div className="container mt-5">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input type="text" className="form-control" name="username" value={formData.username} placeholder="Username..." onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" name="password" value={formData.password} placeholder="Password..." onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" name="email" value={formData.email} placeholder="Email..." onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" name="first_name" value={formData.first_name} placeholder="First Name..." onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" name="last_name" value={formData.last_name} placeholder="Last Name..." onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
        </div>
    );
};
export default Signup;
