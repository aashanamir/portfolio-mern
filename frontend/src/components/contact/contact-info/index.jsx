import React from 'react'
import "./style.scss";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { useSelector } from 'react-redux';

const ContactInfo = () => {
  const {siteContentData} = useSelector(state => state.siteContent);
  return (
    <div className="class-info-box">
        <h4>I would happy To Answer Any Questions regarding Web Development</h4>
        <div className="contact-option">
            <LocalPhoneIcon/>
            <span className="text">+ {siteContentData?.siteContent?.phoneNo}</span>
        </div>
        <div className="contact-option">
            <EmailIcon/>
            <span className="text">{siteContentData?.siteContent?.email}</span>
        </div>
    </div>
  )
}

export default ContactInfo
