import React from 'react'
import '../css/Project.css'
import { useNavigate } from 'react-router-dom'
function Kamis2() {
  const navigate = useNavigate()
  return (
      <div className="project-container">
        <button className="close-button" onClick={() => navigate(-1)}>✕</button>
    <div className='project-inner'>
      <span className="project-label">WORK</span>
      <h3>🫒 KAMIS 식재료 백과 개편 용역</h3>
      <p className="project-period">2024.09.02 ~ 2024.11.12</p>

      <p className="project-label">TEAM</p>
      <p>백엔드 개발 및 기획 1명 (본인), 백엔드 개발 1명, 디자이너 1명, 퍼블리셔 1명</p>
      <p>업무 기여도 : 백엔드 개발(40%) 및 기획 (100%)</p>

      <p className="project-label">STACK</p>
      <p>Spring Boot, JavaScript, Oracle, Tomcat, SSH, Linux</p>

      <p className="project-label">💡 1. 프로젝트 개요 및 역할</p>
      <br/>
      <div className='project-content'>
      이 프로젝트는 농림축산식품부가 운영하는 농식품유통정보 서비스인 'KAMIS 식재료 백과'를 전면적으로 개편하여, 사용자 편의성을 극대화하고 콘텐츠 관리 효율성을 획기적으로 높이는 것을 목표로 했습니다. 
      <br/>
      저는 본 프로젝트에서 백엔드 개발은 물론, 서비스의 주요 기능 및 사용자 경험(UX)에 대한 기획 역할까지 겸하며 핵심적인 역할을 수행했습니다. 
      <br/>
      특히, 기획 단계부터 참여하여 서비스의 방향성을 제시하고, 이를 실제 기능으로 구현하는 전 과정에 깊이 관여하며 프로젝트의 성공적인 완수에 기여했습니다.
      </div>
      <br/>
      <p className="project-label">🌟 2. 주요 업무</p>
      <ul>
        <li>
          <strong>서비스 핵심 기능 기획 및 UI/UX 설계 참여: </strong>
          서비스의 주요 흐름과 핵심 기능을 직접 기획하고, 사용자 편의성을 최우선으로 고려한 직관적인 UI/UX 중심의 화면 설계에 참여했습니다. 초기 기획 단계부터 개발자의 시각으로 시스템 구조를 미리 고려함으로써, 개발 과정에서의 시행착오를 줄이고 사용자 중심의 서비스 구현을 위한 견고한 토대를 마련했습니다.
        </li>
        <li>
          <strong>효율적인 식재료 콘텐츠 관리자 페이지 개발: </strong>
          식재료 정보 콘텐츠를 효율적으로 등록하고 관리할 수 있는 관리자 페이지를 개발했습니다. 게시글 등록, 수정, 삭제(CRUD) 기능과 더불어 콘텐츠 미리보기 기능까지 구현하여, 운영진의 정보 관리 업무 편의성을 향상시켰습니다.
        </li>
        <li>
          <strong>TOAST UI Editor 도입을 통한 콘텐츠 편집 기능 구현: </strong>
          본문 작성 편의성을 높이기 위해 TOAST UI Editor를 도입하였습니다.  특히, '#' 기호로 제목을, '##' 기호로 소제목을 지정하는 마크다운(Markdown) 문법을 활용할 수 있도록 에디터 기능을 커스터마이징하여, 마치 나무위키처럼 구조화된 콘텐츠를 효율적으로 작성할 수 있도록 지원했습니다. 
        </li>
      </ul>
      <p className="project-label">📈 3. 업무 성과</p>
      <br/>
      <div className='project-content'>
      'KAMIS 식재료 백과 개편 용역' 프로젝트는 저의 기획 및 개발 역량을 동시에 발휘할 수 있었던 소중한 경험이었습니다.<br/>
       사용자 편의성과 운영 효율성이라는 명확한 목표 아래, 시스템의 설계부터 실제 기능 구현까지 전반적인 프로세스를 주도하며 성공적으로 서비스를 개편할 수 있었습니다. <br/>
      </div>
    </div>
    </div>
  )
}

export default Kamis2
