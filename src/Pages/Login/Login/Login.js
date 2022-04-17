import React from 'react';
import './Login.css';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../../Social Login/SocialLogin';

const Login = () => {
    let errorHandle;
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [signInWithEmailAndPassword,error] = useSignInWithEmailAndPassword(auth);
        
        
      

    const handleSignIn = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email,password)
    }

    if(user){
        navigate(from,{replace:true});
    }

    if (error) {
        errorHandle = <p className='text-danger'>Error: {error?.message}</p>
      }
    return (
        <div className='form-info bg-info'>
            <div className='form-body text-center'>
                <h2>Welcome back !</h2>
                <h2 className='pb-2'>Login</h2>
                <form onSubmit={handleSignIn}>
                    <input className='email w-100 px-3 py-2 border border-1' type='email' name='email' placeholder="Email"></input><br /><br />
                    <input className='email w-100 px-3 py-2 border border-1' type='password' name='password' placeholder='Password'></input><br /><br />
                    <p>Forgot Password? <span className='text-info'>Reset Password</span></p>
                    <button className='border-0 bg-info text-white'>Login</button>
                    <p className= 'mt-2'>New to Nayem Photography? <Link className='text-decoration-none' to='/register'><span>Register</span></Link></p>
                    {errorHandle}
                </form>
                <SocialLogin></SocialLogin>
            </div>

        </div>
    );
};

export default Login;