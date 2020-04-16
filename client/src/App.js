import React from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import Portfolio from './components/Portfolio/Portfolio';
import Prelanding from './components/Portfolio/Prelanding/Prelanding';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        < Portfolio />
      </header>
    </div>
  );
}

export default App;
