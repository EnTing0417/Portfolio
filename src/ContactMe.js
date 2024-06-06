// src/contact-me.js
 
import React from "react";
import { MailOutlined } from '@ant-design/icons';
import { Space } from 'antd';

function ContactMe(props) {

  const email = 'en.ting88@gmail.com';

  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

  return (
    <div>
      <h1>Contact Me</h1>
      <Space><MailOutlined /></Space>
      &ensp;
      <a href={gmailLink} target="_blank" rel="noopener noreferrer">Drop me a message via email</a>
    </div>
  )
}
 
export default ContactMe;