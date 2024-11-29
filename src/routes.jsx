import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/Home";
import ResumePage from "./pages/Resume";
import ContactPage from "./pages/Contact";
import ServicesPage from "./pages/Services";
import ProjectsPage from "./pages/Projects";
import DesignsPage from "./pages/Designs";
import ErrorPage from "./pages/404";

export const router = createBrowserRouter([
    {
      path:'/',
      element:<RootLayout/>,
      errorElement: <ErrorPage/>,
      children:[
        {path: '/', element: <HomePage/>},
        {path: '/resume', element: <ResumePage/>},
        {path: '/contact', element: <ContactPage/>},
        {path: '/services', element: <ServicesPage/>},
        {path: '/projects', element: <ProjectsPage/>},
        {path: '/designs', element: <DesignsPage/>},
      ]
    }
  ])