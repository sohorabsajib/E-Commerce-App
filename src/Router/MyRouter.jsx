
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Products from '../Components/Header/Products/Products';

const MyRouter = createBrowserRouter([

    {                       
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <div>Error</div>,
        children: [

            {path: '/', 
                element: <Home></Home>
            },

            {
                path: '/products',  
                element: <Products></Products>
            },
            {

                path: '/login', 
                element: <Login></Login>

            }      
        ]
    },
])

export default MyRouter;