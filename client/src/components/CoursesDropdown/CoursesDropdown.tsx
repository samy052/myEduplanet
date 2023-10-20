import { Link } from "react-router-dom";
import "../CoursesDropdown/CoursesDropdown.css"; // Add the CSS file for styling

const CoursesDropdown = () => {
  return (
    <div className="dropdown-container">
      <Link to="/courses/engineering"><p>Engineering</p></Link>
      <Link to="/courses/medical"><p>Medical</p></Link>
      <Link to="/courses/management"><p>Management</p></Link>
      <Link to="/courses/journalism"><p>Journalism</p></Link>
      <Link to="/courses/law"><p>Law</p></Link>
      <Link to="/courses/engineering"><p>Engineering</p></Link>
      <Link to="/courses/medical"><p>Medical</p></Link>
      <Link to="/courses/management"><p>Management</p></Link>
      <Link to="/courses/journalism"><p>Journalism</p></Link>
      <Link to="/courses/engineering"><p>Engineering</p></Link>
      <Link to="/courses/medical"><p>Medical</p></Link>
      <Link to="/courses/management"><p>Management</p></Link>
      <Link to="/courses/journalism"><p>Journalism</p></Link>
      <Link to="/courses/law"><p>Law</p></Link>
    
      
    </div>
  );
};

export default CoursesDropdown;