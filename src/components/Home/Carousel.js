import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { carouselData } from "../DataFiles/CarouselData";
import Slider from "react-slick";
import { Slide } from "react-awesome-reveal";

const Carousel = () => {
  const data = carouselData;

  const sliderRef = useRef();

  // Function for next button
  const next = () => {
    sliderRef.current.slickNext();
  };
  // function for previous button
  const previous = () => {
    sliderRef.current.slickPrev();
  };

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <div className="w-full md:h-96 h-72 relative">
      <Slider {...settings} ref={(slider) => (sliderRef.current = slider)}>
        {data.slice(0, 6).map((post, index) => (
          <div className="w-full md:h-96 h-72 relative" key={index}>
            {/* Image Container  */}
            <div className="w-full h-full relative">
              <img
                src={post.img}
                alt="PostImage"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gray-900/50"></div>
            </div>
            {/* Text Container  */}
            <div className="flex flex-col absolute lg:bottom-16 md:bottom-20 bottom-12 lg:left-16 md:left-6 left-4">
              <div className="relative flex flex-col md:gap-3 gap-2 md:w-3/4 w-4/5">
                <Slide direction="left">
                  <h3 className="text-naija tracking-wide text-md md:text-xl lg:text-2xl uppercase font-poppins font-bold md:ml-8 ml-6">
                    {post.type}
                  </h3>
                </Slide>
                <Slide direction="right">
                  <Link
                    to={`/trending/${post.id}`}
                    className="text-white block md:ml-8 ml-6 tracking-wide text-xl md:text-4xl lg:text-5xl capitalize font-serif font-semibold transition duration-300 hover:text-gray-300"
                  >
                    {post.title}
                  </Link>
                </Slide>
                <div className="absolute left-0 top-0 h-full md:w-8 w-6 bg-naija/50"></div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      {/* Controllers  */}
      <div className="absolute right-2 bottom-0 flex justify-center gap-3">
        {/* Backward click  */}
        <button
          onClick={previous}
          id="prev"
          className="text-white transition-all duration-300 hover:text-naija hover:bg-white outline-none border-none text-2xl px-3 py-1 flex justify-center items-center bg-naija cursor-pointer"
        >
          <ion-icon name="arrow-back-outline"></ion-icon>
        </button>
        {/* Forward Click  */}
        <button
          onClick={next}
          id="next"
          className="text-white transition-all duration-300 hover:text-naija hover:bg-white outline-none border-none text-2xl px-3 py-1 flex justify-center items-center bg-naija cursor-pointer"
        >
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
