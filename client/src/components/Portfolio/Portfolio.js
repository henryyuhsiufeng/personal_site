import React, { Component } from 'react';

// Router elements
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

// Styling
import './Portfolio.css';

// Components
import Prelanding from './Prelanding/Prelanding';
import Landing    from  './Landing/Landing';

class Portfolio extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userAuth: {
                name:'Test test test yo',
                auth:false
            }
        };

        this.handleLogin = this.handleLogin.bind(this);
      }

   

    render() {
        console.log(this.state.userAuth.auth);
        if(this.state.userAuth.auth){
            return( 
                <Router>
                    <Switch>
                         <Route path='/portfolio' exact component={() => <Landing/>} />
                    </Switch>
                </Router>
                );
        } 
        else {
            
            return(<div></div>);        
               
        }
            
        
        
        //if valid user then render landing
       
    }
    
}

export default Portfolio;