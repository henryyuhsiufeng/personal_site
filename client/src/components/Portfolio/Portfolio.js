import React, { Component } from 'react';

// Router elements
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
      }

    render() {
        if(this.state.userAuth.auth){
            return( 
                <Router>
                    <Route path='/' exact component={() => <Landing/>} />
                </Router>);
        } else {
            return( 
                <Router>
                    <Route path='/login' component={() => <Prelanding userAuth={this.state.userAuth}/>} />          
                </Router>);
        }
        
        //if valid user then render landing
       
    }
    
}

export default Portfolio;