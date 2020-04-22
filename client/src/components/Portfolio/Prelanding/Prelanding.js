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

    handleYesClick () {
        console.log(this.props);
        this.setState({
            // this.props.userAuth.auth = true
            toLanding: true
        });
        // console.log( this.props.userAuth.auth);
        this.setState({toLanding:true});
    }

    render() {
        if(this.props.userAuth === true){
            console.log(this.props.auth);
            return(<div>
                    <h1>asdf</h1>
                 </div>);
        } 
            return(
                <div>
                    <h1>boolean: {this.props.userAuth.name}</h1>
                    <h1>Are you Henry Feng???</h1>
                    <button onClick={() => {this.handleYesClick();this.props.handleLogin();}}>Yes</button>
                    <button>No</button>
                </div>
                
            );
        
    }
}

export default Prelanding;