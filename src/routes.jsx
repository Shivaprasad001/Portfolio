import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/Home";
import ResumePage from "./pages/Resume";

export const router = createBrowserRouter([
    {
      path:'/',
      element:<RootLayout/>,
      children:[
        {path: '/', element: <HomePage/>},
        {path: '/resume', element: <ResumePage/>}
      ]
    }
  ])