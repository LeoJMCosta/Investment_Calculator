import React from 'react';
import { investment } from '../assets';

const Header = () => {
    return (
        <div id="header">
            <img src={investment} alt="Header Image" />
            <h1>Investment Calculator</h1>
        </div>
    );
};

export default Header;
