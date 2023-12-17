import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials({ animate }) {
  const testimonials = [
    {
      quote: `FusionX was instrumental in helping us secure funding`,
      content:
        "The team at FusionX provided us with the guidance and support we needed to secure funding for our startup. Their expertise and network of investors were invaluable.",
      author: "Random Banda",
      description: "Random Content",
    },
    {
      quote: `FusionX provided us with access to a range of resources and mentors`,
      content:
        "FusionX was instrumental in helping us grow and scale our startup. Their platform provided us with access to a range of resources and mentors that helped us navigate the challenges of entrepreneurship.",
      author: "Random Banda",
      description: "Random Content",
    },
    {
      quote: `FusionX helped us connect with other startups and industry experts`,
      content:
        "The networking opportunities provided by FusionX were invaluable. We were able to connect with other startups and industry experts, which helped us learn and grow.",
      author: "Random Banda",
      description: "Random Content",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative bg-white z-[0] flex flex-col items-center md:h-[90vh]">
      <div
        className={`absolute w-full h-2/3 bg-[#8E8FFA] top-0 left-0 duration-1000 ${
          animate.testimonial > 150 ? "translate-x-0" : "-translate-x-full"
        }`}
      ></div>
      <div
        className={`w-full md:w-4/5 flex flex-col items-center rounded-xl duration-1000 gap-12 scale-[.9] ${
          animate.testimonial > 150
            ? "translate-x-0 opacity-1"
            : "-translate-x-1/4 opacity-0"
        }`}
        id="testimonial"
      >
        <div className="flex flex-col items-center md:text-start md:gap-4 font-bold text-white">
          <h1 className="text-2xl md:text-4xl">Our Clients</h1>
          <h1 className="text-3xl md:text-5xl">Why choose FusionX ?</h1>
        </div>

        {/* FeedBacks */}
        <div className="w-full md:w-[60%] p-8 rounded-xl bg-[rgba(36,0,70,.8)] shadow-[0_0_5px_#000] text-white text-thin">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                <div className="grid grid-cols-2 grid-rows-2 mb-8 bg-[rgba(255,255,255,.5)] p-8 rounded-xl gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="w-48 h-48 object-cover rounded-full row-span-2 justify-self-end"
                  />
                  <p className="text-xl text-center font-bold text-black self-end justify-self-center">
                    {testimonial.author}
                  </p>
                  <p className="text-lg font-thin text-black self-start justify-self-center">
                    {testimonial.description}
                  </p>
                </div>
                <div>
                  <h1 className="text-md md:text-2xl md:underline text-center">
                    {testimonial.quote}
                  </h1>
                  <p className="text-sm md:text-lg text-justify mt-4 md:m-0 md:p-8">
                    {testimonial.content}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
