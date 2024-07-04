import React from "react";
import "./style.scss";
import Section from "../shared/Section";
import Techicons from "../../images/tech-icons.png";
import CallToAction from "../shared/callToAction";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { useSelector } from "react-redux";

const Skills = () => {
    const { siteContentData } = useSelector((state) => state.siteContent);

    const downloadCv = () => {
    const fileUrl = 'http://localhost:5000/images/file-1719655236691-suit.png';

    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', 'file.pdf'); 

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
    }
    return (
        <Section
            id="skills"
            background="dark"
        >
            <div className="skills-content-wrapper">
                <div className="left-col">
                    <img
                        src={Techicons}
                        alt="React Js Developer"
                    />
                </div>
                <div className="right-col">
                    <h2>Skills</h2>
                    <p>
                        <ul>
                            {siteContentData?.siteContent?.skills.map(
                                (item) => (
                                    <li>
                                        <strong>{item?.skillHeading} : </strong> 
                                        {item?.skillDescription}
                                    </li>
                                )
                            )}
                        </ul>
                    </p>
                    <CallToAction
                        text="Download Cv"
                        icon={<CloudDownloadIcon />}
                        action={downloadCv}
                    />
                </div>
            </div>
        </Section>
    );
};

export default Skills;
