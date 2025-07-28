import React, { useState } from 'react'
import '../css/Home.css'
import folder from '../static/img/MainImg/folder.png'
import { IoMdDownload } from "react-icons/io";
function Home() {
  return (
        <div className='home-container'>
            <div className='info-container'>
              <p id='firstP'>Welcome to my</p>
              <div className="image-wrapper">
                <img src={folder} id="folderImg" />
                <p id="portfolio">portfolio</p>
              </div>
              <div className="resume-download-container">
                <p className="resume-download-title">이력서 다운로드</p>
                <a href="/유수연_이력서.pdf" download>
                  <button className="resume-download-button">다운로드 <IoMdDownload /></button>
                </a>
              </div>

            </div>
        </div>

  )
}

export default Home