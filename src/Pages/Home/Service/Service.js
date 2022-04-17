import React from 'react';
import './Service.css';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, img, price, description } = service;

    return (
        <div className='col-sm-12 col-md-6 col-lg-4'>
            <Card className='text-center  border-3 mt-2'>
                <Card.Img className='img' variant="top" src={img} />
                <Card.Body className='c-body'>
                    <Card.Title className='text-center fs-3'>{name}</Card.Title>
                    <Card.Text className='text-center'>{description}</Card.Text>
                </Card.Body>
                <Card.Body>
                    <h4 className='text-center fs-3'>Price : ${price}</h4>
                </Card.Body>
                <Link to='/checkout'>
                    <button className='w-100 border-0 rounded py-2 bg-warning text-white fw-bold'>Book Now</button>
                </Link>
            </Card>
        </div>
    );
};

export default Service;