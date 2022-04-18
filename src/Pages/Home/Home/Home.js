import React from 'react';
import Banner from '../Banner/Banner';
import FaqArea from '../FaqArea/FaqArea';
import Services from '../Services/Services'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <FaqArea></FaqArea>
        </div>
    );
};

export default Home;