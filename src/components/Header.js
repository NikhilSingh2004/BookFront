import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isAuthenticated, handleLogout }) => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Book App</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    {isAuthenticated ? (
                        <li className="nav-item">
                            <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
                        </li>
                    ) : (
                        <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/signup">Signup</Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    </nav>
);

export default Header;
