import React, { useContext } from 'react';
import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { Link, useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTitle } from '../../hooks/useTitle';

const AddReviews = () => {
    const {user} = useContext(AuthContext);
    const serviceItem = useLoaderData();
    const singleService = serviceItem.data;
    const {photoURL, serviceName, _id} = singleService;
    const notify = () => toast("Thank you for your Review");
    useTitle('PostReview')
    
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


            
        fetch(`https://review-food-delivery-server.vercel.app/reviews`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewsCollection)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data.data)
            form.reset();
        })
        
    }
    return (
        <div>
            <div className='col-span-3 bg-slate-500 pt-10 pb-10'>
                <h2 className=' text-center text-2xl font-serif underline font-semibold'>Post your review</h2>
                <form onSubmit={addToReview}  className="flex max-w-md flex-col gap-4 mx-auto bg-slate-500 py-10 px-10 mt-10  basic-border shadow-2xl">
                
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="name" value="Your Name" />
                    </div>
                    
                    <input className='rounded-xl w-11/12 p-2' name="customerName" defaultValue={user?.displayName} placeholder="" readOnly shadow  type="text" />
                   
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label  htmlFor="email"  value="Your email"  />
                    </div>
                    
                    <input className='rounded-xl w-11/12 p-2' name="email" defaultValue={user?.email}  placeholder="name@flowbite.com" readOnly  type="email" />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label  htmlFor="rating"  value="Rating (out of 5)"  />
                    </div>
                    <input  className='rounded-xl w-11/12 p-2'  name="rating" placeholder="rating"  type="rating" required/>
                </div>
               
                <div className="max-w-md" id="textarea">
                    <div className="mb-2 block">
                        <Label htmlFor="comment" value="Customer Review" />
                    </div>
                    <textarea className='rounded-xl w-11/12 p-2' id="comment" name='review' placeholder="Comments..." required rows={4} />
                </div>
               <div className='mx-auto'>
               {
                user?.uid ?
                <Button onClick={notify}  type="submit" className='basic'>
                    Post Review
                </Button>
                :
                <Link to='/login'>
                <Button  type="submit" className='basic'>
                    Post Review
                </Button>
                </Link>
               }
               </div>
               <ToastContainer />
            </form>
            </div>
        </div>
    );
};

export default AddReviews;