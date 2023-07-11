import React from 'react';
import { useTitle } from '../../../hooks/useTitle';
import Advantage from '../Advantage/Advantage';
import BannerSection from '../BannerSection/BannerSection';
import DeliverySteps from '../DeliverySteps/DeliverySteps';
import DeliveryVehical from '../DeliveryVehical/DeliveryVehical';
import FoodInspection from '../FoodInspection/FoodInspection';
import PopularDelivery from '../PopularDelivery/PopularDelivery';
import Services from '../Services/Services';


const Home = () => {
    useTitle('Home')
    return (
        <div className='mx-auto'>
            <BannerSection></BannerSection>
            <Services></Services>
            <Advantage></Advantage>
            <PopularDelivery></PopularDelivery>
            <DeliverySteps></DeliverySteps>
            <FoodInspection></FoodInspection>
            <DeliveryVehical></DeliveryVehical>
        </div>
    );
};

export default Home;