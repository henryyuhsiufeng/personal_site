import React, { useState }  from 'react';
import logo from './logo.svg';
import './App.css';


// Components
import Portfolio from './components/Portfolio/Portfolio';
import Prelanding from './components/Portfolio/Prelanding/Prelanding';

function App() {
  const [auth, setAuth] = useState(false);

  const handleLogin = () => {
   setAuth(true); 
  }
  
  if(auth == false){
    return (
      <div className="App">
          <Prelanding handleLogin={handleLogin} userAuth={auth}/>
      </div>
    );
  } else {
    return(
      <Portfolio />
    );
  }
}

export default App;
