import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Title></Title>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
