import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Pages/Layouts";
import App from "../App";
import Login from "../Pages/Auth/Login";
import ForgetPassword from "../Pages/Auth/ForgetPassword";
import Otp from "../Pages/Auth/Otp";
import UpdatePassword from "../Pages/Auth/UpdatePassword";
import NewStudio from "../Pages/NewStudio/NewStudio";
import Studio from "../Pages/Studio/Studio";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <Layouts/>,
        children : [
            {
                path : '/',
                element : <App />
            },
            {
                path : '/new-studio',
                element : <NewStudio />
            },
            {
                path : '/studio',
                element : <Studio />
            },
        ]
    },
    {
        path : '/auth/login',
        element : <Login/>
    },
    {
        path : '/auth/forgot-password',
        element : <ForgetPassword/>
    },
    {
        path : '/auth/otp',
        element : <Otp/>
    },
    {
        path : '/auth/update-password',
        element : <UpdatePassword/>
    }
])