import React from 'react';
import bannerImg from '../../../images/banner/banner.jpg'

const Banner = () => {
    return (
        <div>
            <div className="bg-light p-5" style={{ height: '100vh' }}>
                <div className="row g-0 d-flex justify-content-center align-items-center">
                    <div className="col-sm-12 col-lg-6">
                        <div className="banner-text">
                            <h1 className='text-primary'>Guiding Towards To Take Right Decisions</h1>
                            <button className="btn btn-primary fw-bold">Read More</button>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-6">
                        <div className="banner-img">
                            <img className='img-fluid' src={bannerImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;