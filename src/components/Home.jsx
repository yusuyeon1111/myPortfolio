import React, { useState } from 'react'
import '../css/Home.css'

import folderBack from '../static/img/MainImg/folderBack.png'
import AnimateComponent from './AnimateComponent'
function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
        <div className='home-container'>
            <div className='info-container'>
              <p id='firstP'>Welcome to my</p>
              <img src={folderBack} id='folderBack'/>
              <p id='portfolio'>Portfolio</p>
              <div className='spacer' />
              <AnimateComponent/>
            </div>
        </div>

  )
}

export default Home