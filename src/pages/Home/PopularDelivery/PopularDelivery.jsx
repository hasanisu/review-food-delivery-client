import React from 'react';
import Food from '../Food/Food';

const PopularDelivery = () => {
    return (
        <div className='mx-auto bg-slate-300 pt-20  pb-20'>
            <div className='mb-10 w-6/12 mx-auto'>
                <h2 className='text-center text-2xl font-bold font-mono underline'>Popular Food Delivey Items form Customer</h2>
                <p className=' text-center mx-auto font-serif'>Japan has always been famous for its unique approach to gastronomy, 
                    combining a world of exotic ingredients and aromatic spices to create 
                    truly inspiring dishes. In addition, Japanese cuisine is known for being 
                    as pleasing to the eye as it is to the palate.</p>
            </div>

            <div className='w-10/12 mx-auto flex flex-row'>

            <div className='lg:col-span-3 bg-zinc-400 border border-purple-900 w-72 food-pop hidden lg:block '>
                <h2 className='text-center mt-10 text-2xl font-serif border m-3 text-purple-900 food-love'>Food Lovers</h2>
                <div className='mt-20 font-mono'>
                <h3 className='text-center text-3xl'>Popular Food </h3>
                <h4 className='text-center text-5xl font-bold'>Ordered</h4>
                <h5 className='text-center text-3xl'>By Customer</h5>
                </div>
                <img className='h-80 mt-52 img-border border border-purple-900' src="https://i.ibb.co/3sf3CRZ/delivery-food-service-concept-courier-in-takeaway-food-with-scooter-illustration-free-vector.jpg" alt="" />
            </div>

            

            <div className='lg:col-span-9 lg:ml-10'>
                <Food></Food>
            </div>
            </div>
            
        </div>
    );
};

export default PopularDelivery;