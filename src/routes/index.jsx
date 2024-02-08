import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Home from "../views/HomeView";
import Expertise from "../views/ExpertiseView";
import Portfolio from "../views/PortfolioView";
import Project from "../views/ProjectView";
import About from "../views/AboutView";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path:'/resume',
        element: <Expertise/>
    },
    {
        path:'/portfolio',
        element: <Portfolio/>
    },
    {
        path:'/portfolio/:id',
        element: <Project/>
    },
    {
        path:'/about',
        element: <About/>
    }

]);

const Routes = () => {
    return (
        <RouterProvider router={router}></RouterProvider>
    );
};

export default Routes;