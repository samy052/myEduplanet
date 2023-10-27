import { useState } from 'react';
import './SidebarPopup.css';

const SidebarPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div className={`sidebar-popup ${isOpen ? 'open' : ''}`}>
      <div className="popup-container">
        <button className="toggle-button" onClick={togglePopup}>
          Need Counsellor!
        </button>
        {isOpen && (
          <div className="popup-content">
            <button className="close-button" onClick={closePopup}>
              &#10006; {/* Unicode for cross (x) */}
            </button>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Contact Number" />
            <input type="text" placeholder="Course Field" />
            <textarea placeholder="Description"></textarea>
            <button type="submit">Request a Callback</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SidebarPopup;
