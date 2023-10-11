import React,{useState} from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from "./components/Layout/Layout.jsx"

import Notfound from "./components/Notfound/Notfound.jsx"
import Products from './components/Products/Products.jsx'
import ProductDetails from './components/ProductDetails/ProductDetails.jsx'







export default function App() {







// eslint-disable-next-line no-undef




let routers=createBrowserRouter([
  {path:"",element:<Layout />,children:[
    
    {path:"productDetails/:id",element: <ProductDetails/>},

    {path:"product",element: <Products/>},
    {index:true,element: <Products/>},

      {path:"*",element: <Notfound/>}
  ]}
])


  return <>
  
  <RouterProvider router={routers}></RouterProvider>
  </>
}
