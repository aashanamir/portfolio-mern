import React from 'react';
import Arrow from "../../shared/Arrow";
import "./style.scss";
import { FILEURL } from '../../../API/Baseurl';
import { Link } from 'react-router-dom';

const Showcase = ({data , transition}) => {
  return (
    <div className='projects-showcase'>
      {
        data.map((project)=>{
          return  <Link to={"/project/"+project._id} key={project._id}
          className={`showcase-item ${transition === "zoomin" ? "zoomin" : transition === "zoomout" ? "zoomout" : ""}`}>
              <a href={project?.url} target='_blank'>
                <div className="meta-data">
                    <h3>{project?.name}</h3>
                    <div className="go-to-cta">
                        <span className='text'>Project Details</span>
                        <Arrow/>
                    </div>
                </div>
                </a>
                <img src={FILEURL + "images/" + project?.image?.public_id} alt={project?.name} />
            </Link>
        })
      }
    </div>
  )
}

export default Showcase
