import React, { useState } from 'react'
import flow from '../static/img/letmein/flowchart.jpg'
import ER from '../static/img/letmein/erDiagram.png'
import sys from '../static/img/letmein/system.jpg'

function Letmein() {
  const [isOpen, setIsOpen] = useState({
    flow: false,
    sys: false,
    er: false
  });

  const toggleImage = (key) => {
    setIsOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="project-container">
      <span className="project-label">Project</span>
      <h3>letmetin - yolo 기반 체형확인 및 패션 스타일러 플랫폼</h3>
      <p className="project-period">2025.06.13 ~ 2025.07.07</p>

      <p className="project-label">TEAM</p>
      <p>백엔드 개발 1명 (본인), 퍼블리셔 1명</p>
      <p>업무 기여도 : 백엔드 개발 단독 개발 (80%)</p>

      <p className="project-label">🔧 STACK</p>
      <p>Spring Boot, JavaScript, Oracle, Tomcat, SSH, Linux</p>

      <p className="project-label">💡 1. 시스템 흐름도</p><br/>
      <button onClick={() => toggleImage('flow')}>
        {isOpen.flow ? '이미지 접기' : '이미지 펼치기'}
      </button><br/>
      {isOpen.flow && <img src={flow} className='project-image' alt="시스템 흐름도" />}<br/>
      <p className="project-label">💡 2. 시스템 아키텍처</p><br/>
      <button onClick={() => toggleImage('sys')}>
        {isOpen.sys ? '이미지 접기' : '이미지 펼치기'}
      </button><br/>
      {isOpen.sys && <img src={sys} className='project-image' alt="시스템 아키텍처" />}<br/>
      <p className="project-label">💡 3. E-R 다이어그램</p><br/>
      <button onClick={() => toggleImage('er')}>
        {isOpen.er ? '이미지 접기' : '이미지 펼치기'}
      </button><br/>
      {isOpen.er && <img src={ER} className='project-image' alt="ER 다이어그램" />}<br/>
      <p className="project-label">🌟 2. 주요 업무</p>
      <ul>
        <li>
          <strong>보안 안정성 강화:</strong> 웹 취약점 점검 도구(Sparrow)를 활용하여 시스템 보안 취약점을 진단하고 소스코드를 직접 수정함으로써 시스템의 보안 안정성을 대폭 강화했습니다.
        </li>
        <li>
          <strong>관리자 전용 댓글 관리 시스템 구축:</strong> 관리자가 댓글을 효율적으로 관리할 수 있도록 비공개, 삭제 등 기능을 포함한 전용 페이지를 신규 개발했습니다.
          또한 개인정보 보호를 위한 댓글 작성자 마스킹 기능을 추가하여 보안성을 높였습니다.
        </li>
        <li>
          <strong>댓글 조회 성능 최적화:</strong> 기존 댓글 쿼리의 계층 구조 처리 오류 및 최신순 정렬 오류를 분석하고,
          트리 구조 쿼리 및 LEVEL 값 적용, 불필요한 서브쿼리 제거 등의 SQL 재설계를 통해 댓글 조회 성능을 개선했습니다.
        </li>
        <li>
          <strong>댓글 비동기 처리 및 실시간 갱신 구현:</strong> JSP와 Ajax를 이용하여 댓글 등록, 수정, 삭제 시 비동기 처리 및 실시간 갱신 기능을 구현하여 사용자 경험을 향상시켰습니다.
        </li>
      </ul>

      <p className="project-label">📈 3. 업무 성과 및 프로젝트 운영 능력</p>
      <div className='project-content'>
        <span>
          단독 파견 근무를 통해 담당 주무관과 직접 소통하며 요구사항을 관리하고, 개발 일정 조율 및 진행 상황을 보고하였습니다.
          이를 통해 불확실성을 최소화하고 신속한 의사결정을 유도하여 프로젝트를 안정적으로 완료할 수 있었습니다.
        </span>
      </div>
    </div>
  )
}

export default Letmein;
