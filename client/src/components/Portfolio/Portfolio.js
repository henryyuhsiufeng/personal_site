import React, { Component } from 'react';

// Router elements
import { HashRouter, Switch, Route } from 'react-router-dom';

// Styling
import './Portfolio.css';

// Components
import Prelanding from './Prelanding/Prelanding';

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
        //if valid user then render landing
        if(this.state.userAuth.auth){
            return(
                <div className="titleParent">
                    <div className="titleChild">
                        <h3>Henry</h3>
                    </div>
                    <div className="titleChild">
                        <h1>Yu-Hsiu</h1>
                    </div>
                    <div className="titleChild">
                        <h3>Feng</h3>
                    </div>
                </div>
            );
        } else {
            return(
                <Prelanding userAuth={this.state.userAuth}/>
            );
        }
    }
}

export default Portfolio;