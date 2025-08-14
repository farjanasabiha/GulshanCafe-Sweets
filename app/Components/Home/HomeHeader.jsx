import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HomeHeader = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    {
      id: 1,
      category: "Best In Cafeu",
      title: "Indulge in the",
      highlight: "Sweetest",
      subtitle: "Moments of Life",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eimod tempor incididunt ut labore et dolore magna aliqua Quis",
      image: "/swtte.jpg",
      discount: "50",
    },
    {
      id: 2,
      category: "Best In Cafeu",
      title: "Grilled Salmon",
      highlight: "Bowl",
      subtitle: "with Fresh Herbs",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eimod tempor incididunt ut labore et dolore magna aliqua Quis",
      image: "fuchka.jpg",
      discount: "40",
    },
    {
      id: 3,
      category: "Best In Cafeu",
      title: "Caesar Chicken",
      highlight: "Wrap",
      subtitle: "with Parmesan Cheese",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eimod tempor incididunt ut labore et dolore magna aliqua Quis",
      image: "tehari.jpg",
      discount: "30",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-orange-100 overflow-hidden">
      <div className="relative z-10 px-6 lg:px-12 py-12 container mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} !bg-red-500 !w-12 !h-1 !rounded-full !mx-1"></span>`;
            },
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="hero-swiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
                {/* Left Content */}
                <div className="space-y-6">
                  <div className="text-red-500 font-medium text-lg tracking-wide">
                    {slide.category}
                  </div>

                  <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 leading-tight">
                    {slide.title}{" "}
                    <span className="text-red-500 underline decoration-red-500 decoration-4 underline-offset-4">
                      {slide.highlight}
                    </span>{" "}
                    <span className="block mt-2">{slide.subtitle}</span>
                  </h1>

                  <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                    {slide.description}
                  </p>

                  <div className="flex items-center space-x-6 pt-4">
                    <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                      Order Now
                    </button>

                    <button className="flex items-center space-x-3 text-gray-700 hover:text-red-500 transition-colors group">
                      <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center group-hover:bg-red-600 transition-colors">
                        <svg
                          className="w-5 h-5 text-white ml-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </div>
                      <span className="font-medium">Watch Video</span>
                    </button>
                  </div>
                </div>

                {/* Right Content */}
                <div className="relative">
                  {/* Decorative Circle */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-96 h-96 lg:w-[600px] lg:h-[600px] border-2 border-red-200 rounded-full opacity-50"></div>
                  </div>

                  <div className="relative z-10 flex items-center justify-center">
                    <div className="w-80 h-80 lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden shadow-2xl bg-white p-4">
                      <img
                        src={slide.image}
                        alt={`${slide.title} ${slide.highlight}`}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>

                    <div className="absolute bottom-8 right-8 transform rotate-12">
                      <div className="relative">
                        <div className="bg-red-500 text-white px-6 py-4 rounded-xl shadow-lg transform -rotate-6">
                          <div className="text-center">
                            <div className="text-xs font-medium uppercase tracking-wider">
                              Special Menu
                            </div>
                            <div className="text-3xl font-bold">
                              {slide.discount}%
                            </div>
                            <div className="text-xs font-medium uppercase tracking-wider">
                              Off
                            </div>
                          </div>
                        </div>
                        {/* Brush stroke effect */}
                        <div className="absolute inset-0 bg-red-500 opacity-20 rounded-xl transform -rotate-12 scale-110 -z-10"></div>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="absolute right-0 top-1/2 transform translate-x-12 -translate-y-1/2 space-y-4">
                    <div className="text-xs text-gray-400 transform rotate-90 whitespace-nowrap origin-center">
                      Facebook
                    </div>
                    <div className="text-xs text-gray-400 transform rotate-90 whitespace-nowrap origin-center">
                      Twitter
                    </div>
                    <div className="text-xs text-gray-400 transform rotate-90 whitespace-nowrap origin-center">
                      Instagram
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination */}
        <div className="flex justify-center mt-12">
          <div className="swiper-pagination"></div>
        </div>
      </div>

      {/* Custom CSS for Swiper */}
      <style jsx global>{`
        .hero-swiper .swiper-pagination {
          position: static !important;
          margin-top: 2rem;
        }

        .hero-swiper .swiper-pagination-bullet {
          background: #e5e7eb !important;
          width: 3rem !important;
          height: 0.25rem !important;
          border-radius: 9999px !important;
          margin: 0 0.25rem !important;
          opacity: 1 !important;
          transition: all 0.3s ease !important;
        }

        .hero-swiper .swiper-pagination-bullet-active {
          background: #ef4444 !important;
          width: 4rem !important;
        }
      `}</style>
    </div>
  );
};

export default HomeHeader;
