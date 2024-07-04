import React from "react";
import "./sytle.scss";
import Section from "../shared/Section";
import { scrollToSrction } from "../utils/helper";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import SocialIcon from "./social-icon";
import { useSelector } from "react-redux";

const Footer = () => {
    const {siteContentData} = useSelector(state => state.siteContent);

    return (
        <Section
            background="dark"
            className="footer"
        >
            <div className="footer-content-wrapper">
                <div className="footer-logo">
                    <h2>{siteContentData?.siteContent?.siteName}</h2>        
                </div>
                <ul className="footer-menu-items">
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSrction("skills")}
                    >
                        Skills
                    </li>

                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSrction("portfolio")}
                    >
                        Portfolio
                    </li>

                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSrction("blogs")}
                    >
                        Blogs & Articles
                    </li>

                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSrction("contact")}
                    >
                        Contact Me
                    </li>
                </ul>
                <div className="social-icons">
                    <SocialIcon
                        icon={<InstagramIcon/>}
                        color="#aD2636"
                        link={siteContentData?.siteContent?.socialLinks?.insta}
                    />
                    <SocialIcon
                        icon={<GitHubIcon/>}
                        color="#0D2836"
                        link={siteContentData?.siteContent?.socialLinks?.github}
                    />
                    <SocialIcon
                        icon={<FacebookIcon/>}
                        color="#f2740d"
                        link={siteContentData?.siteContent?.socialLinks?.fb}
                    />
                    <SocialIcon
                        icon={<LinkedInIcon/>}
                        color="#0D9636"
                        link={siteContentData?.siteContent?.socialLinks?.linkedIn}
                    />
                </div>
                <div className="bottom-bar">
                  CopyRight 2023 Muhammad Aashan | All Rights Reserved
                </div>
            </div>
        </Section>
    );
};

export default Footer;
