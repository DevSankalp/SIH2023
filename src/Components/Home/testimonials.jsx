import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials({ animate }) {
  const testimonials = [
    {
      quote: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium accusantium fuga architecto fugit`,
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium accusantium fuga architecto fugit, quod laboriosam hic, facere in molestias vel tenetur possimus cumque eaque? Perspiciatis, natus rem? Iste, nisi illo!",
      author: "Narendra Damodardas Modi",
      description: "Prime Minister of Bharat",
      image:
        "data:image/jpeg;base64,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",
    },
    {
      quote: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium accusantium fuga architecto fugit`,
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium accusantium fuga architecto fugit, quod laboriosam hic, facere in molestias vel tenetur possimus cumque eaque? Perspiciatis, natus rem? Iste, nisi illo!",
      author: "Amit Shah",
      description: "Home Minister of Bharat",
      image:
        "https://feeds.abplive.com/onecms/images/uploaded-images/2023/01/19/a085de15eefb93d066b02667bd43a9cb1674146311370208_original.jpg?impolicy=abp_cdn&imwidth=650",
    },
    {
      quote: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium accusantium fuga architecto fugit`,
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium accusantium fuga architecto fugit, quod laboriosam hic, facere in molestias vel tenetur possimus cumque eaque? Perspiciatis, natus rem? Iste, nisi illo!",
      author: "Yogi Adityanath",
      description: "Chief Minister of Uttar Pradesh",
      image: "https://cdn.newsnationtv.com/images/2021/06/05/cm-yogi-26.jpg",
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
    <div className="relative bg-white z-[0] flex flex-col items-center md:h-full">
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
          <h1 className="text-3xl md:text-5xl">Why choose AssistIQ ?</h1>
        </div>

        {/* FeedBacks */}
        <div className="w-full md:w-[60%] p-8 rounded-xl bg-[rgba(36,0,70,.8)] shadow-[0_0_5px_#000] text-white text-thin">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                <div className="grid grid-cols-2 grid-rows-2 mb-8 bg-[rgba(255,255,255,.5)] p-8 rounded-xl gap-4">
                  <img
                    src={testimonial.image}
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
