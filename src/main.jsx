import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'  
import { Start, Home, ErrorPage, Projects } from './Pages/page.js'
import { githubInfoLoader } from './components/GithubApi.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route
        loader={githubInfoLoader}
        path='start' 
        element={<Start />}
      />
      <Route path='/projects' element={<Projects />}/>
      <Route path='*' element={<ErrorPage />}/>
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
