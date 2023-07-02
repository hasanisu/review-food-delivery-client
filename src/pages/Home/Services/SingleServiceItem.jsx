import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleServiceItem = () => {
    const serviceItem = useLoaderData();
    console.log(serviceItem)
    return (
        <div>
            <h2>This is single service list </h2>
        </div>
    );
};

export default SingleServiceItem;