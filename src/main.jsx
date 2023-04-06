import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Shop from './components/shop/Shop'
import Order from './components/Order/Order'
import Home from './components/Home/Home'
import About from './components/About/About'
import Error from './components/Error/Error'
import DeviceDetails from './components/DeviceDetails/DeviceDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'shop',
        element: <Shop />
      },
      {
        path: 'device/:id',
        element: <DeviceDetails />,
        loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/phone/${params.id}`) 
      },
      {
        path: 'order',
        element: <Order />
      },
      {
        path: 'about',
        element: <About />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
