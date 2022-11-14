import React from 'react';
import './App.css';

export function Main() {
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
      <p className='header-title'>
        Mark Turner Photography
      </p>
      <nav>
        <ol>
          <li>
            <a href='/'>
              Home
            </a>
          </li>
          <li>
            <a href='/gallery'>
              Gallery
            </a>
          </li>
          <li>
            <a href='/about'>
              About Mark
            </a>
          </li>
        </ol>
      </nav>
    </div>
  )
}

function Body() {
    return <div className='body'>Body</div>
}

function Footer() {
    return <div className='footer'>Footer</div>
}