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