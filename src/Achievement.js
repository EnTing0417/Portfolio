// src/achievement.js
 
import React from "react"
import BoxedText from './BoxedText';
 
function Achievement(props) {
  return (
    <div>
      <h2>Achievement & Involvement</h2>
      <BoxedText> 
       <b><p>Microsoft Student Partners (MSP)</p></b>
       <ul>
       	<li>Microsoft Malaysia</li>
        <li>Sept 2017 - Jun 2018</li>
	 </ul>

      <b><p>Unimaker Regional Competition</p></b>
       <ul>
       	<li>4th Runner-up</li>
	 </ul>
	 </BoxedText>
    </div>
  )
}
 
export default Achievement;