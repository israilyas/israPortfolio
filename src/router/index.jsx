import React from 'react'
import App from '../App'
import Home from '../pages/Home'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App/>}>
            <Route path='' element={<Home/>} />
        </Route>
    )
)

function Router() {
  return (
    <RouterProvider router={router} />
  )
}

export default Router
