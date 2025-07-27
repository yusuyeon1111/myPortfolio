import React from 'react'
import '../css/Project.css'
function Kamis() {
  return (
  <div className="project-container">
  <span className="project-label">WORK</span>
  <h3>🍏 KAMIS 식재료백과 유지보수</h3>
  <p className="project-period">2025.06.13 ~ 2025.07.07</p>

  <p className="project-label">TEAM</p>
  <p>백엔드 개발 1명 (본인), 퍼블리셔 1명</p>
  <p>업무 기여도 : 백엔드 개발 단독 개발 (80%)</p>

  <p className="project-label">🔧 STACK</p>
  <p>Spring Boot, JavaScript, Oracle, Tomcat, SSH, Linux</p>

  <p className="project-label">💡 1. 프로젝트 개요 및 역할</p>
  <br/>
  <div className='project-content'>
  <span>KAMIS 식재료 백과 서비스의 안정적인 운영과 사용자 편의성 향상을 위한 유지보수 및 기능 개선 프로젝트를 수행했습니다. 본 프로젝트에서는 보안 강화, 관리 기능 신규 개발 및 기존 시스템 최적화 작업을 중점적으로 진행했으며, 제가 단독 백엔드 개발자로서 전반적인 개발과 프로젝트 관리를 담당했습니다.</span>
  </div>
  <br/>
  <p className="project-label">🌟 2. 주요 업무</p>
  <ul>
    <li>
    <strong>보안 안정성 강화:</strong> 웹 취약점 점검 도구(Sparrow)를 활용하여 시스템 보안 취약점을 진단하고 소스코드를 직접 수정함으로써 시스템의 보안 안정성을 대폭 강화했습니다.
    </li>
    <li>
    <strong>관리자 전용 댓글 관리 시스템 구축:</strong> 관리자가 댓글을 효율적으로 관리할 수 있도록 비공개, 삭제 등 기능을 포함한 전용 페이지를 신규 개발했습니다. 또한 개인정보 보호를 위한 댓글 작성자 마스킹 기능을 추가하여 보안성을 높였습니다.
    </li>
    <li>
      <strong>댓글 조회 성능 최적화:</strong>기존 댓글 쿼리의 계층 구조 처리 오류 및 최신순 정렬 오류를 분석하고, 트리 구조 쿼리 및 LEVEL 값 적용, 불필요한 서브쿼리 제거 등의 SQL 재설계를 통해 댓글 조회 성능을 개선했습니다.
    </li>
    <li>
    <strong>댓글 비동기 처리 및 실시간 갱신 구현:</strong> JSP와 Ajax를 이용하여 댓글 등록, 수정, 삭제 시 비동기 처리 및 실시간 갱신 기능을 구현하여 사용자 경험을 향상시켰습니다
    </li>
    <li><strong></strong></li>
  </ul>
  <p className="project-label">📈 3. 업무 성과 및 프로젝트 운영 능력</p>
  <br/>
   <div className='project-content'>
   <span>단독 파견 근무를 통해 담당 주무관과 직접 소통하며 요구사항을 관리하고, 개발 일정 조율 및 진행 상황을 보고하였습니다. 이를 통해 불확실성을 최소화하고 신속한 의사결정을 유도하여 프로젝트를 안정적으로 완료할 수 있었습니다.</span>
  </div>
</div>
  )
}

export default Kamis
