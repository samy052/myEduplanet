import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Colleges = () => {
  const [colleges, setColleges] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const recordsPerPage = 1000;

  const lastIndex = recordsPerPage * currentPage;

  const firstIndex = lastIndex - recordsPerPage;

  const records = colleges.slice(firstIndex, lastIndex);

  const noOfPages = Math.ceil(colleges.length / recordsPerPage);

  const numbers = [...Array(noOfPages + 1).keys()].slice(1);

  function prevPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changeCurrentPage(id: number) {
    setCurrentPage(id);
  }

  function nextPage() {
    if (currentPage !== noOfPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  useEffect(() => {
    axios
      .get("http://localhost:4000/CollegeName")
      .then((colleges) => setColleges(colleges.data))
      .catch((err) => console.log(err));
  }, []);
  // + "/" + college["City"]
  return (
    <>
      <div className="colleges-page">
        <Navbar />
        <div className="college-card-container">
          {records.map((college) => (
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
              <div className="college-card">
                <div className="college-card-img-section">
                  <img
                    src="https://images.pexels.com/photos/6334869/pexels-photo-6334869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                  />
                </div>
                <div className="college-card-text-section">
                  <div className="college-name-link">
                    <h3>{college["Name"]}</h3>
                  </div>

                  <div className="college-attributes">
                    <p>{college["Zipcode"]}</p>
                    <h4>|</h4>
                    <p>{college["City"]}</p>
                    <h4>|</h4>
                    <p>{college["Contact_Number"]}</p>
                  </div>

                  <div className="college-attributes pos">
                    <a href={college["website"]}>Link</a>
                    <h4>|</h4>
                    <a href="#">{college["Category"]}</a>
                    <h4>|</h4>
                    <a href="#">Placements</a>
                  </div>

                  <div className="college-btns">
                    <button>Brochure</button>
                    <button>Inquire</button>
                    <button>Compare</button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <nav className="pagination">
          <ul className="pagination-list">
            <li className="pagination-item">
              <a href="#" onClick={prevPage} className="pagination-link">
                <i className="fa-solid fa-arrow-left"></i>
              </a>
            </li>
            {numbers.map((n, i) => (
              <li key={i} className="pagination-item">
                <a
                  href="#"
                  className={`pagination-link ${
                    currentPage === n ? "active" : ""
                  }`}
                  onClick={() => changeCurrentPage(n)}
                >
                  {n}
                </a>
              </li>
            ))}
            <li className="pagination-item">
              <a href="#" onClick={nextPage} className="pagination-link">
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Colleges;

// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const Colleges = () => {
//   const [colleges, setColleges] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const recordsPerPage = 25;

//   useEffect(() => {
//     axios
//       .get("http://localhost:4000/CollegeName")
//       .then((colleges) => setColleges(colleges.data))
//       .catch((err) => console.log(err));
//   }, []);

//   const lastIndex = recordsPerPage * currentPage;
//   const firstIndex = lastIndex - recordsPerPage;
//   const records = colleges.slice(firstIndex, lastIndex);
//   const noOfPages = Math.ceil(colleges.length / recordsPerPage);

//   const maxVisibleButtons = 10;
//   const numbers = [];

//   if (noOfPages <= maxVisibleButtons) {
//     numbers.push(...Array(noOfPages).keys()).map((i) => i + 1);
//   } else {
//     let startPage = Math.max(1, currentPage - Math.floor(maxVisibleButtons / 2));
//     let endPage = Math.min(noOfPages, startPage + maxVisibleButtons - 1);

//     if (endPage - startPage < maxVisibleButtons - 1) {
//       startPage = endPage - maxVisibleButtons + 1;
//     }

//     numbers.push(...Array(endPage - startPage + 1).keys()).map((i) => i + startPage);
//   }

//   function prevPage() {
//     if (currentPage !== 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   }

//   function changeCurrentPage(id) {
//     setCurrentPage(id);
//   }

//   function nextPage() {
//     if (currentPage !== noOfPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   }

//   return (
//     <div className="colleges-page">
//       <div className="college-card-container">
//         {records.map((college) => (
//           <Link
//             to={`/colleges/${college["Name"]}/${college["City"]}/${college["Zipcode"]}/${college["Contact_Number"]}`}
//             key={college["_id"]}
//           >
//             <div className="college-card">
//               {/* ... Your college card code ... */}
//             </div>
//           </Link>
//         ))}

//         <nav className="pagination">
//           <ul>
//             <li>
//               <a href="#" onClick={prevPage}>
//                 <i className="fa-solid fa-arrow-left"></i>
//               </a>
//             </li>
//             {numbers.map((n, i) => (
//               <li key={i}>
//                 <a
//                   href="#"
//                   className={`page-numbers ${currentPage === n ? "active__btn" : ""}`}
//                   onClick={() => changeCurrentPage(n)}
//                 >
//                   {n}
//                 </a>
//               </li>
//            ) )}
//             <li>
//               <a href="#" onClick={nextPage}>
//                 <i className="fa-solid fa-arrow-right"></i>
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Colleges;
