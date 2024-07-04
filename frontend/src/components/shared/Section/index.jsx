import React from "react";

import "./style.scss";

const Section = ({ children, id, className, background, title }) => {
    return (
        <div
            id={id || ""}
            className={`section ${className ? className : ""} ${
                background === "dark" ? "dark" : "light"
            }`}
        >
            <div className="content">
                {
                    title &&(
                        <div className="section-title">
                            <h2>{title}</h2>
                        </div>

                    )
                }
                {children}
            </div>
        </div>
    );
};

export default Section;
