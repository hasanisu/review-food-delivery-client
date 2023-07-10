import React, { useContext, useEffect, useState } from 'react';
import ServiceItem from './ServiceItem';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Services = () => {
    const [services, setServices] = useState([]);
    


    useEffect(() => {
        fetch(`https://review-food-delivery-server.vercel.app/services`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
               if(data.success){
                setServices(data.data)
               }
              

            })
    }, [])
    return (
        <div className='bg-sky-200 pt-20 pb-10'>
            <div className='w-10/12 mx-auto'>
                <h2 className='text-center text-2xl font-mono'>Some Delivery Services</h2>
                <p className='text-center pb-20'>Here is my delivery service</p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                    {
                        services.map(service => <ServiceItem
                            key={service._id}
                            service={service}
                        ></ServiceItem>)
                    }
                </div>

                <Link to="/allServices">
                    <p className='text-center mt-10 hover:underline text-xl font-bold font-mono text-purple-800'>More-Services</p>
                </Link>

            </div>

        </div>
    );
};

export default Services;