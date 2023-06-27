import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/RegiLog/Login/Login";
import Register from "../pages/RegiLog/Register/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
                path:'contact',
                element:<Contact></Contact>
            }
        ]
    }
])