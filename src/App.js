import React from 'react';
import { WhatIs, Header, Explore, How } from './containers';
import { Brand, Navbar } from './components';

function App() {
  return (
    <div className="bg-gradient-to-b border-box padding-0 margin-0 scroll-behavior-smooth from-sky-100 via-cyan-400 to-emerald-600 min-h-screen">
      <div>
        <Navbar />
      </div>
      <div className="mt-4">
        <Header />
      </div>
      <div id="body-content" className="background-color-bg">
        <div className="flex justify-center">
          <Brand />
        </div>
        <div className="flex flex-col justify-center items-center mt-4 px-10"> {/* Apply margin-top and margin-bottom */}
          <div className="mb-4">
            <WhatIs />
          </div>
          <div className="mb-4">
            <Explore />
          </div>
          <div className="mb-4">
            <How />
          </div>
          {/* Add more categories here with similar div structures */}
        </div>
      </div>
      {/* <Footer /> */}
      <style jsx>{`
        :global(*) {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
          scroll-behavior: smooth;
        }

        a {
          color: unset;
          text-decoration: none;
        }

        .gradient__text {
          background: var(--gradient-text);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .section__padding {
          padding: 4rem 6rem;
        }

        .section__margin {
          margin: 4rem 6rem;
        }

        .scale-up-center {
          -webkit-animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
          animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
        }

        @-webkit-keyframes scale-up-center {
          0% {
            -webkit-transform: scale(0.5);
            transform: scale(0.5);
          }
          100% {
            -webkit-transform: scale(1);
            transform: scale(1);
          }
        }

        @keyframes scale-up-center {
          0% {
            -webkit-transform: scale(0.5);
            transform: scale(0.5);
          }
          100% {
            -webkit-transform: scale(1);
            transform: scale(1);
          }
        }

        @media screen and (max-width: 700px) {
          .section__padding {
            padding: 4rem;
          }

          .section__margin {
            margin: 4rem;
          }
        }

        @media screen and (max-width: 550px) {
          .section__padding {
            padding: 4rem 2rem;
          }

          .section__margin {
            margin: 4rem 2rem;
          }  
        }
      `}
      </style>
    </div>
  );
}

export default App;
