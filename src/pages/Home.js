// src/pages/Home.js
import React from 'react';
import PostList from '../components/Postlist';
import '../css/Home.css';
import TestPost from './testPost';

const Home = () => {
    return (
        <main>
            <div>
                <h1>Chào Mừng Đến Với Blog Hội Họa Của Tôi</h1>


            </div>
            <TestPost />
            <PostList />
        </main>
    );
};

export default Home;
