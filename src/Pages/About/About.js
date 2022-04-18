import React from 'react';
import Me from '../Images/images.jpg';
import './About.css';

const About = () => {
    return (
        <div className='about text-center'>
            <img className='w-25 ' src={Me}></img>
            <h2 className='text-center'>Mahbubul Alam</h2>
            <h5 className='text-start'><span className='fw-bolder'>Age</span> : 28</h5>
            <h5 className='text-start'><span className='fw-bolder'>Edubation</span> : Bachelor of Science  in mathematics at Dhaka College</h5>
            <h5 className='text-start'><span className='fw-bolder'>Email</span> : Rizvialam007@gmail.com</h5>
            <h5 className='text-start'><span className='fw-bolder'>Future Goal</span> : I want to be a full stack developer.My dream is work in a respectful place like Google,Facebook,Apple,Microsoft.I believe man is bigger than his dream. Insha Allah I can overcome all the obstacles and fullfil my dream.</h5>
        </div>
    );
};

export default About;