import React, { Component } from 'react';

// Router elements
import { HashRouter, Switch, Route } from 'react-router-dom';

// Styling
import './Landing.css';

class Landing extends Component {
    render() {
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
    }
}

export default Landing;