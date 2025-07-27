import React from 'react'
import '../css/Project.css'
import { useNavigate } from 'react-router-dom'
function Gurye() {
  const navigate = useNavigate()
  return (
    <div className="project-container">
    <button className="close-button" onClick={() => navigate(-1)}>✕</button>
    <div className='project-inner'>
    <span className="project-label">WORK</span>
    <h3>구례군청 홈페이지 시스템 통합 유지보수</h3>
    <p className="project-period">2025.11.14 ~ 2025.02.25</p>
  
    <p className="project-label">TEAM</p>
    <p>백엔드 개발 1명 (본인), 퍼블리셔 1명</p>
    <p>업무 기여도 : 백엔드 개발 단독 개발 (80%)</p>
  
    <p className="project-label">🔧 STACK</p>
    <p>전자정부프레임워크, Spring, JavaScript, Oracle, Tomcat, SSH, Linux</p>
  
    <p className="project-label">💡 1. 프로젝트 개요 및 역할</p>
    <br/>
    <div className='project-content'>
      <span>구례군청 홈페이지의 안정적인 운영과 사용자 편의성 향상을 목표로 한 유지보수 및 기능 개선 프로젝트를 수행했습니다. 본 프로젝트에서는 기존 시스템의 안정화를 도모하고, 사용자 및 외부 연계를 위한 신규 기능을 개발하여 서비스 품질을 높이는 데 기여했습니다.</span>
    </div>
    <p className="project-label">🌟 2. 주요 업무</p>
    <ul>
      <li>
      <strong>행사 일정 관리 시스템 개발:</strong> 구례군청 CMS(콘텐츠 관리 시스템)에서 농업기술센터의 행사일정을 등록할 수 있는 관리 기능을 개발했습니다. 더불어 홈페이지에서는 FullCalendar API를 활용하여 이 일정을 달력 형태로 시각화하여 제공함으로써, 사용자들의 정보 접근성과 관리 효율성을 동시에 향상시켰습니다.
      </li>
      <li>
      <strong>전남일자리정보망 채용공고 연동 기능 개발:</strong> 전라남도 일자리정보망과의 데이터 연계를 위해 구례군청 채용공고 데이터를 자동 수집하고 가공하는 기능을 개발했습니다. 이를 RSS 형태의 데이터 제공 URL로 구현하여 외부 시스템에서도 채용공고를 활용할 수 있도록 지원, 정보 공유의 확장성을 확보했습니다.
      </li>
      <li>
        <strong>홈페이지 유지보수 및 운영 안정화:</strong>구례군청 홈페이지의 전반적인 유지보수 업무를 수행하며 시스템 안정화에 기여했습니다. 정기적인 점검 및 개선 작업을 통해 오류를 최소화하고, 사용자 불편 사항을 해소하여 홈페이지의 지속적인 운영 안정성을 확보했습니다.
      </li>
    </ul>
  </div>
  </div>
  )
}

export default Gurye
