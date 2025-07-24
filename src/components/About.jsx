import React from 'react'
import '../css/About.css'
import {motion} from 'framer-motion'
import logo1 from '../static/img/logo1.png'
import logo2 from '../static/img/logo2.jpg'
import boot from '../static/img/logo/boot.png'
import spring from '../static/img/logo/spring.png'
import java from '../static/img/logo/java.png'
import javascript from '../static/img/logo/javascript.png'
import egov from '../static/img/logo/egov.png'
import react from '../static/img/logo/react.png'
import html5 from '../static/img/logo/html5.png'
import css3 from '../static/img/logo/css3.png'
import oracle from '../static/img/logo/oracle.png'
import maria from '../static/img/logo/mariadb.png'
import git from '../static/img/logo/git.png'
import svn from '../static/img/logo/svn.png'
function About() {
  return (
    <motion.div
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true , amount : 0.1 }}
        className='about-wrapper'
        transition={{
            ease: "easeInOut",
            duration: 2,
            y: { duration: 1 },
        }}
    >
        <div className='about-container'>
        <p id='about-p'>ABOUT ME</p>
        <div>
           
        </div>
        <p id='skils'>SKILS 🔧</p>
        <div className='skil-container'>
            <div className='skil-group'>
                <p>FRONTEND</p>
                <div className='icon-row'>
                <img src={react} />
                <img src={javascript} />
                <img src={html5} />
                <img src={css3} />
                </div>
            </div>
            <div className='skil-group'>
                <p>BACKEND</p>
                <div className='icon-row'>
                <img src={java} />
                <img src={spring} />
                <img src={boot} />
                </div>
            </div>
            <div className='skil-group'>
                <p>DATABASE</p>
                <div className='icon-row'>
                <img src={oracle} />
                <img src={maria} />
                </div>
            </div>
            <div className='skil-group'>
                <p>VERSION CONTROL</p>
                <div className='icon-row'>
                <img src={git} />
                <img src={svn} />
                </div>
            </div>
        </div>

        <div className='education'>
            <p>EDUCATION 🏫</p>
            <div className='card'>
                <div>
                    <img src={logo1} id='logo1' style={{marginBottom:'17px',marginTop:'10px'}}/>
                    <p>한국방송통신대학교</p>
                    <p>컴퓨터과학과</p>
                    <p>25.03 ~ 28.02 [재학중]</p>
                </div>
                <div>
                    <img src={logo2} id='logo2' style={{marginBottom:'17px',marginTop:'10px'}}/>
                    <p>스마트인재개발원</p>
                    <p style={{marginTop:'-4%'}}>클라우드 기반 인공지능</p>
                    <p style={{marginTop:'-10%'}}>서비스 엔지니어과정</p>
                    <p style={{marginTop:'-4%'}}>23.08.17 ~ 2024.02.29 [1040h]</p>
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
                    </div>
    </motion.div>
  )
}

export default About