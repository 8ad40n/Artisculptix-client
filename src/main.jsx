import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Root from './layout/Root';
import Add from './pages/Add';
import Home from './pages/Home';
import Update from './pages/Update';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=>fetch("https://artisculptix-server.vercel.app/craft"),
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({params})=> fetch(`https://artisculptix-server.vercel.app/craft/${params.id}`)
      },
      {
        path: "/add",
        element: <Add></Add>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
