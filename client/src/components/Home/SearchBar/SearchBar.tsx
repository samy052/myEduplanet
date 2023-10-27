import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Fuse from "fuse.js";

interface College {
  Name: string;
  City: string;
  Address: string;
  Contact_Number: string;
  Zipcode: string;
  // Add other properties as needed
}

const SearchBar = () => {
  const [search, setSearch] = useState<string>("");
  const [clgname, setClgName] = useState<College[]>([]);
  const [filteredClgName, setFilteredClgName] = useState<College[]>([]);
  const [selectedOption, setSelectedOption] = useState("Colleges");

  // Create a Fuse instance for searching
  const fuse = new Fuse(clgname, {
    keys: ["Name", "City", "Address", "Contact_Number", "Zipcode"],
    includeScore: true,
    threshold: 0.4, // Adjust this threshold as needed
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);

    // Use Fuse to search for suggestions based on user input
    if (value) {
      const result = fuse.search(value);
      const suggestions = result.map((item) => item.item);
      setFilteredClgName(suggestions);
    } else {
      setFilteredClgName([]);
    }
  };

  const handleClose = () => {
    setSearch("");
    setFilteredClgName([]);
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/CollegeName")
      .then((response) => {
        // console.log("API Response:", response.data);
        setClgName(response.data as College[]);
        setFilteredClgName(response.data as College[]); // Initialize filtered results
      })
      .catch((err) => console.log(err));
  }, []);

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <>
      <section className="search_section">
        <div className="search_section_heading">
          <h1>Find college, <br />courses & exams</h1>
        </div>
        <div className="input-box">
          <input
            type="text"
            placeholder="Search for colleges, courses ... "
            autoComplete="off"
            onChange={handleChange}
            value={search}
          />
          <div className="search_options">
            <span
              className={selectedOption === "Colleges" ? "active_option" : ""}
              onClick={() => handleOptionChange("Colleges")}
            >
              Colleges
            </span>
            <span
              className={selectedOption === "Exams" ? "active_option" : ""}
              onClick={() => handleOptionChange("Exams")}
            >
              Exams
            </span>
            <span
              className={selectedOption === "Courses" ? "active_option" : ""}
              onClick={() => handleOptionChange("Courses")}
            >
              Courses
            </span>
          </div>

          <button className="button">
            {search === "" ? (
              <i className="fa fa-search"></i>
            ) : (
              <i className="fa fa-times" onClick={handleClose}></i>
            )}
          </button>
        </div>
        {search !== "" && (
          <div className="search_result">
            {filteredClgName.slice(0, 300).map((college, index) => (
              <Link
                to={`/${selectedOption.toLowerCase()}/${college["Name"]}/${college["City"]}/${college["Zipcode"]}/${college["Contact_Number"]}`}
                key={index}
                // target="_blank"
                className="search_suggestion_line"
              >
                {college.Name}
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default SearchBar;
