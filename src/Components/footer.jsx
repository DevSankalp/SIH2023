import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer({ data }) {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzlAr048CjCFKsOeKugSjaWbNmOg9BbtHhQXDe1TBdT387p9C12cQqXkE2OfX0G2XdbHA/exec";
  const [formData, setFormData] = useState({
    email: "",
    message: "",
    time: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: new FormData(e.target),
      });

      if (response.ok) {
        alert("Thanks for Contacting us..!");
        setFormData({
          email: "",
          message: "",
          time: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
        });
      } else {
        console.error("Error!", response.statusText);
      }
    } catch (error) {
      console.error("Error!", error.message);
    }
  };

  const iconArr = [
    {
      icon: (
        <FaFacebook className="w-8 h-8 p-[2px] text-[#240046] hover:-translate-y-1 duration-300" />
      ),
      link: "/",
    },
    {
      icon: (
        <FaInstagram className="w-8 h-8 p-[1px] text-[#240046] hover:-translate-y-1 duration-300" />
      ),
      link: "/",
    },
    {
      icon: (
        <FaSquareXTwitter className="w-8 h-8 p-[1px] text-[#240046] hover:-translate-y-1 duration-300" />
      ),
      link: "/",
    },
    {
      icon: (
        <FaLinkedin className="w-8 h-8 p-[1px] text-[#240046] hover:-translate-y-1 duration-300" />
      ),
      link: "/",
    },
  ];
  const { navItems, info } = data;

  return (
    <footer className="flex flex-col items-center py-8 md:pt-12 md:pb-4 bg-white relative z-[1]">
      <div className="w-[90%] flex flex-col gap-6 sm:gap-0 sm:flex-row items-center sm:items-start justify-between border-y-[1px] border-[rgba(0,0,0,.5)] p-8 md:p-16 md:pb-24">
        {/* Logo */}
        <a href="/" className="text-3xl font-bold">
          AssistIQ
        </a>

        {/* Nav-Items */}
        <div className="flex flex-col gap-8 sm:gap-12">
          <ul className="flex flex-col gap-2 items-center sm:items-start">
            {navItems.map((items, index) => (
              <li
                key={index}
                className="w-max relative before:absolute before:bg-black before:bottom-0 before:left-0 before:w-full before:h-[7%] before:scale-x-0 lg:before:hover:scale-x-100 before:origin-left before:duration-300"
              >
                <a href={items.link}>{items.text}</a>
              </li>
            ))}
          </ul>
          <button className="w-full bg-black text-white hover:text-black hover:bg-white py-2 px-4 rounded-xl duration-300 shadow-[0_0_5px_rgba(0,0,0,0.2)] active:scale-[.95]">
            Get Approved
          </button>
        </div>

        {/* Mobile-View-Line */}
        <hr className="block sm:hidden h-[1px] w-full border-black" />

        {/* Feedback */}
        <form
          autoComplete="off"
          name="google-sheet"
          onSubmit={handleSubmit}
          id="formCont"
          className="w-full md:w-2/5"
        >
          <h1 className="ml-2 text-xl font-[500]">FeedBack</h1>
          <input type="hidden" name="time" value={formData.time} />

          {/* Email */}
          <div className="p-2 flex items-center gap-8">
            <input
              name="email"
              placeholder="Email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-2 outline-none border-2 border-[#ccc] hover:border-blue-700 focus:border-blue-700 rounded-md duration-500"
              required
            />
          </div>

          {/* TextArea */}
          <div className="p-2 flex flex-col items-center gap-8">
            <textarea
              name="message"
              placeholder="Your Query"
              type="text"
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-2 outline-none border-2 border-[#ccc] hover:border-blue-700 focus:border-blue-700 rounded-md duration-500"
              required
            />
            <button
              type="submit"
              className="w-full py-2 bg-[#7B66ff] rounded-full shadow-[0_0_5px_rgba(0,0,0,0.4)] hover:bg-blue-700 text-white duration-300 active:scale-[.98]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Copyright */}
      <div className="flex flex-col sm:flex-row w-[80%] items-center sm:justify-between">
        <p className="py-2 sm:py-8">© 2023 by AssistIQ</p>
        <div className="flex items-center justify-end gap-2 sm:w-[40%] sm:py-8">
          {iconArr.map((content, index) => (
            <a key={index} href={content.link}>
              {content.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
