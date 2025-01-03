import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Pages/Layouts";
import App from "../App";
import Login from "../Pages/Auth/Login";
import ForgetPassword from "../Pages/Auth/ForgetPassword";
import Otp from "../Pages/Auth/Otp";
import UpdatePassword from "../Pages/Auth/UpdatePassword";
import NewStudio from "../Pages/NewStudio/NewStudio";
import Studio from "../Pages/Studio/Studio";
import Profile from "../Pages/Profile/Profile";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import TermsAndCondition from "../Pages/TermsAndCondition/TermsAndCondition";
import ParamountStudio from "../Pages/ParamountStudio/ParamountStudio";
import AddMovies from "../Pages/AddMovies/AddMovies";
import EditMovieDetails from "../Pages/EditMovieDetails/EditMovieDetails";
import { AddNewMoviePage } from "../Pages/AddNewMoviePage/AddNewMoviePage";
import PrivateRoutes from "./PrivateRoutes";
import AllUsers from "../Pages/AllUsers/AllUsers";

export const router = createBrowserRouter([
    {
        path : '/',
        element :<PrivateRoutes> <Layouts/></PrivateRoutes>,
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
                path : '/all-users',
                element : <AllUsers />
            },
            {
                path : '/studio',
                element : <Studio />
            },
            {
                path : '/add-movies',
                element : <AddMovies />
            },
            {
                path : '/add-movies/edit-movies/:id',
                element : <EditMovieDetails />
            },
            {
                path : '/studio/paramount-studio/:id',
                element : <ParamountStudio />
            },
            {
                path : '/profile',
                element : <Profile />
            },
            {
                path : '/privacy-policy',
                element : <PrivacyPolicy />
            },
            {
                path : '/terms-condition',
                element : <TermsAndCondition />
            },
            {
                path : '/add-new-movies',
                element : <AddNewMoviePage/>
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