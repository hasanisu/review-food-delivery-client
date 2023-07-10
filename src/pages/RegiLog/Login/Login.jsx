import React, { useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const Login = () => {
const {userLogin, loginWithGoogle}= useContext(AuthContext);
const navigate = useNavigate();
const location = useLocation();

const from = location.state?.from?.pathname || '/';



  const handleToLogin = event =>{
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log('i am trying to login',email, password)

    userLogin(email, password)
    .then(result => {
      const user = result.user;
      

      const currentUser = {
        email: user.email
      }
      console.log(currentUser);


      // get JWT Token
      fetch(`https://review-food-delivery-server.vercel.app/jwt`,{
        method:'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        localStorage.setItem('service-token', data.token)
        navigate(from, { replace: true });
      })


      
    })
    .catch(err => console.error(err))
  }

  const handleToLoginWithGoogle=()=>{
        loginWithGoogle()
        .then(result => {
          const user = result.user;
          console.log(user)
        })
        .catch(err => console.error(err))
  }



  return (

    <div className="grid grid-cols-1 mt-10 mb-10 lg:grid-cols-12 lg:w-7/12 form-bg mx-auto p-10 rounded-lg basic-border shadow-2xl">
      
      <div className="lg:col-span-5 hidden lg:block">
        <p className="text-center text-lg text-slate-200">
          Don`t have account? <br />
          <Link
            className="underline text-red-200 hover:text-red-600"
            to="/register"
          >
            Register here
          </Link>
        </p>
        <hr class="mx-auto my-8 h-1 w-60 border-0 basic" />
      </div>


      <div className="w-78 lg:w-80 p-4 rounded-md shadow sm:p-8 bg-gray-500 content-center text-gray-100 lg:col-span-7">
        <h2 className="mb-3 text-3xl font-semibold text-center">
          Login to your account
        </h2>
        <p className="text-sm text-center text-gray-400 lg:hidden">
          Don`t have account?
          <Link
            to="/register"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Register here
          </Link>
        </p>
        <div className="my-6 space-y-4">
          <button
            onClick={handleToLoginWithGoogle}
            aria-label="Login with Google"
            type="button"
            className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            <p>Login with Google</p>
          </button>
        </div>
        <div className="flex items-center w-full my-4">
          <hr className="w-full dark:text-gray-400" />
          <p className="px-3 dark:text-gray-400">OR</p>
          <hr className="w-full dark:text-gray-400" />
        </div>


    {/* Login form Start */}

        <form
          onSubmit={handleToLogin}
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
            <div className="space-y-2">
              <div className="flex justify-between">
                <label for="password" className="text-sm">
                  Password
                </label>
                <Link
                  rel="noopener noreferrer"
                  to="/resetPassword"
                  className="text-xs hover:underline dark:text-gray-400"
                >
                  Forgot password?
                </Link>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-500 transition duration-500 ease-in-out  border border-transparent rounded-lg bg-cyan-100 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out  basic  rounded-xl hover:bg-gray-500"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
