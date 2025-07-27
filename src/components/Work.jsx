import React from 'react'
import { useNavigate } from 'react-router-dom'
import boot from '../static/img/logo/boot.png'
import spring from '../static/img/logo/spring.png'
import javascript from '../static/img/logo/javascript.png'
import oracle from '../static/img/logo/oracle.png'
import maria from '../static/img/logo/mariadb.png'
import svn from '../static/img/logo/svn.png'
import linux from '../static/img/logo/linux.png'
import tomcat from '../static/img/logo/tomcat.png'
import mssql from '../static/img/logo/mssql.png'
import gitlab from '../static/img/logo/gitlab.png'
import python from '../static/img/logo/python.png'
import flask from '../static/img/logo/flask.png'
import html5 from '../static/img/logo/html5.png'
import css3 from '../static/img/logo/css3.png'
import react from '../static/img/logo/react.png'
import '../css/Work.css'

function Work() {
  const navigate = useNavigate()

  const projectList = [
    {
      title: 'KAMIS 식재료백과 유지보수',
      period: '25.06.13 ~ 25.07.07',
      icons: [boot, javascript, oracle, linux],
      description: '단독 백엔드 개발자로 참여해 보안 강화, 성능 개선, 사용자 편의 기능을 구현하며 안정적인 시스템 운영을 이끌었습니다.',
      path: '/kamis',
      oranization: 'team',
    },
    {
      title: '4대강 수계기금 시스템 개편용역',
      period: '25.02.26 ~ 25.06.13',
      icons: [spring, javascript, oracle, mssql, gitlab],
      description: '백엔드 개발자로 참여해 결산 로직 개선과 보고서 자동화 기능을 구현하며 재무 데이터의 신뢰성과 업무 효율성을 높였습니다.',
      path: '/river',
      oranization: 'team',
    },
    {
      title: '구례군청 홈페이지 시스템 통합 유지보수',
      period: '25.12.20 ~ 25.02.06',
      icons: [spring, javascript, maria, linux, tomcat, svn],
      description: 'CMS와 FullCalendar API 기반 시각화 기능, 전남 일자리정보망 연계 기능을 개발하고 홈페이지 유지보수를 담당했습니다.',
      path: '/gurye',
      oranization: 'team',
    },
    {
      title: 'IoT 보안인증 운영관리시스템 고도화',
      period: '25.11.14 ~ 25.01.06',
      icons: [spring, javascript, maria, linux, tomcat, svn],
      description: '보안 강화, 사용자 편의 기능 개선, 데이터 시각화 대시보드 구현을 통해 시스템 안정성과 효율성을 높였습니다.',
      path: '/iot',
      oranization: 'team',
    },
    {
      title: 'KAMIS 식재료 백과 개편 용역',
      period: '25.09.02 ~ 25.11.12',
      icons: [boot, javascript, oracle, linux],
      description: '기획 및 백엔드 개발자로 참여해 콘텐츠 편집 기능과 UI 중심의 관리자 페이지를 구현했습니다.',
      path: '/kamis2',
      oranization: 'team',
    },
    {
      title: '신입사원 역량 강화를 위한 자유 프로젝트',
      period: '24.07.01 ~ 24.08.01',
      icons: [python, flask, javascript, react, html5, css3],
      description: '사내 ERP 데이터를 자동 수집 및 가공하여 팀원들의 연차, 휴가, 주요 프로젝트 일정 등 핵심 정보를 제공하는 정보 공유 시스템입니다.',
      path: '/free',
      oranization: 'personal',
    }
  ]

  return (
    <section className='work-section2'>
      <div className='section-header'>
        <h1>경력사항</h1>
        <p>재직 중 수행한 주요 프로젝트입니다.</p>
      </div>

      <div className='project-grid'>
        {projectList.map((project, index) => (
          <div
            key={index}
            className='project-card'
            onClick={() => navigate(project.path)}
          >
            <div className='card-header'>
              <span id='label'>
                {project.oranization === 'team' ? '팀 프로젝트' : '개인 프로젝트'}
              </span>
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

export default Work
