import React from 'react';
import { FaTimes } from 'react-icons/fa'; // Importing 'x' icon from react-icons library

function UserForm({ onClose }) { // Accepting onClose function as prop to handle closing the form
  return (
    <div className="bg-white p-8 shadow-md rounded-lg relative">
      <FaTimes className="absolute top-4 right-4 text-black cursor-pointer" onClick={onClose} /> {/* 'x' icon with absolute positioning */}
      <h2 className="text-2xl font-bold mb-4 text-black">User Form</h2> {/* Black text */}
      <form>
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2" htmlFor="name"> {/* Black text */}
            Name
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2" htmlFor="email"> {/* Black text */}
            Email
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </label>
        </div>
        {/* Add more form fields as needed */}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Find your Niche
        </button>
      </form>
    </div>
  );
}

export default UserForm;
