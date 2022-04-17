import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, img, price, description } = service;
    const navigate = useNavigate();
    const handleServiceDetail = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service-info'>
            <img src={img} />
            <h1>{name}</h1>
            <p>{description}</p>
            <h2>Price : ${price}</h2>
            <button onClick={() => handleServiceDetail(id)}>Book Now</button>
        </div>
    );
};

export default Service;