import React from 'react';
import './style.css';
import { Routes, Reservation } from 'react-router-dom';

export const Header = () => (
  <header>
    <div className="container">
      <h1 className="site-title">
        <a href="/">LeviExpress</a>
      </h1>
    </div>
  </header>
);

export default Header;