import './Login.css';
import React from 'react';
import FacebookLogo from './images/facebook.png';
import FacebookText from './images/facebook-text.png';
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import { useStateValue } from './contextProvider';
import { actionTypes } from './reducer';

export default function Login() {

    const [state,dispatch] = useStateValue();


    const SignIn = ()=>{
        auth.signInWithPopup(provider).then((result)=>{
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user
            });
            console.log(result.user);
        }).catch((err)=>{console.log(err)});
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
