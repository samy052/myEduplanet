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
import SingleBlog from "./components/Blogs/SingleBlog";
import Blog from "./components/Blogs/Blog";
import AdminBlog from "./components/Blogs/AdminBlog";
import Navbar from "./components/Navbar/Navbar";

import LoginPage from "./components/LoginSignUp/LoginPage";
import SignUpPage from "./components/LoginSignUp/SignUpPage";
import "./components/LoginSignUp/LoginSignUpStyles.css";

import PrivateRoute from "./components/PrivateRoute";

import Profile from "./components/Profile/Profile";



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
          {/* Display Blogs */}
          <Route path="/blogs" element={<Blog />} />
          {/* Manage Blogs (Admin Panel) */}
          <Route path="/admin/blogs" element={<AdminBlog />} />
          {/* Display Single Blog */}
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blogs/:blogId" element={<SingleBlog />} />
          <Route
            path="/colleges/:name/:city/:zipcode/:contact"
            element={<CollegePage />}
          />{" "}
          {/* //city */}
          <Route path="/admin" element={<Admin />} />
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path="/signUpPage" element={<SignUpPage />} />
          <Route path="/manage/:name/:email/:city" element={<EditProfile />} />
        </Routes>
          
        
      </Router>
    </>
  );
};

export default App;
