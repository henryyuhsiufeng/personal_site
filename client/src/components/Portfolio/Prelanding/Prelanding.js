import React, { Component } from 'react';

// Router elements
import { Link, useHistory, Redirect } from 'react-router-dom';

// Components
import Portfolio from '../Portfolio';

import './Prelanding.css';

/* contains check if whether you are henry or not. If Henry move to Portfolio*/
class Prelanding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toLanding: false
        }
        // const history = useHistory();
        this.handleYesClick = this.handleYesClick.bind(this);
    }

    handleYesClick (callback) {
        this.setState(props => {
            this.props.userAuth.auth = true
        });
        console.log(this.toLanding);
        // cache the reference to this outside of callback
        let currentComponent = this;
        callback(this.props.userAuth.auth,currentComponent);
    }

    checkIfUser (isAuth,currentComponent) {
        
        if(isAuth){
            currentComponent.setState((state) => ({
                toLanding : true
            }));
        }
    }

    render() {
        if(this.props.userAuth.auth === true){
            return <Redirect to='/' />;
        } 
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