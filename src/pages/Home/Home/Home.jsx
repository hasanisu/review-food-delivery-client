import React from 'react';
import BannerSection from '../BannerSection/BannerSection';
import DeliveryVehical from '../DeliveryVehical/DeliveryVehical';
import FoodInspection from '../FoodInspection/FoodInspection';
import PopularDelivery from '../PopularDelivery/PopularDelivery';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div className='mx-auto'>
            <BannerSection></BannerSection>
            <Services></Services>
            <PopularDelivery></PopularDelivery>
            <FoodInspection></FoodInspection>
            <DeliveryVehical></DeliveryVehical>
        </div>
    );
};

export default Home;