import React from 'react';
import Food from '../Food/Food';

const PopularFood = () => {
    return (
        <div className='lg:grid grid-flow-col lg:grid-cols-12 max-w-screen-2xl mx-auto mt-20'>
            <div className='lg:col-span-3  bg-red-700 border w-72 food-pop hidden lg:block'>
                <p className='text-center'>Hello Food</p>
            </div>
            <div className='lg:hidden text-center'>
                <p>Hello Food Bolger</p>
            </div>

            <div className='lg:col-span-9'>
                <Food></Food>
            </div>
        </div>
    );
};

export default PopularFood;