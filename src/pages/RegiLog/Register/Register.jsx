import React from "react";
import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { useTitle } from '../../../hooks/useTitle.js'



const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  useTitle('Register')



  const handleToRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log("i am trying to login", name, email, password);


    createUser(email, password)
      .then(result => {
        const user = result.user;

        const currentUser = {
          email: user.email
        }

        // get JWT Token
        fetch(`https://review-food-delivery-server.vercel.app/jwt`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(currentUser)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            localStorage.setItem('service-token', data.token)
          })

        handleToUpdateUser(name, photoURL)
        console.log(user)
        form.reset();

      })
      .catch(err => console.error(err))
  };



  // Update Profile
  const handleToUpdateUser = (name, photoURL) => {
    const userProfile = {
      displayName: name,
      photoURL: photoURL,
    }
    updateUserProfile(userProfile)
      .then(() => { })
      .catch(e => console.error(e))

  };



  return (
    <div className="mx-auto lg:py-20 form-bg lg:w-7/12 mt-10 mb-24 p-10 rounded-lg basic-border">
      <div className="justify-center mx-auto text-left align-bottom bg-gray-500 rounded-lg w-9/12">
        <div className="grid flex-wrap items-center justify-center grid-cols-1 mx-auto shadow-xl lg:grid-cols-2 rounded-xl  ">
          <div className="w-full px-6 py-3">
            <div>
              <div className="mt-3 text-left sm:mt-5">
                <div className="inline-flex items-center w-full">
                  <h3 className="text-lg font-bold text-gray-200 eading-6 lg:text-3xl">
                    Create an account!
                  </h3>
                </div>
                <div className="mt-4 text-base text-gray-200">
                  <p>Sign up and post your valuable reviews.</p>
                </div>
              </div>
            </div>

            {/* Registration form Start */}

            <form onSubmit={handleToRegister} className="mt-6 space-y-2">
              <div>
                <label for="email" className="sr-only">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="block w-full px-5 py-3 text-base-300 text-neutral-600 placeholder-gray-500 sition durattranion-500 ease-in-out border border-transparent rounded-lg bg-cyan-100 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                  placeholder="user name"
                />
              </div>
              <div>
                <label for="email" className="sr-only">
                  PhotoURL
                </label>
                <input
                  type="photoURL"
                  name="photoURL"
                  className="block w-full px-5 py-3 text-base-300 text-neutral-600 placeholder-gray-500 sition durattranion-500 ease-in-out border border-transparent rounded-lg bg-cyan-100 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                  placeholder="your photoURL"
                />
              </div>
              <div>
                <label for="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-500 transition duration-500 ease-in-out  border border-transparent rounded-lg bg-cyan-100 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                  placeholder="your email"
                />
              </div>
              <div>
                <label for="password" className="sr-only">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-500 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-cyan-100 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                  placeholder="your password"
                />
              </div>
              <div className="flex flex-col mt-4 lg:space-y-2">
                <button
                  type="submit"
                  className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out basic  rounded-xl hover:bg-gray-500 "
                >
                  Register
                </button>
                <p
                  type="button"
                  className="inline-flex justify-center py-4 text-lg text-gray-200 focus:outline-none"
                >
                  {" "}
                  already have an account?{" "}
                  <span className="text-md underline text-red-200 hover:text-red-600 ml-1">
                    <Link to="/login">sign in</Link>
                  </span>{" "}
                </p>
              </div>
            </form>
          </div>
          <div className="order-first hidden w-full h-full lg:block">
            <img
              className="object-cover h-full bg-cover rounded-l-lg"
              src="https://i.ibb.co/K2XKvfz/plant-based-food-mc-220323-02-273c7b.jpg"
              alt="plant-based-food"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
