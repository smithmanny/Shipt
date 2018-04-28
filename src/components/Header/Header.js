import React from 'react';
// Assets
import './Header.css';
import Logo from '../../images/logo.png';

const Header = () => (
  <nav className="nav-wrapper">
    <div className="nav">
      <div className="logo__wrapper">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="signup-btn__wrapper">
        <button className="btn signup-btn">Sign Up</button>
      </div>
    </div>
  </nav>
);

export default Header;
