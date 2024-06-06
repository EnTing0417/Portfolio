// src/Skills.js
 
import React from "react"
import BoxedText from './BoxedText';
 
function Skills(props) {
  return (
    <div>
      <h2>Skills</h2>
	  <BoxedText> 
     <b><p>Tools and Technologies</p></b>
       <ul>
		<li>Golang</li>
		<li>REST API</li>
		<li>MongoDB</li>
		<li>Apache Kafka</li>
		<li>Redis</li>
       	<li>Java</li>
        <li>Bootstrap</li>
        <li>Python</li>
        <li>Deep Learning</li>
		<li>Javascript</li>
		<li>PHP</li>
		<li>Image Processing</li>
		<li>HTML & CSS</li>
		<li>Visual Basic</li>
		<li>C</li>
		<li>MySQL</li>
		<li>Adobe Premiere Pro</li>
		<li>Adobe Photoshop</li>
		<li>Robotic Programming</li>
	 </ul>

      <b><p>Industry Knowledge</p></b>
       <ul>
       	<li>Web Development</li>
        <li>Machine Learning</li>
		<li>Social Media Marketing</li>
	 </ul>
	 </BoxedText>
    </div>
  )
}
 
export default Skills;