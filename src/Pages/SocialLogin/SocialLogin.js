import React from 'react';
import Google from '../../images/google.png';
import Facebook from '../../images/Facebook.png';
import Github from '../../images/github.jpg';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Navigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    
     
    let errorHandle;
    let loadingSign;
    if (error || error1) {
        errorHandle = <p>Error: {error?.message} {error1?.message}</p>
    }
    
    if (loading || loading1) {
        loadingSign = <p>Loading...</p>;
    }
    if (user || user1) {
        Navigate('/checkout')
    }
    return (
        <div>
            <div className='d-flex justify-content-center'>
                <div style={{ border: '1px solid gray', height: '0px', width: '30%', margin: '28px 10px 0 10px' }}></div>
                <p className='mt-3 fw-bold'>or</p>
                <div style={{ border: '1px solid gray', height: '0px', width: '30%', margin: '28px 10px 0 10px' }}></div>
            </div>
            <div className='w-50 mx-auto text-danger text-center'>
                {errorHandle}
                {loadingSign}
            </div>

            <button onClick={() => signInWithGoogle()} className='d-block mx-auto mb-3' style={{ padding: '10px 60px', borderRadius: '5px', border: 'none' }}>
                <img style={{ width: '25px', marginRight: '10px' }} src={Google}></img> <span style={{ fontSize: '18px' }}>Google Sign In</span>
            </button>
            <button className='d-block mx-auto mb-3' style={{ padding: '10px 50px', borderRadius: '5px', border: 'none', backgroundColor: 'lightblue' }}>
                <img style={{ width: '25px', marginRight: '10px' }} src={Facebook}></img> <span style={{ fontSize: '18px' }}>Facebook Sign In</span>
            </button>
            <button onClick={() => signInWithGithub()} className='d-block mx-auto mb-3' style={{ padding: '10px 60px', borderRadius: '5px', border: 'none', backgroundColor: 'darkgray' }}>
                <img style={{ width: '25px', marginRight: '10px' }} src={Github}></img> <span style={{ fontSize: '18px' }}>Github Sign In</span>
            </button>
        </div>
    );
};

export default SocialLogin;