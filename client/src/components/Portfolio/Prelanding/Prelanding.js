import React, { Component } from 'react';

// Router elements
import { HashRouter, Switch, Route } from 'react-router-dom';

// Components
import Portfolio from '../Portfolio';

import './Prelanding.css';

/* contains check if whether you are henry or not. If Henry move to Portfolio*/
class Prelanding extends Component {
    constructor(props) {
        super(props);

        this.handleYesClick = this.handleYesClick.bind(this);
    }

    handleYesClick (callback) {
        this.setState(props => {
            this.props.userAuth.auth = true
        });
        console.log(this.props.userAuth.auth);
        
        callback(this.props.userAuth.auth);
    }

    checkIfUser (isAuth) {
        if(isAuth){
            console.log('callback hit');
        }
    }

    render() {
        return(
            <div>
                <h1>boolean: {this.props.userAuth.name}</h1>
                <h1>Are you Henry Feng???</h1>
                <button onClick={() => this.handleYesClick(this.checkIfUser)}>Yes</button>
                <button>No</button>
            </div>
            
        );
    }
}

export default Prelanding;