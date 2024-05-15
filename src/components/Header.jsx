import React from 'react';
import { investment } from '../assets';

const Header = () => {
    return (
        <header id="header">
            <img src={investment} alt="Header Image" />
            <h1>Investment Calculator</h1>
        </header>
    );
};

export default Header;
