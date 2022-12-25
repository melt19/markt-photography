import React from 'react'
import { Link, Navigator } from 'react-router-dom'
import { pageTransitionWrapper } from './Animations'
import './App.scss'

export const Home = () => {
  return pageTransitionWrapper(
    <div>
      <Footer />
      <Footer2 />
      <Body />
      <Footer2 />
      <Footer />
    </div>
  )
}

function Body() {
  return <div className='about-page'>
    <p className='title'>Merry Christmas Dad!</p>
    <p>While this is just a very bare bones website I thought I'd whip it together and see if you enjoy having your own space to put your photos so you can send the links to your friends.</p>
    <p>You've come so far with your photography skills so you deserve to have a nice place to show them off!</p>
    <p>If you end up liking the idea, we can properly set it up with a server to host the photos and get you a watermark too!</p>
    <p>Love from Melissa <i className='fa-solid fa-heart' /></p>
  </div>
}

function Footer() {
    return <div className='footer'></div>
}

function Footer2() {
  return <div className='footer2'></div>
}