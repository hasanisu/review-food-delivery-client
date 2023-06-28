import React, { Fragment, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';



const ForgerPassword = () => {
  const { resetUserPassword } = useContext(AuthContext)

  const handleToResetPassword = event => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    console.log(email)

    resetUserPassword(email)
      .then((result) => {

        alert('successfully Reset password link sent to your email')

      })
      .catch(err => console.error(err))

  }

  return (
    <div className="grid grid-cols-1 mt-10 mb-10 lg:grid-cols-12 lg:w-7/12 form-bg mx-auto p-10 rounded-lg basic-border shadow-2xl lg:pt-20 lg:mt-20 lg:pb-32 lg:mb-32">

      <div className="lg:col-span-5 hidden lg:block">
        <p className="text-center text-lg text-slate-200">
          Don`t want to reset password? <br />
          <Link
            className="underline text-red-200 hover:text-red-600"
            to="/login"
          >
            Back to Login page
          </Link>
        </p>
        <hr class="mx-auto my-8 h-1 w-60 border-0 basic" />
      </div>


      <div className="w-78 lg:w-80 p-4 rounded-md shadow sm:p-8 bg-gray-500 content-center text-gray-100 lg:col-span-7">
        <h2 className="mb-3 text-2xl font-semibold text-center">
          Reset your password
        </h2>


        <div className="flex items-center w-full my-4">
          <hr className="w-full dark:text-gray-400" />
          <hr className="w-full dark:text-gray-400" />
        </div>

        {/* Reset form Start */}

        <form
          onSubmit={handleToResetPassword}
          className="space-y-8 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <label for="email" className="block text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-500 transition duration-500 ease-in-out  border border-transparent rounded-lg bg-cyan-100 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"

              />
            </div>

          </div>
          <button
            type="submit"
            className="w-full w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out  basic  rounded-xl hover:bg-gray-500"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>




  );
};

export default ForgerPassword;