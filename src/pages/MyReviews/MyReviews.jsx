import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const MyReviews = () => {
    const {user} = useContext(AuthContext);
    const [customerReview, setCustomerReview] = useState([]);
    

    useEffect(()=>{
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data =>{ 
            console.log(data.data)
            if(data.success){
                setCustomerReview(data.data)
            }
        
        })
    },[user?.email])

    const handleToDelete= _id =>{
        const procced = window.confirm('Are you sure want to delete this reviews')
        if(procced){
            fetch(`http://localhost:5000/reviews/${_id}`, {
            method: 'DELETE',
        })
        .then(res => res.json() )
        .then(data => {
            console.log(data.data)
            if(data.success){
                const remainig = customerReview.filter(exitReviews => exitReviews._id !== _id)
                setCustomerReview(remainig)
            }
        })

        }
        
        
    }

    return (
        
<div>
<div className="top-10 shadow-md sm:rounded-lg w-10/12 mx-auto py-16">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-400 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              
                <th scope="col" className="px-6 py-3">
                    Service name
                </th>
                <th scope="col" className="px-6 py-3">
                    Comments
                </th>
                <th scope="col" className="px-6 py-3">
                    Rating
                </th>
                <th scope="col" className="px-6 py-3">
                    Update
                </th>
                <th scope="col" className="px-6 py-3">
                    Delete
                </th>
            </tr>
        </thead>
        <tbody>
            {
                customerReview.map(ownReview => 
                    
                    <tr key={ownReview._id} className="bg-gray-300 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
               
                <th scope="row" className="flex items-center px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   <img src={ownReview.img} alt="" className='w-16 h-14 rounded-lg'/>
                   <div className=''>
                   <h4 className='pl-3'>{ownReview.serviceName}</h4>
                   </div>

                </th>
                <td className="px-6 py-4">
                    {ownReview.review}
                </td>
                <td className="px-6 py-4">
                    {ownReview.rating}
                </td>
                <td className="px-6 py-4">
                    <Link to={`/editReviews/${ownReview._id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                </td>
                <td onClick={()=>handleToDelete(ownReview._id)} className="px-6 py-4">
                    <button  className="font-medium text-blue-600 text-red-500 hover:underline">Delete</button>
                </td>
            </tr>
                    
                    )
            }
        </tbody>
    </table>
</div>
</div>

    );
};

export default MyReviews;