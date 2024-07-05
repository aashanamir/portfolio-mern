import { createSlice } from "@reduxjs/toolkit";
import {BASEURL} from "../API/Baseurl"
import axios from "axios";

const siteContentSlice = createSlice({
  name : "siteContent",
  initialState : {
    siteContentStatus : "idle",
    siteContentData : [],
    siteProfileImage : {},
    allProjects : [],
    projectDetails : {},
    projectDetailStatus : "idle",
    siteProfileImageStatus : "idle",
  },
  reducers : {
    setData : (state , action) => {
      state.siteContentData = action.payload;
    },
    setStatus : (state , action) => {
      state.siteContentStatus = action.payload;
    },
    setProfileImage : (state , action) => {
      state.siteProfileImage = action.payload;
    },
    setProfileImageStatus : (state , action) => {
      state.siteProfileImageStatus = action.payload;
    },
    setAllProjects : (state , action)=> {
      state.allProjects = action.payload;
    },
    setProjectDetail : (state , action) => {
      state.projectDetails = action.payload;
    },
    setProjectDetailStatus : (state , action) => {
      state.projectDetailStatus = action.payload;
    }
  }
});

export const {setData , setStatus , setProfileImage , setProfileImageStatus , setAllProjects , setProjectDetail , setProjectDetailStatus} = siteContentSlice.actions;

export default siteContentSlice.reducer;


// Actions


// Fetching Site Date

export function fetchSiteContent(){
  return async function fetchSiteContentThunk(dispatch){
    dispatch(setStatus("loading"));
    try {
      const {data} = await axios.get(BASEURL + "sitecontent");

      dispatch(setStatus("idle"));
      dispatch(setData(data));
    } catch (error) {
      console.log(error);
      dispatch(setStatus("error"));
    }
  }
}


// Fetching Profile Image

export function fetchProfileImage(){
  return async function fetchProfileImageThunk(dispatch){
    dispatch(setProfileImageStatus("loading"));
    try {
      const {data} = await axios.get(BASEURL + "profile");
      dispatch(setProfileImage(data?.profileImage));
      dispatch(setProfileImageStatus("idle"));
    } catch (error) {
        console.log(error);
      dispatch(setProfileImageStatus("error"));
    }
  }
}


// Fetching All Projects

export function fetchAllProjects(){
  return async function fetchAllProductsThunk(dispatch){
    dispatch(setStatus("loading"));
    try {
      const {data} = await axios.get(BASEURL + "project/all");
      console.log(data);
      dispatch(setAllProjects(data));
      dispatch(setStatus("idle"));
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  }
}


// Fetching Project Details

export function fetchProjectDetails(id){
  return async function fetchProductDetailsThunk(dispatch){
    dispatch(setProjectDetailStatus("loading"));
    try {
    const {data} = await axios.get(BASEURL + "project/" + id);

    dispatch(setProjectDetail(data));
    dispatch(setProjectDetailStatus("idle"));
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  }
}


/*********************
 * *************
 * Admin**************
 * ********************
 * *******Routes******
 * ******************
 * ********************
 */


export function uploadSiteContent (content , id){
  return async function uploadSiteContentThunk(dispatch){
    dispatch(setProfileImageStatus("loading"));
    try {
      const {data} = await axios.put(BASEURL + "sitecontent/" + id , content , {
        headers : {
          "Content-Type": "application/json",
        },withCredentials : true,
      });
      dispatch(fetchSiteContent());
      dispatch(setProfileImageStatus("idle"));
    } catch (error) {
      console.log(error);
    }
  }
}



// Upload Site Profile Image 

export function uploadProfileImage(formData , id){
  return async function uploadProfileImageThunk(dispatch){
    try {
      console.log(formData);
      
    const {data} = await axios.put(BASEURL + "profile/update/" + id , formData , {
      headers : {
        "Content-Type" : "multipart/form-data"
      },withCredentials : true,
    })
      alert(data.message);
      dispatch(fetchProfileImage());
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  }
};


// Create Projects


export function createProjects(formData , id){
  return async function createProjectsThunk(dispatch){
    try {
    const {data} = await axios.post(BASEURL + "project/create", formData , {
      headers : {
        "Content-Type" : "multipart/form-data"
      },withCredentials : true,
    })
    alert(data.message)
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  }
};