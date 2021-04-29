import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
          <section>
            <Navigation />
          </section>
        </header>
    )
}

export default Header;
