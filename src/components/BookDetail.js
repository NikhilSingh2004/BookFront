import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api';

const BookDetail = ({ token }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState(null);

    useEffect(() => {
        const fetchBook = async () => {
            const response = await api.get(`/books/${id}/`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setBook(response.data);
        };

        fetchBook();
    }, [id, token]);

    const handleDelete = async () => {
        await api.delete(`/books/${id}/`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        navigate('/');
    };

    return (
        book && (
            <div className="container mt-5">
                <h2>{book.title}</h2>
                <p>{book.description}</p>
                <button className="btn btn-primary me-2" onClick={() => navigate(`/books/${id}/edit`)}>Edit</button>
                <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
            </div>
        )
    );
};

export default BookDetail;
