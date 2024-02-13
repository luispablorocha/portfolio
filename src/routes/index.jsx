import {
    createBrowserRouter,
    RouterProvider,
    NavLink
    
} from "react-router-dom";
import './routes.css'


import Home from "../views/HomeView";
import Expertise from "../views/ExpertiseView";
import Portfolio from "../views/PortfolioView";
import Project from "../views/ProjectView";
import About from "../views/AboutView";
import ErrorPage from "../views/ErrorView";

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
    },
    {
        // Esta ruta captura todas las rutas no definidas y muestra la página de error 404
        path: "*",
        element: <ErrorPage />
      }

]);

const Routes = () => {
    return (
        <RouterProvider router={router}>
        <nav>
            <ul>
                <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/resume" activeClassName="active">Resume</NavLink></li>
                <li><NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink></li>
                <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
            </ul>
        </nav>
    </RouterProvider>
    );
};

export default Routes;