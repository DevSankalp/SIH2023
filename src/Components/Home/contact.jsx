import React, { useState } from "react";

function Contact({ animate }) {
  // AppScript
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzlAr048CjCFKsOeKugSjaWbNmOg9BbtHhQXDe1TBdT387p9C12cQqXkE2OfX0G2XdbHA/exec";
  const [formData, setFormData] = useState({
    email: "",
    message: "",
    firstName: "",
    lastName: "",
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
          firstName: "",
          lastName: "",
          time: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
        });
      } else {
        console.error("Error!", response.statusText);
      }
    } catch (error) {
      console.error("Error!", error.message);
    }
  };

  return (
    <div
      className="relative flex items-center justify-center py-12 md:py-24 px-8 bg-white shadow-[inset_0_-1px_1px_rgba(0,0,0,0.4)] z-[0] overflow-x-hidden"
      id="contact"
    >
      <div
        className={`absolute w-full h-1/2 bg-[#8E8FFA] bottom-0 left-0 duration-1000 ${
          animate.contact > 150 && animate.testimonial < 280
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      ></div>
      <div
        className={`p-8 rounded-xl md:w-2/5 h-max duration-500 bg-white ${
          animate.contact > 186
            ? "shadow-[0_0_50px_rgba(0,0,0,.4)] translate-y-0 opacity-1"
            : "translate-y-1/4 shadow-none opacity-0"
        }`}
      >
        <h1 className="text-center text-2xl md:text-5xl font-bold mb-4">
          Contact Us
        </h1>

        {/* Form */}
        <form
          autoComplete="off"
          name="google-sheet"
          onSubmit={handleSubmit}
          id="formCont"
        >
          <input type="hidden" name="time" value={formData.time} />
          {/* Name */}
          <div className="p-2 flex items-center gap-4">
            <input
              name="firstName"
              placeholder="First Name"
              type="text"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              className="w-full px-4 py-2 outline-none border-2 border-[#ccc] hover:border-blue-700 focus:border-blue-700 rounded-md duration-500"
              required
            />
            <input
              name="lastName"
              placeholder="Last Name"
              type="text"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              className="w-full px-4 py-2 outline-none border-2 border-[#ccc] hover:border-blue-700 focus:border-blue-700 rounded-md duration-500"
            />
          </div>

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
              className="w-max px-12 py-2 bg-[#fff] rounded-full shadow-[0_0_5px_rgba(0,0,0,0.4)] hover:bg-blue-700 hover:text-white duration-300 active:scale-[.98]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
