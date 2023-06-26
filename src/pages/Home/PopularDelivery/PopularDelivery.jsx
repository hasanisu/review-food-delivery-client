import React from 'react';
import Food from '../Food/Food';

const PopularDelivery = () => {
    return (
        <div className='lg:grid grid-flow-col lg:grid-cols-12 w-10/12 mx-auto mt-20'>
            <div data-aos="fade-right" data-aos-duration="1000" className='lg:col-span-3 bg-zinc-400 border border-purple-900 w-72 food-pop hidden lg:block '>
                <h2 className='text-center mt-10 text-2xl font-serif border m-3 text-purple-900 food-love'>Food Lovers</h2>
                <div className='mt-20 font-mono'>
                <h3 className='text-center text-3xl'>Popular Food </h3>
                <h4 className='text-center text-5xl font-bold'>Ordered</h4>
                <h5 className='text-center text-3xl'>By Customer</h5>
                </div>
                <img className='h-80 mt-52 img-border border border-purple-900' src="https://i.ibb.co/3sf3CRZ/delivery-food-service-concept-courier-in-takeaway-food-with-scooter-illustration-free-vector.jpg" alt="" />
            </div>
            <div className='lg:hidden text-center'>
                <p>Hello Food Bolger</p>
            </div>

            <div className='lg:col-span-9 lg:ml-10'>
                <Food></Food>
            </div>
            
        </div>
    );
};

export default PopularDelivery;