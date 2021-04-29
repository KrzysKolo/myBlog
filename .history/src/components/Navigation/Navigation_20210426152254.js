import React from 'react';
import { Link } from 'react-router-dom';
import dataMenu from './dataMenu';

import './Navigation.css';

const Navigation = () => {
    const menu = dataMenu.map(item => <Link key={item.path} to={item.path} exact={item.exact ? item.exact : false}>{item.name}</Link>)
    return (
        <nav>
            <ul>
                {menu}
            </ul>
        </nav>
    )
}

export default Navigation;
