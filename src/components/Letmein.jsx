import React, { useState } from 'react'
import flow from '../static/img/letmein/flowchart.jpg'
import ER from '../static/img/letmein/erDiagram.png'
import sys from '../static/img/letmein/system (2).png'
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
      <span className="project-label">Project</span>
      <h3>letmetin - yolo 기반 체형확인 및 패션 스타일러 플랫폼</h3>
      <p className="project-period">2025.06.13 ~ 2025.07.07</p>

      <p className="project-label">TEAM</p>
      <p>담당 비중: 백엔드 70%, 프론트엔드 100%</p>

      <p className="project-label">🔧 STACK</p>
      <p>Spring Boot, React, Oracle, AWS, Python, Flask, roboflow, Tensoflow, pytorch</p>
      <p className="project-label">🌟 1. 프로젝트 개요</p>
      <div className='project-content'>
        사용자의 체형 정보를 분석하여 맞춤형 스타일링 정보를 제공하고, 유저 간 커뮤니케이션이 가능한 커뮤니티 기능과 관리자 기능을 통합한 풀스택 웹 서비스입니다.
      </div>
      <p className="project-label">🌊 2. 시스템 흐름도</p>
      <br/>
      <img src={sys} id='system'/>
        <ul>
          <li>비회원은 커뮤니티 글을 조회할 수 있으며, 로그인한 회원은 게시글 작성 및 좋아요 기능을 사용할 수 있습니다.</li>
          <li>로그인한 회원은 마이페이지에서 문의글을 작성하고, 본인이 작성한 커뮤니티 게시글을 조회할 수 있습니다.</li>
          <li>관리자는 관리자 페이지에서 문의글에 대한 답변을 등록할 수 있습니다.</li>
          <li>사용자는 체형 분석 페이지에서 이미지를 업로드하거나 사이즈를 등록하여 체형 분석을 진행할 수 있습니다.</li>
          <li>분석 결과에 따라 아바타가 생성되며, 사용자는 생성된 아바타에 어울리는 추천 코디를 확인하고, 직접 입혀볼 수 있습니다.</li>
        </ul>
      <div>
        <p className="project-label">🌟 3. 주요 기능</p>
        <p><strong>1️⃣ 회원관리 및 보안 시스템 구축 </strong></p>
        <ul>
          <li>React Router와 Axios를 활용해 회원가입, 로그인, 마이페이지 UI 및 상태 관리 구현</li>
          <li>Spring Security와 BCryptPasswordEncoder를 활용한 안전한 비밀번호 암호화</li>
          <li>이메일 인증 API 구현으로 사용자 계정 보안 강화</li>
        </ul>
      </div>
      <div>
        <p><strong>2️⃣ 마이페이지 기능</strong></p>
        <ul>
          <li>사용자 정보 수정 기능 구현</li>
          <li>내가 작성한 게시글과 좋아요한 글 목록을 조회할 수 있는 기능을 제공</li>
          <li>1:1 문의글 작성 및 답변 조회 기능을 통해 사용자와 관리자 간 소통이 가능</li>
        </ul>
      </div>
      <div>
        <p><strong>3️⃣ 커뮤니티 게시판 기능</strong></p>
        <ul>
          <li>JPA를 활용한 게시글 조회 기능 구현</li>
          <li>페이징 처리 로직 개발로 대용량 데이터 효율적 관리</li>
          <li>인기순, 최신순 정렬 기능 구현으로 사용자 경험 향상</li>
        </ul>
      </div>
      <div>
        <p><strong>4️⃣ 체형분석 기능</strong></p>
        <ul>
           <li>React로 이미지 업로드 페이지 구현 및 사용자 이미지 입력 처리</li>
          <li>AWS S3에 이미지 업로드 후, Python 기반 체형 분석 API 호출</li>
          <li>분석 결과를 바탕으로 체형에 맞는 아바타 생성 및 코디 피팅 기능 제공</li>
        </ul>
        <p>이미지 처리</p>
        <ul>
          <li>React 기반 이미지 업로드 UI 및 상태 관리 구현</li>
          <li>AWS S3 연동을 통한 클라우드 기반 이미지 저장 시스템 구축</li>
        </ul>
      </div>
      <div>
        <p><strong> 관리자 기능</strong></p>
        <ul>
          <li>회원 탈퇴 등 관리 기능 </li>
          <li>사용자 문의 글 답변 기능 </li>
        </ul>
      </div>
      <p className="project-label">📹 4. 🚀 프로젝트 성과 및 기술 역량</p>
      <h4>✅ 풀스택 개발 역량 입증</h4>
      <ul>
        <li>프론트엔드부터 백엔드, DB까지 전체 개발 사이클을 직접 주도</li>
      </ul>
       <h4>✅ 다양한 기술 스택의 유기적 통합</h4>
      <ul>
        <li>React, Spring Boot, Flask, AWS 등 다양한 환경을 통합 운용</li>
        <li>서로 다른 언어/프레임워크 간의 연동 경험 확보 (REST API 설계 및 연동 등)</li>
      </ul>
        <h4>✅ 클라우드 환경에 대한 실전 이해</h4>
      <ul>
        <li>AWS S3를 활용한 이미지 업로드 및 접근 제어 처리</li>
      </ul>
     <p className="project-label">📹 5. 시연 영상</p>
        <div className="video-container">
        <iframe
            src="https://www.youtube.com/embed/sCy_6_zBDr4" 
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
