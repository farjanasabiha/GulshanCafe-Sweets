// "use client";
// import React, { useState } from "react";
// import {
//   Mail,
//   MapPin,
//   Phone,
//   Clock,
//   Calendar,
//   Users,
//   ChevronDown,
// } from "lucide-react";

// export default function Footer() {
//   const [email, setEmail] = useState("");
//   const [people, setPeople] = useState("4 people");
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("7:30pm");

//   return (
//     <footer className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex items-center justify-between gap-10 mb-16 flex-wrap">
//           <div className="flex items-center mb-4 sm:mb-0">
//             <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mr-4">
//               <div className="w-8 h-8 border-2 border-gray-300 rounded-full flex items-center justify-center">
//                 <Mail className="w-4 h-4 text-gray-400" />
//               </div>
//             </div>
//             <h2 className="text-3xl font-bold text-gray-800">
//               Our Weekly <span className="text-red-500">Newsletter.</span>
//             </h2>
//           </div>

//           <div className="flex flex-col sm:flex-row max-w-lg w-full sm:w-auto gap-0">
//             <input
//               type="email"
//               placeholder="Enter email address"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="flex-1 px-4 py-2 border border-gray-300 rounded-t-md sm:rounded-l-md sm:rounded-t-none focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//             />
//             <button className="bg-red-500 text-white px-8 py-2 rounded-b-md sm:rounded-r-md sm:rounded-b-none hover:bg-red-600 transition-colors duration-200 font-medium">
//               Subscribe
//             </button>
//           </div>
//         </div>

//         {/* Main Content Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
//           {/* Location 1 */}
//           <div className="bg-white rounded-lg p-6 shadow-sm">
//             <h3 className="text-xl font-semibold text-gray-800 mb-4">
//               Titan Food Khan
//             </h3>
//             <div className="flex items-start text-gray-600 mb-4">
//               <MapPin className="w-5 h-5 mt-1 mr-3 text-red-500 flex-shrink-0" />
//               <p className="text-sm">
//                 315 Central Avenue , Albany, NY, United States, New York
//               </p>
//             </div>
//             <button className="text-red-500 hover:text-red-600 text-sm font-medium mb-4 block">
//               View Google Map
//             </button>
//             <div className="flex items-center text-gray-800 mb-2">
//               <Phone className="w-4 h-4 mr-2 text-red-500" />
//               <span className="font-semibold">+88 01835-397607</span>
//             </div>
//             <div className="flex items-center text-gray-600">
//               <Clock className="w-4 h-4 mr-2 text-red-500" />
//               <span className="text-sm">11.00 AM – 11.00 PM</span>
//             </div>
//           </div>

//           {/* Location 2 */}
//           <div className="bg-white rounded-lg p-6 shadow-sm">
//             <h3 className="text-xl font-semibold text-gray-800 mb-4">
//               Cardio Food Khan
//             </h3>
//             <div className="flex items-start text-gray-600 mb-4">
//               <MapPin className="w-5 h-5 mt-1 mr-3 text-red-500 flex-shrink-0" />
//               <p className="text-sm">
//                 315 Central Avenue , Albany, NY, United States, New York
//               </p>
//             </div>
//             <button className="text-red-500 hover:text-red-600 text-sm font-medium mb-4 block">
//               View Google Map
//             </button>
//             <div className="flex items-center text-gray-800 mb-2">
//               <Phone className="w-4 h-4 mr-2 text-red-500" />
//               <span className="font-semibold">+88 01835-397607</span>
//             </div>
//             <div className="flex items-center text-gray-600">
//               <Clock className="w-4 h-4 mr-2 text-red-500" />
//               <span className="text-sm">11.00 AM – 11.00 PM</span>
//             </div>
//           </div>

