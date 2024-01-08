import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import CoursesDropdown from "../CoursesDropdown/CoursesDropdown";
import ExamDropdown from "../ExamDropdown/ExamDropdown";

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [icon, seticon] = useState(false);
  const [display, setDisplay] = useState(false);
  function handleClick() {
    seticon((icon) => !icon);
    setDisplay((display) => !display);
  }
  console.log(currentUser);

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
          <Link to={"/profile"}>
            {currentUser ? (
              <img src={currentUser.avatar} className="user-img" />
            ) : (
              <p className="nav-links-mobile">SignUp/LogIn</p>
            )}
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;