import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../logo.svg';
import UserForm from '../userform/Userform';

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-400 to-green-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <div className="mr-4">
            <img src={logo} alt="Logo" />
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#home" className="hover:text-gray-300">Home</a>
            <a href="#whatis" className="hover:text-gray-300">What is Niche Notes?</a>
            <a href="#features" className="hover:text-gray-300">Features</a>
          </div>
        </div>
        <div className="flex items-center">
          <div className="hidden md:block">
            <p className="mr-4">Sign in</p>
            <button type="button" className="bg-white text-black px-4 py-2 rounded-lg">Sign up</button>
          </div>
          <div className="md:hidden">
            {toggleMenu
              ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
              : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
          </div>
        </div>
      </div>
      {toggleMenu && (
        <div className="container mx-auto mt-4 md:hidden">
          <div className="bg-white rounded-lg p-4">
            <div className="flex flex-col space-y-4">
              <a href="#home">Home</a>
              <a href="#whatis">What is Niche Notes?</a>
              <a href="#features">Features</a>
            </div>
            <div className="mt-4">
              <p className="mb-2">Sign in</p>
              <button type="button" className="bg-blue-400 text-white px-4 py-2 rounded-lg mr-2">Sign up</button>
              <UserForm />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
