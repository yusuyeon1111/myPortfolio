import React, { useState } from 'react'
import '../css/Home.css'
import folder from '../static/img/MainImg/folder.png'
import click from '../static/img/MainImg/click.png'
import AnimateComponent from './AnimateComponent'
function Home() {
  const [isClicked, setIsClicked] = useState(false);
  return (
        <div className='home-container'>
            <div className='info-container'>
              <p id='firstP'>Welcome to my</p>
              <div className="image-wrapper">
                <img src={folder} id="folderImg" />
                <p id="portfolio">portfolio</p>
                <div class="click-container" onClick={() => setIsClicked(true)}>
                  <img id="click" src={click}/>
                </div>
              </div>
              <div className='spacer'/>
              {isClicked && (
                <div id='infoBottom'>
                  <p>웹 서비스의 안정성과 효율을 중요하게 생각합니다.</p>
                  <p>사용자 중심의 기능 구현과 유지보수를 고려한 구조 설계를 지향합니다.</p>
                  <p>팀과의 소통을 통해 더 나은 서비스를 만드는 데에 보람을 느낍니다.</p>
                </div>
              )}
              {isClicked && (
                <div class="scroll-indicator">
                  <span>Scroll</span>
                  <div class="arrow"></div>
                </div>
              )}
            </div>
        </div>

  )
}

export default Home