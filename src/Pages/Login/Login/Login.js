import React, {  useRef, useState } from 'react';
import './Login.css';
import {  useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import {  useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../../Social Login/SocialLogin';

const Login = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [signInWithEmailAndPassword, user, error] = useSignInWithEmailAndPassword(auth,{sendEmailVerification:true});
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
       
      
    const handleSignIn = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }

    const passwordResetEmail = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('Sent email');
    }

    const navigateToRegister = () => {
        navigate('/register')
    }

    if (user) {
        navigate(from, { replace: true });
    }

    let errorHandle;
    if (error) {
        errorHandle = <p className='text-danger'>Error: {error?.message}</p>
    }

    return (
        <div className='form-info bg-info'>
            <div className='form-body text-center'>
                <h2>Welcome back !</h2>
                <h2 className='pb-2'>Login</h2>
                <form onSubmit={handleSignIn}>
                    <input className='email w-100 px-3 py-2 border border-1' ref={emailRef} type='email' name='email' placeholder="Email"></input><br /><br />
                    <input className='email w-100 px-3 py-2 border border-1' ref={passwordRef} type='password' name='password' placeholder='Password'></input><br /><br />
                    <p>Forgot Password? <span onClick={passwordResetEmail} className='text-info'>Reset Password</span></p>
                    <button className='border-0 bg-info text-white'>Login</button>
                </form>
                <div>{errorHandle}</div>
                <p className='mt-2'>New to Nayem Photography? <span className='text-info' onClick={navigateToRegister}>Register</span></p>
                <SocialLogin></SocialLogin>
            </div>

        </div>
    );
};

export default Login;