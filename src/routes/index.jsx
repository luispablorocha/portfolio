import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Home from "../views/HomeView";
import Expertise from "../views/ExpertiseView";
import Portfolio from "../views/PortfolioView";

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
    }

]);

const Routes = () => {
    return (
        <RouterProvider router={router}></RouterProvider>
    );
};

export default Routes;