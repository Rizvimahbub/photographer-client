import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div>
                <h2 className='text-center text-info mt-5'>Difference between Authentication and Authorization?</h2>
                <div className='d-flex mx-5'>
                    <div className='me-2'>
                        <h2>Authentication</h2>
                        <h5>1. Authentication confirms users identity to grant access to the system.</h5>
                        <h5>2. It is the process of validating user credentials to gain user access.</h5>
                        <h5>3. It determines whether user is what he claims to be.</h5>
                        <h5>4. Authentication usually requires a username and a password.</h5>
                        <h5>5. Authentication is the first step of authorization so always comes first.</h5>
                    </div>
                    <div className='mt-1'>
                        <h3>Authorization</h3>
                        <h5>1. Authorization determines whether user is authorized to access the resources.</h5>
                        <h5>2. It is the process of verifying whether access is allowed or not.</h5>
                        <h5>3. It determines what user can and cannot access.</h5>
                        <h5>4. Authentication factors required for authorization may vary, depending on the security level.</h5>
                        <h5>5. Authorization is done after successful authentication.</h5>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='text-center mt-5 mb-5 text-info'>Why are you using firebase? What other options do you have to implement authentication?</h2>
                <h5 className='text-left px-5 mx-5 lh-base'><span className='text-decoration-underline fw-bolder'>Answer</span> : I am using Firebase because it is very easy to use.The detail instruction of how to use  is given there.I can build my authentication system or database through Firebase.Without Firebase there are some options to implement authentication like : The Okta Identity Cloud , WatchGuard AuthPoint , LastPass for Business , Cisco Secure Access by Duo , HID DigitalPersona , Azure Active Directory , CyberArk Workforce Identity , Google Authenticator etc.</h5>
            </div>
            <div>
                <h2 className='text-center mt-5 mb-5 text-info'>What other services does firebase provide other than authentication?</h2>
                <h5 className='text-left px-5 mx-5 lh-base'><span className='text-decoration-underline fw-bolder'>Answer</span> : Without authentication Firebase has some features like : Realtime Database , Cloud Firestore , Cloud Storage , Cloud Functions , Firebase Hosting , ML Kit .</h5>
            </div>
        </div>
    );
};

export default Blogs;