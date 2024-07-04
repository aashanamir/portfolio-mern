import React from 'react';
import "./style.scss";
import Hand from "../../../images/hand.png";
import Girl from "../../../images/girl.png";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { useSelector } from 'react-redux';
import CallToAction from "../../shared/callToAction";
import {FILEURL } from '../../../API/Baseurl';



const IntroContent = () => {

  const {siteContentData , siteProfileImage} = useSelector(state => state.siteContent);

  const hireme = ()=>{
    const whatsapp = 'http://wa.me/'+siteContentData?.siteContent?.phoneNo;

    const link = document.createElement('a');
    link.href = whatsapp;
    link.setAttribute('target', '_blank'); 


    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  }
  return (
    <div className="intro-content">
    <div className="layout">
        <div className="left-col">
            <h1 className='title'>
            <span className="short-text">
              Hello
            </span>
            <img src={Hand} alt="My Hand" />
            <span className="short-text">
              , I Am
            </span>
            <div className="long-text">
              {siteContentData?.siteContent?.heroHeading}
            </div>
            <p>
            {siteContentData?.siteContent?.heroDescription}
            </p>
            </h1>
            <CallToAction text="Hire Me" action={hireme}/>
        </div>
        <div className="right-col">
            <img src={siteProfileImage?.image?.url} alt={siteContentData?.public_id} />
            <div className="card-horizental">
              <span className='icon'><EmojiEventsIcon/></span>
              <span>Best Design Award</span>
            </div>

            <div className="card-vertical">
              <span className='icon'><EmojiEventsIcon/></span>
              <span>Best Design Award</span>
            </div>
        </div>
    </div>
    </div>
  )
}

export default IntroContent
