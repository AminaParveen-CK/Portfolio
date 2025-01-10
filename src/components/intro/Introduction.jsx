import React, { useContext } from 'react'
import './introduction.css'
import profilepic from '../../images/ai-generated-8775232_640.webp'
import cv from '../../images/AminaParveen-CV.pdf'
import { Link } from 'react-router-dom';

const Introduction = () => {
  return (
    <div className='intro row'>
      <div className="intro-data col-lg-6 col-md-6 col-sm-12  col-12">
        <p>HI THERE, </p>
      <h1><span>I'm Amina Parveen,</span> Front-end developer specialiced in react.</h1>
      <p>"Passionate React.js Developer, Building Dynamic, Responsive, and User-Friendly Web Applications Eager to Code, Learn, and Grow. Let's Create Together!"</p>
       <Link to={'/contact'} className='connectwm btn text-light'> Connect with Me</Link>
      <a href={cv} className='resume btn' >My Resume</a>
      </div>
      <div className="intro-img col-lg-6 col-md-6 col-sm-12  col-12">
      <img src={profilepic} alt="" />
      </div>
    </div>
  )
}
export default Introduction