import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { img, price, about, name } = service;
    const navigate = useNavigate();
    return (
        <div className='col'>
            <div className="card h-100 border-0 shadow-lg">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{about}</p>
                    <p className='fw-bold'> Price:<span className='fw-bold fs-1 text-primary'>{price}</span>/<small>month</small></p>
                    <button onClick={() => navigate('/checkout')} type="button" className="btn btn-outline-success fw-bold">Take Service</button>
                </div>
            </div>
        </div>
    );
};

export default Service;