import React from 'react';
import { Card } from 'react-bootstrap';

const Expert = ({ expert }) => {
    const { name, img } = expert;
    return (
        <div className='col-sm-12 col-md-6 col-lg-4 '>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>



    );
};

export default Expert;