// explore.jsx
import React from 'react';

function Explore() {
  return (
    <div className="flex justify-center items-center" id="wnn">
      <div className="w-7/8"> {/* Adjust the width as needed */}
        <h2 className="text-4xl font-bold text-white mb-4">Explore the Library</h2> {/* Subtitle */}
        {/* Add your image here */}
        <p className="text-lg  text-blue-600 mb-8">Our most popular newsletters:</p> {/* Text content */}
        <ul className="text-lg text-gray-200">
          <li><a href="/newsletter1" className="text-blue-500 hover:text-blue-700">Newsletter 1</a></li>
          <li><a href="/newsletter2" className="text-blue-500 hover:text-blue-700">Newsletter 2</a></li>
          <li><a href="/newsletter3" className="text-blue-500 hover:text-blue-700">Newsletter 3</a></li>
          {/* Add more newsletter links as needed */}
        </ul>
      </div>
    </div>
  );
}

export default Explore;
