import React ,{Component} from 'react'
import logo from '../imagees/logo/logo.svg';
import '../css/signIn.css';
import {Link} from 'react-router-dom';
import Button from './Button';

export class signIn extends Component {
    render(){
    return (
        <div className="signIn">
            <div className="signin-nav-container">
            <div className="signin-nav">
            <h1> Sign In</h1>
            <Link to="/"><img src={logo} alt="" className="signIn-logo" /></Link>
            </div>
            </div>
            <form className="form">
                <label> USERNAME </label>
                <br />
                <div className="text-area">
                <input type="text" placeholder="jogndoe@plumbank.com" />
                </div>
                <br />
                <label> PASSWORD </label>
                <br />
                <div className="text-area">
                <input type="password" placeholder="****************" />
                </div>
                <br />
                <div className="FP-SI-btn">
                <Button title="SIGN IN"></Button>
                <p>Forgot password </p>
                
                
                </div>
                </form>
        </div>
    )
}
}

export default signIn;
