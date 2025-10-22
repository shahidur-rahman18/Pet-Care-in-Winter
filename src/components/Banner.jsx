import React from "react";
import slide_1 from "../assets/slider-3.jpg";
// import slide_2 from "../assets/slider-2.jpg";
import slide_3 from "../assets/slider-1.jpg";
import slide_4 from "../assets/slider-4.jpg";


const Banner = () => {
  
  return (
    <div>
      <div className="carousel w-full  ">
        {/* Added fixed height container and object-cover for consistent sizing */}
        <div id="slide1" className="carousel-item relative w-full">
          <div className="w-full h-96 md:h-[600px]">
            {" "}
            {/* Fixed height container */}
            <img
              src={slide_1}
              className="w-full h-full object-cover opacity-0.10 " // object-cover maintains aspect ratio
            />
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
          <div className="w-full h-96 md:h-[600px]">
            {" "}
            {/* Fixed height container */}
            <img
              src={slide_3}
              className="w-full h-full object-cover opacity-.80" // object-cover maintains aspect ratio
            />
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide3" className="carousel-item relative w-full">
          <div className="w-full h-96 md:h-[600px]">
            {" "}
            {/* Fixed height container */}
            <img
              src={slide_4} // object-cover maintains aspect ratio
            />
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide4" className="carousel-item relative w-full">
          <div className="w-full h-96 md:h-[600px]">
            {" "}
            {/* Fixed height container */}
            <img
              src={slide_1}
              className="w-full h-full object-cover" // object-cover maintains aspect ratio
            />
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div className="py-2 mt-5">
        <h1 className="text-center text-5xl font-bold ">Our Services</h1>
      </div>
    </div>
  );
};

export default Banner;
