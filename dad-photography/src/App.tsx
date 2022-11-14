import React from 'react'
import { Route, Navigate, Routes, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import './App.scss'
import { Header } from './Header'
import { Home } from './Main'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Header />} >
      <Route index path='home' element={<Home />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} fallbackElement={<Home />} />
}

export default App;
