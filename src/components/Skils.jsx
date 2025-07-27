import {useRef, React, useState} from 'react'
import '../css/Skils.css'
import {motion} from 'framer-motion'
import logo1 from '../static/img/logo1.png'
import logo2 from '../static/img/logo2.jpg'
import boot from '../static/img/logo/boot.png'
import spring from '../static/img/logo/spring.png'
import java from '../static/img/logo/java.png'
import javascript from '../static/img/logo/javascript.png'
import github from '../static/img/logo/github.png'
import react from '../static/img/logo/react.png'
import html5 from '../static/img/logo/html5.png'
import css3 from '../static/img/logo/css3.png'
import oracle from '../static/img/logo/oracle.png'
import maria from '../static/img/logo/mariadb.png'
import git from '../static/img/logo/git.png'
import svn from '../static/img/logo/svn.png'
import linux from '../static/img/logo/linux.png'
import tomcat from '../static/img/logo/tomcat.png'
import vscode from '../static/img/logo/vscode.png'
import intellij from '../static/img/logo/intellij.png'

const skills = [
    { src: react, alt: 'React', tag: 'FRONTEND' },
    { src: javascript, alt: 'JavaScript', tag: 'FRONTEND' },
    { src: html5, alt: 'HTML5', tag: 'FRONTEND' },
    { src: css3, alt: 'CSS3', tag: 'FRONTEND' },
    { src: java, alt: 'Java', tag: 'BACKEND' },
    { src: spring, alt: 'Spring', tag: 'BACKEND' },
    { src: boot, alt: 'Spring Boot', tag: 'BACKEND' },
    { src: oracle, alt: 'Oracle', tag: 'DATABASE' },
    { src: maria, alt: 'MariaDB', tag: 'DATABASE' },
    { src: git, alt: 'Git', tag: 'VERSION' },
    { src: svn, alt: 'SVN', tag: 'VERSION' },
    { src: github, alt: 'GitHub', tag: 'VERSION' },
    { src: linux, alt: 'Linux', tag: 'SERVER' },
    { src: tomcat, alt: 'Tomcat', tag: 'SERVER' },
    { src: vscode, alt: 'VSCode', tag: 'TOOLS' },
    { src: intellij, alt: 'IntelliJ', tag: 'TOOLS' },
  ];

  const tags = ['FRONTEND', 'BACKEND', 'DATABASE', 'VERSION', 'SERVER', 'TOOLS'];

function Skils() {
    const [activeTag, setActiveTag] = useState('FRONTEND');

    return (
        <div className="skil-container">
          <p id="skils">SKILS 🔧</p>
    
          <div className="skil-tag">
            {tags.map(tag => (
              <span
                key={tag}
                className={activeTag === tag ? 'selected' : ''}
                onClick={() => setActiveTag(tag)}
              >
                #{tag}
              </span>
            ))}
          </div>
    
          <div className="icon-group">
            {skills.map((skill, index) => (
              <img
                key={index}
                src={skill.src}
                alt={skill.alt}
                className={activeTag === skill.tag ? 'active' : ''}
              />
            ))}
          </div>
        </div>
      );
}

export default Skils