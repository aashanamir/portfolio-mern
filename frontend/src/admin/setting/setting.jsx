import React, { useState, useEffect } from "react";
import axios from "axios";
import "./setting.css";
import Navbar from "..";
import { useDispatch, useSelector } from "react-redux";
import { uploadSiteContent } from "../../slice/siteContentSlice";
import { useNavigate } from "react-router-dom";

const SiteSettings = () => {
    const {siteContentData} = useSelector(state => state.siteContent);
    const {userData , userStatus} = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [siteSettings, setSiteSettings] = useState({
        siteName: siteContentData?.siteContent?.siteName,
        heroHeading: siteContentData?.siteContent?.heroHeading,
        heroDescription: siteContentData?.siteContent?.heroDescription,
        skills: siteContentData?.siteContent?.skills || [],
        phoneNo: siteContentData?.siteContent?.phoneNo,
        email: siteContentData?.siteContent?.email,
        socialLinks: siteContentData?.siteContent?.socialLinks || {fb : "" , insta : "" , linkedIn : "" , github : ""},
    });

    useEffect(()=>{
        if(userStatus === "loading" || "error"  && userData === null){
            navigate("/admin/sign-in");
        }
    },[userData , userStatus , dispatch , navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSiteSettings({ ...siteSettings, [name]: value });
    };

    const handleSkillChange = (index, e) => {
        const { name, value } = e.target;
        const newSkills = [...siteSettings.skills];
        newSkills[index][name] = value;
        setSiteSettings({ ...siteSettings, skills: newSkills });
    };

    const addSkill = () => {
        setSiteSettings({
            ...siteSettings,
            skills: [
                ...siteSettings.skills,
                { skillHeading: "", skillDescription: "" },
            ],
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
  
        dispatch(uploadSiteContent(siteSettings , siteContentData?.siteContent?._id));
    };

    return (
        <>
            <Navbar />

            <div className="site-settings">
                <h1>Update Site Settings</h1>
                <form onSubmit={handleSubmit}>
                    <div className="flex">
                        <div className="child">
                            <div className="form-group">
                                <h2>Site Details</h2>

                                <label>Site Name</label>
                                <input
                                    type="text"
                                    name="siteName"
                                    value={siteSettings.siteName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Hero Heading</label>
                                <input
                                    type="text"
                                    name="heroHeading"
                                    value={siteSettings.heroHeading}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Hero Description</label>
                                <textarea
                                    name="heroDescription"
                                    value={siteSettings.heroDescription}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="skills-section">
                            <h2>Skills</h2>
                            {siteSettings.skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="form-group skill-group"
                                >
                                    <label>Skill Heading</label>
                                    <input
                                        type="text"
                                        name="skillHeading"
                                        value={skill.skillHeading}
                                        onChange={(e) =>
                                            handleSkillChange(index, e)
                                        }
                                        required
                                    />
                                    <label>Skill Description</label>
                                    <input
                                        type="text"
                                        name="skillDescription"
                                        value={skill.skillDescription}
                                        onChange={(e) =>
                                            handleSkillChange(index, e)
                                        }
                                        required
                                    />
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={addSkill}
                            >
                                Add Skill
                            </button>
                        </div>
                    </div>
                    <div className="contact-info" style={{display : "flex" , flexDirection : "column" , alignItems : "center"}}>
                    <div className="form-group">
                      <h2>Contact</h2>
                        <label>Phone Number</label>
                        <input
                            type="tel"
                            name="phoneNo"
                            value={siteSettings.phoneNo}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={siteSettings.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Instagram Link</label>
                        <input
                            type="url"
                            name="insta"
                            value={siteSettings.socialLinks.insta}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Facebook Link</label>
                        <input
                            type="url"
                            name="fb"
                            value={siteSettings.socialLinks.fb}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>LinkedIn Link</label>
                        <input
                            type="url"
                            name="linkedIn"
                            value={siteSettings.socialLinks.linkedIn}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Github Link</label>
                        <input
                            type="url"
                            name="github"
                            value={siteSettings.socialLinks.github}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    </div>
                    <button type="submit">Update Settings</button>
                </form>
            </div>
        </>
    );
};

export default SiteSettings;
