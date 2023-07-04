import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import CustomerReview from './CustomerReview';

const SingleServiceItem = () => {
    const {user} = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const serviceItem = useLoaderData();
    const singleService = serviceItem.data;
    const {photoURL, serviceName, rating, serviceDetails, _id} = singleService;
    console.log(singleService)

    const addToReview = event=>{
        event.preventDefault();
        const form = event.target;
        const rating = form.rating.value;
        const review = form.review.value;

        const reviewsCollection = {
            service_id:_id,
            serviceName,
            img:photoURL,
            customerName:user?.displayName, 
            userEmail: user?.email,
            userPhoto: user?.photoURL,
            review,
            rating, 
           
            
        }
            
        fetch(`http://localhost:5000/reviews`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewsCollection)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            form.reset();
        })
        
    }

    useEffect(()=>{
        fetch(`http://localhost:5000/reviews/${_id}`)
        .then(res => res.json())
        .then(data => {
            if(data.success){
                const datas = data.data;
                const customerReviews = datas.filter(n => n.service_id === _id)
                setReviews(customerReviews)
            }
            
        
        })
    },[_id])
  
    
    return (
        <div  className=' w-9/12 mx-auto'>
            
            <div className='grid grid-cols-1 lg:grid-cols-12 bg-slate-400 '>
            
            
            <div className=' col-span-9 mt-20'>
            <h2 className='text-2xl font-serif font-bold text-center mb-10'>A particular service details review page</h2>
                <img src={photoURL} alt="" className='w-86 mx-auto rounded-2xl basic-border'/>
                <h2 className='text-xl font-bold px-10 mb-5 mt-5'>{serviceName}</h2>
                <p className='px-10 mb-5 mt-5'>{serviceDetails}</p>
                <h4 className='px-10 mb-5 mt-5'>Overall Rating: <span className='font-bold'>{rating}</span></h4>
                <hr className="w-full dark:text-gray-400" />
                

                <div>
                    <p className='text-xl font-serif px-10 mb-5 mt-5'>Total number of reviews - {reviews.length}</p>
                    {
                        reviews?.map(userReview => <CustomerReview
                        key={userReview._id}
                        userReview={userReview}
                        ></CustomerReview>)
                    }
                </div>
            </div>

            <div className='col-span-3 bg-slate-500 '>
                <h2 className='mt-20 text-center text-2xl font-serif underline font-semibold'>Post your review</h2>
                <form onSubmit={addToReview}  className="flex max-w-md flex-col gap-4 mx-auto bg-slate-500 py-10 px-10 mt-10 mb-12 basic-border">
                
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="name" value="Your Name" />
                    </div>
                    <TextInput name="customerName" defaultValue={user?.displayName} placeholder="" required shadow type="text" />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label  htmlFor="email"  value="Your email"  />
                    </div>
                    <TextInput name="email" defaultValue={user?.email}  placeholder="name@flowbite.com" required shadow type="email" />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label  htmlFor="rating"  value="Rating (out of 5)"  />
                    </div>
                    <TextInput name="rating" placeholder="rating" required shadow type="rating" />
                </div>
               
                <div className="max-w-md" id="textarea">
                    <div className="mb-2 block">
                        <Label htmlFor="comment" value="Customer Review" />
                    </div>
                    <Textarea id="comment" name='review' placeholder="Comments..." required rows={4} />
                </div>
                <Button type="submit" className='basic'>
                    Add Service
                </Button>
            </form>
            </div>

            </div>
            
        </div>
    );
};

export default SingleServiceItem;