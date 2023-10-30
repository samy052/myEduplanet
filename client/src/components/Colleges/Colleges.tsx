import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Colleges = () => {
  const [colleges, setColleges] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 15;
  const maxPageTiles = 10;

  useEffect(() => {
    axios
      .get("http://localhost:4000/CollegeName")
      .then((colleges) => setColleges(colleges.data))
      .catch((err) => console.log(err));
  }, []);

  const noOfPages = Math.ceil(colleges.length / recordsPerPage);


  const firstIndex = (currentPage - 1) * recordsPerPage;
  const lastIndex = Math.min(currentPage * recordsPerPage, colleges.length);

  function prevPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function nextPage() {
    if (currentPage < noOfPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  function generatePageNumbers() {
    const middlePage = Math.ceil(maxPageTiles / 2);
    const startPage = Math.max(currentPage - middlePage, 1);
    const endPage = Math.min(startPage + maxPageTiles - 1, noOfPages);

    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  }

  return (
    <>
      <Navbar />
      <div className="colleges-page">
        <div className="college-card-container">
          {colleges.slice(firstIndex, lastIndex).map((college) => (
            <div className="college-card" key={college["_id"]}>
              <img
                id="image-div"
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <div className="college-card-text-section">
                <h3>{college["Name"]}</h3>
                <p>{college["City"]}</p>
                <p>{college["Category"]}</p>
                <div className="college-card-text-section-btns">
                  <button className="read-more-btn">
                    {" "}
                    <Link
                      key={college["_id"]}
                      to={
                        "/colleges/" +
                        college["Name"] +
                        "/" +
                        college["City"] +
                        "/" +
                        college["Zipcode"] +
                        "/" +
                        college["Contact_Number"]
                      }
                    >
                      Read More
                    </Link>
                  </button>
                  <button className="app-now">
                    <span>Apply Now</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <nav className="pagination">
          <ul className="pagination-list">
            <li className="pagination-item">
              <button
                disabled={currentPage === 1}
                onClick={prevPage}
                className="pagination-link"
              >
                <i className="fa-solid fa-arrow-left"></i>
              </button>
            </li>
            {generatePageNumbers().map((n) => (
              <li key={n} className="pagination-item">
                <button
                  className={`pagination-link ${
                    currentPage === n ? "active" : ""
                  }`}
                  onClick={() => setCurrentPage(n)}
                >
                  {n}
                </button>
              </li>
            ))}
            <li className="pagination-item">
              <button
                disabled={currentPage === noOfPages}
                onClick={nextPage}
                className="pagination-link"
              >
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Colleges;