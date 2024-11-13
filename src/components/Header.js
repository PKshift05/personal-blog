// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css'
const Header = () => {
  return (
    <header>
      <h2>Ngoác Blog</h2>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
