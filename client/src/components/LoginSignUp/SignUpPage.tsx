// import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import {
//   signInStart,
//   signInSuccess,
//   signInFailure,
// } from "../../redux/user/userSlice";
import OAuth from "../OAuth";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        alert("Failed");
        return;
      }
      setLoading(false);
      navigate("/loginPage");
    } catch (error) {
      setLoading(false);
      alert("User Already Exists");
    }
  };

  // const handleSubmit = async (e: { preventDefault: () => void }) => {
  //   e.preventDefault();

  //   try {
  //     dispatch(signInStart());
  //     const res = await axios.post("/api/auth/signup", formData);
  //     console.log(res.data);
  //     dispatch(signInSuccess(res.data));
  //     if (res.data.success === false) {
  //       dispatch(signInFailure(res.data.success));
  //       return;
  //     }
  //     navigate("/loginPage");
  //   } catch (error) {
  //     console.log(error);
  //     dispatch(signInFailure(error));
  //     alert("User Already Exists");
  //   }
  // };

  return (
    <div className="login-overlay">
      <div className="login-container">
        <h2>Sign Up</h2>
        <form action="" onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your Name"
            required
            onChange={handleChange}
          />

          <label>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your Email"
            required
            onChange={handleChange}
          />

          <label>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Create a Password"
            required
            onChange={handleChange}
          />

          <div className="element-container">
            <div>
              <label> Studying In </label>
              <select id="level" onChange={handleChange}>
                <option>option 1</option>
                <option>option 2</option>
                <option>option 3</option>
                <option>option 4</option>
              </select>
            </div>

            <div>
              <label> Interested In </label>
              <select id="interest" onChange={handleChange}>
                <option>option 1</option>
                <option>option 2</option>
                <option>option 3</option>
                <option>option 4</option>
              </select>
            </div>
          </div>
          {loading && <p>Loading</p>}

          <button type="submit" className="login-button">
            Sign Up
          </button>
          <OAuth />
        </form>
        <div className="to-second-page">
          <p>Already have an account?</p>
          <p className="second-page-link">
            <Link to={"/loginPage"}>Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;