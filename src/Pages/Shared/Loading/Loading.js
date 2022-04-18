import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{ height: '500px' }} className='w-100 d-flex justify-content-center align-items-center fs-2'>
            <Spinner animation="grow" variant="primary" />
        </div>
    );
};

export default Loading;