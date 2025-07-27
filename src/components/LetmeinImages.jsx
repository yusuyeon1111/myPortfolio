import React, { useState } from 'react';
import flow from '../static/img/letmein/flowchart.jpg'
import ER from '../static/img/letmein/erDiagram.png'
import sys from '../static/img/letmein/system.jpg'
import '../css/ProjectImages.css';

function LetmeinImages() {
  const [isOpen, setIsOpen] = useState({
    flow: false,
    sys: false,
    er: false,
  });

  const toggleImage = (key) => {
    setIsOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="project-images-container">
      <div className="image-section">
        <p className="project-label">💡 1. 시스템 흐름도</p>
        <button onClick={() => toggleImage('flow')}>
          {isOpen.flow ? '이미지 접기' : '이미지 펼치기'}
        </button>
        {isOpen.flow && <img src={flow} alt="시스템 흐름도" className="project-image" />}
      </div>

      <div className="image-section">
        <p className="project-label">💡 2. 시스템 아키텍처</p>
        <button onClick={() => toggleImage('sys')}>
          {isOpen.sys ? '이미지 접기' : '이미지 펼치기'}
        </button>
        {isOpen.sys && <img src={sys} alt="시스템 아키텍처" className="project-image" />}
      </div>

      <div className="image-section">
        <p className="project-label">💡 3. E-R 다이어그램</p>
        <button onClick={() => toggleImage('er')}>
          {isOpen.er ? '이미지 접기' : '이미지 펼치기'}
        </button>
        {isOpen.er && <img src={ER} alt="ER 다이어그램" className="project-image" />}
      </div>
    </div>
  );
}

export default LetmeinImages;
