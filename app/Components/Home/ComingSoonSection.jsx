import Image from "next/image";
import React, { useState, useEffect } from "react";

const ComingSoonSection = () => {
  // Set target date (you can change this to your desired launch date)
  const targetDate = new Date("2024-12-31T23:59:59").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 10, hours: 29, minutes: 34, seconds: 54 });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatTime = (time) => String(time).padStart(2, "0");

  return (
    <div className="relative bg-black min-h-screen overflow-hidden">
      {/* Animated Stars Background */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 opacity-8 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Food Ingredient Images */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Tomato */}
        <div
          className="absolute top-20 left-10 animate-bounce"
          style={{ animationDelay: "0s", animationDuration: "3s" }}
        >
          <Image height="100" width="100" alt="icon" src="/Leaf2.png" />
        </div>

        {/* Cheese Slice */}
        <div
          className="absolute bottom-32 left-16 animate-float"
          style={{ animationDelay: "2s" }}
        >
          <Image height="100" width="100" alt="icon" src="/25.png" />
        </div>

        {/* Onion Ring */}
        <div
          className="absolute top-1/2 left-32 animate-bounce"
          style={{ animationDelay: "0.5s", animationDuration: "3.5s" }}
        >
          {/* Lettuce Leaf */}
          <div
            className="absolute top-40 left-20 animate-bounce"
            style={{ animationDelay: "1s", animationDuration: "4s" }}
          >
            <Image height="100" width="100" alt="icon" src="/26.png" />
          </div>
        </div>

        {/* Pickles */}
        <div
          className="absolute top-20 right-20 animate-bounce"
          style={{ animationDelay: "2s", animationDuration: "4s" }}
        >
          <Image height="60" width="60" alt="icon" src="/26.png" />
        </div>

        {/* Fork and Knife */}
        <div className="absolute bottom-20 right-32 opacity-30">
          <Image height="60" width="60" alt="icon" src="/26.png" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Side - Burger Image */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Burger */}
            <div className="relative">
              <div className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[700px] lg:h-[700px] rounded-full  flex items-center justify-center">
                {/* Burger SVG Icon */}
                <Image height="900" width="900" alt="icon" src="/swtte.jpg" className='rounded-full w-[300px] h-[300px] lg:h-[650px] lg:w-[650px]' />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Coming Soon Text */}
            <div className="space-y-4">
              <p className="text-red-500 font-medium text-lg tracking-wider animate-pulse">
                Coming Soon
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl  font-bold text-white leading-tight">
                DELICIOUS
                <br />
                BURGER <span className="text-orange-500">FOOD</span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-gray-400 text-lg max-w-md mx-auto lg:mx-0">
              Feel Hungry? Order Your Favourite Food.
            </p>

            {/* Countdown Timer */}
            <div className="space-y-6">
              {/* Timer */}
              <div className="grid grid-cols-4 gap-4 max-w-md mx-auto lg:mx-0">
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2">
                    {formatTime(timeLeft.days)}
                  </div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">
                    Days
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="text-red-500 text-3xl font-bold">:</div>
                </div>

                <div className="text-center">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2">
                    {formatTime(timeLeft.hours)}
                  </div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">
                    Hour
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="text-red-500 text-3xl font-bold">:</div>
                </div>
              </div>

              {/* Second Row */}
              <div className="grid grid-cols-4 gap-4 max-w-md mx-auto lg:mx-0">
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2">
                    {formatTime(timeLeft.minutes)}
                  </div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">
                    Minutes
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="text-red-500 text-3xl font-bold">:</div>
                </div>

                <div className="text-center">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2">
                    {formatTime(timeLeft.seconds)}
                  </div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">
                    Seconds
                  </div>
                </div>

                <div></div>
              </div>
            </div>

            <div className="pt-4">
              <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <button className="fixed bottom-8 right-8 w-12 h-12 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg z-20">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }

        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ComingSoonSection;
