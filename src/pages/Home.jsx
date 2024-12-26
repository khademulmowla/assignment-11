import React from 'react';
import Carousel from '../components/Carousel.jsx';
import FeaturedArtifacts from '../components/FeaturedArtifacts.jsx';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <FeaturedArtifacts></FeaturedArtifacts>
        </div>
    );
};

export default Home;