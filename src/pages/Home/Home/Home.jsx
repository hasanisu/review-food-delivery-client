import React from 'react';
import BannerSection from '../BannerSection/BannerSection';
import FoodInspection from '../FoodInspection/FoodInspection';
import PopularFood from '../PopularFood/PopularFood';

const Home = () => {
    return (
        <div>
            <h2>This is Home</h2>
            <BannerSection></BannerSection>
            <PopularFood></PopularFood>
            <FoodInspection></FoodInspection>
        </div>
    );
};

export default Home;