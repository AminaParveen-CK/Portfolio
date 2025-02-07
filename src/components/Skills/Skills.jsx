import React, { useState } from 'react'
import './skills.css'
import Skillscard from './Skillscard'
import { VscTools } from "react-icons/vsc";
import { FaPersonCircleCheck } from "react-icons/fa6";
import { TfiSettings } from "react-icons/tfi";
import { FaRegAddressCard } from "react-icons/fa";
import Skillsinfo from './Skillsinfo';
import theme_pattern from '../../images/theme_pattern.svg'
const Skills = () => {
  const SKILLS = [
    {
        title:'Frontend',
        icon:<FaRegAddressCard color='rgb(255, 104, 250)' size={'3rem'}/>,
        skills:[
            {skill:'HTML5',percentage:'90%'},
            {skill:'CSS3',percentage:'85%'},
            {skill:'JavaScript',percentage:'75%'},
            {skill:'React.js',percentage:'80%'},
            {skill:'Bootstrap5',percentage:'70%'},
        ],
    },
    {
        title:'Backend',
        icon:<TfiSettings color='rgb(255, 104, 250)'  size={'3rem'}/>,
        skills:[
            {skill:'Python',percentage:'40%'},
            {skill:'Node js',percentage:'30%'},
            {skill:'MySQL',percentage:'60%'},
            {skill:'MongoDB',percentage:'45%'},
        ],
    },
    {
        title:'Tools',
        icon:<VscTools color='rgb(255, 104, 250)'  size={'3rem'}/>,
        skills:[
            {skill:'Git & GitHub',percentage:'85%'},
            {skill:'Visual Studio Code',percentage:'75%'},
            {skill:'Responsive Design',percentage:'90%'},
            {skill:'npm',percentage:'45%'},
        ],
    },
    {
        title:'Soft Skills',
        icon:<FaPersonCircleCheck color='rgb(255, 104, 250)'  size={'3rem'}/>,
        skills:[
            {skill:'Problem-solving',percentage:'90%'},
            {skill:'Collaboration & Teamwork',percentage:'85%'},
            {skill:'Attention to Detail',percentage:'80%'},
            {skill:'Communication Skills',percentage:'90%'},
        ],
    },
];
const [selectedSkill, setselectedSkill] = useState(SKILLS[0]);
const handleSelectSkill = (data)=>{
  setselectedSkill(data);
};
  return (
    <div className="whole-skills-page">
    <div className='whole-page '>
      <div className='skills-title'>
              <h1>Technical Proficiency</h1>
              <img src={theme_pattern} alt="" />
          </div>
      
      <div className="skills-content row">
        <div className="left-part text-light">
          {SKILLS.map((item)=>{
            return(
            <Skillscard 
            key={item.title}
            iconUrl={item.icon}
            title={item.title}
            isActive={selectedSkill.title===item.title}
            onClick={()=>{handleSelectSkill(item); }}
            />
            )
            
          })}
        </div>
        <div className="right-part">
          <Skillsinfo 
          heading={selectedSkill.title}
          skills={selectedSkill.skills}/>
        </div>
      </div>

    </div>
    </div>
  )
}

export default Skills