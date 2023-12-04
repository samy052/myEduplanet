import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Fuse from "fuse.js";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import fly1 from "../../../../assets/img/1.png";
import fly2 from "../../../../assets/img/2.png";
import fly3 from "../../../../assets/img/3.png";

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

  const settings = {
    // dots: true,
    navigation: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const sliderOptions = [
    {
      id: 1,
      buttonText: "Avail Now",
      image: fly1,
      page: "https://www.google.com",
    },
    {
      id: 2,
      buttonText: "Assess Now",
      image: fly2,
      page: "https://www.google.com",
    },
    {
      id: 3,
      buttonText: "Check Now",
      image: fly3,
      page: "https://www.google.com",
    },
  ];

  return (
    <>
      <div className="hero-section">
        <section className="search_section">
          <div className="search_section_heading">
            <h1>
              Discover your dream college
              {/* <br /> */}
            </h1>
          </div>

          <div className="input-box">
            <input
              type="text"
              placeholder="Search for colleges, exams ... "
              autoComplete="off"
              onChange={handleChange}
              value={search}
            />
            <button className="button">
              {search === "" ? (
                <i className="fa fa-search"></i>
              ) : (
                <i className="fa fa-times" onClick={handleClose}></i>
              )}
            </button>

            {search !== "" && (
              <div className="search_result">
                {filteredClgName.slice(0, 300).map((college, index) => (
                  <Link
                    to={`/colleges/${college["Name"]}/${college["City"]}/${college["Zipcode"]}/${college["Contact_Number"]}`}
                    key={index}
                    // target="_blank"
                    className="search_suggestion_line"
                  >
                    {college.Name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        <div className="slider-container">
          <section className="slider">
            <Slider {...settings}>
              {sliderOptions.map((val) => (
                <div key={val.id} className="hero-section-flyer">
                  <img src={val.image} />
                  <button>
                    <Link to={"/about"}>{val.buttonText}</Link>
                  </button>
                </div>
              ))}
            </Slider>
          </section>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
