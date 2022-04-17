import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Expert1 from '../../../images/experts/expert-1.jpg';
import Expert2 from '../../../images/experts/expert-2.jpg';
import Expert3 from '../../../images/experts/expert-3.jpg';
import Expert4 from '../../../images/experts/expert-4.jpg';
import Expert5 from '../../../images/experts/expert-5.jpg';
import Expert6 from '../../../images/experts/expert-6.png';
import Expert from '../Expert/Expert';

const Experts = () => {
    const experts = [
        {id:1, name:'Messi', img:Expert1},
        {id:2, name:'Ronaldo', img:Expert2},
        {id:3, name:'Neymar', img:Expert3},
        {id:4, name:'MBappe', img:Expert4},
        {id:5, name:'Suarez', img:Expert5},
        {id:6, name:'Benzema', img:Expert6}
    ]
    return (
        <div id='experts'>
            <h1 className='text-center mt-5 text-primary'>Our Experts</h1>
            <CardGroup className='row w-100 g-3 p-5 mt-3'>
                {
                    experts.map(expert => 
                        <Expert
                            key={expert.id}
                            expert={expert}
                        ></Expert>
                    )
                }
            </CardGroup>
        </div>
    );
};

export default Experts;