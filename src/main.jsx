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

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Dashboard from './comp/Shared/Dashboard.jsx';
import UserHistory from './comp/Pages/Dashboard/UserHistory/UserHistory.jsx';
import User from './comp/Pages/Dashboard/User/User.jsx';
import AllUsers from './comp/Pages/Dashboard/AllUsers/AllUsers.jsx';
import AdminRoute from './PrivateRoute/AdminRoute.jsx';
import ManageBlogs from './comp/Pages/Dashboard/ManageBlogs/ManageBlogs.jsx';
import UpdateProduct from './comp/Pages/Dashboard/UpdateProduct/UpdateProduct.jsx';
import AdminHome from './comp/Pages/Dashboard/AdminHome/AdminHome.jsx';
import Payment from './comp/Pages/Dashboard/Payment/Payment.jsx';
import Error from './comp/Pages/Error/Error.jsx';
import Galary from './comp/Pages/Galary/Galary.jsx';
const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <App></App>
      },
      {
        path: "/shop",
        element: <ShopLanding></ShopLanding>
      },
      {
        path: "/gallary",
        element: <Galary></Galary>
      },
      {
        path: "/social",
        element: <Social></Social>
      },
      {
        path: "/blogDetails/:id",
        element: <BlogDetails></BlogDetails>,
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
    ]
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: "user",
        element: <User></User>
      },
      {
        path: "cart",
        element: <Cart></Cart>
      },
      {
        path: "history",
        element: <UserHistory></UserHistory>
      },
      {
        path: "payment",
        element: <Payment></Payment>
      },

      // admin route
      {
        path: "adminHome",
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path: "allUsers",
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: "addItem",
        element: <AdminRoute><AddProduct></AddProduct></AdminRoute>
      },
      {
        path: "manageItem",
        element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
      },
      {
        path: "updateItem/:id",
        element: <AdminRoute><UpdateProduct></UpdateProduct></AdminRoute>,
        loader: ({ params }) => fetch(`http://localhost:5002/products/${params.id}`)
      },
      {
        path: "addBlog",
        element: <AdminRoute><AddBlog></AddBlog></AdminRoute>
      },
      {
        path: "manageBlogs",
        element: <AdminRoute><ManageBlogs></ManageBlogs></AdminRoute>
      },
      {
        path: "updateBlog/:id",
        element: <AdminRoute><UpdateBlog></UpdateBlog></AdminRoute>,
        loader: ({ params }) => fetch(`http://localhost:5002/blog/${params.id}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <div className='mx-auto max-w-[1920px] font-chakra'>
          <RouterProvider router={router} />
        </div>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
