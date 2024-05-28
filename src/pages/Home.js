import React from 'react';
import BookList from '../components/BookList';

const Home = ({ token }) => {
    return (
        <div>
            <h1>Home</h1>
            {token ? <BookList token={token} /> : <p>Please log in to see your books.</p>}
        </div>
    );
};

export default Home;
