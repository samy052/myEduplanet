import React, { useEffect, useState } from "react";
import FormInput from "./FormInput"; // Import the FormInput component
import "../Admin/Admin.css";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Admin = () => {
  const [formData, setFormData] = useState({
    collegeName: "",
    overview: "",
    courses: "",
    fees: "",
    scholarships: "",
    placements: "",
    infrastructure: "",
    gallery: "",
    review: "",
    faq: "",
  });
  const [clgname, setclgName] = useState([]);
  const [isCollegeNameDisabled, setIsCollegeNameDisabled] = useState(false);

  // const [clgdata,setclgData] = useState([])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setIsCollegeNameDisabled(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    axios.post("http://localhost:4000/admin", { formData });
    console.log("Form submitted:", formData);

    setFormData({
      collegeName: "",
      overview: "",
      courses: "",
      fees: "",
      scholarships: "",
      placements: "",
      infrastructure: "",
      gallery: "",
      review: "",
      faq: "",
    });
    alert("data saved");
  };

  const notify = () => {
    toast.success("Form Submitted", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  useEffect(() => {
    axios
      .get("http://localhost:4000/CollegeName")
      .then((clgname) => setclgName(clgname.data))
      .catch((err) => console.log(err));
  }, []);

  // useEffect(() => {
  //   axios
  //     .put("http://localhost:4000/CollegeData")
  //     .then((clgdata) => setclgData(clgdata.data))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <>
      <nav className="NavBarItems">
        <Link to="/" className="logo">
          <h1>MyEduPlanet</h1>
        </Link>
      </nav>

      <div className="admin-form">
        <h2>Admin Dashboard</h2>
        <form onSubmit={handleSubmit} action="POST">
          {/* College Name with suggestions */}
          <div className="form-input">
            <label htmlFor="collegeName">College Name</label>
            <input
              type="text"
              id="collegeName"
              name="collegeName"
              placeholder="Enter college name"
              value={formData.collegeName}
              onChange={handleChange}
              list="colleges" // Use a datalist for suggestions
              disabled={isCollegeNameDisabled}
            />
            <datalist id="colleges">
              {clgname.map((cname, index) => (
                <option key={index} value={cname["Name"]} />
              ))}
            </datalist>
          </div>

          {/* Overview */}
          <FormInput
            label="Overview"
            type="textarea"
            name="overview"
            placeholder="Enter overview"
            value={formData.overview}
            onChange={handleChange}
          />

          {/* Courses */}
          <FormInput
            label="Courses"
            type="textarea"
            name="courses"
            placeholder="Enter courses"
            value={formData.courses}
            onChange={handleChange}
          />

          {/* Fees */}
          <FormInput
            label="Fees"
            type="textarea"
            name="fees"
            placeholder="Enter fees"
            value={formData.fees}
            onChange={handleChange}
          />

          {/* Scholarships */}
          <FormInput
            label="Scholarships"
            type="textarea"
            name="scholarships"
            placeholder="Enter scholarships"
            value={formData.scholarships}
            onChange={handleChange}
          />

          {/* Placements */}
          <FormInput
            label="Placements"
            type="textarea"
            name="placements"
            placeholder="Enter placements"
            value={formData.placements}
            onChange={handleChange}
          />

          {/* Infrastructure */}
          <FormInput
            label="Infrastructure"
            type="textarea"
            name="infrastructure"
            placeholder="Enter infrastructure details"
            value={formData.infrastructure}
            onChange={handleChange}
          />

          {/* Gallery */}
          <FormInput
            label="Gallery"
            type="file"
            name="gallery"
            accept="image/*"
            value={formData.gallery}
            onChange={handleChange}
          />

          {/* Review */}
          <FormInput
            label="Review"
            type="textarea"
            name="review"
            placeholder="Enter review"
            value={formData.review}
            onChange={handleChange}
          />

          {/* FAQ */}
          <FormInput
            label="FAQ"
            type="textarea"
            name="faq"
            placeholder="Enter FAQ"
            value={formData.faq}
            onChange={handleChange}
          />

          <button type="submit" onClick={notify}>
            Submit
          </button>
          <ToastContainer />
        </form>
      </div>
    </>
  );
};

export default Admin;
