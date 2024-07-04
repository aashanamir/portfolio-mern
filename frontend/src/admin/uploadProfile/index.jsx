import React, { useState } from 'react';
import "./style.scss";
import Navbar from ".."; // Corrected import path for Navbar
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { useDispatch, useSelector } from 'react-redux';
import { uploadProfileImage } from '../../slice/siteContentSlice';
import { FILEURL } from '../../API/Baseurl';

const UploadProfile = () => {

  const { siteContentData, siteProfileImage } = useSelector(state => state.siteContent);

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const dispatch = useDispatch();

  const imagePreviewHandler = (e) => {
    const selectedFile = e.target.files[0];
    setImage(selectedFile);
    setImagePreview(URL.createObjectURL(selectedFile));
    console.log(selectedFile);
    
    const formData = new FormData();
    formData.append("file", selectedFile);
    // Mistake: formData is not used after this
  }

  const uploadHandler = () => {
    if (image) {
      const formData = new FormData();
      formData.append("file", image); // Missing this line
      dispatch(uploadProfileImage(formData, siteProfileImage?._id));
    }
  }

  return (
    <>
      <Navbar />
      <div className="intro-content">
        <div className="layout">
          <div className="left-col">
            <h1 className='title'>
              <input onChange={imagePreviewHandler} type="file" name="" id="" />
            </h1>
            <button onClick={uploadHandler}>Upload Now</button>
          </div>
          <div className="right-col">
            <img src={imagePreview || FILEURL + "images/" + siteProfileImage?.image?.public_id} alt={siteContentData?.public_id} />
            <div className="card-horizontal">
              <span className='icon'><EmojiEventsIcon /></span>
              <span>Best Design Award</span>
            </div>

            <div className="card-vertical">
              <span className='icon'><EmojiEventsIcon /></span>
              <span>Best Design Award</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UploadProfile;
