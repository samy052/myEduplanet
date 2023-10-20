import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import LoginSignup from "../LoginSignup/LoginSignup";
import "../LoginSignup/LoginSignup.css";

import CoursesDropdown from "../CoursesDropdown/CoursesDropdown";
import ExamDropdown from "../ExamDropdown/ExamDropdown";

import axios from "axios";

const Navbar = () => {
  const [icon, seticon] = useState(false);
  const [display, setDisplay] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const [users, setUsers] = useState([]);
  console.log(users);

  useEffect(() => {
    axios
      .get("http://localhost:4000/profile")
      .then((users) => {
        setUsers(users.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleClick() {
    seticon((icon) => !icon);
    setDisplay((display) => !display);
  }

  // function logout() {
  //   axios
  //     .get("http://localhost:4000/logout")
  //     .then((users) => {
  //       console.log(users.data);
  //       setUsers(users.data);
  //     })
  //     .catch((err) => console.log(err));
  //   alert("Logged Out");
  //   console.log(users);
  // }

  const updateMenuIcon = icon ? "fa-solid fa-x" : "fa-solid fa-list";
  const displayNavItems = display ? "nav-menu active" : "nav-menu";

  return (
    <>
      <nav className="NavBarItems">
        <Link to="/" className="logo">
          <h1>MyEduPlanet</h1>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={updateMenuIcon}></i>
        </div>
        <ul className={displayNavItems}>
          <Link to={"/colleges"} className="nav-links">
            Colleges
          </Link>
          <Link to={"/courses"} className="nav-links">
            Courses
            <CoursesDropdown />
          </Link>
          <Link to={"/exams"} className="nav-links">
            Exams
            <ExamDropdown />
          </Link>
          <Link to={"/about"} className="nav-links">
            About
          </Link>
          <Link to={"/contact"} className="nav-links">
            Contact
          </Link>

          {/* {users != 0 && (
            <>
              <div className="user">
                <i className="fa-regular fa-user"></i>
                <div className="user-dropdown-container">
                  <div className="user-details">
                    <p>{users["username"]}</p>
                    <p>{users["email"]}</p>
                  </div>
                  <Link
                    to={
                      "/manage" +
                      "/" +
                      users["username"] +
                      "/" +
                      users["email"] +
                      "/" +
                      users["city"]
                    }
                  >
                    <p>Manage Profile</p>
                  </Link>

                  <Link to="/" onClick={logout}>
                    <p>Log Out</p>
                  </Link>
                </div>
              </div>
            </>
          )}
          {users == 0 && (
            <button
              onClick={() => {
                setModalOpen(true);
              }}
              className="nav-links-mobile"
            >
              Login/Signup
            </button>
          )} */}

          <button
            onClick={() => {
              setModalOpen(true);
            }}
            className="nav-links-mobile"
          >
            Login/Signup
          </button>
        </ul>
      </nav>
      {modalOpen && <LoginSignup setOpenModal={setModalOpen} />}
    </>
  );
};

export default Navbar;
