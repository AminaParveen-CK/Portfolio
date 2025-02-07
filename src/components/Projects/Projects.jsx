import React from 'react'
import theme_pattern from '../../images/theme_pattern.svg'
import './projects.css'
import Card from 'react-bootstrap/Card';
import portfolioimg from '../../images/portfolio.png' 
import moviesimg from '../../images/movies.png'
import PMSimg from '../../images/pmsimage.png'
import ecommerceimg from "../../images/ecommerce.png"
import cateringimg from "../../images/catering.webp"

const Projects = () => {
  return (
    <div className='whole-projects-page'>
       <div className='projects-title'>
        <h1>My Recent Works</h1>
        <img src={theme_pattern} alt="" />
       </div>
       <div className="projects row">
       
       <Card className='projects-card' style={{ width: '25rem' }}>
        <div className="card-img">
          <p>Portfolio</p>
        <img src={portfolioimg} alt="" />
        </div>
      <Card.Body>
        <div className='project-card-btns '>
        <a href='https://github.com/AminaParveen-CK/Portfolio' className='btn btn-git' >GitHub</a>
         <a href=' https://aminaparveen.netlify.app/' className='btn btn-demo' >Live Demo</a>
        </div>
      </Card.Body>
    </Card>
    <Card className='projects-card' style={{ width: '25rem' }}>
        <div className="card-img">
          <p>Movies</p>
        <img src={moviesimg} alt="" />
        </div>
      <Card.Body>
        <div className='project-card-btns '>
        <a href='https://github.com/AminaParveen-CK/Movies-App' className='btn btn-git' >GitHub</a>
         <a href='https://samplemovie.netlify.app/' className='btn btn-demo' >Live Demo</a>
        </div>
      </Card.Body>
    </Card>

    <Card className='projects-card' style={{ width: '25rem' }}>
        <div className="card-img">
          <p>Product Management System</p>
        <img src={PMSimg} alt="" />
        </div>
      <Card.Body>
        <div className='project-card-btns '>
        <a href='https://github.com/AminaParveen-CK/Product-Management-System' className='btn btn-git' >GitHub</a>
         <a href='https://productmanagementsys.netlify.app/' className='btn btn-demo' >Live Demo</a>
        </div>
      </Card.Body>
    </Card>
     
    <Card className='projects-card' style={{ width: '25rem' }}>
        <div className="card-img">
          <p>Ecommerce</p>
        <img src={ecommerceimg} alt="" />
        </div>
      <Card.Body>
        <div className='project-card-btns '>
        <a href='https://github.com/AminaParveen-CK/E-commerce' className='btn btn-git' >GitHub</a>
         <a href='https://ecommercemain.netlify.app/' className='btn btn-demo' >Live Demo</a>
        </div>
      </Card.Body>
    </Card>

    <Card className='projects-card' style={{ width: '25rem' }}>
        <div className="card-img">
          <p>Catering Website</p>
        <img src={cateringimg} alt="" />
        </div>
      <Card.Body>
        <div className='project-card-btns '>
        <button className='btn btn-git' >GitHub</button>
         <button className='btn btn-demo' >Live Demo</button>
        </div>
      </Card.Body>
    </Card>
       </div>
    </div>
  )
}

export default Projects