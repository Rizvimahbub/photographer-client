import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { invoiceId } = useParams();
    return (
        <div>
            <h1>This is service detail : {invoiceId}</h1>
            <div className='d-flex justify-content-center'>
                <Link to='/checkout'>
                <button className='text-white bg-primary border-0 py-3 px-5 rounded '>Checkout Proceed</button>
                </Link>
                
            </div>

        </div>
    );
};

export default ServiceDetail;