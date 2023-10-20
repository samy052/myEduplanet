import { useState } from "react";
import Navbar from "../Navbar/Navbar";

interface CourseData {
  [key: string]: string[];
}

const Courses = () => {
  const [selectedDomain, setSelectedDomain] = useState("engineering");

  const courseData: CourseData = {
    engineering: ["B.Tech", "M.Tech", "B.E"],
    medical: ["MBBS", "BDS", "B.Sc Nursing"],
    management: ["MBA", "BBA", "PGDM"],
    journalism: ["BA in Journalism", "MA in Journalism"],
    law: ["LLB", "BA LLB", "BBA LLB"],
  };

  const handleTabClick = (domain: string) => {
    setSelectedDomain(domain);
  };

  return (
    <>
      <Navbar />
      <div className="courses-by-domain">
        <div className="domain-tabs">
          {Object.keys(courseData).map((domain) => (
            <div
              key={domain}
              className={`domain-tab ${
                selectedDomain === domain ? "active" : ""
              }`}
              onClick={() => handleTabClick(domain)}
            >
              {domain.charAt(0).toUpperCase() + domain.slice(1)}
            </div>
          ))}
        </div>
        <div className="degree-list">
          {courseData[selectedDomain].map((degree: string, index: number) => (
            <div key={index} className="degree">
              {degree}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Courses;
