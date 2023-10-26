import React from 'react';
import ReactDOM from 'react-dom/client';
import CenterText from './CenterText';
import Navbar from './Navbar';
import './main.css';
import LogInButton from './LogInButton';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <CenterText />
    <LogInButton />
  </React.StrictMode>
);

