import React from 'react';
import ReactDOM from 'react-dom/client';
import CenterText from './CenterText';
import Navbar from './Navbar';
import './main.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <CenterText />
  </React.StrictMode>
);

