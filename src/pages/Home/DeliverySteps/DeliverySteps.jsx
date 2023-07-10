import React from 'react';
import rec from '../../../icons/delivery.png'
import deli from '../../../icons/express-delivery.png'
import door from '../../../icons/delivery-man.png'

const DeliverySteps = () => {
    return (
       <div className='bg-slate-200'>
         <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        
          <h2 className="max-w-lg mb-6 text-2xl font-mono font-semibold  text-gray-900  md:mx-auto">
            
            The Delivery Steps of The Product
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Here the three steps are followed to delivery product to the customer
          </p>
        </div>
        <div className="grid gap-8 row-gap-0 lg:grid-cols-3">
          <div className=" text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4  sm:w-20 sm:h-20">
              <img src={rec} alt="" />
            </div>
            <h6 className="mb-2 text-2xl font-extrabold">Received from Seller</h6>
            <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
              First step, received product from the seller and get the address of the customer.
            </p>


            <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
              <svg
                className="w-8 text-gray-700  rotate-90 lg:rotate-0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line
                  fill="none"
                  strokeMiterlimit="10"
                  x1="2"
                  y1="12"
                  x2="22"
                  y2="12"
                />
                <polyline
                  fill="none"
                  strokeMiterlimit="10"
                  points="15,5 22,12 15,19 "
                />
              </svg>
            </div>
          </div>


          <div className=" text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4  sm:w-20 sm:h-20">
              <img src={deli} alt="" />
            </div>
            <h6 className="mb-2 text-2xl font-extrabold">Way to Delivery</h6>
            <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
              After loading the product, i am going to delivery to my delivery destination.
            </p>
            
            <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
              <svg
                className="w-8 text-gray-700  rotate-90 lg:rotate-0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line
                  fill="none"
                  strokeMiterlimit="10"
                  x1="2"
                  y1="12"
                  x2="22"
                  y2="12"
                />
                <polyline
                  fill="none"
                  strokeMiterlimit="10"
                  points="15,5 22,12 15,19 "
                />
              </svg>
            </div>
          </div>
          <div className=" text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4  sm:w-20 sm:h-20">
             <img src={door} alt="" />
            </div>
            <h6 className="mb-2 text-2xl font-extrabold">Delivered to the Customer</h6>
            <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
              Final steps, After reaching to location i carefully handover product to the customer.
            </p>
           
          </div>
        </div>
      </div>
       </div>
    );
};

export default DeliverySteps;