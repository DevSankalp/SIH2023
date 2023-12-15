import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials(animate) {
  const testimonials = [
    {
      quote: `"FusionX was instrumental in helping us secure funding"`,
      content:
        "The team at FusionX provided us with the guidance and support we needed to secure funding for our startup. Their expertise and network of investors were invaluable.",
      author: "demo person",
    },
    {
      quote: `"FusionX provided us with access to a range of resources and mentors"`,
      content:
        "FusionX was instrumental in helping us grow and scale our startup. Their platform provided us with access to a range of resources and mentors that helped us navigate the challenges of entrepreneurship.",
      author: "demo person",
    },
    {
      quote: `"FusionX helped us connect with other startups and industry experts"`,
      content:
        "The networking opportunities provided by FusionX were invaluable. We were able to connect with other startups and industry experts, which helped us learn and grow.",
      author: "demo person",
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
    <section className="relative bg-white z-[0] flex flex-col items-center py-12 shadow-[inset_0_0_5px_rgba(0,0,0,.4)]">
      <div
        className={`w-4/5 flex-col md:flex-row flex items-center rounded-xl bg-[rgba(123,106,255,.6)] p-8 duration-[1500ms] ${
          animate.animate.testimonial > 100
            ? "translate-y-0 opacity-1"
            : "translate-y-1/4 opacity-0"
        }`}
        id="testimonial"
      >
        <div className="flex flex-col justify-center text-center md:text-start md:gap-4 text-white md:w-1/2">
          <h1 className="text-xl md:text-4xl">Our Clients</h1>
          <h1 className="text-2xl md:text-5xl">Why choose FusionX ?</h1>
        </div>

        {/* FeedBacks */}
        <div className="bg-[rgba(255,255,255,.7)] w-full md:w-1/2 mt-8 md:m-0 px-14 py-8 rounded-xl md:text-start">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                <h1 className="text-md md:text-2xl md:underline text-center">
                  {testimonial.quote}
                </h1>
                <p className="text-lg text-justify my-8 hidden md:block">
                  {testimonial.content}
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-4 md:m-0">
                  {/* <img
                    src={image[index]}
                    alt={testimonial.author}
                    className="rounded-full"
                  /> */}
                  <p className="text-sm">{testimonial.author}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
