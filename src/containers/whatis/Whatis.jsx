import React from 'react';
import { NicheNotesImage } from './imports'; // Import your image here

function WhatIs() {
  return (
    <div className="flex justify-center items-center" id="wnn">
      <div className="w-2/4"> {/* Adjust the width as needed */}
        <img src={NicheNotesImage} alt="Niche Notes" className="mb-4 rounded-lg shadow-md" /> {/* Image */}
        <h2 className="text-4xl font-bold text-white mb-4">What is Niche Notes?</h2> {/* Subtitle */}
        <p className="text-lg text-gray-200 mb-8">
          Niche Notes is a personalized news platform that tailors news articles and newsletters based on your preferences and interests. Our goal is to provide accurate and relevant news content to each user, ensuring that you stay informed about topics that matter to you.
        </p> {/* Text content */}
      </div>
    </div>
  );
}

export default WhatIs;
