import { faArrowUpLong, faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div  className='d-flex justify-content-around align-items-center  py-3 bg-dark text-info'>
            <address>
                <h5>Nayem Islam</h5>
                <h6>Address : 24/13, Banani, Dhaka</h6>
                <h6>Contact : 15987654987</h6>
            </address>
            <div>
                Copyright <FontAwesomeIcon icon={faCopyright} /> {year}
            </div>
            <div>
                <h6>Back To Top <a href='#header'><FontAwesomeIcon className='ms-3 text-white' icon={faArrowUpLong} /></a></h6>
            </div>
        </div>
    );
};

export default Footer;