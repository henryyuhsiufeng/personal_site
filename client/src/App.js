import React, { useState }  from 'react';
import logo from './logo.svg';
import './App.css';
import { Redirect } from 'react-router-dom';

// Components
import Portfolio from './components/Portfolio/Portfolio';
import Prelanding from './components/Portfolio/Prelanding/Prelanding';

function App() {
  const [auth, setAuth] = useState(false);

  const handleLogin = () => {
   setAuth(true); 
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <Prelanding handleLogin={handleLogin} userAuth={auth}/>
      </header>
    </div>
  );
}

export default App;
