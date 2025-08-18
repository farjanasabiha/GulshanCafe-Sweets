'use client'

import React, { useState, useEffect } from 'react';

const SunzineGallery = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Gallery items matching the layout pattern
  const galleryItems = [
    {
      id: 1,
      image: "tea.jpg",
      title: "Golden Hour",
      description: "Capturing the perfect moment",
      size: "large", // spans 2 columns
      category: "Portrait",
    },
    {
      id: 2,
      image: "tehari.jpg",
      title: "Forest Bridge",
      description: "Journey through nature",
      size: "tall",
      category: "Landscape",
    },
    {
      id: 3,
      image: "swtte.jpg",
      title: "Modern Architecture",
      description: "Clean lines and geometry",
      size: "medium",
      category: "Architecture",
    },
    {
      id: 4,
      image: "kalojam.jpg",
      title: "Culinary Art",
      description: "Food as visual poetry",
      size: "medium",
      category: "Food",
    },

    {
      id: 9,
      image: "fishes.jpg",
      title: "Blue Serenity",
      description: "Peaceful moments",
      size: "small",
      category: "Abstract",
    },
    {
      id: 10,
      image: "coffee.jpg",
      title: "Tropical Vibes",
      description: "Paradise found",
      size: "tall",
      category: "Nature",
    },
    {
      id: 11,
      image: "biriyani.jpg",
      title: "Ocean Dreams",
      description: "Endless horizons",
      size: "medium",
      category: "Seascape",
    },
    {
      id: 12,
      image: "chicken.jpg",
      title: "Vintage Red",
      description: "Classic automotive",
      size: "medium",
      category: "Vintage",
    },
    {
      id: 13,
      image: "vagitable.jpg",
      title: "Gentle Touch",
      description: "Intimate moments",
      size: "medium",
      category: "Emotion",
    },
    {
      id: 14,
      image: "vagitable.jpg",
      title: "Gentle Touch",
      description: "Intimate moments",
      size: "medium",
      category: "Emotion",
    },
    {
      id: 14,
      image: "vagitable.jpg",
      title: "Gentle Touch",
      description: "Intimate moments",
      size: "medium",
      category: "Emotion",
    },
  ];

  const getSizeClasses = (size) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2';
      case 'tall':
        return 'md:row-span-2';
      case 'wide':
        return 'md:col-span-2';
      case 'small':
        return '';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">

      {/* Gallery */}
      <main className="px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-fr">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className={`group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-[1.02] ${getSizeClasses(item.size)} ${
                  isLoaded ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'forwards'
                }}
              >
                {/* Image */}
                <div className="w-full h-full min-h-[200px] relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      {/* Category Badge */}
                      <div className="mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                        <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/30">
                          {item.category}
                        </span>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-white font-bold text-xl mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                        {item.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-white/90 text-sm leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-300">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-12 transform"></div>
                  
                  {/* Border Glow */}
                  <div className="absolute inset-0 rounded-lg ring-0 group-hover:ring-2 group-hover:ring-blue-400/50 transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
        
        /* Masonry-like responsive behavior */
        @media (min-width: 768px) {
          .grid {
            grid-auto-rows: 200px;
          }
        }
        
        /* Hover glow effect */
        .group:hover {
          filter: brightness(1.05);
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #2563eb, #7c3aed);
        }
      `}</style>
    </div>
  );
};

export default SunzineGallery;