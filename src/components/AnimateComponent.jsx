import React from 'react'
import {motion} from 'framer-motion'
import '../css/Home.css'
import folderFront from '../static/img/MainImg/folderFront.png'
function AnimateComponent() {
  return (
    <motion.div
          initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: -170 }}
            viewport={{ once: true , amount : 0.7 }}
            transition={{
                ease: "easeInOut",
                duration: 2,
                y: { duration: 1 },
            }}
    >
            <img src={folderFront} id='folderFront'/>
            <div id='infoBottom'>
                <p>Suyeon Yoo</p>
                <p>Web Developer</p>
                <p>웹 서비스의 안정성과 효율을 중요하게 생각합니다.</p>
                <p>사용자 중심의 기능 구현과 유지보수를 고려한 구조 설계를 지향합니다.</p>
                <p>팀과의 소통을 통해 더 나은 서비스를 만드는 데에 보람을 느낍니다.</p>
            </div>
    </motion.div>
  )
}

export default AnimateComponent