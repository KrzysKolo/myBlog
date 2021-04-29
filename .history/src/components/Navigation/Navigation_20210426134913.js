import React from 'react';
import { Link } from 'react-router-dom';
import dataMenu from './dataMenu';

import './Navigation.css';

const Navigation = () => {
    const menu = dataMenu.map(item => <Link key={item.path} to={item.path} >{item.name}</Link>)
    return (
        <div>

        </div>
    )
}

export default Navigation;
