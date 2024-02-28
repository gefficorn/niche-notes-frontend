import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
// import UserForm from '../../components/userform/Userform';

function Header() {
  return (
    <div className="flex flex-col items-center justify-center" id="home">
      {/* Desktop Layout */}
      <div className="hidden md:flex flex-row items-center justify-center">
        <div className="text-white w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-white mb-4">The possibilities are beyond your imagination</h1> {/* Large title */}
          <h1 className="font-bold">Let&apos;s Learn More, Together</h1>
          <p className="mt-4">Get the news you want, when you want it, how you want it.</p>

          <div className="mt-4 md:mt-8">
            <input type="email" placeholder="Your Email Address" className="px-4 py-2 w-full rounded-md md:w-auto" />
            <button type="button" className="px-4 py-2 bg-blue-500 text-white rounded-md ml-0 md:ml-4 mt-4 md:mt-0">Get Started</button>
          </div>

          <div className="text-white mt-4 md:mt-8 flex items-center">
            <img src={people} alt="People" className="h-8 mr-2" />
            <p>1,600 people requested a custom newsletter in the last 24 hours</p>
          </div>
        </div>

        <div className="mt-8 md:mt-0">
          <img src={ai} alt="AI" className="w-full md:max-w-sm mx-auto" />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="text-white text-center px-8">
          <h1 className="text-4xl font-bold text-white mb-4">The possibilities are beyond your imagination</h1> {/* Large title */}
          <h1 className="font-bold">Let&apos;s Learn More, Together</h1>
          <p className="mt-4">Get the news you want, when you want it, how you want it.</p>

          <div className="mt-4">
            <input type="email" placeholder="Your Email Address" className="px-4 py-2 w-full rounded-md" />
            <button type="button" className="px-4 py-2 bg-blue-500 text-white rounded-md mt-4 w-full">Get Started</button>
          </div>

          <div className="text-white mt-4 flex items-center justify-center">
            <img src={people} alt="People" className="h-8 mr-2" />
            <p>1,600 people requested a custom newsletter in the last 24 hours</p>
          </div>
        </div>

        <div className="mt-8">
          <img src={ai} alt="AI" className="w-full max-w-sm mx-auto" />
        </div>
      </div>
    </div>
  );
}

export default Header;
