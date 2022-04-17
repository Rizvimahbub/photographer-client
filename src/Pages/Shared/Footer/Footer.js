import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
        const date = new Date();
        const year = date.getFullYear();
    return (
        <div className='text-center'>
            <p className='fw-bold '>copyright <FontAwesomeIcon icon={faCopyright} /> {year}</p>
        </div>
    );
};

export default Footer;