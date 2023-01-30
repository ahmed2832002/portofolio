import React from "react";
import "./WorkExperience.css";
import { VerticalTimeline,
    VerticalTimelineElement,}from"react-vertical-timeline-component"
    import "react-vertical-timeline-component/style.min.css"

import { MdGroupWork } from "react-icons/md";

const WorkExperience = () => {
  const data = [
    {
      companyname: "Google",
      position: "Full Stack Developer",
      des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
      year: "2021-2022",
      techskills: [
        {
          techname: "Node JS",
        },
        {
          techname: "Express JS",
        },
        {
          techname: "React JS",
        },
        {
          techname: "Material UI",
        },
      ],
    },

    {
      companyname: "Facebook",
      position: "Full Stack Developer",
      des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
      year: "2020-2021",

      techskills: [
        {
          techname: "Node JS",
        },
        {
          techname: "Express JS",
        },
        {
          techname: "Vue JS",
        },
        {
          techname: "Material UI",
        },
      ],
    },

    {
      companyname: "Youtube",
      position: "Full Stack Developer",
      des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
      year: "2019-2020",

      techskills: [
        {
          techname: "Django",
        },
        {
          techname: "Express JS",
        },
        {
          techname: "Vue JS",
        },
        {
          techname: "Material UI",
        },
      ],
    },

    {
      companyname: "Microsoft",
      position: "Full Stack Developer",
      des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
      year: "2018-2019",

      techskills: [
        {
          techname: "Python",
        },
        {
          techname: "Express JS",
        },
        {
          techname: "Vue JS",
        },
        {
          techname: "Material UI",
        },
      ],
    },

    {
      companyname: "WhatsApp",
      position: "Full Stack Developer",
      des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
      year: "2017-2018",

      techskills: [
        {
          techname: "Typescript",
        },
        {
          techname: "Express JS",
        },
        {
          techname: "Next JS",
        },
        {
          techname: "Material UI",
        },
      ],
    },

    {
      companyname: "Instagram",
      position: "Full Stack Developer",
      des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
      year: "2016-2017",

      techskills: [
        {
          techname: "Javascript",
        },
        {
          techname: "Express JS",
        },
        {
          techname: "Next JS",
        },
        {
          techname: "Material UI",
        },
      ],
    },
  ];

  const colors = [
    "#800000",
    "#FF8042",
    "#001CCE",
    "#4B088A",
    "#FF6347",
    "#FF1042",
  ];

  return (
    <div className="container workexperience-section" id="workexperience">
      <div className="section-title text-center">
        <h5>Work Experience</h5>
        <span className="line"></span>
      </div>

      <div className="timeline-section">
        <VerticalTimeline lineColor="#FF1042">
          {data.map((item, index) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: colors[index], color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #FFBB24" }}
              date={item.year}
              dateClassName="date-class"
              iconStyle={{ background: colors[index], color: "#fff" }}
              icon={<MdGroupWork />}
            >
              <h3 className="vertical-timeline-element-title">
                {item.companyname}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {item.position}
              </h4>

              <div className="row">
                {item.techskills.map((tec, index) => (
                  <div
                    className="col-xl-4 col-lg-4 col-md-6 col-sm-12"
                    key={index}
                  >
                    <div className="tech-skills">
                      <p>{tec.techname}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p>{item.des}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>


      
    </div>
  );
};

export default WorkExperience;
