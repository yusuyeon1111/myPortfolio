import React, { useState } from 'react'
import '../css/Home.css'
import folder from '../static/img/MainImg/folder.png'
function Home() {
  return (
        <div className='home-container'>
            <div className='info-container'>
              <p id='firstP'>Welcome to my</p>
              <div className="image-wrapper">
                <img src={folder} id="folderImg" />
                <p id="portfolio">portfolio</p>
              </div>
              <p>이력서 다운로드</p>
              <button>다운로드</button>
                <div className="scroll-indicator">
                  <span>Scroll</span>
                  <div className="arrow"></div>
                </div>
            </div>
        </div>

  )
}

export default Home