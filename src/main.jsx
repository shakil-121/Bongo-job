import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css' 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 
import Home from './Component/Home/Home';
import Statistics from './Component/Statistics/Statistics';
import AppliedJob from './Component/AppliedJob/AppliedJob';
import Blog from './Component/Blog/Blog';
import Error from './Component/Error/Error';
import Firstpage from './Component/Firstpage/Firstpage';
import JobView from './Component/JobView/JobView';

const router=createBrowserRouter([ 
  {
    path:'/', 
    element:<Firstpage></Firstpage>, 
    children:[ 
      { 
        path:'/', 
        element:<Home></Home>
      }, 
      { 
        path:'/statistics', 
        element:<Statistics></Statistics>
      }, 
      { 
        path:'/appliedjob', 
        element:<AppliedJob></AppliedJob>,
        
      }, 
      {
        path:'/jobdetails/:id',
        element:<JobView></JobView> 
      },
      { 
        path:'/blog', 
        element:<Blog></Blog>
      }, 
      { 
        path:'*', 
        element:<Error></Error>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
