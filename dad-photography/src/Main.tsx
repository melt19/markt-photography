import React from 'react'
import { Link, Navigator } from 'react-router-dom'
import './App.scss'

export const Home = () => {
  return (
    <div>
      <Body />
      <Footer />
    </div>
  )
}

function Body() {
    return <div className='body'>Body</div>
}

function Footer() {
    return <div className='footer'>Footer</div>
}