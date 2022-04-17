import React, { useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../../Social Login/SocialLogin';


const Register = () => {
    let errorHandle;
    const [agree, setAgree] = useState(false);
    const [errorPass, setErrorPass] = useState();
    const [user] = useAuthState(auth)
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword, error] = useCreateUserWithEmailAndPassword(auth);

    const handleCreateUser = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        if (agree && password === confirmPassword) {
            createUserWithEmailAndPassword(email, password);
        }

        if (password !== confirmPassword) {
            setErrorPass('Passwords did not match')
        }
    }

    if (user) {
        navigate('/checkout')
    }

    if (error) {
        errorHandle = <p>Error: {error.message}</p>
    }




    return (
        <div>
            <div className='form-info bg-info'>
                <div className='form-body text-center'>
                    <h2 className='pb-2'>Register</h2>
                    <form onSubmit={handleCreateUser}>
                        <input className='email w-100 px-3 py-2 border border-1' type='text' name='name' placeholder="Name"></input><br /><br />
                        <input className='email w-100 px-3 py-2 border border-1' type='email' name='email' placeholder="Email"></input><br /><br />
                        <input className='email w-100 px-3 py-2 border border-1' type='password' name='password' placeholder='Password'></input><br /><br />
                        <input className='email w-100 px-3 py-2 border border-1' type='password' name='confirmPassword' placeholder='Confirm Password'></input><br /><br />
                        <p><input onClick={() => setAgree(!agree)} type='checkbox'></input> Accept Nayem Photography Terms and Conditions</p><br />
                        <p className='text-danger'>{errorHandle}{errorPass}</p><br />
                        <button disabled={!agree} className='border-0 bg-info text-white'>Login</button>
                        <p className='mt-2'>Already have an account? <Link className='text-decoration-none' to='/login'><span>Login</span></Link></p>
                    </form>
                    <SocialLogin></SocialLogin>
                </div>

            </div>
        </div>
    );
};

export default Register;