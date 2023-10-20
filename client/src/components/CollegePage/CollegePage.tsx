import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./CollegePageStyles.css";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
interface CollegeData {
  [key: string]: string[];
}

const CollegePage = () => {
  const [selectedTab, setSelectedTab] = useState("overview");
  const [formDet, setFormDet] = useState(null);
  const collegeData: CollegeData = {
    overview: ["overview"],
    courses: ["courses"],
    placements: ["placements"],
    infrastructure: ["infrastructure"],
    scholarships: ["scholarships"],
    gallery: ["gallery"],
    faq: ["faq"],
    review: ["reiveiws"],
  };
  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  const param = useParams();
  const { name, city, zipcode, contact } = param;

  useEffect(() => {
    axios
      .get("http://localhost:4000/admin")
      .then((formDet) => {
        console.log("data", formDet.data);
        const uniData = formDet.data
          .filter((u: { formData: { collegeName: string | undefined; }; }) => u.formData.collegeName === name)
          ?.at(0).formData;

        setFormDet(uniData);
      })
      .catch((err) => console.log(err));
  }, [name]);

  // for (const i in formDet[0]) {
  //   const value = i[0];
  //   // console.log("test");
  //   console.log(value);
  // }const firstValue = formDet[0];
  //const firstValue = formDet[0];
  //const firstNestedObject = Object.values(firstValue)[0];
  //const secondValue = Object.values(firstNestedObject)[1];

  //console.log(firstNestedObject[0]);

  // console.log(Object.values(Object.values(formDet[0])[0])[1]);

  // Object.keys(formDet).forEach((formDet.entries())=> console.log(key,value));

  return (
    <div className="college-page">
      <Navbar />
      <div className="college-head-section">
        <img
          src="https://images.pexels.com/photos/5966011/pexels-photo-5966011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="college-head-text">
          <h2>{name}</h2>
          <p>{city}</p>
          <ul>
            {/* <li>{type}</li> */}
            <li>{zipcode}</li>
            <li>Contact - {contact}</li>
          </ul>
        </div>
      </div>

      <div className="college-body-section">
        <nav className="college-filter-btns">
          {Object.keys(collegeData).map((tab) => (
            <div
              key={tab}
              className={`tab-section ${selectedTab === tab ? "active" : ""}`}
              onClick={() => handleTabClick(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </div>
          ))}
        </nav>

        <div className="college-content">
          {collegeData[selectedTab].map((value: string, index: number) => (
            <div key={index} className="college-content-element">
              {formDet && formDet[value]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollegePage;
