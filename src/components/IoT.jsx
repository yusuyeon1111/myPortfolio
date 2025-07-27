 import React from 'react'
 import '../css/Project.css'
 function IoT() {
   return (
     <div className="project-container">
      <span className="project-label">WORK</span>
      <h3>IoT 운영관리시스템 고도화</h3>
      <p className="project-period">2024.11.14 ~ 2025.03.19</p>

      <p className="project-label">TEAM</p>
      <p>다수 인원 협업, 백엔드 개발 기여도 30%</p>

      <p className="project-label">STACK</p>
      <p>전자정부프레임워크, JavaScript, Spring, MariaDB, SVN</p>

      <p className="project-label">프로젝트 개요 및 역할</p>
      <ul>
        <li>
          보안 인증 기준 변화에 따라 기존 IoT 운영관리시스템을 고도화하는 프로젝트에 참여
        </li>
        <li>
          백엔드 개발자로서 보안 요구사항을 반영하고 사용자 편의성 기능을 구현하여 시스템 안정성과 효율성 강화
        </li>
      </ul>

      <p className="project-label">주요 업무 및 성과</p>
      <ul>
        <li>
          전자정부프레임워크의 시큐리티 기능을 적용하여 사용자 권한별 메뉴 접근 제한 기능 구현 → 시스템 보안 강화
        </li>
        <li>
          게시글 등록/수정/조회/삭제 및 엑셀 다운로드 기능 구현으로 FAQ 운영 효율성 향상
        </li>
        <li>
          시험 대행 기관별 사용자 등록 기능 개발 → 외부 기관과의 협업 및 사용자 관리 용이
        </li>
        <li>
          시험 데이터를 기반으로 통계 쿼리 및 Chart.js를 활용한 시각화 대시보드 제공 → 데이터 분석 지원
        </li>
        <li>
          FullCalendar API를 활용하여 시험 일정 관리 기능 구현 → 일정 관리 편의성 향상
        </li>
        <li>
          웹 소스 보안 취약점 분석 및 대응으로 시스템 보안 안정성 확보
        </li>
        <li>
          프로젝트 마감 직전 고객사 요구사항 변경에 따라 기능 우선순위 재조정 및 일정 재수립 수행
        </li>
        <li>
          팀원과의 긴밀한 소통을 통해 요구사항 불확실성을 최소화하고 프로젝트 안정적으로 완료
        </li>
      </ul>
      <div className='spacer'></div>
    </div>
   )
 }
 
 export default IoT
 