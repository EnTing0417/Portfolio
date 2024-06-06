// src/About.js
 
import React from "react"
import './About.css';
import BoxedText from './BoxedText';
 
function About(props) {
  return (
    <div>
     <h2>About Me</h2>
      <BoxedText> 
      <p>I'm En Ting from University Kebangsaan Malaysia.I believe I can be a good leader as I paticipated in a programme known as Microsoft Student Partners (MSP) during my second-year of study. In this particular programme, I have to attend technology workshops hosted by Microsoft experts and I have to conduct workshops for students within my university campus after I have mastered the technology.Apart from that, I always love to tackle challenges especially in technology. During my third year, I formed a team of four with my friends and joined a regional competition called UNIMAKER. The theme is about forth industrial revolution. In this competition, we introduced the use of the articial intelligence for a car parking lot ticketing system. We were proud to be the forth runner up within the central region and make it to top 20 in national finals. Although we did not manage to win in national finals, I do appreciate all the experiences gained throughout the entire competition.
        </p></BoxedText>
    </div>
  )
}
 
export default About;