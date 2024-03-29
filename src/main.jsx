import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Contact from './contact';
import ErrorPage from './error-page';
import Root, { loader as rootLoader } from './routes/root';
import './styles.css'

const router = createBrowserRouter([
    {
    path:"/",
    element : <Root/>,
    loader:rootLoader,
    errorElement: <ErrorPage />,
    
        children:[
                {
                path:"contacts/:contactId",
                element : <Contact/>    
                }
        ],
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)