import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

const BookList = ({ token }) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await api.get('/books/', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setBooks(response.data);
        };

        fetchBooks();
    }, [token]);

    return (
        <div className="mt-4">
            <h2>Your Books</h2>
            <ul className="list-group">
                {books.map((book) => (
                    <li key={book.id} className="list-group-item">
                        <Link to={`/books/${book.id}`}>{book.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
