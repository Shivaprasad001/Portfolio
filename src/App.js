import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import HomePage from './pages/Home';
import ResumePage from './pages/Resume';

const router = createBrowserRouter([
  {
    path:'/',
    element:<RootLayout/>,
    children:[
      {path: '/', element: <HomePage/>},
      {path: '/resume', element: <ResumePage/>}
    ]
  }
])
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
