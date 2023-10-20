import React from "react";
import { Link, useParams } from "react-router-dom";
import "./EditProfileStyles.css";
import Navbar from "../Navbar/Navbar";

const EditProfile: React.FC = () => {
  const params = useParams();
  const { name, email, city } = params;
  return (
    <>
      <Navbar />

      <div className="container-profile">
        <div className="profile-section1">
          <h1>My Profile</h1>
          <h4>Welcome: {name}</h4>
        </div>
        <div className="profile-section2">
          <h3>Basic Info</h3>
          <p>First Name: {name}</p>
          <p>Last Name: Srivastava</p>
          <p>Email: {email}</p>
          <p>City: {city}</p>
          <br />
          <h3>Educational Details</h3>
          <p>Education Qualification: Engineering</p>
          <br />
          <Link className="link" to="/edit-profile">
            Edit Profile
          </Link>
          <Link className="link to-change-password" to="/change-password">
            Change Password
          </Link>
        </div>
      </div>
    </>
  );
};

export default EditProfile;

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './EditProfile.css';

// const EditProfile: React.FC = () => {
//   const [userData, setUserData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     city: '',
//     education: '',
//   });

//   useEffect(() => {
//     // Fetch user data from the backend API
//     fetchUserData();
//   }, []);

//   const fetchUserData = async () => {
//     try {
//       const response = await fetch('/api/user'); // Replace with your API endpoint
//       const data = await response.json();
//       setUserData({
//         firstName: data.firstName,
//         lastName: data.lastName,
//         email: data.email,
//         city: data.city,
//         education: data.education,
//       });
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//     }
//   };

//   return (
//     <div className="container-profile">
//       <div className="profile-section1">
//         <h1>My Profile</h1>
//         <h4>Welcome: {userData.firstName}</h4>
//       </div>
//       <div className="profile-section2">
//         <h3>Basic Info</h3>
//         <p>First Name: {userData.firstName}</p>
//         <p>Last Name: {userData.lastName}</p>
//         <p>Email: {userData.email}</p>
//         <p>City: {userData.city}</p>
//         <br />
//         <h3>Educational Details</h3>
//         <p>Education Qualification: {userData.education}</p>
//         <Link className="link" to="/edit-profile">
//           Edit Profile
//         </Link>
//         <Link className="link" to="/change-password">
//           Change Password
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default EditProfile;
