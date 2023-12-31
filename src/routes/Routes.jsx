import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Blogs/Blogs";
import Main from "../layout/Main";
import Contact from "../pages/Contact/Contact";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import AddServices from "../pages/Home/Services/AddServices";
import AllServices from "../pages/Home/Services/AllServices";
import MyReviews from "../pages/MyReviews/MyReviews";
import ForgerPassword from "../pages/RegiLog/ForgetPassword/ForgerPassword";
import Login from "../pages/RegiLog/Login/Login";
import Register from "../pages/RegiLog/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import SingleServiceItem from "../pages/Home/Services/SingleServiceItem";
import CustomerReview from "../pages/Home/Services/CustomerReview";
import EditReviews from "../pages/MyReviews/EditReviews";
import AddReviews from "../pages/MyReviews/AddReviews";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element:<Register></Register>
            },
            {
                path: '/resetPassword',
                element: <ForgerPassword></ForgerPassword>
            },
            {
                path: '/myReviews',
                element: <PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>
            },
            {
                path:'/addService',
                element: <PrivateRoutes><AddServices></AddServices></PrivateRoutes>
            },
            {
                path: '/allServices',
                element:<AllServices></AllServices>
            },
            {
                path: '/singleServiceItem/:id',
                element: <SingleServiceItem></SingleServiceItem>,
                loader: ({params})=>fetch(`https://review-food-delivery-server.vercel.app/services/${params.id}`)
                
            },
            {
                path:'/serviceReviews/:id',
                element: <CustomerReview></CustomerReview>,
                loader: ({params})=> fetch(`https://review-food-delivery-server.vercel.app/reviews/${params.id}`)
            },

            {
                path: '/addReviews/:id',
                element: <PrivateRoutes><AddReviews></AddReviews></PrivateRoutes>,
                loader: ({params})=>fetch(`https://review-food-delivery-server.vercel.app/services/${params.id}`)
            },
        
            {
                path: '/editReviews/:id',
                element: <PrivateRoutes><EditReviews></EditReviews></PrivateRoutes>,
                loader: ({params})=> fetch(`https://review-food-delivery-server.vercel.app/reviewsid/${params.id}`)
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path:'contact',
                element:<Contact></Contact>
            }
        ]
    }
])