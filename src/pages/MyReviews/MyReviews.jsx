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
    return (
        
<div>
<div className="relative overflow-x-auto shadow-md sm:rounded-lg w-10/12 mx-auto py-16">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="p-4">
                    <div className="flex items-center">
                        <input id="checkbox-all" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor="checkbox-all" className="sr-only">checkbox</label>
                    </div>
                </th>
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
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {
                customerReview.map(ownReview => 
                    
                    <tr key={ownReview._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor="checkbox-table-1" className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   <img src={ownReview.img} alt="" className='w-10 h-10 '/>
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