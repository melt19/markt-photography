import React from 'react'
import { Route, Navigate, Routes, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import './App.scss'
import { Main } from './Main'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' >
      <Route index path='home' element={<Main />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} fallbackElement={<Main />} />
}

export default App;
