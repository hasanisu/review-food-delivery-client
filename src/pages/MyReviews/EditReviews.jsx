import React, { useContext, useState } from 'react';
import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const EditReviews = () => {
    const {user} = useContext(AuthContext);
    const userReviews = useLoaderData();
    const [updateReview, setUpdateReview] = useState(userReviews)

    const navigate = useNavigate();
    
    const handleToUpdate = event=>{
        event.preventDefault();
        console.log(updateReview)
        
        fetch(`http://localhost:5000/reviews/${userReviews.data._id}`,{
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
            alert('successfully updated');
            
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
                    <input onChange={handleToChange} className='rounded-xl w-11/12 p-2' name="rating" defaultValue={updateReview.data?.rating} placeholder="rating" required shadow type="rating" />
                </div>
               
                <div className="max-w-lg" id="textarea">
                    <div className="mb-2 block">
                        <Label htmlFor="comment" value="Customer Review" />
                    </div>
                    <textarea onChange={handleToChange} className='rounded-xl w-11/12 p-2' name='review' defaultValue={updateReview.data?.review} placeholder="Comments..." required rows={4} />
                </div>
               <div className='mx-auto'>
               
                
                <Button  type="submit" className='basic'>
                    Update Review
                </Button>
                
              
                
               </div>
            </form>
            </div>
        </div>
    );
};

export default EditReviews;