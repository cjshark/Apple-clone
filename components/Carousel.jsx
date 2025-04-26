"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    image: "./images/s1.jpg",
    button: "See the schedule",
    texts: ["Watch every club, every match, live - all season long"],
  },
  {
    image: "./images/s2.jpg",
    button: "Stream Now",
    texts: ["Crime -", "No one gets away clean."],
  },
  {
    image: "./images/s3.jpg",
    button: "Stream Now",
    texts: [
      "Drama -",
      "Seth Rogan dives into the wild chaos of Hollywood in this all-star satire",
    ],
  },
  {
    image: "./images/s4.jpg",
    button: "Stream now",
    texts: ["Drama -", "Live your best lie."],
  },
  {
    image: "./images/s5.webp",
    button: "Stream now",
    texts: ["Thriller -", "There's more to work than life."],
  },
  {
    image: "./images/s6.jpg",
    button: "Stream now",
    texts: ["Comedy", "Kindness makes a comeback"],
  },
  {
    image: "./images/s7.jpg",
    button: "Stream now",
    texts: ["Comedy", "A second chance is never simple."],
  },
  {
    image: "./images/s8.jpeg",
    button: "See the schedule",
    texts: ["Live MLB games, every Friday."],
  },
  {
    image: "./images/s9.jpg",
    button: "Stream Now",
    texts: ["Mystery", "Who do you trust when you can't trust yourself?"],
  },
  {
    image: "./images/s10.jpg",
    button: "Stream now",
    texts: [
      "Thriller -",
      "The world's most dangerous secret lies between them.",
    ],
  },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full relative overflow-hidden">
      <div className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          autoplay={{ delay: 3000 }}
          loop={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="h-full w-full bg-center bg-no-repeat bg-cover flex justify-start items-end p-4 sm:p-10 relative"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div
                  className={`transition-all duration-800 ${
                    activeIndex === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  } flex flex-col w-full`}
                >
                  <div className="flex flex-col items-center sm:items-start gap-2 sm:gap-4 w-full">
                    <button className="bg-white text-black font-semibold px-4 py-2 sm:px-6 sm:py-2 rounded-full shadow hover:bg-gray-300 transition text-xs sm:text-sm whitespace-nowrap">
                      {slide.button}
                    </button>

                    {slide.texts.length === 2 ? (
                      <p
                        className="text-white text-center sm:text-left text-sm sm:text-xl font-medium leading-snug"
                        style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.7)" }}
                      >
                        <span className="block font-bold">
                          {slide.texts[0]}
                        </span>{" "}
                        {slide.texts[1]}
                      </p>
                    ) : (
                      <p
                        className="text-white text-center sm:text-left text-sm sm:text-xl font-medium leading-snug"
                        style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.7)" }}
                      >
                        {slide.texts[0]}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Pagination */}
      <div className="custom-pagination mt-4 flex justify-center items-center gap-2"></div>
    </div>
  );
};

export default Carousel;
