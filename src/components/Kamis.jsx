import React from 'react'
import '../css/Project.css'
function Kamis() {
  return (
  <div className="project-container">
  <span className="project-label">WORK</span>
  <h3>KAMIS 식재료백과 유지보수</h3>
  <p className="project-period">2025.06.13 ~ 2025.07.07</p>

  <p className="project-label">TEAM</p>
  <p>퍼블리셔 1명, 백엔드 1명</p>
  <p>업무 기여도 : 백엔드 개발 단독 개발 (80%)</p>

  <p className="project-label">STACK</p>
  <p>Spring Boot, JavaScript, Oracle, Tomcat, SSH, Linux</p>

  <p className="project-label">프로젝트 개요 및 역할</p>
  <ul>
    <li>
      KAMIS 식재료 백과의 안정적인 운영과 사용자 편의성 향상을 위한 유지보수 및 기능 개선 프로젝트 수행
    </li>
    <li>
      단독 백엔드 개발자로서 전반적인 개발과 프로젝트 관리 수행
    </li>
  </ul>
  <p className="project-label">주요 업무 및 성과</p>
  <ul>
    <li>
      웹 취약점 진단 도구(Sparrow)로 보안 취약점 점검 후 직접 소스코드 수정하여 보안 강화
    </li>
    <li>
      관리자 전용 댓글 관리 페이지 신규 개발 (비공개/삭제 기능 포함), 작성자 마스킹 기능 추가로 개인정보 보호
    </li>
    <li>
      트리 구조 쿼리 재설계 및 불필요한 서브쿼리 제거로 댓글 조회 성능 향상
    </li>
    <li>
        사용자 페이지에 노하우 공유(댓글) 기능 추가 개발
    </li>
    <li>
      JSP + Ajax 기반으로 댓글 등록/수정/삭제 비동기 처리 및 실시간 갱신 구현
    </li>
    <li>
      단독 파견 근무 중 주무관과 직접 커뮤니케이션하며 일정 및 요구사항 관리 → 프로젝트 안정적 완료
    </li>
  </ul>
</div>
  )
}

export default Kamis
