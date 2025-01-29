import React from "react";
import "./Experience.scss";

export default function Experience() {
  const currentYear = new Date().getFullYear();
  const data = [
    {
      id: 1,
      name: "ZF Groups, Hyderabad ",
      year: `2022 - ${currentYear}`,
      title: "Role : SIL Engineer",
      role: "I work as an ADAS SIL Integrator, focusing on integrating, testing, and validating software systems designed for advanced driver-assistance systems (ADAS). My role involves creating a virtual testing environment where I simulate real-world driving scenarios to validate the functionality, performance, and safety of ADAS software.",
      tools: "Tools Used : SIL System Integration, C++ , Python , QT , Docker, Linux",
      icon: "assets/ZF.svg.png",
      featured: true,
    },
  ];

  return (
    <div className="Experience" id="Experience">
      <h1>Experience</h1>
      <div className="container">
        {data.map((d) => (
          <div key={d.id} className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img className="icon" src={d.icon} alt={`${d.name} logo`} />
            </div>
            <div className="content">
              <h3 className="name">{d.name}</h3>
              <h3 className="title">{d.title}</h3>
              <h3 className="year">{d.year}</h3>
              <h4 className="role">{d.role}</h4>
              {/* Extra Line Break after Role */}
              <br />
              <h4 className="tools">{d.tools}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
