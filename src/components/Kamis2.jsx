import React from 'react'
import '../css/Project.css'
function Kamis2() {
  return (
      <div className="project-container">
      <span className="project-label">WORK</span>
      <h3>KAMIS 식재료 백과 개편 용역</h3>
      <p className="project-period">2024.09.02 ~ 2024.11.12</p>

      <p className="project-label">TEAM</p>
      <p>기획자 및 개발자 협업, 백엔드 개발 및 기획 참여 (기여도 40%)</p>

      <p className="project-label">STACK</p>
      <p>Spring Boot, JavaScript, Oracle, Tomcat, SSH, Linux</p>

      <p className="project-label">프로젝트 개요 및 역할</p>
      <ul>
        <li>
          농식품유통정보 서비스 ‘KAMIS 식재료 백과’의 사용자 편의성과 콘텐츠 관리 효율성 향상을 위한 전면 개편 프로젝트에 참여
        </li>
        <li>
          백엔드 개발과 서비스 기획을 동시에 수행하며 시스템 기능 설계 및 사용자 경험(UX) 향상에 기여
        </li>
      </ul>

      <p className="project-label">주요 업무 및 성과</p>
      <ul>
        <li>
          서비스 흐름 및 핵심 기능을 직접 기획하고, 사용자 중심의 UI/UX 설계 참여
        </li>
        <li>
          식재료 정보를 효율적으로 관리할 수 있는 관리자 페이지 개발 (게시글 등록, 수정, 삭제, 미리보기 등 CRUD 기능 포함)
        </li>
        <li>
          TOAST UI Editor를 도입하여 본문 편집 기능 구현 → 이미지 및 영상 첨부 기능 지원으로 콘텐츠 표현력 강화
        </li>
        <li>
          식재료 상세 페이지에서 설명, 주요 효능, 레시피, 참고 영상 등을 비동기 방식으로 유연하게 추가/삭제할 수 있는 UI 설계 및 개발
        </li>
        <li>
          콘텐츠 입력 및 운영 편의성 향상을 통해 사용자 경험과 관리자 업무 효율성 모두 강화
        </li>
      </ul>
    </div>
  )
}

export default Kamis2
