
import React, { useState } from 'react'
import flow from '../static/img/letmein/flowchart.jpg'
import ER from '../static/img/letmein/erDiagram.png'
import sys from '../static/img/letmein/system.jpg'
import github from '../static/img/logo/github.png'
import { useNavigate } from 'react-router-dom'
function Letmein() {
  const navigate = useNavigate()
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
      <button className="close-button" onClick={() => navigate(-1)}>✕</button>
      <div className='project-inner'>
      <a href='https://github.com/2023-SMHRD-IS-CLOUD-1/1stProject?tab=readme-ov-file' target='_blank'><img src={github} /></a><br/>
      <span className="project-label">Project</span>
      <h3>HEF - 사용자 기반 C2C 무형 서비스 매칭 플랫폼</h3>
      <p className="project-period">2023.11.22 ~ 2025.12.08</p>
      <p className="project-label">💡 1. 프로젝트 개요</p>
      <div className='project-content'>
        주요 목표 : 바쁜 현대인의 편리한 일상과 지역 사회 발전을 목표로, OCR 신분증 인증 기반의 C2C(개인 간 거래) 무형 서비스 매칭 플랫폼 구축
      </div>
      <p className="project-label">TEAM</p>
      <p>FE 1명, BE 및 FE 3명</p>
      <p>담당역할: 주요 시스템(게시판, 매칭, 회원 관리)의 프론트엔드/백엔드 개발 및 팀 협업 관리</p>

      <p className="project-label">🔧 STACK</p>
      <p>Spring, JavaScript, HTML/CSS, Oracle</p>

      <p className="project-label">🌟 2. 담당 구현 내용</p>
      <div>
        <p><strong>2-1. 심부름 게시판</strong></p>
        <ul>
          <li><strong>비밀번호 암호화: </strong>Spring Security와 BCryptPasswordEncoder를 적용하여 사용자의 비밀번호를 안전하게 암호화 처리했습니다.</li>
          <li><strong>인증 절차 강화: </strong>이메일 인증 API를 구현하여 사용자 본인 확인 절차를 강화하였습니다.</li>
          <li><strong>데이터 관리: </strong>Spring Boot와 JPA 기반으로 사용자 정보 및 활동 내역(좋아요 목록, 작성 글 목록 등)을 포함하는 마이페이지를 구현하여 사용자가 자신의 데이터를 전반적으로 관리할 수 있도록 지원했습니다.</li>
        </ul>
      </div>
      <div>
        <p><strong>2-2. 안정적인 C2C 매칭 시스템 및 고객 지원 기능 개발</strong></p>
        <ul>
          <li>서비스의 핵심인 C2C 매칭 기능을 구현하고, 사용자 문의에 신속하게 대응할 수 있는 고객 지원 시스템을 구축하여 서비스의 신뢰성을 확보했습니다.</li>
          <li><strong>매칭 로직 구현: </strong>작성자를 제외한 다른 사용자가 심부름을 신청할 수 있는 매칭 기능을 구현하여 C2C 서비스의 핵심 가치를 실현했습니다.</li>
          <li><strong>고객센터 기능:  </strong>고객센터 게시판, 문의 등록 페이지, 그리고 관리자 응답 기능을 설계 및 개발하여 사용자 불편 사항을 신속하게 접수하고 해결하는 체계를 마련했습니다.</li>
        </ul>
      </div>
      <div>
        <p><strong>2-3. 회원 관리 기능 개발</strong></p>
        <ul>
          <li><strong>기본 회원 기능: </strong>계정 등록, 로그인, 로그아웃, 회원 탈퇴 기능을 구현하여 사용자가 자신의 계정을 직접 관리할 수 있도록 했습니다.</li>
          <li><strong>세션 기반 보안 강화: </strong>세션 기반의 로그인 유지 기능을 통해 사용 편의성을 확보함과 동시에 접근 권한 제어 로직을 적용하여 비인가 접근을 차단하고 보안성을 강화했습니다.</li>
        </ul>
      </div>
      <p className="project-label">📈 3. 부팀장 역할 수행 및 체계적인 프로젝트 관리</p>
      <div className='project-content'>
        <span>
          부팀장으로서 프로젝트의 성공적인 완료를 위해 개발 일정 전반을 관리하고, 팀원 간의 유기적인 협업을 이끌었습니다.
        </span>
      </div>
      <ul>
        <li><strong>일정 계획 및 관리: </strong>WBS(Work Breakdown Structure)를 작성하고 일정을 세분화하여 각 단계별 목표와 진행 상황을 명확히 했습니다.</li>
        <li>주간/일일 팀 미팅을 통해 진척 상황과 발생 이슈를 공유하고, 회의록을 작성하여 논의 내용과 결정 사항을 명확히 기록함으로써 일정 지연을 선제적으로 방지했습니다.</li>
      </ul>
      <p className="project-label">🏆 4. 배운점 및 성과</p>
      <ul>
        <li>배운 점: 풀스택 개발 역량을 바탕으로 C2C 서비스의 기획부터 구현, 배포까지 전 과정에 참여하며 실질적인 웹 개발 경험을 쌓았습니다. 특히 부팀장 역할을 통해 기술적 역량 외에 프로젝트 관리, 팀 커뮤니케이션, 리더십 등 소프트 스킬의 중요성을 체감하고 이를 향상시키는 계기가 되었습니다.</li>
        <li>성과: 제한된 기간 내에 C2C 서비스의 핵심 기능을 성공적으로 구현하고, 안정적인 고객 지원 및 보안 시스템을 구축하여 서비스의 완성도를 높였습니다. 또한 체계적인 프로젝트 관리를 통해 성공적인 팀 프로젝트 완수를 이끌어냈습니다.</li>
      </ul>
      <p className="project-label">📹 5. 시연 영상</p>
        <div className="video-container">
        <iframe
            src="https://www.youtube.com/embed/nVgaqRdlJCw?si=UO__cg3KLzWkUF3H"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
        </div>
    </div>
    </div>
  )
}

export default Letmein;
