import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState, useSignInWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../../SocialLogin/SocialLogin';

const Login = () => {

    const [user] = useAuthState(auth);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    

    const [
        signInWithEmailAndPassword,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email,password);
    }


    let errorHandle;

    if (user) {
        navigate(from, { location: true })
    }

    if (error) {
        errorHandle =<div>
            <p>Error: {error?.message}</p>
        </div> 
  }
    

    const navigateRegister = () => {
        navigate('/register')
    }
    return (
        <div className='w-25 mx-auto border border-2 px-5 pb-5 mt-5 rounded'>
            <h1 className='text-primary text-center mt-5'>Please Login</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-primary fw-bold mt-5'>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-primary fw-bold'>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                
                <p>Forget Password? <span className='text-primary fw-bold'>Click Here</span></p>
                <p className='mt-3'>New to Genius Car Service? <span onClick={navigateRegister} className='text-primary mt-3 fw-bold'>Register Now</span></p>
                <Button className='d-block mx-auto px-5' variant="primary" type="submit">
                    Login
                </Button>
                <p>{errorHandle}</p>
            </Form>
            
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;