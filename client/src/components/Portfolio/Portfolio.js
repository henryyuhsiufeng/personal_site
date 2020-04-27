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
           //TODO
        };
      }

    render() {
        return(<div>
            <h1>PORTFOLIO</h1>>
        </div>);
    }
}

export default Portfolio;