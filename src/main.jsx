import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'  
import { Start, Home } from './Pages/page.js'


const router = createBrowserRouter([
  {
    path: 'https://akashtwt.vercel.app/',
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "https://akashtwt.vercel.app//start",
        element: <Start />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
