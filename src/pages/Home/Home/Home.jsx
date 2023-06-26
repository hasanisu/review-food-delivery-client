import React from 'react';
import BannerSection from '../BannerSection/BannerSection';
import FoodInspection from '../FoodInspection/FoodInspection';
import PopularDelivery from '../PopularDelivery/PopularDelivery';


const Home = () => {
    return (
        <div className='mt-32 w-10/12 mx-auto'>
            <BannerSection></BannerSection>
            <PopularDelivery></PopularDelivery>
            <FoodInspection></FoodInspection>
        </div>
    );
};

export default Home;