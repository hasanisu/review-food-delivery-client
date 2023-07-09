import React, { useContext, useReducer, useState } from 'react';
import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const AddServices = () => {
    const {user} = useContext(AuthContext);
    

    const addToService = event=>{
        event.preventDefault();
        const form = event.target;
        const serviceName = form.serviceName.value;
        const photoURL = form.photoURL.value;
        const rating = form.rating.value;
        const serviceDetails = form.serviceDetails.value;
        const category = form.category.value;
        const price = form.price.value;

        const serviceCollection = {
            serviceName,
            category,
            photoURL,
            price, 
            rating, 
            serviceDetails, 
            userEmail: user?.email,
            
        }
            

        fetch(`http://localhost:5000/services`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceCollection)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.success){
                alert(data.message)
                form.reset();
            }
        })
        
    }

    return (
        <div className='mx-auto'>
            <h2 className='text-center text-4xl font-mono mt-10 font-bold'>You Can Add The Sevice Item in The Sevice List</h2>

            <div className='w-10/12 mx-auto'>
            <form onSubmit={addToService} className="flex max-w-3xl flex-col gap-4 mx-auto bg-slate-500 py-10 pl-10 mt-10 mb-12 food-love form-bg shadow-2xl">
                
                
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="name" value="Service Name" />
                    </div>
                    <input className='rounded-xl w-11/12 p-2 focus:border-indigo-800' name="serviceName" placeholder="service name" required shadow type="text" />
                </div>

                <div>
                    <div className="mb-2 block w-96">
                        <Label  htmlFor="email"  value="Your email"  />
                    </div>
                    <input className='rounded-xl w-11/12 p-2' name="email" defaultValue={user?.email} placeholder="name@flowbite.com" readOnly shadow type="email" />
                </div>
                

                <div className='w-full'>
                    <div className="mb-2 block">
                        <Label htmlFor="category" value="Service Category" />
                    </div>
                    <input className='rounded-xl w-11/12 p-2 focus:border-red-800' name="category" placeholder="Service category" required shadow type="category"/>
                    
                </div>
                <div className='w-full'>
                    <div className="mb-2 block">
                        <Label htmlFor="photoURL" value="Photo URL" />
                    </div>
                    <input className='rounded-xl w-11/12 p-2' name="photoURL" placeholder="photo url link" required shadow type="photoURL"/>
                    
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label  htmlFor="price"  value="Service Price"  />
                    </div>
                    <input className='rounded-xl w-11/12 p-2' name="price" placeholder="Service Price" required shadow type="price" />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label  htmlFor="rating"  value="Service Rating"  />
                    </div>
                    <input className='rounded-xl w-11/12 p-2' name="rating" placeholder="rating" required shadow type="rating" />
                </div>
               
                <div className="max-w-3xl" id="textarea">
                    <div className="mb-2 block">
                        <Label htmlFor="comment" value="Service Details" />
                    </div>
                    <textarea className='rounded-xl w-11/12 p-2' id="comment" name='serviceDetails' placeholder="Service details..." required shadow rows={4} />
                </div>
                <Button type="submit" className='w-11/12 basic'>
                    Add Service
                </Button>
            </form>
            </div>
        </div>
    );
};

export default AddServices;