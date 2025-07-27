import React from 'react'
import '../css/Project.css'
import github from '../static/img/logo/github.png'
import { useNavigate } from 'react-router-dom'
function Free() {
  const navigate = useNavigate();
  return (
    <div className="project-container">
      <button className="close-button" onClick={() => navigate(-1)}>✕</button>
    <div className='project-inner'>
      <a href='https://github.com/yusuyeon1111/project.git'><img src={github} /></a>
      <br/>
     <span className="project-label">개인 프로젝트</span>
     <h3>✨ 내부 정보 접근성 개선 키오스크 시스템</h3>
     <p className="project-period">2024.07.01 ~ 2024.08.01</p>

     <p className="project-label">STACK</p>
     <p>Python, flask, Javascript, React, Html/CSS</p>
     <p className="project-label">💡 1. 개발 배경 </p>
     <br/>
     <span>기존 사내 ERP 시스템(예: e-count)은 팀원들의 연차, 휴가 현황, 주요 프로젝트 일정 등 핵심 정보를 효율적으로 공유하는 데 있어 다음과 같은 한계가 존재함.</span>
     <br/>
     <ul>
       <li>
       <strong>정보 접근성 저하:</strong> 필요한 정보를 확인하기 위해 별도의 웹사이트에 접속하여 탐색해야 하는 번거로움이 존재했습니다. 이는 정보 확인 과정을 지연시키고 업무 흐름을 방해하는 요인으로 작용
       </li>
       <li>
       <strong>실시간 정보 공유의 어려움:</strong> 중요한 소식이나 변동 사항을 즉각적으로 파악하기 어려워, 정보 비대칭이 발생하고 커뮤니케이션 효율성이 저하될 우려가 있었습니다.
       </li>
     </ul>
    <span>이러한 문제점을 해결하고 팀원들의 업무 효율성 및 편의성을 증대하고자, 현재 활용되지 않고 있는 사내 키오스크를 적극 활용하여 핵심 정보를 직관적이고 빠르게 제공하는 솔루션 개발을 기획했습니다.</span>
    <br/><br/>
     <p className="project-label">🛠️ 2. 시스템 아키텍처 및 구현 상세</p>
     <br/>
     <span>본 프로젝트는 데이터 수집부터 프론트엔드 구현까지의 엔드-투-엔드(End-to-End) 시스템을 직접 설계하고 구현했습니다.</span>
     <br/><br/>
     <span><strong>1. 데이터 수집 및 자동화 (Python / Selenium)</strong></span>
     <br/>
     <ul>
       <li>
        Python 기반의 Selenium 라이브러리를 활용하여 사내 ERP 시스템에서 팀원들의 연차, 휴가 정보 및 주요 프로젝트 일정 데이터를 자동으로 크롤링하는 자동화 파이프라인을 구축했습니다.
       </li>
       <li>
         이를 통해 수동 접근의 번거로움을 제거하고, 정기적이고 안정적인 데이터 확보 체계를 마련했습니다.
       </li>
     </ul>
     <span><strong>2. 백엔드 API 서버 구축 (Flask)</strong></span>
     <br/>
     <ul>
       <li>
       수집된 데이터를 표준화된 JSON 형식으로 가공한 후, Flask 프레임워크를 사용하여 RESTful API 형태로 외부에 제공하는 백엔드 서버를 개발했습니다.
       </li>
       <li>
       데이터의 요청-응답 로직을 최적화하여 프론트엔드와의 원활한 데이터 통신을 보장하고, 시스템의 확장성 및 유연성을 확보했습니다.
       </li>
     </ul>
     <span><strong>3. UI/UX 및 프론트엔드 개발 (React)</strong></span>
     <br/>
     <ul>
       <li>
       React를 사용하여 키오스크 화면에 최적화된 사용자 인터페이스(UI)를 구현했습니다.
       </li>
       <li>
        백엔드 API를 통해 전달받은 데이터를 직관적이고 시각적으로 가독성 높게 구성하여, 팀원들이 필요한 정보를 빠르고 쉽게 인지할 수 있도록 사용자 경험(UX)을 최적화했습니다.
       </li>
       <li>
        반응형 디자인 원칙을 적용하여 다양한 키오스크 환경에서도 안정적인 화면 표시를 보장했습니다.
       </li>
     </ul>
     <p className="project-label">📈 3. 기대 효과 및 성과</p>
     <br/>
     <span> 이 프로젝트를 통해 다음과 같은 긍정적인 성과를 기대할 수 있습니다.</span>
     <br/>
     <ul>
       <li>
       <strong>정보 접근성 및 효율성 극대화:</strong> 팀원들이 언제든 키오스크를 통해 핵심 정보를 한눈에 확인할 수 있어 정보 접근성이 대폭 향상되었고, 불필요한 정보 탐색 시간을 단축하여 업무 효율성을 증대시켰습니다.
       </li>
       <li>
       <strong>기술 역량 강화:</strong> Python (Selenium), Flask, React 등 다양한 기술 스택을 활용하여 풀스택 개발 역량을 심화하고, 실제 문제 해결을 위한 통합 시스템 구축 경험을 쌓을 수 있었습니다.
       </li>
     </ul>
     <div className='spacer'></div>
   </div>
   </div>
  )
}

export default Free
