import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api';

const BookForm = ({ token }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState({ title: '', author: '', description: '' });

    useEffect(() => {
        if (id) {
            const fetchBook = async () => {
                const response = await api.get(`/books/${id}/`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setBook(response.data);
            };

            fetchBook();
        }
    }, [id, token]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook({ ...book, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (id) {
            await api.patch(`/books/${id}/`, book, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
        } else {
            await api.post('/books/', book, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
        }
        navigate('/');
    };

    return (
        <div className="container mt-5">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Title</label>
                    <input type="text" className="form-control" name="title" value={book.title} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label>Author</label>
                    <input type="text" className="form-control" name="author" value={book.author} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label>Description</label>
                    <textarea className="form-control" name="description" value={book.description} onChange={handleChange} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">{id ? 'Update' : 'Add'} Book</button>
            </form>
        </div>
    );
};

export default BookForm;
