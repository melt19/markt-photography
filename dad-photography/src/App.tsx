import React from 'react'
import { Route, Navigate, Routes, createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet } from 'react-router-dom'
import './App.scss'
import { Gallery, ImagePage } from './Gallery'
import { Header } from './Header'
import { Home } from './Main'

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='home' element={<Home />} />
      <Route path='gallery' element={<Gallery />} />
      <Route path='gallery/:imageID' element={<ImagePage />} />
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} fallbackElement={<Layout />} />
}

export default App
