import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../logo.svg';
import UserForm from '../userform/Userform';

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showUserForm, setShowUserForm] = useState(false);

  const handleSignUpClick = () => {
    setShowUserForm(!showUserForm); // Toggle the state
  };

  const handleCloseUserForm = () => {
    setShowUserForm(false); // Function to close the UserForm
  };

  return (
    <div className="bg-gradient-to-r from-blue-400 to-green-600 py-4">
      <div className="container mx-auto px-4 md:px-0"> {/* Responsive container */}
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="mr-4" />
            <div className="gradient-text hidden md:flex space-x-4">
              <a href="#home" className="hover:text-gray-300">Home</a>
              <a href="#whatis" className="hover:text-gray-300">What is Niche Notes?</a>
              <a href="#features" className="hover:text-gray-300">Features</a>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <p className="mr-4">Sign in</p>
            </div>
            <button type="button" className="bg-white text-black px-4 py-2 rounded-lg" onClick={handleSignUpClick}>Sign up</button>
            {showUserForm && (
              <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
                <UserForm onClose={handleCloseUserForm} /> {/* Pass onClose function as a prop */}
              </div>
            )}
          </div>
          <div className="md:hidden">
            {toggleMenu
              ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
              : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
          </div>
        </div>
        {toggleMenu && (
          <div className="md:hidden flex flex-col space-y-4 mt-4"> {/* Responsive menu */}
            <a href="#home" className="hover:text-gray-300">Home</a>
            <a href="#whatis" className="hover:text-gray-300">What is Niche Notes?</a>
            <a href="#features" className="hover:text-gray-300">Features</a>
            <p className="hover:text-gray-300">Sign in</p> {/* You can replace this with a sign in button */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
