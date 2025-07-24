import React, { useState } from 'react'
import '../css/Home.css'

import folderBack from '../static/img/MainImg/folderBack.png'
import AnimateComponent from './AnimateComponent'
function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
        <div className='home-container'>
          <div className={`hambuger ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className='item-container'>
            {isOpen && (
              <div className='menuOpen'>
                <p>About Me</p>
                <p>Stack</p>
                <p>Project</p>
                <p>Contact</p>
              </div>
            )}

            <div className='info-container'>
              <p id='firstP'>Welcome to my</p>
              <img src={folderBack} id='folderBack'/>
              <p id='portfolio'>Portfolio</p>
              <AnimateComponent/>
            </div>
          </div>
        </div>

  )
}

export default Home