import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";

const CustomerReview = ({ userReview }) => {
    const { userPhoto, customerName, rating, review } = userReview;
    console.log(userReview)


    return (
        <div className='px-10 mb-5 mt-5'>
            <div className='flex'>
                <div>
                    {
                        userReview?.userPhoto ?
                        <img src={userPhoto} alt="" className='w-14 h-14 rounded-full basic-border' />
                        :
                        <FaUserCircle className='w-14 h-14 rounded-full basic-border'/>
                    }
                </div>
                <div className='pl-4'>
                    <h2 className='text-lg font-mono font-bold'>{customerName}</h2>
                    <p>{review}</p>
                    <span>Rating: {rating}</span>
                </div>
            </div>
        </div>
    );
};

export default CustomerReview;