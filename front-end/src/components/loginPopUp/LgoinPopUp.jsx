import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import "./LoginPopUp.css";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";

const LoginPopUp = ({ setShowLogin }) => {
  const [curState, setCurState] = useState("SignUp");
  const { url, setToken } = useContext(StoreContext);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();

    try {
      let apiUrl = `${url}/api/user/${
        curState === "Login" ? "login" : "register"
      }`;

      console.log("📡 Sending request to:", apiUrl);
      console.log("📩 Request Data:", data);

      const response = await axios.post(apiUrl, data, {
        headers: { "Content-Type": "application/json" },
      });

      console.log("✅ Response Received:", response.data);

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("❌ Axios Error:", error);

      if (error.response) {
       
        console.error("📡 Server Response Data:", error.response.data);
        console.error("📡 Status Code:", error.response.status);
        console.error("📡 Headers:", error.response.headers);

        alert(
          `Error: ${error.response.data.message || "Something went wrong"}`
        );
      } else if (error.request) {
       
        console.error("📡 No Response from Server:", error.request);
        alert("No response from the server. Please check your network.");
      } else {
      
        console.error("📡 Request Setup Error:", error.message);
        alert("Request setup error. Please check console.");
      }
    }
  };

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={onLogin}>
        <div className="login-popup-title">
          <h2>{curState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="Close"
          />
        </div>

        <div className="login-popup-input">
          {curState === "SignUp" && (
            <input
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder="Your name"
              required
            />
          )}
          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Your email"
            required
          />
          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="Your password"
            required
          />

          <button type="submit">
            {curState === "SignUp" ? "Create Account" : "Login"}
          </button>

          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, I agree to the terms and conditions</p>
          </div>

          {curState === "Login" ? (
            <p>
              Create a new account?
              <span onClick={() => setCurState("SignUp")}> Click here</span>
            </p>
          ) : (
            <p>
              Already have an account?
              <span onClick={() => setCurState("Login")}> Login here</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginPopUp;
