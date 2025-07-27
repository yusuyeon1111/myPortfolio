 import React from 'react'
 import '../css/Project.css'
 function IoT() {
   return (
     <div className="project-container">
      <span className="project-label">WORK</span>
      <h3>🖥️ IoT 운영관리시스템 고도화</h3>
      <p className="project-period">2024.11.14 ~ 2025.03.19</p>

      <p className="project-label">TEAM</p>
      <p>백엔드 개발 2명 (본인 포함), 사업관리 및 기획 1명</p>
      <p>업무 기여도 : 백엔드 개발 30%</p>

      <p className="project-label">STACK</p>
      <p>전자정부프레임워크, Spring, Javascript, MariaDB, SVN</p>

      <p className="project-label">💡 1. 프로젝트 개요 및 역할</p>
      <br/>
      <div className='project-content'>
        <span>이 프로젝트는 IoT 보안인증 기준의 변화에 발맞춰 기존의 운영관리시스템을 고도화하는 중요한 과제였습니다. 저는 본 프로젝트에서 백엔드 개발자로 참여하여, 시스템의 핵심 기능 구현과 안정성 확보에 기여했습니다. 특히, 전자정부프레임워크 기반의 보안 강화와 다양한 사용자 관리 및 데이터 시각화 기능 개발을 담당하며 시스템의 효율성과 사용자 편의성을 한층 더 높이는 데 주력했습니다.</span>
      </div>
      <p className="project-label">🌟 2. 주요 업무</p>
      <ul>
        <li>
          <strong>시스템 보안 강화: </strong>
          전자정부프레임워크의 시큐리티 기능을 적용하여, 사용자 권한별로 메뉴 접근을 제한하는 기능을 구현함으로써 시스템의 전반적인 보안 수준을 강화했습니다.
        </li>
        <li>
          <strong>FAQ 관리 시스템 구축: </strong>
        FAQ(자주 묻는 질문) 게시글의 등록, 수정, 조회, 삭제 기능을 개발하고 엑셀 다운로드 기능까지 추가하여 운영진의 정보 관리 효율성을 극대화했습니다.
        </li>
        <li>
        <strong>시험 대행 기관 사용자 관리 시스템 개발: </strong>
         각 시험 대행 기관별로 사용자 등록 기능을 구현하여 외부 기관과의 협업 및 관리를 더욱 용이하게 만들었습니다.
        </li>
        <li>
        <strong>데이터 통계 및 시각화 대시보드 구현: </strong>
        시험 데이터를 기반으로 SQL 쿼리를 이용해 통계 기능을 개발하고, Chart.js 라이브러리를 활용하여 직관적인 시각화 대시보드를 제공했습니다.
        </li>
        <li>
          <strong>시험 일정 관리 캘린더 기능 도입: </strong>
          FullCalendar API를 활용하여 시험 일정 관리 캘린더 기능을 구현하여 일정 관리의 편의성을 향상시켰습니다.
        </li>
        <li>
          웹 소스 보안 취약점 분석 및 대응으로 시스템 보안 안정성 확보
        </li>
      </ul>
  <p className="project-label">📈 3. 업무 성과</p>
      <br/>
      <div className='project-content'>
      프로젝트 마감 직전, 고객사의 핵심 요구사항이 갑작스럽게 변경되면서 개발 일정이 급박해지는 도전적인 상황에 직면했습니다. 저는 당황하지 않고 프로젝트 수행팀과의 소통을 통해 기능 개발의 우선순위를 신속하게 재조정하고, 현실적인 일정 재수립을 통해 상황에 적극적으로 대응했습니다. 또한, 팀원들과의 소통을 통해 변경된 요구사항의 불확실성을 최소화하고, 상호 협력하며 프로젝트를 안정적으로 성공리에 완료할 수 있었습니다. 
      </div>
      <div className='spacer'></div>
    </div>
   )
 }
 
 export default IoT
 