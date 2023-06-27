import React from 'react';
import {Link} from 'react-router-dom';

const Register = () => {
    return (
        
  <div className="mx-auto lg:py-20 form-bg lg:w-7/12 mt-10 mb-24 p-10 rounded-lg basic-border">
    <div className="justify-center mx-auto text-left align-bottom bg-gray-500 rounded-lg " >
      <div className="grid flex-wrap items-center justify-center grid-cols-1 mx-auto shadow-xl lg:grid-cols-2 rounded-xl  ">
        <div className="w-full px-6 py-3">
          <div>
            <div className="mt-3 text-left sm:mt-5">
              <div className="inline-flex items-center w-full">
                <h3 className="text-lg font-bold text-gray-200 eading-6 lg:text-3xl">Create an account!</h3>
              </div>
              <div className="mt-4 text-base text-gray-700">
                <p>Sign up and post your valuable reviews.</p>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-2">
            <div>
              <label for="email" className="sr-only">Name</label>
              <input type="text" name="name" id="email" className="block w-full px-5 py-3 text-base-300 text-neutral-600 placeholder-gray-500 sition durattranion-500 ease-in-out border border-transparent rounded-lg bg-cyan-100 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" placeholder="Enter your email"/>
            </div>
            <div>
              <label for="email" className="sr-only">Email</label>
              <input type="email" name="email" id="email" className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-500 transition duration-500 ease-in-out  border border-transparent rounded-lg bg-cyan-100 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" placeholder="Enter your email"/>
            </div>
            <div>
              <label for="password" className="sr-only">Password</label>
              <input type="password" name="password" id="password" className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-500 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-cyan-100 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" placeholder="Enter your password"/>
            </div>
            <div className="flex flex-col mt-4 lg:space-y-2">
              <button type="button" className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out basic  rounded-xl hover:bg-gray-500 ">Sign up</button>
              <p  type="button" className="inline-flex justify-center py-4 text-lg text-gray-200 focus:outline-none"> Have an account!! <span className="text-md underline text-red-200 hover:text-red-600 ml-1"><Link to='/login'>sign in</Link></span> </p>
            </div>
          </div>
        </div>
        <div className="order-first hidden w-full h-full lg:block">
          <img className="object-cover h-full bg-cover rounded-l-lg" src="https://i.ibb.co/K2XKvfz/plant-based-food-mc-220323-02-273c7b.jpg" alt="plant-based-food"/>
        </div>
      </div>
    </div>
    
  </div>

    );
};

export default Register;