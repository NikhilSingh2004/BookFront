import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import BookDetail from './components/BookDetail';
import BookForm from './components/BookForm';

const App = () => {
    const [token, setToken] = useState(localStorage.getItem('token'));

    const handleLogout = () => {
        localStorage.removeItem('token');
        setToken(null);
    };
    return (
        <Router>
            <Header isAuthenticated={!!token} handleLogout={handleLogout} />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home token={token} />} />
                    <Route path="/login" element={<Login setToken={setToken} />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/books/:id" element={<BookDetail token={token} />} />
                    <Route path="/books/:id/edit" element={<BookForm token={token} />} />
                </Routes>
            </div>
        </Router>
    );
};
export default App;
