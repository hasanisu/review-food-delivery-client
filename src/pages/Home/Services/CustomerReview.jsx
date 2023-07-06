import React, { useEffect, useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";

const CustomerReview = ({userReview}) => {
    const {img,serviceName,customerName,userEmail,userPhoto,review, rating, } = userReview;
    const reviewsId = useLoaderData();
    const allReviews = reviewsId.data;

    return (
        <div className='bg-slate-500 flex px-10 pb-8 ' >
            <div className=''>
                    {
                        userPhoto ?
                        <img src={userPhoto} alt="" className='w-16 h-16  rounded-full basic-border' />
                        :
                        <FaUserCircle className='w-16 h-16 rounded-full basic-border'/>
                    }
                </div>
                <div className='pl-4'>
                    <h2 className='text-lg font-mono font-bold'>{customerName}</h2>
                    <p>{review}</p>
                    <span>Rating: {rating}</span>
                </div>
        </div>
    );
};

export default CustomerReview;