import React, { useState } from 'react';
import api from './services/api';
import './App.css';

import logo from './assets/logo.svg';

function App() {
  const [email, setEmail] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    // email
  }

  return (
    <div className="container">
      <img src={logo} alt="AirCnC logo" />

      <div className="content">
        <p>
          Offer <strong>spots</strong> for programmers and find new
          <strong>talent</strong> for your company!
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Email" />
          <button className="btn" type="submit">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
