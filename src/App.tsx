import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <img src="/greetings.jpeg" className="App-logo" alt="greetings" />
        <p>
          This is signal!
        </p>
      </header>
    </div>
  );
}

export default App;
