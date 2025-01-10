import React from 'react'
import './skillscard.css'
const Skillscard = ({ title,iconUrl,isActive,onClick }) => {
  return (
    <div className={`skills-card ${isActive ? 'active' : ''}`}
         onClick={()=>onClick()}>

         <div className='skill-icon'>
          {iconUrl} 
         </div>
         <span>{title}</span>
    </div>
  )
}

export default Skillscard