import React from 'react'
import '../css/About.css'
import me from '../static/img/ME.jpg'
import github from '../static/img/logo/github.png'
import velog from '../static/img/logo/velog.png'
function About() {
  return (
   <div className="about-container">
      <div className="left-section">
        <h1>ABOUT ME</h1>
        <img src={me} className="profile-photo" />
        <h2 className="name">유 수 연</h2>
        <p>birth : 02.03.11</p>
        <p>e-mail : yusuyeon443@gmail.com</p>
        <p>tel : 010-8609-8075</p>
      </div>

      <div className="right-section">
        <div className='inner-left'>
        <div className="summary">
          <p>🔸 웹 서비스의 안정성과 효율을 중요하게 생각합니다.</p>
          <p>🔸 사용자 중심의 기능 구현과 유지보수를 고려한 구조 설계를 지향합니다.</p>
          <p>🔸 팀과의 소통을 통해 더 나은 서비스를 만드는 데에 보람을 느낍니다.</p>
        </div>
        <div className="work-section">
            <h3>WORK</h3>
            <p><strong>(주) 쿠로엔시스</strong> 개발사업부 / 사원</p>
            <p>24.04 ~ 25.07 [재직중] 1년 4개월</p>
            <ul>
              <li>SI 4개 / SM 1개 프로젝트 수행</li>
              <li>기획 및 제안서 등 다양한 업무 경험</li>
              <li>25.06 KAMIS 식재료백과 개편 및 유지보수</li>
              <li>25.02 4대강 수계기금 시스템 개편</li>
              <li>24.12 구례군청 홈페이지 유지보수</li>
              <li>24.11 IoT 보안인증 시스템 고도화</li>
              <li>24.09 KAMIS 식재료백과 개편</li>
            </ul>
          </div>
        </div>
        <div className='inner-right'>
        <div className="education-section">
            <h3>EDUCATION</h3>
            <ul>
              <li>한국방송통신대 컴퓨터과학과<br/><span className="date">25.03 ~ 28.02 [재학중]</span></li>
              <li>전남대 헬스케어메디컬공학부<br/><span className="date">21.03 ~ 22.02 [중퇴]</span></li>
              <li>스마트인재개발원 클라우드기반 인공지능 서비스 엔지니어 과정<br/><span className="date">23.08 ~ 24.02 [1040h]</span></li>
            </ul>
            <h3>자격증</h3>
            <ul>
              <li>리눅스마스터 2급</li>
            </ul>
            <h3>ETC</h3>
              <a href='https://github.com/yusuyeon1111' target='_blank'><img src={github}/></a>
              <a href='https://velog.io/@sysy0311/posts' target='_blank'><img src={velog} style={{width:'62px', marginLeft:'3%'}}/></a>
        </div>
        </div>
      </div>
    </div>
  )
}

export default About
