import React, { useContext, useState } from 'react';
import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { Link, Navigate, useLoaderData, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTitle } from '../../hooks/useTitle';

const EditReviews = () => {
    const {user} = useContext(AuthContext);
    const userReviews = useLoaderData();
    const [updateReview, setUpdateReview] = useState(userReviews);
    useTitle('EditReview')

    
    
    const handleToUpdate = event=>{
        event.preventDefault();
        console.log(updateReview)
        
        fetch(`https://review-food-delivery-server.vercel.app/reviews/${userReviews.data._id}`,{
            method:'PATCH',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(updateReview)
        })
        .then(res => res.json())
        .then(data => {
            
            console.log(data.data)
        if(data.data.modifiedCount > 0){
            toast("Successfully Update your review");
            <Navigate to='/myReviews'></Navigate>
        }
        })
    }

    const handleToChange = event=>{
        const field = event.target.name;
        const value = event.target.value;
        const newReview = {...updateReview}
        newReview[field] = value;
        setUpdateReview(newReview); 
    }
    return (
        <div>
            <div className='col-span-3 '>
                <h2 className='mt-20 text-center text-2xl font-serif underline font-semibold'>Post your review</h2>
                <form onSubmit={handleToUpdate}  className="flex max-w-lg flex-col gap-4 mx-auto py-10 pl-10 mt-10 mb-12 basic-border shadow-2xl">
                
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="name" value="Your Name" />
                    </div>
                    <input onChange={handleToChange} className='rounded-xl w-11/12 p-2' name="customerName" defaultValue={user?.displayName} placeholder="" required shadow type="text" readOnly/>
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label  htmlFor="email"  value="Your email"  />
                    </div>
                    <input onChange={handleToChange} className='rounded-xl w-11/12 p-2' name="email" defaultValue={user?.email}  placeholder="name@flowbite.com" required shadow type="email" readOnly/>
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label  htmlFor="rating"  value="Rating (out of 5)"  />
                    </div>
                    <input onChange={handleToChange} defaultValue={updateReview?.data?.rating} className='rounded-xl w-11/12 p-2' name="rating"  placeholder="rating" required shadow type="rating" />
                </div>
               
                <div className="max-w-lg" id="textarea">
                    <div className="mb-2 block">
                        <Label htmlFor="comment" value="Customer Review" />
                    </div>
                    <textarea onChange={handleToChange} defaultValue={updateReview?.data?.review} className='rounded-xl w-11/12 p-2' name='review' placeholder="Comments..." required rows={4} />
                </div>
               <div className='mx-auto'>
               
                
                <Button   type="submit" className='basic'>
                    Update Review
                </Button>
                
              
                <ToastContainer />
               </div>
            </form>
            </div>
        </div>
    );
};

export default EditReviews;