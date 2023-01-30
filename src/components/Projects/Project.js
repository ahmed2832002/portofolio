import React from "react";
import ProjectList from "./ProjectList";
import "./Project.css";

const Project = () => {
  const data = [
    {
      name: "My Portofolio",
      des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
    
      techused: [
        {
          techname: "HTML",
        },
        {
          techname: "Bootstrap",
        },
        {
          techname: "React Js",
        },
        {
          techname: "CSS",
        },
      ],
    },
    {
      name: "Movies site",
      des: "A huge movies site that shows alot of populer films,cartoon,anime and plays ,It is a long established fact that a reader will be distracted by the readable content of a page.",
    
      techused: [
        {
          techname: "HTML",
        },
        {
          techname: "Bootstrap",
        },
        {
          techname: "React Js",
        },
        {
          techname: "CSS",
        },
      ],
    },
  ];

  return (
    <div className="container" id="project">
      <div className="section-title">
        <h5>Projects</h5>
        <span className="line"></span>
      </div>

      <div className="row">
        {data.map((item, index) => (
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" key={index}>

            <ProjectList  {...item} />
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
