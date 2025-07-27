import React from 'react'
import '../css/Project.css'
function River() {
  return (
    <div className="project-container">
      <span className="project-label">WORK</span>
      <h3>🏞️ 4대강 수계기금 결산 시스템 개편용역</h3>
      <p className="project-period">25.02.26 ~ 25.06.13</p>

      <p className="project-label">TEAM</p>
      <p>사업관리 1명, 기획 1명, 백엔드 3명</p>
      <p>백엔드 개발 기여도 30%</p>

      <p className="project-label">STACK</p>
      <p>전자정부프레임워크, Spring, JavaScript, Nexacro17, MSSQL, Oracle, Git, Jenkins</p>

      <p className="project-label">💡 1. 프로젝트 개요 및 역할</p>
      <br/>
      <div className='project-content'>
      이 프로젝트는 국가결산체계 개편이라는 중대한 변화에 발맞춰, 기존의 4대강 수계기금 시스템을 새로운 중앙기금 결산 체계에 부합하도록 개편하는 것이 목표였습니다.<br/> 
      저는 이 프로젝트에서 백엔드 개발자로서 참여하여 시스템의 핵심 로직 구현을 담당했습니다. <br/>
      특히, 개편된 회계 기준에 맞춰 복잡한 결산 데이터 처리 로직을 설계하고, 효율적인 시스템 운영을 위한 다양한 기능들을 개발하였습니다.
      </div>
      <br/>

      <p className="project-label">⭐ 2. 주요 업무 및 성과</p>
      <ul>
        <li>
          nexacro17을 활용한 웹 화면을 개발하고 백엔드 시스템과 연동하여 사용자 인터페이스를 구축했습니다.
        </li>
        <li>
        기금 데이터의 효율적인 관리와 실무자의 업무 지원을 위해 조회, 생성 및 엑셀 다운로드 기능을 구현하였습니다.
        </li>
        <li>
        국가 결산체계 개편에 따라 기존 AS-IS 결산서 양식과 복잡한 로직을 면밀히 분석하고, 새로운 TO-BE 체계에 맞도록 데이터 생성 및 조회 프로시저를 성공적으로 변경했습니다. 
        </li>
        <li>
        일례로, 기존 A+B 방식이었던 순자산 계산 방식이 변경된 체계에서는 B+C 방식으로 전환됨에 따라, 이러한 산출 로직이 정확하게 반영되도록 관련 프로시저를 수정하고 재구성하여 데이터의 정합성과 신뢰성을 확보했습니다.
        </li>
        <li>
        재정 현황 파악 및 실무 업무 효율성 증대를 위해 재정운영표, 순자산변동표 등 주요 재무제표 보고서 생성 로직과 보고서 조회 기능을 개발했습니다.
        </li>
        <li>
        복잡한 결산금액 산출을 위한 함수와 프로시저를 직접 개발 및 개선하여 시스템 안정성과 결산 데이터의 신뢰도를 강화했습니다.
        </li>
      </ul>
    </div>
  )
}

export default River
