import React from 'react'
import "./About.css"
import Card from '../Card/Card'
import mern from "../../../assets/mern.png"
import java from "../../../assets/java.png"
import dsa from "../../../assets/dsa.png"
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
import gsap from 'gsap'
function About() {
  useGSAP(()=>{
    gsap.from(".circle",{
      x:-100,
      duration:1,
      opacity:0,
      ScrollTrigger:{
        trigger:".circle"  ,
      scroll:"body",
    scrub:2,
  markers:true,

    }
    })
  })
  return (
    <div id="about">
      <div className="leftabout">
<div className="circle-line">
  <div className="circle"></div>
  <div className="line"></div>
  <div className="circle"></div>
  <div className="line"></div>
  <div className="circle"></div>
  </div>
  <div className="aboutdetails">
    <div className="personalinfo">
      <h1>Personal Info</h1>
      <ul>
        <li>
          <span>Name</span>: RUDRANSHI
        </li>
        <li>
          <span>AGE</span>: 21 YEARS
        </li>
        <li>
          <span>GENDER</span>: FEMALE
        </li>
        <li>
          <span>LANGUAGE KNOWN</span>: HINDI,ENGLISH
        </li>
      </ul>
    </div>
    <div className="education">
      <h1>Education</h1>
      <ul>
        <li>
          <span>DEGREE</span>: B.TECH 
        </li>
        <li>
          <span>BRANCH</span>: COMPUTER SCIENCE & ENGINEERING
        </li>
        <li>
          <span>CGPA</span>: 9
        </li>
      </ul>
    </div>
    <div className="skills">
      <h1>SKILLS</h1>
      <ul>
        <li>
        MERN STACK WEB DEVELOPER
        </li>
        <li>
          DSA
        </li>
        <li>
          JAVA
        </li>
      </ul>
    </div>
  </div>
      </div>
      <div className="rightabout">
      <Card title="MERN STACK WEB DEVELOPER" image={mern}/>
      <Card title="JAVA" image={java}/>
      <Card title="DSA" image={dsa}/>
      </div>
    </div>
  )
}

export default About
