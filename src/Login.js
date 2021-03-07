import './Login.css';
import React from 'react';
import FacebookLogo from './images/facebook.png';
import FacebookText from './images/facebook-text.png';
import { Button } from '@material-ui/core';

export default function Login() {
    const SignIn = ()=>{
        
    }
    return (
        <div className="login">
            <div className="login_logo">
            <img src={FacebookLogo} alt=""/>
            <img src={FacebookText} alt=""/>
            </div>
            <Button type="submit" onClick={SignIn}>Sign In With Google</Button>
        </div>
    )
}
