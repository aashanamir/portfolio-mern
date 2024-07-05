import React, { useEffect, useState } from "react";
import "./style.scss";
import Section from "../shared/Section";
import Filters from "./filters";
import Showcase from "./showcase";
import { useSelector } from "react-redux";

// const projectsData = [
//     {
//     id: 1,
//         name: "LinkedIn Clone",
//         tags: ["product"],
//         url : "https://linkedin-8aeef.web.app/",
//         media: {
//             thumbnail: require("../../images/portfolio/thumb-9.png"),
//         },
//     },
//     {
//     id: 2,
//         name: "Netflix Clone",
//         tags: ["product"],
//         url : "https://netflix-clone-9d8b3.firebaseapp.com/",
//         media: {
//             thumbnail: require("../../images/portfolio/thumb-11.png"),
//         },
//     },
//     {
//         id: 3,
//             name: "Portfolio Website",
//             tags: ["product"],
//             url: "https://aashanamir.github.io/react-app/",
//             media: {
//                 thumbnail: require("../../images/portfolio/thumb-10.png"),
//             },
//         },
//         {
//             id: 4,
//                 name: "Usman Motors Japanese",
//                 tags: ["web-page"],
//                 url: "https://xn--gckvbax8mya2j3cb.jp/",
//                 media: {
//                     thumbnail: require("../../images/portfolio/thumb-14.png"),
//                 },
//             },
//             {
//                 id: 5,
//                     name: "Laptop Trust",
//                     tags: ["web-page"],
//                     url: "https://laptoptrust.com/",
//                     media: {
//                         thumbnail: require("../../images/portfolio/thumb-12.png"),
//                     },
//                 },
//                 {
//                     id: 6,
//                         name: "Lahore Furniture",
//                         tags: ["web-page"],
//                         url: "https://lahorefurnitures.com/",
//                         media: {
//                             thumbnail: require("../../images/portfolio/thumb-13.png"),
//                         },
//                     },
//                     {
//                         id: 7,
//                         name: "Healthy Food Restraunt",
//                         tags: ["web-app", "mobile-app"],
//                         media: {
//                             thumbnail: require("../../images/portfolio/thumb-7.jpg"),
//                         },
//                     },
//                     {
//                         id: 8,
//                         name: "Anna & Daniel",
//                         tags: ["web-page"],
//                         media: {
//                             thumbnail: require("../../images/portfolio/thumb-2.jpg"),
//                         },
//                     },
//                     {
//                         id: 9,
//                         name: "Web Design Landing Page",
//                         tags: ["web-page"],
//                         media: {
//                             thumbnail: require("../../images/portfolio/thumb-8.jpg"),
//                         },
//                     },
//                     {
//                         id: 10,
//                         name: "Business Analytics Web App",
//                         tags: ["web-app", "mobile-app"],
//                         media: {
//                             thumbnail: require("../../images/portfolio/thumb-1.jpg"),
//                         },
//                     },
//                     {
//                         id: 11,
//                         name: "Limitless",
//                         tags: ["web-app", "web-page"],
//                         media: {
//                             thumbnail: require("../../images/portfolio/thumb-6.jpg"),
//                         },
//                     },
//                     {
//                         id: 12,
//                         name: "Dashboard",
//                         tags: ["product", "web-app", "mobile-app"],
//                         media: {
//                             thumbnail: require("../../images/portfolio/thumb-4.jpg"),
//                         },
//                     },
//                     {
//                         id: 13,
//                         name: "Digital Creative Agency",
//                         tags: ["web-app"],
//                         media: {
//                             thumbnail: require("../../images/portfolio/thumb-3.jpg"),
//                         },
//                     },
//                     {
//                         id: 14,
//                         name: "Virtual Reality Experience",
//                         tags: ["web-app", "mobile-app", "web-page"],
//                         media: {
//                             thumbnail: require("../../images/portfolio/thumb-5.jpg"),
//                         },
//                     },
// ];



const Portfolio = () => {
    
    const {allProjects , siteContentStatus} = useSelector(state => state.siteContent);

    const [projects, setProjects] = useState(allProjects?.porjects || []);

    const [transition, setTransition] = useState(false);

    useEffect(()=>{
        
    if(siteContentStatus !== "loading"){
        setProjects(allProjects?.porjects || [])
        console.log(projects);
    }
    },[siteContentStatus , projects])

    const filterProjects = (tag) => {
        setTransition("zoomout");
        setTimeout(() => {
            if (tag !== "all") {
                const filteredProjects = projects.filter((f) => {
                    return f.tags.includes(tag);
                });
                setProjects(filteredProjects);
            } else {
                setProjects(projects);
            }
            setTransition("zoomin");
        }, 200);
        setTransition(false);
    };

    return (
        <Section
            id="portfolio"
            title="Check My Portfolio"
        >
            <div className="portfolio-content-wrapper">
                <Filters />
                <Showcase
                    data={projects}
                    transition={transition}
                />
            </div>
        </Section>
    );
};

export default Portfolio;
