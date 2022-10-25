import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/blog/Blog";
import Courses from "../../components/Courses/Courses";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login/Login";
import SignUp from "../../components/Login/Signup/SignUp";
import Main from "../../Layout/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path:'/', 
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }, 
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
]) 