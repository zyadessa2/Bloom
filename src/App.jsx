import React from 'react'
import {RouterProvider, createBrowserRouter} from 'react-router-dom' ;
import Layout from './Components/Components/Layout/Layout';
import Home from './Components/Components/Home/Home';
import NotFound from './Components/Components/NotFound/NotFound';
import ContactUs from './Components/Components/ContactUs/ContactUs';
import Gallery from './Components/Components/Gallery/Gallery';
import Product from './Components/Components/Product/Product';
import Testimonials from './Components/Components/Testimonials/Testimonials';

export default function App() {
  let routers = createBrowserRouter([
    {path:'' , element:<Layout/> , children:[
      {index:true,element:<Home/>},
      {path:'home' , element:<Home/>},
      {path:'product' , element:<Product/>},
      {path:'feedback' , element:<Testimonials/>},
      {path:'contactUs' , element:<ContactUs/>},
      {path:'gallery' , element:<Gallery/>},
      {path:'*',element:<NotFound/>}
    ]}
  ])
  return <>
  <RouterProvider router={routers}></RouterProvider>
  </>
}
