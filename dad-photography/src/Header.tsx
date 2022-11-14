import React from 'react'
import { Link, Navigator } from 'react-router-dom'
import './App.scss'

export const Header = () => {
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