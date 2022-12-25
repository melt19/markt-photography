import React, { useState, MouseEvent, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { pageTransitionWrapper } from './Animations'

import { ImageInfo, imageList } from './images'

export const Gallery = () => {
  const categories : string[] = ['Insects', 'Birds', 'Landscapes', 'Animals']

  const [ loading, setLoading ] = useState<boolean>(true)
  const [ filters, setFilters ] = useState<string[]>(categories)
  const [ displayed, setDisplayed ] = useState<{[imageID: string] : ImageInfo}>(imageList)

  useEffect( () => {
    var newDisplayed : {[imageID: string] : ImageInfo} = {}
    Object.entries(imageList).forEach( image => {
      if ( filters.includes(image[1].category) || filters.length === 0 ) newDisplayed[image[0]] = image[1]
    })
    setDisplayed(newDisplayed)
  }, [ filters ] )

  const handleFilterChange = ( selected : string ) : void => {
    if ( filters.includes(selected) ) setFilters( filters.filter( filter => filter !== selected ) )
    else setFilters( [ ...filters, selected ]  )
  }

  if (loading) setTimeout(() => setLoading(false), 1500)

  return pageTransitionWrapper(
    <div className='image-page'>
      <p className='title'>Gallery</p>
      <div className='page-w-sidebar'>
        <div className='image-filters'>
          <span>
            <span className='filter-heading'>
              <p>Categories</p>
              <p>Click to select / unselect</p>
            </span>
            { categories.map( category => (
              <button className={filters.includes(category) ? 'selected' : ''} onClick={e => handleFilterChange(category)}>
                <i className={getCategoryIcon(category) + ' fa-2x'} />
                <p>{category.charAt(0).toUpperCase() + category.slice(1)}</p>
              </button>
            ))}
          </span>
        </div>
        <div>
          { loading ? <div id='loading'><i className="fa-solid fa-spinner fa-3x" /></div> : <>
            <p>Showing {Object.keys(displayed).length} of {Object.keys(imageList).length} images</p>
            <div className='image-list'>
              { Object.entries(displayed).map( ([ imageID, imageInfo ]) => <GalleryImage imageID={imageID} imageInfo={imageInfo} /> )}
            </div>
          </>}
        </div>
      </div>
    </div>
  )
}

interface GalleryImageProps {
  imageID: string
  imageInfo: ImageInfo
}

const GalleryImage = ( { imageID, imageInfo } : GalleryImageProps ) => {
  var categoryIcon = getCategoryIcon(imageInfo.category)
  if (imageInfo.category === 'Birds') categoryIcon = 'fa-solid fa-crow'
  if (imageInfo.category === 'Landscapes') categoryIcon = 'fa-solid fa-mountain-sun'
  if (imageInfo.category === 'insects') categoryIcon = 'fa-solid fa-bug'

  return (
    <a href={`gallery/${imageID}`} className='gallery-image'>
      <img src={imageInfo.image} />
      <span>
        <span>
          <i className='fa-regular fa-image' />
          <p>{imageInfo.title}</p>
        </span>
        <span>
          <i className="fa-solid fa-location-dot" />
          <p>{imageInfo.location}</p>
        </span>
        <span>
          <i className={categoryIcon} />
        </span>
      </span>
    </a>
  )
}


export const ImagePage = () => {
  const { imageID } = useParams<'imageID'>()
  const imageInfo : ImageInfo = imageList[imageID || '']

  return (
    <div className='image-page'>
      <div className='page-w-right-sidebar'>
        <div>
          <p className='title'>{imageInfo.title}</p>
          <img src={imageInfo.image}/>
          <span className='image-info'>
            <span>
              <i className="fa-solid fa-location-dot" />
              <p>{imageInfo.location}</p>
            </span>
            <span>
              <i className={getCategoryIcon(imageInfo.category)} />
              <p>{imageInfo.category}</p>
            </span>
            <span>
              <i onClick={e => navigator.clipboard.writeText(window.location.href)} className="fa-solid fa-up-right-from-square" />
            </span>
          </span>
        </div>
        <div>
          <span>
            <p><i className='fa-solid fa-camera'/> Canon 5D Mark IV</p>
            <p><i className='fa-regular fa-circle-dot'/> Big and Expensive One</p>
            <p><i className='fa-regular fa-calendar'/> {new Date().toDateString()}</p>
          </span>
        </div>
      </div>
    </div>
  )
}

const getCategoryIcon = ( category : string ) : string => {
  var categoryIcon = 'fa-regular fa-file-lines'
  if (category === 'Birds') categoryIcon = 'fa-solid fa-crow'
  if (category === 'Landscapes') categoryIcon = 'fa-solid fa-mountain-sun'
  if (category === 'Insects') categoryIcon = 'fa-solid fa-bug'
  if (category === 'Animals') categoryIcon = 'fa-solid fa-hippo'
  return categoryIcon
}