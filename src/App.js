import React from 'react';
import './App.css';

import logo from './assets/logo.svg';

function App() {
  return (
    <div className="container">
      <img src={logo} alt="AirCnC logo"/>

      <div className="content">
        <p>Offer <strong>spots</strong> for programmers and find new <strong>talent</strong> for your company!</p>

        <form>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Email" />
        </form>
      </div>
    </div>
  );
}

export default App;
