import React from 'react';
import Google from '../Images/google.png';
import Github from '../Images/github.jpg';
import { useAuthState, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const SocialLogin = () => {
    const [user] = useAuthState(auth)
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [signInWithGithub] = useSignInWithGithub(auth);
    return (
        <div>
            
            <div className='d-flex justify-content-center'>
                <div style={{ border: '1px solid gray', height: '0px', width: '30%', margin: '28px 5px 0 5px' }}></div>
                <p className='mt-3 fw-bold'>or</p>
                <div style={{ border: '1px solid gray', height: '0px', width: '30%', margin: '28px 5px 0 5px' }}></div>
            </div>
            <button onClick={() => signInWithGoogle()} className='d-block mx-auto mb-3' style={{ padding: '10px 40px', borderRadius: '5px', border: 'none' }}>
                <img style={{ width: '25px', marginRight: '10px' }} src={Google}></img> <span style={{ fontSize: '16px' }}>Google Sign In</span>
            </button>
            <button onClick={() => signInWithGithub()} className='d-block mx-auto mb-3' style={{ padding: '10px 40px', borderRadius: '5px', border: 'none', backgroundColor: 'darkgray' }}>
                <img style={{ width: '25px', marginRight: '10px' }} src={Github}></img> <span style={{ fontSize: '16px' }}>Github Sign In</span>
            </button>
        </div>
    );
};

export default SocialLogin;