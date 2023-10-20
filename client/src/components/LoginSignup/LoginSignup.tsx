import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface LoginSignupProps {
  setOpenModal: (arg: boolean) => void;
}

const LoginSignup = ({ setOpenModal }: LoginSignupProps) => {
  const navigate = useNavigate();

  const [isLoginForm, setIsLoginForm] = useState(true);

  const [logPass, setLogPass] = useState("");
  const [logEmail, setLogEmail] = useState("");

  async function login(ev: { preventDefault: () => void }) {
    ev.preventDefault();
    await axios
      .post("http://localhost:4000/login", { logEmail, logPass })
      .then((result) => {
        if (result.data === "Success") {
          setOpenModal(false);
          window.location.reload();
          alert("Logged In");
        } else if (result.data === "Invalid") {
          alert("Invalid Password");
        } else if (result.data === "69") {
          alert("Welcome admin");
          setOpenModal(false);
          navigate("/admin");
        } else {
          alert("No User Exists");
        }
      });
  }

  //sign up
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [course, setCourse] = useState("");
  const [phonenumber, setPhonenumber] = useState("");

  async function signup(ev: { preventDefault: () => void }) {
    ev.preventDefault();
    await axios
      .post("http://localhost:4000/signup", {
        username,
        email,
        password,
        course,
      })
      .then(() => {
        setIsLoginForm(true);
        alert("Signed Up");
      })
      .catch((error) => console.log(error));
  }

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  //Log In Part
  if (isLoginForm === true) {
    return (
      <div className="center">
        <div className="heading-section">
          <h1>Log In</h1>
          <button
            className="cross-button bg-none"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <form method="POST" onSubmit={login}>
          <div className="txt_field">
            <input
              type="email"
              name="logEmail"
              required
              value={logEmail}
              onChange={(ev) => setLogEmail(ev.target.value)}
            />
            <span></span>
            <label>Email</label>
          </div>
          <div className="txt_field">
            <input
              type="password"
              name="logPass"
              required
              value={logPass}
              onChange={(ev) => setLogPass(ev.target.value)}
            />
            <span></span>
            <label>Password</label>
          </div>
          <input type="submit" value="Login" />
          <div className="signup_link">
            Not a member?{" "}
            <button className="bg-none" onClick={toggleForm}>
              Signup
            </button>
          </div>
        </form>
      </div>
    );
  }
  //Sign Up part
  else {
    return (
      <div className="center">
        <div className="heading-section">
          <h1>Sign Up</h1>
          <div className="close-modal">
            <button
              className="cross-button bg-none"
              onClick={() => {
                setOpenModal(false);
              }}
            >
              X
            </button>
          </div>
        </div>
        <form action="/signup" method="POST" onSubmit={signup}>
          <div className="txt_field">
            <input
              type="text"
              name="username"
              required
              value={username}
              onChange={(ev) => setUsername(ev.target.value)}
            />
            <span></span>
            <label>Name</label>
          </div>
          <div className="txt_field">
            <input
              type="text"
              name="phonenumber"
              required
              value={phonenumber}
              onChange={(ev) => setPhonenumber(ev.target.value)}
              maxLength={10}
              minLength={10}
            />
            <span></span>
            <label>Phone Number</label>
          </div>
          <div className="txt_field">
            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            />
            <span></span>
            <label>Email</label>
          </div>
          <div className="txt_field">
            <input
              type="password"
              name="password"
              required
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            />
            <span></span>
            <label>Create Password</label>
          </div>
          <div className="txt_field">
            <input
              type="text"
              name="course"
              required
              value={course}
              onChange={(ev) => setCourse(ev.target.value)}
            />
            <span></span>
            <label>Current Course</label>
          </div>
          <div className="txt_field">
            <input type="text" required />
            <span></span>
            <label>Interested In</label>
          </div>
          <div className="txt_field">
            <input type="text" required />
            <span></span>
            <label>Current City</label>
          </div>

          <input type="submit" value="Sign Up" />

          <div className="signup_link">
            Already a member?{" "}
            <button className="bg-none" onClick={toggleForm}>
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
};

export default LoginSignup;
