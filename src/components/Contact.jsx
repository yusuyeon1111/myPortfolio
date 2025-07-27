import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import '../css/Contact.css';

function Contact() {
  return (
    <div className='contact-container'>
      <p className="thank-you">Thank You :)</p>
      <div className='message'>
      <p>끝까지 포트폴리오를 봐주셔서 진심으로 감사드립니다.</p>
      <p>기술로 가치를 만들고, 팀과 함께 성장하는 개발자가 되겠습니다.</p>
      <p>좋은 인연이 되기를 바랍니다.</p>
      </div>
      <h1 className="contact-title">CONTACT</h1>
      <div className="contact-info">
        <FaPhoneAlt className="phone-icon" />
        <p className="phone-text">Phone : 010-8609-8075</p>
        </div>
        <div className="contact-info">
        <IoIosMail className="phone-icon" />
        <p className="phone-text">Email : yusuyeon443@gmail.com</p>
      </div>
    </div>
  );
}

export default Contact;
