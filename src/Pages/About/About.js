import React from 'react';
import myself from '../../images/me1.jpg'

const About = () => {
    return (
        <div className='container my-5 shadow-lg rounded'>
            <div className="card border-0">
                <div className="card-body">
                    <div className='my-3 text-center'>
                        <img className='' src={myself} alt="" />
                    </div>
                    <p className="card-text">To enhance my qualities with the opportunities at hand and build up my experiences further in order to pursue strong engineering and technological skills as a successful Computer Engineer with focused work ethics, an ability to increase my knowledge and contribute to significant software development. To achieve this goal i will put my best with giving no excuses of other problems.And i will try to learn from mistake insha allah and come back stongly.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;