//           {/* Location 3 */}
//           <div className="bg-white rounded-lg p-6 shadow-sm">
//             <h3 className="text-xl font-semibold text-gray-800 mb-4">
//               Maldo Food Khan
//             </h3>
//             <div className="flex items-start text-gray-600 mb-4">
//               <MapPin className="w-5 h-5 mt-1 mr-3 text-red-500 flex-shrink-0" />
//               <div className="text-sm">
//                 <p>Monday-Friday: 8am - 4pm</p>
//                 <p>Saturday: 9am - 5pm</p>
//               </div>
//             </div>
//             <button className="text-red-500 hover:text-red-600 text-sm font-medium mb-4 block">
//               View Google Map
//             </button>
//             <div className="flex items-center text-gray-800 mb-2">
//               <Phone className="w-4 h-4 mr-2 text-red-500" />
//               <span className="font-semibold">+88 01835-397607</span>
//             </div>
//             <div className="flex items-center text-gray-600">
//               <Clock className="w-4 h-4 mr-2 text-red-500" />
//               <span className="text-sm">11.00 AM – 11.00 PM</span>
//             </div>
//           </div>

//           {/* Booking Section */}
//           <div className="bg-white rounded-lg p-6 shadow-sm">
//             <h3 className="text-xl font-semibold text-gray-800 mb-6">
//               Book Your Table
//             </h3>
//             <div className="space-y-4">
//               {/* People Selection */}
//               <div className="relative">
//                 <select
//                   value={people}
//                   onChange={(e) => setPeople(e.target.value)}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent appearance-none bg-white"
//                 >
//                   <option>2 people</option>
//                   <option>3 people</option>
//                   <option>4 people</option>
//                   <option>5 people</option>
//                   <option>6 people</option>
//                   <option>7+ people</option>
//                 </select>
//                 <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
//               </div>

//               {/* Date Selection */}
//               <div className="relative">
//                 <input
//                   type="date"
//                   value={date}
//                   onChange={(e) => setDate(e.target.value)}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                   placeholder="Yyyy-Mm-Dd"
//                 />
//               </div>

//               {/* Time Selection */}
//               <div className="relative">
//                 <select
//                   value={time}
//                   onChange={(e) => setTime(e.target.value)}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent appearance-none bg-white"
//                 >
//                   <option>6:30pm</option>
//                   <option>7:00pm</option>
//                   <option>7:30pm</option>
//                   <option>8:00pm</option>
//                   <option>8:30pm</option>
//                   <option>9:00pm</option>
//                 </select>
//                 <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
//               </div>

//               {/* Find Table Button */}
//               <button className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition-colors duration-200 font-medium">
//                 Find Table
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="border-t border-gray-200 pt-8">
//           <div className="flex flex-col lg:flex-row items-center justify-between">
//             {/* Logo and Navigation */}
//             <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-6 lg:mb-0">
//               <div className="text-2xl font-bold">
//                 <span className="bg-red-500 text-white px-3 py-1 rounded">
//                   Khadyo
//                 </span>
//               </div>
//               <nav className="flex flex-wrap items-center space-x-6 text-gray-600">
//                 <a
//                   href="#"
//                   className="hover:text-red-500 transition-colors duration-200"
//                 >
//                   HOME
//                 </a>
//                 <a
//                   href="#"
//                   className="hover:text-red-500 transition-colors duration-200"
//                 >
//                   MENU
//                 </a>
//                 <a
//                   href="#"
//                   className="hover:text-red-500 transition-colors duration-200"
//                 >
//                   ABOUT US
//                 </a>
//                 <a
//                   href="#"
//                   className="hover:text-red-500 transition-colors duration-200"
//                 >
//                   PAGE
//                 </a>
//                 <a
//                   href="#"
//                   className="hover:text-red-500 transition-colors duration-200"
//                 >
//                   CONTACT US
//                 </a>
//               </nav>
//             </div>

//             {/* Copyright */}
//             <div className="text-gray-500 text-sm text-center lg:text-right">
//               <p>
//                 Copyright © 2021{" "}
//                 <span className="text-red-500 font-semibold">Khadyo</span>
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Decorative Elements */}
//         <div className="absolute right-4 bottom-4 opacity-10">
//           <div className="w-16 h-16 border-2 border-gray-300 rounded-full"></div>
//         </div>
//       </div>

