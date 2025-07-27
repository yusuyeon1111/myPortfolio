import React from 'react'
import '../css/Project.css'
function River() {
  return (
    <div className="project-container">
      <span className="project-label">WORK</span>
      <h3>4대강 수계기금 결산 시스템 개편용역</h3>
      <p className="project-period">25.02.26 ~ 25.06.13</p>

      <p className="project-label">TEAM</p>
      <p>사업관리 1명, 기획 1명, 백엔드 3명</p>
      <p>백엔드 개발 기여도 30%</p>

      <p className="project-label">STACK</p>
      <p>전자정부프레임워크, Spring, JavaScript, Nexacro17, MSSQL, Oracle, Git, Jenkins</p>

      <p className="project-label">프로젝트 개요 및 역할</p>
      <ul>
        <li>
          국가 결산체계 개편에 따라 중앙기금으로 결산되는 수계기금 시스템을 개편하는 프로젝트에 참여
        </li>
        <li>
          백엔드 개발자로서 핵심 기능 구현 및 데이터 처리 로직 개선 담당
        </li>
      </ul>

      <p className="project-label">주요 업무 및 성과</p>
      <ul>
        <li>
          Nexacro17을 활용하여 웹 화면을 구현하고, 백엔드 시스템과 연동하여 사용자 인터페이스 구축
        </li>
        <li>
          기금(예산/재정) 데이터의 효율적인 관리를 위해 조회, 생성, 엑셀 다운로드 기능 개발
        </li>
        <li>
          국가 결산체계 변경에 따라 기존 결산서 양식을 분석한 뒤, 변경된 기준에 맞춰 데이터 생성 및 조회 프로시저를 개선함. 예를 들어, 순자산 계산 방식이 기존에는 A + B 방식이었다면, 변경된 체계에서는 B + C 방식으로 전환되어야 했으며, 이에 맞게 산출 로직을 수정하고 관련 프로시저를 재구성함.
        </li>
        <li>
          재정운영표, 순자산변동표 등 주요 재무제표 보고서의 생성 및 조회 기능 개발
        </li>
        <li>
          복잡한 결산 금액 산출을 위한 함수 및 프로시저 직접 개발하여 시스템 안정성과 데이터 신뢰도 향상
        </li>
      </ul>
    </div>
  )
}

export default River
