import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Notfount from '../components/notFount/Notfount'
import BeerPage from '../pages/BeerPage'
import CarritoPage from '../pages/CarritoPage'
import { Home } from '../pages/Home'
import Wines from '../pages/Wines'
import Carousel from '../components/carousel/Carousel'

export const router =createBrowserRouter([
  
    {
        path:'/',
        element:<Home/>,
        errorElement:<Notfount/>
    },
    {
        path:'/homePage',
        element:<Carousel/>,
        errorElement:<Notfount/>
    },
    {
        path:'/gorras',
        element:<Wines/>,
        errorElement:<Notfount/>
    },
    {
        path:'/carrito',
        element:<CarritoPage/>,
        errorElement:<Notfount/>
        
    },
    {
        path:'beer',
        element:<BeerPage/>,
        errorElement:<Notfount/>
        
    }
]) 
