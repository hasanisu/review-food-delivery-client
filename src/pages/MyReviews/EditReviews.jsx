import React, { useContext, useState } from 'react';
import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { Link, useLoaderData } from 'react-router-dom';

const EditReviews = () => {
    const {user} = useContext(AuthContext);
    const userReviews = useLoaderData();
    console.log('id',userReviews)
    const [updateReview, setUpdateReview] = useState(userReviews)
    
    const handleToUpdate = event=>{
        event.preventDefault();
        console.log(updateReview)
        fetch(`http://localhost:5000/reviews/${userReviews._id}`,{
            method:'PUT',
            headers:{
                'content-type': 'application-json'
            },
            body:JSON.stringify(updateReview)
        })
        .then(res => res.json())
        .then(data => console.log(data))
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
            <div className='col-span-3 bg-slate-500 '>
                <h2 className='mt-20 text-center text-2xl font-serif underline font-semibold'>Post your review</h2>
                <form onSubmit={handleToUpdate}  className="flex max-w-md flex-col gap-4 mx-auto bg-slate-500 py-10 px-10 mt-10 mb-12 basic-border">
                
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="name" value="Your Name" />
                    </div>
                    <TextInput onChange={handleToChange} name="customerName" defaultValue={user?.displayName} placeholder="" required shadow type="text" />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label  htmlFor="email"  value="Your email"  />
                    </div>
                    <TextInput onChange={handleToChange} name="email" defaultValue={user?.email}  placeholder="name@flowbite.com" required shadow type="email" />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label  htmlFor="rating"  value="Rating (out of 5)"  />
                    </div>
                    <TextInput onChange={handleToChange} name="rating" placeholder="rating" required shadow type="rating" />
                </div>
               
                <div className="max-w-md" id="textarea">
                    <div className="mb-2 block">
                        <Label htmlFor="comment" value="Customer Review" />
                    </div>
                    <Textarea onChange={handleToChange} id="comment" name='review' placeholder="Comments..." required rows={4} />
                </div>
               <div className='mx-auto'>
               {
                user?.uid ?
                <Button  type="submit" className='basic'>
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
            </form>
            </div>
        </div>
    );
};

export default EditReviews;