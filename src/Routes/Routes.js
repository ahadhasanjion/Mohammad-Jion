import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ProjectDetails from "../Pages/Projects/ProjectDetails";
import Projects from "../Pages/Projects/Projects";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }, 
            // {
            //     path:'/contact',
            //     element:<Contact></Contact>
            // },
            // {
            //     path:'/footer',
            //     element:<Footer></Footer>
            // },
            {
                path:'/projects',
                element:<Projects></Projects>
            },
            {
                path: '/details/:id',
                element: <ProjectDetails></ProjectDetails>,
                loader: ({ params }) => fetch(`https://mohammad-jion-server.vercel.app/details/${params.id}`)
            }
    
        ]
    },

])
export default router;