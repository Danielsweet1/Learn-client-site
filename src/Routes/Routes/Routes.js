import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/blog/Blog";
import CourseDetails from "../../components/Courses/CourseDetails/CourseDetails";
import Courses from "../../components/Courses/Courses";
import FouroFourRoute from "../../components/FouroFourRoute/FouroFourRoute";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login/Login";
import SignUp from "../../components/Login/Signup/SignUp";
import Premuimaccess from "../../components/PremuimAccess/Premuimaccess";
import Main from "../../Layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                loader: ()=> fetch('https://learning-server-beryl.vercel.app/classes'),
                element: <Courses></Courses>
            },

            {
                path: '/classes/:id',
                loader: ({params})=> fetch(`https://learning-server-beryl.vercel.app/classes/${params.id}`),
                element: <CourseDetails></CourseDetails>
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
            },
            {
                path: '/premium/:id',
                loader: ({params})=> fetch(`https://learning-server-beryl.vercel.app/classes/${params.id}`),
                element: <PrivateRoute><Premuimaccess></Premuimaccess></PrivateRoute>
            }
            
        ]
    },
    {
        path: '/*',
        element: <FouroFourRoute></FouroFourRoute>
    }
]) 