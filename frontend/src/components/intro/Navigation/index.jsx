import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./sytle.scss";
import CallToAction from "../../shared/callToAction";
import { scrollToSrction } from "../../utils/helper";
import { useSelector } from "react-redux";

const Navigation = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const {siteContentData} = useSelector(state => state.siteContent);

    const menuItemClickHandler = (section) => {
        scrollToSrction(section);
        setMobileMenu(false)
    };

    return (
        <div className="top-navigation-bar">
            <div className="logo">
                <a href="/">{siteContentData?.siteContent?.siteName}</a>
            </div>
            <div
                className="mobile-menu"
                onClick={() => setMobileMenu(!mobileMenu)}
            >
                {mobileMenu ? <CloseIcon /> : <MenuIcon />}
            </div>
            <div className={`navigation-bar ${mobileMenu ? "active" : ""}`}>
                <div
                    className="navigation-items"
                    onClick={() => menuItemClickHandler("skills")}
                >
                    Skills
                </div>
                <div
                    className="navigation-items"
                    onClick={() => menuItemClickHandler("portfolio")}
                >
                    Portfolio
                </div>
                {/* <div
                    className="navigation-items"
                    onClick={() => menuItemClickHandler("blogs")}
                >
                    Blogs & Articles
                </div> */}
                <CallToAction
                    text="Contact me"
                    action={() => menuItemClickHandler("contact")}
                />
            </div>
        </div>
    );
};

export default Navigation;
