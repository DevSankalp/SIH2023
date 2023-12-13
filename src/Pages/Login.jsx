import React, { useState } from "react";
import Navbar from "../Components/navbar";
import ParticleSphere from "../Components/particleSphere";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthForm = ({ formType, handleSubmit, background }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // handleRegister
  const handleRegister = async (event, name, email, password) => {
    event.preventDefault(); // Prevents default form submission behavior

    try {
      await register(name, email, password);
      setEmail("");
      setName("");
      setPassword("");
      // Show success notification
      alert("Registration successful!");
      handleLogin(event, email, password);
    } catch (error) {
      // Show error notification
      alert("Registration failed. Please try again.");
      console.error(error);
    }
  };

  const register = async (name, email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: name });
    } catch (error) {
      throw error;
    }
  };

  const handleLogin = async (event, email, password) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      navigate("/Dashboard");
      setEmail("");
      setPassword("");
    } catch (error) {
      alert("Login failed. Please check your credentials.");
      console.error(error);
    }
  };
  const handleLoginFirst = async (event, email, password) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const currentUser = auth.currentUser;
      if (currentUser) {
        const userData = {
          UID: currentUser.uid,
          email: currentUser.email,
          name: currentUser.displayName || "Default Name", // Use display name or a default name if not available
        };

        // Make a POST request to your API using Axios to create user data entry
        axios
          .post("http://localhost:1337/api/userdata", { data: userData })
          .then((response) => {
            console.log("Entry created:", response.data);
            navigate("/Dashboard");
          })
          .catch((error) => {
            console.error("Error creating entry:", error);
            // Show error notification for entry creation
            alert("Error creating user data entry. Please try again.");
          });
      } else {
        // If currentUser is null, show error notification
        alert("User not found. Please log in again.");
      }
      setEmail("");
      setPassword("");
    } catch (error) {
      alert("Login failed. Please check your credentials.");
      console.error(error);
    }
  };

  const [showResetModal, setShowResetModal] = useState(false);
  const [emailForReset, setEmailForReset] = useState("");

  const handleResetLinkClick = () => {
    setShowResetModal(true);
  };
  const hideModal = () => {
    setShowResetModal(false);
  };

  const handleResetSubmit = async (event, emailForReset) => {
    event.preventDefault();
    try {
      await sendPasswordResetEmail(auth, emailForReset);
      alert("Password reset email sent!");
      setEmailForReset("");
      setShowResetModal(false);
    } catch (error) {
      // Handle specific error when email doesn't exist
      console.log(error);
    }
  };

  return (
    <form
      className={`flex flex-col items-center md:justify-center h-full px-6 md:px-10 gap-2 ${background}`}
    >
      <h1 className="font-bold text-4xl mb-4">
        {formType === "signIn" ? "Sign In" : "Create Account"}
      </h1>
      {formType === "signUp" ? (
        <>
          <input
            type="name"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            name="fullName"
            className="bg-[#eee] focus-within:border-black border-2 my-2 px-4 py-3 text-sm rounded-lg w-full transition-all duration-500"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            className="bg-[#eee] focus-within:border-black border-2 my-2 px-4 py-3 text-sm rounded-lg w-full transition-all duration-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            className="bg-[#eee] focus-within:border-black border-2 my-2 px-4 py-3 text-sm rounded-lg w-full transition-all duration-500"
          />
        </>
      ) : (
        <>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            className="bg-[#eee] focus-within:border-black border-2 my-2 px-4 py-3 text-sm rounded-lg w-full transition-all duration-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            className="bg-[#eee] focus-within:border-black border-2 my-2 px-4 py-3 text-sm rounded-lg w-full transition-all duration-500"
          />
        </>
      )}
      {formType === "signIn" && (
        <a
          onClick={handleResetLinkClick}
          className={`text-sm hover:underline hover:text-[#512da8] mt-4`}
        >
          Forgot Your Password?
        </a>
      )}
      {showResetModal && (
        <div className="fixed flex items-center justify-center h-full px-6 md:px-10 gap-2 z-100 inset-0 bg-opacity-50">
          <button
            className={`absolute top-4 left-8 shadow-[0_0_5px_rgba(0,0,0,.5)] active:shadow-[inset_0_0_5px_rgba(0,0,0,.5)] rounded-xl py-2 px-4 mt-8 md:mt-4 active:scale-[.98] ${`bg-[#240046] text-white hover:bg-white hover:text-[#240046]`}`}
            onClick={hideModal}
          >
            {/* Back arrow icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div className="bg-white p-8 rounded-md max-w-md w-full h-full flex flex-col items-center md:justify-center">
            <h2 className="font-bold text-4xl mb-4 text-center">
              Reset Password
            </h2>
            <form className="flex flex-col items-center md:justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                value={emailForReset}
                onChange={(e) => setEmailForReset(e.target.value)}
                className="bg-[#eee] focus-within:border-black border-2 my-2 px-4 py-3 text-sm rounded-lg w-full transition-all duration-500"
              />
              <button
                type="submit"
                onClick={(event) => handleResetSubmit(event, emailForReset)}
                className={`shadow-[0_0_5px_rgba(0,0,0,.5)] active:shadow-[inset_0_0_5px_rgba(0,0,0,.5)] rounded-xl py-2 px-8 mt-8 md:mt-4 active:scale-[.98] ${`bg-[#240046] text-white hover:bg-white hover:text-[#240046]`}`}
              >
                Send Reset Email
              </button>
            </form>
          </div>
        </div>
      )}
      {formType === "signUp" ? (
        <button
          onClick={(event) => handleRegister(event, name, email, password)}
          className={`shadow-[0_0_5px_rgba(0,0,0,.5)] active:shadow-[inset_0_0_5px_rgba(0,0,0,.5)] rounded-xl py-2 px-8 mt-8 md:mt-4 active:scale-[.98] ${`bg-[#240046] text-white hover:bg-white hover:text-[#240046]`}`}
        >
          {" "}
          Sign Up
        </button>
      ) : (
        <button
          onClick={(event) => handleLogin(event, email, password)}
          className={`shadow-[0_0_5px_rgba(0,0,0,.5)] active:shadow-[inset_0_0_5px_rgba(0,0,0,.5)] rounded-xl py-2 px-8 mt-8 md:mt-4 active:scale-[.98] ${`bg-[#240046] text-white hover:bg-white hover:text-[#240046]`}`}
        >
          {" "}
          Sign In
        </button>
      )}
    </form>
  );
};

const Login = () => {
  const [clicked, setClicked] = useState(false);

  const [formData, setFormData] = useState({});

  const handleSubmit = () => {};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const introData = [
    {
      title: "Welcome Back !",
      description: "Enter your personal details to use all site features",
      buttonText: "Sign In",
      id: "login",
    },
    {
      title: "New Here !",
      description:
        "Register with your personal details to use all site features",
      buttonText: "Sign Up",
      id: "register",
    },
  ];

  const navbarData = {
    logoText: "FusionX",
    navItems: [
      { text: "Home", link: "/" },
      { text: "Dashboard", link: "/Dashboard" },
      { text: "Application", link: "/" },
      { text: "Fee Statement", link: "/" },
      { text: "Stats", link: "/" },
      // Add more navigation items as needed
    ],
    application: ["Templates", "Submitted", "Approved"],
    buttonText: "Get Approved",
    class: "hidden",
    link: "/Login",
  };

  // Particles-Settings
  var screenSize = window.innerWidth;
  var screenSize1 = window.innerHeight;
  const settings = {
    width: screenSize * 2.5,
    height: screenSize1 * 2.5,
    particleNumber: 800,
    maxRadius: 4,
    minRadius: 1,
    angleZemul: 1000,
    zAngleDemul: 500,
  };

  return (
    <div className={`flex items-center justify-center h-screen bg-[#f2ebfb]`}>
      {/* Particles */}
      <div className="fixed">
        <ParticleSphere
          width={settings.width}
          height={settings.height}
          particleNumber={settings.particleNumber}
          maxRadius={settings.maxRadius}
          minRadius={settings.minRadius}
          angleDemul={settings.angleZemul}
          zAngleDemul={settings.zAngleDemul}
        />
      </div>
      <Navbar navbarData={navbarData} />
      <div
        className={`flex flex-col md:flex-row items-center w-5/6 md:w-2/3 max-w-full h-3/4 mt-16 relative overflow-hidden rounded-xl bg-white md:bg-white shadow-[0_5px_15px_rgba(0,0,0,0.35)]`}
        id="container"
      >
        {/* Small-Screen */}
        <div
          className={`lg:hidden bg-white flex flex-col items-center justify-center absolute h-[99.7%] w-[99%] rounded-t-xl transition-all duration-300 ${
            clicked ? "bottom-full" : "bottom-0"
          }`}
        >
          <AuthForm
            formType="signIn"
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            background={`bg-white w-full justify-start mt-12`}
          />
        </div>
        {introData.map((item, index) => (
          <div
            key={index}
            className={`md:hidden absolute w-full h-max text-center text-white bg-[#240046] flex flex-col items-center justify-center gap-2 transition-all duration-300 px-6 py-2 z-[2] ${
              item.title !== "Welcome Back !"
                ? clicked
                  ? "bottom-full"
                  : "bottom-0"
                : clicked
                ? "top-0"
                : "top-full"
            }`}
          >
            <h1 className="font-bold text-2xl">{item.title}</h1>
            <p>{item.description}</p>
            <button
              className={`shadow-[0_0_5px_rgba(255,255,255,.5)] active:shadow-[inset_0_0_5px_rgba(255,255,255,.5)] hover:text-white rounded-xl py-2 px-8 mt- hover:bg-[#240046] bg-white text-[#240046] active:scale-[.98]`}
              onClick={() => setClicked(!clicked)}
            >
              {item.buttonText}
            </button>
          </div>
        ))}
        <div
          className={`lg:hidden bg-white flex flex-col items-center justify-center absolute h-[99.7%] w-[99%] rounded-b-xl transition-all duration-300 ${
            clicked ? "top-0" : "top-full"
          }`}
        >
          <AuthForm
            formType="signUp"
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            background={`w-full justify-center mt-36`}
          />
        </div>

        {/* Large-Screen */}
        <div
          className={`hidden lg:block h-full transition-all duration-300 w-1/2 ${
            clicked ? "translate-x-1/2 z-[1] invisible" : "translate-x-0 z-[1]"
          }`}
        >
          <AuthForm
            formType="signIn"
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            background={`bg-white`}
          />
        </div>
        <div
          className={`hidden lg:block h-full transition-all duration-300 w-1/2 ${
            clicked ? "translate-x-0 z-[2]" : "-translate-x-1/2 z-[0] invisible"
          }`}
        >
          <AuthForm
            formType="signUp"
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            background={`bg-white`}
          />
        </div>

        {/* info-Cont */}
        <div
          className={`hidden md:block absolute w-[51%] h-full overflow-hidden transition-all duration-300 z-[10] top-0 ${
            clicked
              ? "-translate-x-full rounded-[0_150px_100px_0] left-[51%]"
              : "rounded-[150px_0_0_100px] left-[49%]"
          }`}
        >
          <div
            className={`h-full text-white bg-[#240046] relative w-[200%] transition-all duration-500 -left-full ${
              clicked ? "translate-x-1/2" : ""
            }`}
          >
            {introData.map((item) => (
              <div
                key={item.id}
                className={`absolute w-1/2 h-full flex flex-col items-center justify-center gap-2 translate-x-0 transition-all duration-500 px-8 py-0 top-0 ${
                  item.title !== "New Here !"
                    ? clicked
                      ? "translate-x-0 left-0"
                      : "-translate-x-full left-0"
                    : clicked
                    ? "translate-x-full right-0"
                    : "translate-x-0 right-0"
                }`}
              >
                <h1 className="font-bold text-4xl">{item.title}</h1>
                <p>{item.description}</p>
                <button
                  className={`shadow-[0_0_5px_rgba(255,255,255,.5)] active:shadow-[inset_0_0_5px_rgba(255,255,255,.5)] hover:text-white rounded-xl py-2 px-8 mt-8 hover:bg-[#240046] bg-white text-[#240046] active:scale-[.98]`}
                  onClick={() => setClicked(!clicked)}
                  id={item.id}
                >
                  {item.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
