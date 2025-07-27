import React, { useState } from 'react'
import Modal from './Modal'
import Kamis from './Kamis'
import River from './River'
import Gurye from './Gurye'
import Iot from './IoT'
import Free from './Free'
import Kamis2 from './Kamis2'
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
import '../css/Work.css'

function MyProject() {
  const [modalComponent, setModalComponent] = useState(null)

  const openModal = (Component) => setModalComponent(<Component />)
  const closeModal = () => setModalComponent(null)

  const projectList = [
    {
      title: '',
      period: '25.06.13 ~ 25.07.07',
      icons: [boot, javascript, oracle, linux],
      description: '단독 백엔드 개발자로 참여해 보안 강화, 성능 개선, 사용자 편의 기능을 구현하며 안정적인 시스템 운영을 이끌었습니다.',
      component: Kamis
    },
    {
      title: '4대강 수계기금 시스템 개편용역',
      period: '25.02.26 ~ 25.06.13',
      icons: [spring, javascript, oracle, mssql, gitlab],
      description: '백엔드 개발자로 참여해 결산 로직 개선과 보고서 자동화 기능을 구현하며 재무 데이터의 신뢰성과 업무 효율성을 높였습니다.',
      component: River
    },
    {
      title: '구례군청 홈페이지 시스템 통합 유지보수',
      period: '25.12.20 ~ 25.02.06',
      icons: [spring, javascript, maria, linux, tomcat, svn],
      description: 'CMS와 FullCalendar API 기반 시각화 기능, 전남 일자리정보망 연계 기능을 개발하고 홈페이지 유지보수를 담당했습니다.',
      component: Gurye
    },
    {
      title: 'IoT 보안인증 운영관리시스템 고도화',
      period: '25.11.14 ~ 25.01.06',
      icons: [spring, javascript, maria, linux, tomcat, svn],
      description: '보안 강화, 사용자 편의 기능 개선, 데이터 시각화 대시보드 구현을 통해 시스템 안정성과 효율성을 높였습니다.',
      component: Iot
    },
    {
      title: 'KAMIS 식재료 백과 개편 용역',
      period: '25.09.02 ~ 25.11.12',
      icons: [boot, javascript, oracle, linux],
      description: '기획 및 백엔드 개발자로 참여해 콘텐츠 편집 기능과 UI 중심의 관리자 페이지를 구현했습니다.',
      component: Kamis2
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
            onClick={() => openModal(project.component)}
          >
            <div className='card-header'>
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

      <Modal isOpen={!!modalComponent} onClose={closeModal}>
        {modalComponent}
      </Modal>
    </section>
  )
}

export default MyProject
