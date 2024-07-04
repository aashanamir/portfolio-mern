import React, {useState} from 'react'

import "./style.scss";

const FiltersData = [
    {
        name : "Mern Stack",
        id : "all",
    },
    {
        name : "React Js",
        id : "product",
    },
    {
        name : "Wordpress",
        id : "web-page",
    },
    {
        name : "Web Apps",
        id : "web-app",
    },
    {
        name : "Mobile Apps",
        id : "mobile-app",
    }
];

const Filters = () => {
    const [active, setActive] = useState("");

    const filterClick = (id)=>{
        setActive(id);
        filterProjects(id);
    }
  return (
    <ul className='filter-menu-items'>
        {
            FiltersData.map((data)=>{
                return <li key={data.id} 
                className={`filter-menu-item ${active === data.id ? "active" : ""}`}
                /**onClick={"()=>filterClick(data.id)"} */>{data.name}</li>
            })
        }

    </ul>
  )
}

export default Filters
