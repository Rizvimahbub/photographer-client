import React from 'react';
import { Carousel } from 'react-bootstrap';
import Wedding from '../../Images/Banner/Wedding.jpg'
import Wedding2 from '../../Images/Banner/Wedding2.jpg'
import Birthday from '../../Images/Banner/Birthday.jpg'
import Birthday2 from '../../Images/Banner/Birthday2.jpg'
import Fashion from '../../Images/Banner/Fashion.jpg'
import Fashion2 from '../../Images/Banner/Fashion2.jpg'

const Banner = () => {
    return (
        <div id='banner'>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Wedding}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Wedding2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Birthday}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Birthday2}
                        alt="Fourth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Fashion}
                        alt="Fifth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Fashion2}
                        alt="Sixth slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;