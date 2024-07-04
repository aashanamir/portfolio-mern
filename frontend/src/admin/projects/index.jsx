import React, { useState } from 'react';
import Navbar from "..";
import './style.css';
import { useDispatch } from 'react-redux';
import { createProjects } from '../../slice/siteContentSlice';

const Projects = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [role, setRole] = useState('');
  const [visitLink, setVisitLink] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    setImage(selectedFile);
    setImagePreview(URL.createObjectURL(selectedFile));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('category', category);
    formData.append('role', role);
    formData.append('visitLink', visitLink);
    formData.append('file', image);

    dispatch(createProjects(formData));

    setName("");
    setDescription("");
    setCategory("");
    setRole("");
    setImage("");
    setVisitLink("");
    setImagePreview(null);
  };

  return (
    <>
      <Navbar/>

      <div className="form-container">
      <form onSubmit={handleSubmit} className="schema-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="file">Image</label>
          <input
            type="file"
            id="file"
            onChange={handleImageChange}
            required
          />
          {imagePreview && <img src={imagePreview} alt="Preview" className="image-preview" />}
        </div>

        <div className="form-group">
          <label htmlFor="role">Role</label>
          <input
            type="text"
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="visitLink">Visit Link</label>
          <input
            type="text"
            id="visitLink"
            value={visitLink}
            onChange={(e) => setVisitLink(e.target.value)}
          />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
    </>
  );
};

export default Projects;
