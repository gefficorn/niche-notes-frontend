import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../logo.svg';
// import './navbar.css';

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="nn__navbar">
      <div className="nn__navbar-links">
        <div className="nn__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="nn__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#whatis">What is Niche Notes?</a></p>
          <p><a href="#features">Features</a></p>
        </div>
      </div>
      <div className="nn__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="nn__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="nn__navbar-menu_container scale-up-center">
          <div className="nn__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#whatis">What is Niche Notes?</a></p>
            <p><a href="#features">Features</a></p>
          </div>
          <div className="nn__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
