import React from 'react';
import './Checkout.css';
import Bg from '../Images/Bg.png';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const navigate = useNavigate();

    const navigateToFinalPage = () =>{
        navigate('/finalPage')
    }
    return (
        <div className='checkout'>
            <img className='w-100' src={Bg}></img>
            <div className='booking-info'>
                <h1 className='mb-5 text-center'>Booking Form</h1>
                <label className='fw-bold text-start ms-1' htmlFor='name'>Customer Name</label><br />
                <input className='border border-3 w-100 mb-3 px-3 py-1' type='text' name='name'></input><br />
                <label className='fw-bold text-start ms-1' htmlFor='address'>Address</label><br />
                <input className='border border-3 w-100 mb-3 px-3 py-1' type='text' name='address'></input><br />
                <label className='fw-bold text-start ms-1' htmlFor='phone'>Contact Number</label><br />
                <input className='border border-3 w-100 mb-3 px-3 py-1' type='number' name='phone'></input><br />
                <input onClick={navigateToFinalPage} className='button mt-2 d-block mx-auto' type='Submit' value='Confirm Booking'></input><br />
            </div>
        </div>
    );
};

export default Checkout;