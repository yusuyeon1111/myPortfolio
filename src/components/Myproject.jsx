import React, { useState } from 'react'
import Modal from './Modal'
import Kamis from './Kamis'
import River from './River'
import Gurye from './Gurye'
import Iot from './IoT'
import Letmein from './Letmein'
import Kamis2 from './Kamis2'
import boot from '../static/img/logo/boot.png'
import spring from '../static/img/logo/spring.png'
import javascript from '../static/img/logo/javascript.png'
import oracle from '../static/img/logo/oracle.png'
import html5 from '../static/img/logo/html5.png'
import css3 from '../static/img/logo/css3.png'
import linux from '../static/img/logo/linux.png'
import tomcat from '../static/img/logo/tomcat.png'
import mssql from '../static/img/logo/mssql.png'
import github from '../static/img/logo/github.png'
import react from '../static/img/logo/react.png'
import s3 from '../static/img/logo/s3.png'
import '../css/Work.css'
import { useNavigate } from 'react-router-dom'
function MyProject() {
  const navigate = useNavigate()

  const projectList = [
    {
      title: 'yolo 기반 체형확인 및 패션 스타일러 플랫폼',
      period: '24.02.01 ~ 24.02.28',
      icons: [boot, javascript, oracle, react, s3, github],
      description: 'React와 Spring Boot 기반으로 회원 관리, 마이페이지, 관리자 기능, 커뮤니티 게시판, 체형 분석 및 아바타 생성, 메인 UX까지 구현한 풀스택 웹 서비스',
      path: '/letmein',
      oranization : 'team'
    },
    {
      title: 'HEF',
      period: '23.11.22 ~ 23.12.08',
      icons: [spring, javascript, oracle, html5, css3, github],
      description: 'OCR 신분증 인증을 기반으로 개인 간 무형 서비스 매칭을 지원하고, 안정적인 게시판 및 회원 관리 시스템을 제공하는 C2C 플랫폼입니다',
      path: '/hef',
       oranization : 'team'
    }
  ]

  return (
    <section className='work-section2'> 
      <div className='section-header'>
        <h1>Project</h1>
        <p>스마트인재개발원 수료 당시 프로젝트와 개인 프로젝트 입니다.</p>
      </div>

      <div className='project-grid'>
        {projectList.map((project, index) => (
          <div
            key={index}
            className='project-card'
            onClick={() => navigate(project.path)}
          >
            <div className='card-header'>
            <span id='label'>{project.oranization === 'team' ? '팀 프로젝트' :'개인 프로젝트' }</span>
              <h2>{project.title}</h2>
              <span className='card-period'>{project.period}</span>
            </div>
            <div className='card-icons'>
              {project.icons.map((icon, idx) => (
                <img key={idx} src={icon} alt='tech icon' />
              ))}
            </div>
            <p className='card-description'>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default MyProject
