import { Link } from 'react-router-dom'
import { pageTransitionWrapper } from './Animations'

export const About = () => {
  return pageTransitionWrapper(
    <div className='about-page'>
      <p className='title'>About Mark</p>
      <p>Mark has been pursuing photography as a hobby for the past few years. He enjoys many different types of photography, including up close with creepy crawlies and gorgeous landscapes. </p>
      <p>Check out the <Link to='gallery'><b>gallery</b></Link> to see his latest work!</p>
    </div>
  )
}