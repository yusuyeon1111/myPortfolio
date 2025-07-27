import React, { useState } from 'react'
import Modal from './Modal'
import Kamis from './Kamis'
import River from './River'
import Gurye from './Gurye'
import Iot from './IoT'
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
function Work() {
 const [modalComponent, setModalComponent] = useState(null)

  const openModal = (Component) => setModalComponent(<Component />)
  const closeModal = () => setModalComponent(null)

  return (
    <div className='work-container'> 
      <h1>경력사항</h1>

      <div onClick={() => openModal(Kamis)} className='work-content'>
        <h3>KAMIS 식재료백과 유지보수</h3>
        <p>25.06.13 ~ 25.07.07</p>
        <img src={boot}/><img src={javascript}/><img src={oracle}/><img src={linux}/>
        <p>단독 백엔드 개발자로 참여해 보안 강화, 성능 개선, 사용자 편의 기능을 구현하며 안정적인 시스템 운영을 이끌었습니다.</p>
      </div>

      <div onClick={() => openModal(River)} className='work-content'>
        <h3>4대강 수계기금 시스템 개편용역</h3>
        <p>25.02.26 ~ 25.06.13</p>
        <img src={spring}/><img src={javascript}/><img src={oracle}/><img src={mssql}/><img src={gitlab}/>
        <p>백엔드 개발자로 참여해 결산 로직 개선과 보고서 자동화 기능을 구현하며 재무 데이터의 신뢰성과 업무 효율성을 높였습니다.</p>
      </div>

      <div onClick={() => openModal(Gurye)} className='work-content'>
        <h3>구례군청 홈페이지 시스템 통합 유지보수</h3>
        <p>25.12.20 ~ 25.02.06</p>
        <img src={spring}/><img src={javascript}/><img src={maria}/><img src={linux}/><img src={tomcat}/><img src={svn}/>
        <p>CMS와 FullCalendar API 기반 시각화 기능, 전남 일자리정보망 연계 기능을 개발하고 홈페이지 유지보수를 담당했습니다.</p>
      </div>

      <div onClick={() => openModal(Iot)} className='work-content'>
        <h3>IoT 보안인증 운영관리시스템 고도화</h3>
        <p>25.11.14 ~ 25.01.06</p>
        <img src={spring}/><img src={javascript}/><img src={maria}/><img src={linux}/><img src={tomcat}/><img src={svn}/>
        <p>보안 강화, 사용자 편의 기능 개선, 데이터 시각화 대시보드 구현을 통해 시스템 안정성과 효율성을 높였습니다.</p>
      </div>

      <div onClick={() => openModal(Kamis2)} className='work-content'>
        <h3>KAMIS 식재료 백과 개편 용역</h3>
        <p>25.09.02 ~ 25.11.12</p>
        <img src={boot}/><img src={javascript}/><img src={oracle}/><img src={linux}/>
        <p>기획 및 백엔드 개발자로 참여해 콘텐츠 편집 기능과 UI 중심의 관리자 페이지를 구현했습니다.</p>
      </div>

      <Modal isOpen={!!modalComponent} onClose={closeModal}>
        {modalComponent}
      </Modal>
    </div>
  )
}

export default Work
