import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "../src/App.css";

import "./components/Navbar/NavbarStyles.css";

import Home from "./components/Home/Home";
import "./components/Home/HomeStyles.css";

import Courses from "./components/Courses/Courses";
import "./components/Courses/CoursesStyles.css";

import Exams from "./components/Exams/Exams";
import "./components/Exams/ExamsStyles.css";

import About from "./components/About/About";
import "./components/About/AboutStyles.css";

import Contact from "./components/Contact/Contact";
import "./components/Contact/ContactStyles.css";

import Colleges from "./components/Colleges/Colleges";
import "./components/Colleges/CollegesStyles.css";

import CollegePage from "../src/components/CollegePage/CollegePage";
import "./components/CollegePage/CollegePageStyles.css";
import Admin from "./Admin/Admin";
import EditProfile from "./components/Profile/EditProfile";
import SidebarPopup from "./components/CounsellingSidebar/SidebarPopup";

const App = () => {
  return (
    <>
      <Router>
        <SidebarPopup />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/colleges" element={<Colleges />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/colleges/:name/:city/:zipcode/:contact"
            element={<CollegePage />}
          />{" "}
          {/* //city */}
          <Route path="/admin" element={<Admin />} />
          <Route path="/manage/:name/:email/:city" element={<EditProfile />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
