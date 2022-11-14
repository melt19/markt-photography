import React from 'react'
import { Link, Navigator } from 'react-router-dom'
import './App.scss'

export const Main = () => {
  return (
    <div>
        <Header />
        <Body />
        <Footer />
    </div>
  )
}


function Header() {
  return (
    <div className='header'>
      <i className='fa-solid fa-camera fa-3x' />
      <span>
        <Link to='home'>
          Home
        </Link>
        <Link to='gallery'>
          Gallery
        </Link>
        <Link to='about'>
          About
        </Link>
      </span>
    </div>
  )
}

function Body() {
    return <div className='body'>Body</div>
}

function Footer() {
    return <div className='footer'>Footer</div>
}