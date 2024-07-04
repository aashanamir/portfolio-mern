import React from 'react'
import "./style.scss"
import Cloud from "../../images/cloud.png"
import cloudSoft from "../../images/cloud-soft.png"
import Navigation from './Navigation'
import IntroContent from './intro-content/Index'

function Intro({siteName}) {
  
  return (

    <div className="intro-section">
      <div className="vector-bg"></div>

      {/* <img src={cloudSoft} alt="cloud-soft" className="cloud-soft" />

      <img src={Cloud} alt="cloud" className="cloud"/> */}

      <div className="content">
         <Navigation siteName={siteName}/>
        <IntroContent/> 
      </div>
    </div>
  )
}

export default Intro
