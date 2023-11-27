import { useState } from "react";
import "./SidebarPopup.css";

const SidebarPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
    // if (typeof window != "undefined" && window.document) {
    //   document.body.style.overflow = "hidden";
    // }
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="side-btn">
        <button className="button1" onClick={togglePopup}>
          Need Counsellor!
        </button>
      </div>
      {isOpen && (
        <div className="popup-content" id="popup1">
          <div className="popup-head">
            <h3>Need Counsellor</h3>
            <button className="close-button" onClick={closePopup}>
              &#10006;
            </button>
          </div>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Contact Number" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Course Field" />
          <textarea placeholder="Description"></textarea>
          <button type="submit" className="req">
            Request a Callback
          </button>
        </div>
      )}
    </>
  );
};

export default SidebarPopup;
