import React, { useEffect, useState } from 'react';
import ServiceItem from './ServiceItem';
import {Link} from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState([]);
    const [size, setSize] = useState(5);
    const [count, serCount] = useState(0);
    const [page, setPage] = useState(0)


    useEffect(()=>{
        fetch(`http://localhost:5000/services`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setServices(data.data)
            if(data.success){
                
            }

        })
    }, [])
    return (
        <div className='bg-sky-200 pt-20 pb-10'>
            <div className='w-10/12 mx-auto'>
                <h2 className='text-center text-2xl font-mono'>Food Delivery Services {services.length}</h2>
                <p className='text-center'>As food delivery person i always try to maintain the below services</p>

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