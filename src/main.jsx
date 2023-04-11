import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home';
import Statistics from './Component/Statistics';
import AppliedJobs from './Component/AppliedJobs';
import Blogs from './Component/Blogs';
import App from './App';
import IndividualJobDetails from './Component/IndividualJobDetails';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'appliedjobs',
        element: <AppliedJobs></AppliedJobs>,
        loader: ()=> fetch("/featureJobs.json")
      },
      {
         path: 'jobs/:id',
         element: <IndividualJobDetails></IndividualJobDetails>,
         loader: ({params}) =>fetch("/featureJobs.json")
      },
      {
        path: 'blogs',
        element: <Blogs></Blogs>
      }

    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
