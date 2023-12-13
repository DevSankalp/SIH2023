import React, { useState } from "react";
import Navbar from "../Components/navbar";
import ParticleSphere from "../Components/particleSphere";

var background_color = "#f2ebfb";
var cont_color = "#240046";

const AuthForm = ({ formType, handleSubmit, background }) => {
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
            name="fullName"
            className="bg-[#eee] focus-within:border-black border-2 my-2 px-4 py-3 text-sm rounded-lg w-full transition-all duration-500"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="bg-[#eee] focus-within:border-black border-2 my-2 px-4 py-3 text-sm rounded-lg w-full transition-all duration-500"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="bg-[#eee] focus-within:border-black border-2 my-2 px-4 py-3 text-sm rounded-lg w-full transition-all duration-500"
          />
        </>
      ) : (
        <>
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="bg-[#eee] focus-within:border-black border-2 my-2 px-4 py-3 text-sm rounded-lg w-full transition-all duration-500"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="bg-[#eee] focus-within:border-black border-2 my-2 px-4 py-3 text-sm rounded-lg w-full transition-all duration-500"
          />
        </>
      )}
      {formType === "signIn" && (
        <a
          href="/"
          className={`text-sm hover:underline hover:text-[#512da8] mt-4`}
        >
          Forgot Your Password?
        </a>
      )}
      <button
        onClick={handleSubmit}
        className={`shadow-[0_0_5px_rgba(0,0,0,.5)] active:shadow-[inset_0_0_5px_rgba(0,0,0,.5)] rounded-xl py-2 px-8 mt-8 md:mt-4 active:scale-[.98] ${`bg-[#240046] text-white hover:bg-white hover:text-[#240046]`}`}
      >
        {formType === "signUp" ? "Sign Up" : "Sign In"}
      </button>
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
    <div
      className={`flex items-center justify-center h-screen`}
      style={{ background: background_color }}
    >
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
            className={`md:hidden absolute w-full h-max text-center text-white flex flex-col items-center justify-center gap-2 transition-all duration-300 px-6 py-2 z-[2] ${
              item.title !== "Welcome Back !"
                ? clicked
                  ? "bottom-full"
                  : "bottom-0"
                : clicked
                ? "top-0"
                : "top-full"
            }`}
            style={{ background: cont_color }}
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
            className={`h-full text-white relative w-[200%] transition-all duration-500 -left-full ${
              clicked ? "translate-x-1/2" : ""
            }`}
            style={{ background: cont_color }}
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
