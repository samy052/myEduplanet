import React from "react";
import "./EditProfileStyles.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import {
  deleteUserFailure,
  deleteUserSuccess,
  signOutUserStart,
} from "../../redux/user/userSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Profile: React.FC = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignOut = async () => {
    try {
      dispatch(signOutUserStart());
      const res = await fetch("/api/auth/signout");
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deleteUserSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(deleteUserFailure(error));
    }
  };
  return (
    <>
      <Navbar />

      <div className="container-profile">
        <div className="profile-section2">
          <h1>
            Name: <span>{currentUser.username}</span>
          </h1>
          <h1>Email:{currentUser.email}</h1>
          <h1>Studying In:{currentUser.level}</h1>
          <h1>Interested In:{currentUser.interest}</h1>
          <button onClick={handleSignOut} className="link">
            Sign Out
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;