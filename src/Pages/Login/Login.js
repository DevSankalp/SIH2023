import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const formDataConfig = {
  signUp: {
    title: "Create Account",
    fields: [
      { type: "text", placeholder: "Full Name", name: "fullName" },
      { type: "email", placeholder: "Email", name: "email" },
      { type: "password", placeholder: "Password", name: "password" },
    ],
  },
  signIn: {
    title: "Sign In",
    fields: [
      { type: "email", placeholder: "Email", name: "email" },
      { type: "password", placeholder: "Password", name: "password" },
    ],
  },
};

const AuthForm = ({
  formType,
  formData,
  handleChange,
  handleSubmit,
  background,
}) => {
  const formConfig = formDataConfig[formType];

  return (
    <form
      className={`flex flex-col items-center justify-center h-full px-6 md:px-10 gap-2 ${background}`}
    >
      <h1 className="font-bold text-4xl mb-4">{formConfig.title}</h1>
      <a href="" className="p-2 rounded-lg border-[1px] border-black bg-white">
        <FcGoogle />
      </a>
      {formConfig.fields.map((field, index) => (
        <input
          key={index}
          type={field.type}
          placeholder={field.placeholder}
          name={field.name}
          value={formData[field.name] || ""}
          onChange={handleChange}
          className="bg-[#eee] focus-within:border-black border-2 my-2 px-4 py-3 text-sm rounded-lg w-full transition-all duration-500"
        />
      ))}
      {formType === "signIn" && (
        <a
          href="#"
          className="text-sm hover:underline hover:text-[#512da8] my-4"
        >
          Forgot Your Password?
        </a>
      )}
      <button
        onClick={handleSubmit}
        className="shadow-[0_0_5px_rgba(0,0,0,.5)] active:shadow-[inset_0_0_5px_rgba(0,0,0,.5)] hover:text-[#512da8] rounded-xl py-2 px-8 hover:bg-[#c9d6ff] bg-[#512da8] text-white active:scale-[.98]"
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

  return (
    <div className="bg-[#c9d6ff] flex items-center justify-center h-screen">
      <a
        href="/"
        className="absolute top-4 md:left-4 bg-[#512da8] hover:bg-white text-white hover:text-black px-6 py-2 text-lg rounded-xl shadow-[0_0px_5px_rgba(0,0,0,0.35)] transition-all duration-300"
      >
        Home
      </a>
      <div
        className={`flex flex-col md:flex-row items-center w-5/6 md:w-2/3 max-w-full h-3/4 relative overflow-hidden rounded-xl bg-white shadow-[0_5px_15px_rgba(0,0,0,0.35)] ${
          clicked ? "" : ""
        }`}
        id="container"
      >
        <div
          className={`h-full transition-all duration-300 w-full md:w-1/2 pb-16 ${
            window.innerWidth > 480
              ? clicked
                ? "translate-x-1/2 z-[1]"
                : "translate-x-0 z-[1]"
              : ""
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
          className={`md:hidden bg-[#512da8] flex flex-col items-center justify-center absolute h-full transition-all duration-300 w-full z-10 ${
            clicked ? "top-0" : "top-[84%] rounded-t-[70px]"
          }`}
        >
          <button
            className="shadow-[0_0_5px_rgba(0,0,0,.5)] active:shadow-[inset_0_0_5px_rgba(0,0,0,.5)] rounded-xl py-2 px-8 mt-6 bg-[#512da8] text-white active:scale-[.98]"
            onClick={() => setClicked(!clicked)}
          >
            {clicked ? "Sign In" : "Sign Up"}
          </button>
          <AuthForm
            formType="signUp"
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            background={`text-white`}
          />
        </div>
        <div
          className={`hidden md:block h-full transition-all duration-300 w-1/2 ${
            clicked ? "translate-x-0 z-[2]" : "-translate-x-1/2 z-[0]"
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
        <div
          className={`hidden md:block absolute w-[51%] h-full overflow-hidden transition-all duration-500 z-[10] top-0 ${
            clicked
              ? "-translate-x-full rounded-[0_150px_100px_0] left-[51%]"
              : "rounded-[150px_0_0_100px] left-[49%]"
          }`}
        >
          <div
            className={`bg-[#512da8] h-full text-white relative w-[200%] transition-all duration-500 -left-full ${
              clicked ? "translate-x-1/2" : ""
            }`}
          >
            {introData.map((item) => (
              <div
                key={item.id}
                className={`absolute w-1/2 h-full flex flex-col items-center justify-center gap-2 translate-x-0 transition-all duration-500 px-8 py-0 top-0 ${
                  item.title != "New Here !"
                    ? clicked
                      ? "translate-x-0"
                      : "translate-x-[-200%]"
                    : clicked
                    ? "translate-x-[200%]"
                    : "translate-x-0 right-0"
                }`}
              >
                <h1 className="font-bold text-4xl">{item.title}</h1>
                <p>{item.description}</p>
                <button
                  className="shadow-[0_0_5px_rgba(0,0,0,.5)] active:shadow-[inset_0_0_5px_rgba(0,0,0,.5)] hover:text-[#512da8] rounded-xl py-2 px-8 mt-8 hover:bg-[#c9d6ff] bg-[#512da8] text-white active:scale-[.98]"
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
