import React from 'react'
import '../css/About.css'
import logo1 from '../static/img/logo1.png'
import logo2 from '../static/img/logo2.jpg'
import proof1 from '../static/img/hakgyo.png'
import proof2 from '../static/img/tnfy.jpg'
function About() {
  return (
    <div className='about-container'>
        <div className='education'>
            <p>EDUCATION 🏫</p>
            <div className='card'>
                <div>
                    <img src={logo1} id='logo1' />
                    <p>한국방송통신대학교</p>
                    <p>컴퓨터과학과</p>
                    <p>25.03 ~ 28.02 [재학중]</p>
                </div>
                <div className="proof-card">
                    <img src={proof1} alt="재학증명서" />
                </div>
                <div>
                    <img src={logo2} id='logo2' />
                    <p>스마트인재개발원</p>
                    <p>클라우드 기반 인공지능서비스 엔지니어과정</p>
                    <p>23.08.17 ~ 2024.02.29 [1040h]</p>
                </div>
                <div className="proof-card">
                    <img src={proof2} alt="수료증" />
                </div>
            </div>
        </div>
            <div className='work'>
                <h2>WORK 💼</h2>
                <div className='top-work'>
                    <div>
                        <p>(주) 쿠로엔시스</p>
                        <p>개발사업부 / 사원</p>
                        <p>24.04 ~ [재직중] (약 1년 5개월)</p>
                        <p>SI 프로젝트 4개, SM 프로젝트 1개를 수행했습니다.</p>
                    </div>
                   <div className="skills-container">
                    <h2>실무 경험 기술</h2>
                        
                    </div>

                </div>
            </div>
            <div className='skils'>
                <p>SKILS 🔧</p>
            </div>
            <div className='skils'>
                <p>SKILS 🔧</p>
            </div>
            <div className='skils'>
                <p>SKILS 🔧</p>
            </div>
            <div className='skils'>
                <p>SKILS 🔧</p>
            </div>
            <div className='skils'>
                <p>SKILS 🔧</p>
            </div>
            <div className='skils'>
                <p>SKILS 🔧</p>
            </div>
            <div className='skils'>
                <p>SKILS 🔧</p>
            </div>
            <div className='skils'>
                <p>SKILS 🔧</p>
            </div>
            <div className='skils'>
                <p>SKILS 🔧</p>
            </div>
            <div className='skils'>
                <p>SKILS 🔧</p>
            </div>
            <div className='skils'>
                <p>SKILS 🔧</p>
            </div>
            <div className='skils'>
                <p>SKILS 🔧</p>
            </div>
            <div className='skils'>
                <p>SKILS 🔧</p>
            </div>
            <div className='skils'>
                <p>SKILS 🔧</p>
            </div>
            <div className='skils'>
                <p>SKILS 🔧</p>
            </div>
            
        </div>

  )
}

export default About