import React, { useState } from 'react'

export const Upload = () => {
  const [ images, setImages ] = useState([])

  const handleUpload = () => {

  }

  return (
    <div>
      <form>
        <input type='file' multiple />
        <button type='submit' onClick={handleUpload}>Upload {images.length} Images</button>
      </form>
    </div>
  )
}