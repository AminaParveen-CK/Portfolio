import './App.css';
import About from './components/About/About';
import Navbarportfolio from './components/navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Home from './components/Home';
import { useState } from 'react';
import { GoSun } from 'react-icons/go';
import { BsFillMoonStarsFill } from 'react-icons/bs';

function App() {
  const [Daymode, setDaymode] = useState(false);
  const changeMode =(e)=>{
    setDaymode((e)=>!e)
  }
  return (
    <div className={Daymode===true? 'daymode' : 'nightmode'}>
      <div className='App'>
      <BrowserRouter>
      <Navbarportfolio/>
      <div className='mode'>
            {Daymode===false? <GoSun size={30} color='rgb(250, 219, 146)' onClick={changeMode}/> :  <BsFillMoonStarsFill size={30} onClick={changeMode}/>}
      </div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
     
      </div>
     </div>
  );
}

export default App;
