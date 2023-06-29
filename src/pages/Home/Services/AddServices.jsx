import React, { useContext } from 'react';
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

        console.log(serviceName, photoURL, rating, serviceDetails)
        
    }

    return (
        <div className='mx-auto'>
            <h2 className='text-center text-4xl font-mono mt-10 font-bold'>You Can Add The Sevice Item in The Sevice List</h2>

            <div className='w-10/12 mx-auto'>
            <form onSubmit={addToService} className="flex max-w-md flex-col gap-4 mx-auto bg-slate-500 py-10 px-10 mt-10 mb-12 food-love form-bg shadow-2xl">
                
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="name" value="Service Name" />
                    </div>
                    <TextInput name="serviceName" placeholder="service name" required shadow type="text" />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label  htmlFor="email"  value="Your email"  />
                    </div>
                    <TextInput name="email" defaultValue={user?.email} placeholder="name@flowbite.com" required shadow type="email" />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="photoURL" value="Photo URL" />
                    </div>
                    <TextInput name="photoURL" placeholder="photo url link" required shadow type="photoURL"/>
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label  htmlFor="rating"  value="Rating"  />
                    </div>
                    <TextInput name="rating" placeholder="rating" required shadow type="rating" />
                </div>
               
                <div className="max-w-md" id="textarea">
                    <div className="mb-2 block">
                        <Label htmlFor="comment" value="Your Service Details" />
                    </div>
                    <Textarea id="comment" name='serviceDetails' placeholder="Service details..." required rows={4} />
                </div>
                <Button type="submit" className='basic'>
                    Add Service
                </Button>
            </form>
            </div>
        </div>
    );
};

export default AddServices;