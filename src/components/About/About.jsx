import React, { useState } from 'react'
import './about.css'
import theme_pattern from '../../images/theme_pattern.svg'
import Card from 'react-bootstrap/Card';
import { FaUserGraduate,FaLanguage } from "react-icons/fa6";
import { FaAward } from "react-icons/fa";
const About = () => {
  const [aboutCard, setaboutCard] = useState(
    [
      {icon:<FaUserGraduate color='rgb(255, 104, 250)'/>,title:'Qualification',content1:'MCA',content2:'University of Calicut',content3:'cgpa : 70'},
      {icon:<FaAward color='rgb(255, 104, 250)'/>,title:'Experience',content1:'Internship in Reactjs',content2:'Direct axis Technologies',content3:'Duration : 6 months'},
      {icon:<FaLanguage color='rgb(255, 104, 250)'/>,title:'Languages known',content1:'English',content2:'Malayalam',content3:'hindi'}
    ])
   
  return (
 <div className="about">
    <div className='the-title'>
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
    </div>

  <div className='about-content row'>
   
    <div className='all-about-profile col-lg-6 col-md-6 col-sm-12  col-12'>
    <div className='about-profile '>
      <div className='about-profile-img'>
      <img src='https://img.freepik.com/premium-photo/female-developer-background_665280-9652.jpg' alt="" />
      </div>
    </div>
    </div>
  
    <div className='about-data col-lg-6 col-md-6 col-sm-12  col-12'>

      <div className='caption'>
        <p> Iam a React.js developer with a strong foundation in front-end technologies and a passion for learning modern frameworks and tools.Dedicated to building responsive, user-friendly web applications and continuously learning to enhance my skills in modern web development.</p>
      </div>

      <div className="about-cards row">
      {aboutCard.map((item)=>{
          return(
      <Card style={{ width: '12rem' }} className='cards'>
        <Card.Body>
          <Card.Title >{item.icon}</Card.Title>
        <Card.Title className='card-title'><strong>{item.title}</strong></Card.Title>
       <br />
        <Card.Text className='card-data'>
          <p>{item.content1}</p>
          <p>{item.content2}</p>
          <p>{item.content3}</p>
        </Card.Text>
      </Card.Body>   
    </Card>)
      })}
    </div>

    </div>
  </div>
 </div>
  )
}

export default About