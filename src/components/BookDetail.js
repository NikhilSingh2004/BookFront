import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Importing useNavigate instead of useHistory
import api from '../api';

const BookDetail = ({ token }) => {
    const { id } = useParams();
    const navigate = useNavigate(); // Using useNavigate instead of useHistory
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
        navigate('/'); // Using navigate instead of history.push
    };

    return (
        book && (
            <div>
                <h2>{book.title}</h2>
                <p>{book.description}</p>
                <button onClick={() => navigate(`/books/${id}/edit`)}>Edit</button> {/* Using navigate instead of history.push */}
                <button onClick={handleDelete}>Delete</button>
            </div>
        )
    );
};

export default BookDetail;
