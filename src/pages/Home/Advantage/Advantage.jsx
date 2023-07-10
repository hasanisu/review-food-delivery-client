import React from 'react';
import pack from '../../../icons/package.png';
import safty from '../../../icons/shield.png'
import fees from '../../../icons/hidden.png'
import gift from '../../../icons/gift.png'
import track from '../../../icons/box (1).png'
import contact from '../../../icons/contact.png'

const Advantage = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">


      <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
        <p className="inline-block px-3 py-px mb-4 text-2xl font-mono tracking-wider text-teal-900  rounded-full bg-teal-accent-400">
        Some Advantage to My Customer
        </p>
        <p className="text-base text-gray-700 md:text-lg">
        Here some advantages to providing customer and always try to give my best support to my user.
        </p>
      </div>

      <div className="grid gap-10 mx-auto lg:grid-cols-2 lg:max-w-screen-lg">
        <div className="flex ">

          <img
            className="w-20 h-20 text-purple-900"
            src={pack}
            alt="Person"
          />

          <div className="flex flex-col pl-4 sm:col-span-2">
            <p className="text-lg font-bold">Get your package in as little as two days</p>
            <p className="mb-4 text-sm tracking-wide text-gray-800">
            Can't wait to receive your items? Choose from a variety of express shipping options and get your packages delivered FAST!
            </p>

          </div>
        </div>


        <div className="flex ">

          <img
            className="w-20 h-20 "
            src={safty}
            alt="Person"
          />

          <div className="flex flex-col pl-4 sm:col-span-2">
            <p className="text-lg font-bold">Safety Ensure</p>
            <p className="mb-4 text-sm tracking-wide text-gray-800">
            This is very important thing about to delivery. I ensure my customer the will be safe and very carefully to deliver
            </p>

          </div>
        </div>

        <div className="flex ">

          <img
            className="w-20 h-20 "
            src={fees}
            alt="Person"
          />

          <div className="flex flex-col pl-4 sm:col-span-2">
            <p className="text-lg font-bold">No Hidden Fees</p>
            <p className="mb-4 text-sm tracking-wide text-gray-800">
            My customer is very important to me and i ensure to my customer there is no hidden fees chrarge for delivery.
            </p>

          </div>
        </div>

        <div className="flex ">

          <img
            className="w-20 h-20 "
            src={gift}
            alt="Person"
          />

          <div className="flex flex-col pl-4 sm:col-span-2">
            <p className="text-lg font-bold">Discount Offer</p>
            <p className="mb-4 text-sm tracking-wide text-gray-800">
            Sometime i surprise to my customer and customer are very happy to get discount.
            </p>

          </div>
        </div>

        <div className="flex ">

          <img
            className="w-20 h-20 "
            src={track}
            alt="Person"
          />

          <div className="flex flex-col pl-4 sm:col-span-2">
            <p className="text-lg font-bold">Product Tracking</p>
            <p className="mb-4 text-sm tracking-wide text-gray-800">
            I am providig tracking number to my customer and they can easily track the product.
            </p>

          </div>
        </div>

        <div className="flex ">

          <img
            className="w-20 h-20 "
            src={contact}
            alt="Person"
          />

          <div className="flex flex-col pl-4 sm:col-span-2">
            <p className="text-lg font-bold">Talk to me at any time of day</p>
            <p className="mb-4 text-sm tracking-wide text-gray-800">
            I am alwasy available here to assist you every step of the way.
            </p>

          </div>
        </div>
      </div>


    </div>
  );
};

export default Advantage;