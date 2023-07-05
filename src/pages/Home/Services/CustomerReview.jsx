import React, { useEffect, useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";

const CustomerReview = () => {
    const reviewsId = useLoaderData();
    const allReviews = reviewsId.data;


    // useEffect(()=>{
    //     fetch(`http://localhost:5000/reviews/${_id}`)
    //     .then(res => res.json())
    //     .then(data => {
            
    //         if(data.success){
    //             const filterData = allReviews.filter(n => n.service_id === _id)
    //             // setReviews(filterData)
    //             console.log('reaviews',filterData)
    //         }
            
        
    //     })
    // },[_id])


    return (
        <div className='px-20 w-9/12 mx-auto bg-slate-400 pt-5  lg:py-10 lg:pb-76' >

            <p className='text-center text-2xl font-bold font-mono mt-10'>Total Number of Reviews: {allReviews.length}</p>
            
            <div className='lg:ml-20 lg:mt-2 lg:pb-10 lg:py-10'>
            {
                allReviews.map(singleReviews => 
                    <div key={singleReviews._id} className='flex py-4'>
                <div >
                    {
                        singleReviews?.userPhoto ?
                        <img src={singleReviews.userPhoto} alt="" className='w-14 h-14  rounded-full basic-border' />
                        :
                        <FaUserCircle className='w-14 h-14 rounded-full basic-border'/>
                    }
                </div>
                <div className='pl-4'>
                    <h2 className='text-lg font-mono font-bold'>{singleReviews.customerName}</h2>
                    <p>{singleReviews.review}</p>
                    <span>Rating: {singleReviews.rating}</span>
                </div>
            </div>
                    )
                    
            }
            </div>
            
            
        </div>
    );
};

export default CustomerReview;