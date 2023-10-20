import { Link } from "react-router-dom";
import "../ExamDropdown/ExamDrpdown.css"; // Add the CSS file for styling
const ExamDropdown = () => {
  return (
    <div className="dropdown-containerex">
        
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

export default ExamDropdown;