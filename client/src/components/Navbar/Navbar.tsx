// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

// import CoursesDropdown from "../CoursesDropdown/CoursesDropdown";
// import ExamDropdown from "../ExamDropdown/ExamDropdown";

// const Navbar = () => {
//   const { currentUser } = useSelector((state) => state.user);
//   const [icon, seticon] = useState(false);
//   const [display, setDisplay] = useState(false);
//   function handleClick() {
//     seticon((icon) => !icon);
//     setDisplay((display) => !display);
//   }
//   console.log(currentUser);

//   const updateMenuIcon = icon ? "fa-solid fa-x" : "fa-solid fa-list";
//   const displayNavItems = display ? "nav-menu active" : "nav-menu";
//   return (
//     <>
//       <nav className="NavBarItems">
//         <Link to="/" className="logo">
//           <h1>MyEduPlanet</h1>
//         </Link>
//         <div className="menu-icon" onClick={handleClick}>
//           <i className={updateMenuIcon}></i>
//         </div>
//         <ul className={displayNavItems}>
//           <Link to={"/colleges"} className="nav-links">
//             Colleges
//           </Link>
//           <Link to={"/courses"} className="nav-links">
//             Courses
//             <CoursesDropdown />
//           </Link>
//           <Link to={"/exams"} className="nav-links">
//             Exams
//             <ExamDropdown />
//           </Link>
//           <Link to={"/about"} className="nav-links">
//             About
//           </Link>
//           <Link to={"/contact"} className="nav-links">
//             Contact
//           </Link>
//           <Link to={"/profile"}>
//             {currentUser ? (
//               <img src={currentUser.avatar} className="user-img" />
//             ) : (
//               <p className="nav-links-mobile">SignUp/LogIn</p>
//             )}
//           </Link>
//         </ul>
//       </nav>
//     </>
//   );
// };

// export default Navbar;





import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../../../assets/img/Logo-removebg-preview (1).png";
import { useState } from "react";
const links = [
  {
    id: 1,
    link: "/colleges",
    name: "Colleges",
  },
  {
    id: 2,
    link: "/courses",
    name: "Courses",
  },
  {
    id: 3,
    link: "/exams",
    name: "Exams",
  },
  {
    id: 4,
    link: "/about",
    name: "About",
  },
  {
    id: 5,
    link: "/blogs",
    name: "Blog",
  },
];
const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [overlay, setOverlay] = useState(false);
  const handleClick = () => {
    setOverlay(!overlay);
  };
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">
          <img src={logo} alt="" />
        </Link>

        <ul>
          {links.map((l) => (
            <Link key={l.id} to={l.link} className="nav-links">
              {l.name}
            </Link>
          ))}
        </ul>

        <div className="toggle-options">
          <Link to={"/profile"}>
            {currentUser ? (
              <img src={currentUser.avatar} className="user-img" />
            ) : (
              <p className="nav-links-mobile">SignUp/LogIn</p>
            )}
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="14"
            viewBox="0 0 448 512"
            onClick={handleClick}
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </div>
      </nav>

      <section className={overlay ? "open overlay" : "overlay"}>
        <div className="overlay-close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="12"
            viewBox="0 0 384 512"
            onClick={handleClick}
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </div>
        <div className="overlay-content">
          {links.map((l) => (
            <Link key={l.id} to={l.link}>
              {l.name}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Navbar;