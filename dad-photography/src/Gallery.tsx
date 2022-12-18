import React from 'react'
import { useParams } from 'react-router-dom'

export const Gallery = () => {
  
  return (
    <div>
      <a data-flickr-embed="true" data-footer="true" href="https://www.flickr.com/photos/197166779@N03/52570212416/in/dateposted-public/" title="Yellow Badge"><img src="https://live.staticflickr.com/65535/52570212416_4981a2387a_o.png" width="660" height="764" alt="Yellow Badge"/></a><script async src="//embedr.flickr.com/assets/client-code.js" charSet="utf-8"></script>
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