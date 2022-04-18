import React, { useState } from 'react';
import {  useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../../Social Login/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
    let errorHandle;
    const [agree, setAgree] = useState(false);
    const [errorPass, setErrorPass] = useState();
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword,error,loading] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const handleCreateUser = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName : name});
        toast('Updated profile');
        navigate('/home')

        if (password !== confirmPassword) {
            setErrorPass('Passwords did not match')
        }
    }


    const navigateToLogin = () => {
        navigate('/login')
    }

    if(loading || updating){
        return <Loading></Loading>
    }



    if (error || updateError) {
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
                        <p clas>{errorHandle}{errorPass}</p><br />
                        <button disabled={!agree} className='border-0 bg-info text-white'>Register</button>
                        <p className='mt-2'>Already have an account? <span onClick={navigateToLogin} className='text-info'>Login</span></p>
                    </form>
                    <SocialLogin></SocialLogin>
                    <ToastContainer />
                </div>

            </div>
        </div>
    );
};

export default Register;