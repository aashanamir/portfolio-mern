import React, { useEffect } from 'react';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import {  fetchProjectDetails } from '../../../slice/siteContentSlice';
import { useParams } from 'react-router-dom';
import Loading from '../../loading';
import { FILEURL } from '../../../API/Baseurl';

const ProjectDetail = () => {

  const {projectDetails , projectDetailStatus} = useSelector(state => state.siteContent);
  const dispatch = useDispatch();
  const {id} = useParams();

  useEffect(()=>{
  
    dispatch(fetchProjectDetails(id));
    
  },[dispatch]);

  if(projectDetailStatus !== "loading"){
    const project = projectDetails?.project;

  return (
    <div className='project-detail-container'>
      <div className="left-side">
        <h1 className="project-name">{project?.name}</h1>
        <p className="project-category">{project?.category}</p>
        <p className="project-role">Role: {project?.role}</p>
        <a href={project?.visitLink} className="visit-link" target="_blank" rel="noopener noreferrer">Visit Project</a>
        <p className="project-description">{project?.description}</p>
      </div>
      <div className="right-side">
        <img src={project?.image?.url} alt={project?.name} className="project-image" />
      </div>
    </div>
  );
}else{
  <Loading />
}
}

export default ProjectDetail;
