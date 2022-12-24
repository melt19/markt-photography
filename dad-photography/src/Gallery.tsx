import React from 'react'
import { useParams } from 'react-router-dom'

import image0 from './images/__0_2931.jpg'
import image1 from './images/__1_2930.jpg'

const imageList = [ image0, image1 ]

export const Gallery = () => {
  
  return (
    <div className='image-page'>
      <p className='title'>Gallery</p>
      <div>
        <span></span>
      </div>
      <div className='image-list'>
        { imageList.map( image => <img src={image} /> )}
      </div>
    </div>
  )
}



export const ImagePage = () => {
  const { imageID } = useParams<'imageID'>()
  
  return (
    <div>
      The image chosen is {imageID}
    </div>
  )
}