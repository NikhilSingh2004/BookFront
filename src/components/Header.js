import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isAuthenticated, handleLogout }) => (
    <nav>
        <Link to="/">Home</Link>
        {isAuthenticated ? (
            <button onClick={handleLogout}>Logout</button>
        ) : (
            <>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
            </>
        )}
    </nav>
);

export default Header;
