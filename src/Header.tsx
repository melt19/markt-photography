import React, { useEffect, useState } from 'react'
import { Link, Navigator, useHref, useLocation } from 'react-router-dom'
import './App.scss'

type TabName = 'home' | 'gallery' | 'about'

export const Header = () => {
  return (
    <div className='header'>
      <i className='fa-solid fa-camera fa-3x' />
      <span>
        <Tab tabName='home' />
        <Tab tabName='gallery' />
        <Tab tabName='about' />
      </span>
    </div>
  )
}

interface TabProps {
  tabName : TabName
}

const Tab = ( { tabName } : TabProps ) => {
  const location = useLocation()
  const [ active, setActive ] = useState(location.pathname.split('/')[1])
  const className : string = active === tabName ? 'active' : ''

  useEffect(() => {
    setActive(location.pathname.split('/')[1])
  }, [ location ])

  return (
    <Link to={tabName} className={className} >
      {format(tabName)}
    </Link>
  )
}

const format = ( word : string ) : string => {
  return word.charAt(0).toUpperCase() + word.slice(1)
}