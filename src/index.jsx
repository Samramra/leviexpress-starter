import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import './style.css';
import { Routes, Reservation } from 'react-router-dom';

export const API_BASE_URL = 'http://leviexpress-backend.herokuapp.com/api';

createRoot(document.querySelector('#app')).render(<App />, 

);