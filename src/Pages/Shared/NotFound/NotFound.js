import React from 'react';
import errorImg from '../../../images/404-page-error.png'
const NotFound = () => {
    return (
        <div className='text-center mt-5'>
            <img className='img-fluid' src={errorImg} alt="" />
        </div>
    );
};

export default NotFound;