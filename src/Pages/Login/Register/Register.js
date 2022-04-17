import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../../SocialLogin/SocialLogin';

const Register = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

    const handleSubmit = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const phone = event.target.phone.value;
        createUserWithEmailAndPassword(email,password);
    }

    if(user){
        navigate('/home')
    }

    const navigateLogin = () => {
        navigate('/login');
    }
    return (
        <div className='w-50 mx-auto border border-5 px-5 pb-5 mt-5 rounded-3'>
            <h1 className='text-center text-primary my-5' >Please Register</h1>
            <form onSubmit={handleSubmit}>
                <label className='d-block w-75 mx-auto text-start ps-1 text-primary fw-bold'>Name</label>
                <input className='d-block w-75 mx-auto p-3 mb-3 rounded' type='text' name='name' placeholder='Type your name...' required></input>

                <label className='d-block w-75 mx-auto text-start ps-1 text-primary fw-bold'>Email</label>
                <input className='d-block w-75 mx-auto  mb-3 p-3 rounded' type='email' name='email' placeholder='Give an email...' required></input>

                <label className='d-block w-75 mx-auto text-start ps-1 text-primary fw-bold'>Password</label>
                <input className='d-block w-75 mx-auto  mb-3 p-3 rounded' type='password' name='password' placeholder='Give your password...' required></input>

                <label className='d-block w-75 mx-auto text-start ps-1 text-primary fw-bold'>Phone Number</label>
                <input className='d-block w-75 mx-auto mb-2 p-3 rounded' type='number' name='phone' placeholder='Contact Number...' required></input>
                <p className='w-100 text-center'>Already have an account? <span onClick={navigateLogin} className='text-primary fw-bold'>Login</span></p>

                <input className='d-block w-25 mx-auto mb-5 p-2 bg-primary text-white fw-bold border border-0 rounded' type='submit' value='Register'></input>
                
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;