//       {/* Background decorative elements */}
//       <div className="fixed bottom-0 left-0 opacity-5 pointer-events-none">
//         <img
//           src="data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M100 20c44.18 0 80 35.82 80 80s-35.82 80-80 80-80-35.82-80-80 35.82-80 80-80z' fill='%23000'/%3E%3C/svg%3E"
//           alt=""
//           className="w-48 h-48"
//         />
//       </div>

//       <div className="fixed bottom-0 right-0 opacity-5 pointer-events-none">
//         <img
//           src="data:image/svg+xml,%3Csvg width='150' height='150' viewBox='0 0 150 150' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M75 10c35.9 0 65 29.1 65 65s-29.1 65-65 65-65-29.1-65-65 29.1-65 65-65z' fill='%23000'/%3E%3C/svg%3E"
//           alt=""
//           className="w-36 h-36"
//         />
//       </div>

//       {/* Windows activation watermark simulation */}
//       <div className="fixed bottom-4 right-4 text-xs text-gray-400 opacity-30 pointer-events-none">
//         <p>Activate Windows</p>
//         <p>Go to Settings to activate Windows.</p>
//       </div>
//     </footer>
//   );
// }




import React from 'react';
import Image from "next/image";
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  const instagramPosts = [
    '/fish.jpg',
    '/swtte.jpg',
    '/kalojam.jpg',
    '/swtte.jpg',
    '/tanduri.jpg',
        '/kalojam.jpg',
    '/swtte.jpg',
    '/tanduri.jpg',
    '/fish.jpg',
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z" fill="currentColor" />
        </svg>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-start justify-center ">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <Image src="/logo.png" height={60} width={60} alt="Logo" />
              </a>
            </div>
            
            <p className="text-gray-400 leading-relaxed -mt-8">
              Wecome Gulshan Cafe and Sweets. Serving authentic Bangladeshi home-style halal food in Albany, NY. 
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">315 Central Avenue , Albany, NY, United States, New York</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <a href="mailto:info@example.com" className="text-gray-300 hover:text-amber-400 transition-colors">
                    info@gulshancafeny.com
                  </a>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <a href="tel:+12345667123" className="text-gray-300 hover:text-amber-400 transition-colors">
                    +1 838-207-7052
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <a href="tel:+12345678" className="text-gray-300 hover:text-amber-400 transition-colors">
                    +1 838-207-7052
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick links</h4>
            <ul className="space-y-3">
              {['About Us', 'Menu', 'Blogs', 'FAQ', 'Service', 'Gallery', 'Contact Us'].map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-amber-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-amber-400 transition-all duration-200 mr-0 group-hover:mr-2"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Instagram Gallery */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Instagram</h4>
            <div className="grid grid-cols-3 gap-2">
              {instagramPosts.map((post, index) => (
                  <Image 
                    src={post} 
                    width={100}
                    height={100}
                    alt='Image'
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
              ))}
            </div>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Subscribe</h4>
            <p className="text-gray-400 mb-6 leading-relaxed">
             Serving authentic Bangladeshi home-style halal food in Albany, NY. From traditional dishes to handcrafted sweets, each meal reflects rich heritage and care. Catering available for Weddings, Birthday Party and Events.
            </p>
            
            <div className="space-y-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter Your Email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-r-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                  Subscribe
                </button>
              </div>
              
              {/* Social Media */}
              <div className="flex space-x-3 pt-2">
                {[
                  { icon: Facebook, href: '#' },
                  { icon: Twitter, href: '#' },
                  { icon: Youtube, href: '#' },
                  { icon: Instagram, href: '#' }
                ].map(({ icon: Icon, href }, index) => (
                  <a 
                    key={index}
                    href={href}
                    className="w-10 h-10 bg-gray-800 hover:bg-amber-500 rounded-full flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm">
              © Copyright Cafeu. 2025 All Right Reserved
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}