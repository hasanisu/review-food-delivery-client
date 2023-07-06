import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import CustomerReview from './CustomerReview';
import AddReviews from '../../MyReviews/AddReviews';
import { Modal } from 'flowbite';

const SingleServiceItem = () => {
    const { user } = useContext(AuthContext);
    const serviceItem = useLoaderData();
    const singleService = serviceItem.data;
    const [reviews, setReviews] = useState([]);
    const { photoURL, serviceName, rating, serviceDetails, _id } = singleService;


    // For getting data

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${_id}`)
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    const datas = data.data;
                    const customerReviews = datas.filter(n => n.service_id === _id)
                    setReviews(customerReviews)
                }


            })
    }, [_id])

    return (
        <div className=' w-9/12 mx-auto'>

            <div className='bg-slate-500 '>


                <div className=' col-span-9 pt-20 pb-10'>
                    <h2 className='text-2xl font-serif font-bold text-center mb-10'>A particular service details review page</h2>
                    <img src={photoURL} alt="" className='w-86 mx-auto rounded-2xl basic-border' />
                    <h2 className='text-xl font-bold px-10 mb-5 mt-5'>{serviceName}</h2>
                    <p className='px-10 mb-5 mt-5'>{serviceDetails}</p>
                    <h4 className='px-10 mb-5 mt-5'>Overall Rating: <span className='font-bold'>{rating}</span></h4>
                    <hr className="w-full dark:text-gray-400" />


                    <div className=''>
                        <p className='text-xl font-serif px-10 mb-5 mt-5 p-5 '>Total number of reviews - {reviews.length}</p>
                        {
                            reviews?.map(userReview => <CustomerReview
                                key={userReview._id}
                                userReview={userReview}
                            ></CustomerReview>)
                        }


                    </div>
                    {
                        user?.uid ?
                            <Link to={`/addReviews/${_id}`} className=''>
                                <Button className='mt-5 mx-auto basic'>Add your Review</Button>
                            </Link>
                            :

                            <>
                                <Button className="btn mx-auto basic" onClick={() => window.my_modal_1.showModal()}>Add Your Review</Button>
                                <dialog id="my_modal_1" className="modal">
                                    <form method="dialog" className="modal-box">
                                        <h3 className="font-bold text-lg">Dear User!</h3>
                                        <p className="py-4">Please login to post your valuable review</p>
                                        <div className="modal-action">
                                            <button className="btn">Close</button>
                                            <Link to='/login'><button className="btn">Login</button></Link>
                                        </div>
                                    </form>
                                </dialog>

                            </>


                    }
                </div>


            </div>

        </div>
    );
};

export default SingleServiceItem;

