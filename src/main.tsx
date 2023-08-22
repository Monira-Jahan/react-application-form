import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.tsx';
import SecondPage from './components/SecondPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    
  },
  {
    path:'/secondpage',
    element:<SecondPage></SecondPage>
},
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
