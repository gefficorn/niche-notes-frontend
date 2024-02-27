import React from 'react';
import './App.css';
import { WhatIs, Header } from './containers';
import { Article, Brand, Navbar } from './components';

function App() {
  return (
    <div className="bg-gradient-to-b from-sky-100 via-cyan-400 to-emerald-600 min-h-screen">
      <div className="hover">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatIs />
      <Article />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
