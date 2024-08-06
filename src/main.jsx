import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './comp/Root/Root.jsx';

import Social from './comp/Social/Social.jsx';
import ShopLanding from './comp/Pages/ShopLanding/ShopLanding.jsx';
import Login from './comp/Pages/Login/Login.jsx';
import Signup from './comp/Pages/Signup/Signup.jsx';
import Cart from './comp/Pages/Cart/Cart.jsx';
import BlogDetails from './comp/Pages/BlogDetails/BlogDetails.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';
import AddBlog from './comp/Pages/AddBlog/AddBlog.jsx';
import UpdateBlog from './comp/Pages/UpdateBlog/UpdateBlog.jsx';
import AddProduct from './comp/Pages/AddProduct/AddProduct.jsx';
import ManageItems from './comp/Pages/ManageItems/ManageItems.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <App></App>
      },
      {
        path: "/shop",
        element: <PrivateRoute><ShopLanding></ShopLanding></PrivateRoute>
      },
      {
        path: "/social",
        element: <PrivateRoute><Social></Social></PrivateRoute>
      },
      {
        path: "/addBlog",
        element: <PrivateRoute><AddBlog></AddBlog></PrivateRoute>
      },
      {
        path: "/blogDetails/:id",
        element: <BlogDetails></BlogDetails>,
        loader: ({ params }) => fetch(`http://localhost:5002/blog/${params.id}`)
      },
      {
        path: "/updateBlog/:id",
        element: <UpdateBlog></UpdateBlog>,
        loader: ({ params }) => fetch(`http://localhost:5002/blog/${params.id}`)
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <Signup></Signup>
      },
      {
        path: "/cart",
        element: <Cart></Cart>
      },
      {
        path: "/addproduct",
        element: <AddProduct></AddProduct>
      },
      {
        path: "/manageitems",
        element: <ManageItems></ManageItems>
      },


    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <div className='mx-auto max-w-[1920px] font-chakra'>
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </React.StrictMode>,
)
