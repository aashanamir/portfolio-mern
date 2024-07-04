import React from 'react';
import "./style.scss";
import Arrow from '../../shared/Arrow';


const Blogcard = ({user , image , date, title , description}) => {
  return (
    <div className='blog-card'>
        <div className="image-section">
            <img src={image} alt="title" />
        </div>
        <div className="content-section">
            <div className="info-bar">
                <div className="username">{user}</div>
                <div className="published-date">{date}</div>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="read-more-cta">
                <span className='text'>Read More</span>
                <Arrow/>
            </div>
        </div>
      
    </div>
  )
}

export default Blogcard
