"use client";
import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Calendar,
  Users,
  ChevronDown,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState("4 people");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("7:30pm");

  return (
    <footer className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-10 mb-16 flex-wrap">
          <div className="flex items-center mb-4 sm:mb-0">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mr-4">
              <div className="w-8 h-8 border-2 border-gray-300 rounded-full flex items-center justify-center">
                <Mail className="w-4 h-4 text-gray-400" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">
              Our Weekly <span className="text-red-500">Newsletter.</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row max-w-lg w-full sm:w-auto gap-0">
            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-t-md sm:rounded-l-md sm:rounded-t-none focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
            <button className="bg-red-500 text-white px-8 py-2 rounded-b-md sm:rounded-r-md sm:rounded-b-none hover:bg-red-600 transition-colors duration-200 font-medium">
              Subscribe
            </button>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          {/* Location 1 */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Titan Food Khan
            </h3>
            <div className="flex items-start text-gray-600 mb-4">
              <MapPin className="w-5 h-5 mt-1 mr-3 text-red-500 flex-shrink-0" />
              <p className="text-sm">
                570 8th Ave,New York, NY 10018 United States
              </p>
            </div>
            <button className="text-red-500 hover:text-red-600 text-sm font-medium mb-4 block">
              View Google Map
            </button>
            <div className="flex items-center text-gray-800 mb-2">
              <Phone className="w-4 h-4 mr-2 text-red-500" />
              <span className="font-semibold">+88 01835-397607</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="w-4 h-4 mr-2 text-red-500" />
              <span className="text-sm">11.00 AM – 11.00 PM</span>
            </div>
          </div>

          {/* Location 2 */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Cardio Food Khan
            </h3>
            <div className="flex items-start text-gray-600 mb-4">
              <MapPin className="w-5 h-5 mt-1 mr-3 text-red-500 flex-shrink-0" />
              <p className="text-sm">
                Doglood och Sliders foodtruck. Under Om oss kan ni läsa
              </p>
            </div>
            <button className="text-red-500 hover:text-red-600 text-sm font-medium mb-4 block">
              View Google Map
            </button>
            <div className="flex items-center text-gray-800 mb-2">
              <Phone className="w-4 h-4 mr-2 text-red-500" />
              <span className="font-semibold">+88 01835-397607</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="w-4 h-4 mr-2 text-red-500" />
              <span className="text-sm">11.00 AM – 11.00 PM</span>
            </div>
          </div>

          {/* Location 3 */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Maldo Food Khan
            </h3>
            <div className="flex items-start text-gray-600 mb-4">
              <MapPin className="w-5 h-5 mt-1 mr-3 text-red-500 flex-shrink-0" />
              <div className="text-sm">
                <p>Monday-Friday: 8am - 4pm</p>
                <p>Saturday: 9am - 5pm</p>
              </div>
            </div>
            <button className="text-red-500 hover:text-red-600 text-sm font-medium mb-4 block">
              View Google Map
            </button>
            <div className="flex items-center text-gray-800 mb-2">
              <Phone className="w-4 h-4 mr-2 text-red-500" />
              <span className="font-semibold">+88 01835-397607</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="w-4 h-4 mr-2 text-red-500" />
              <span className="text-sm">11.00 AM – 11.00 PM</span>
            </div>
          </div>

          {/* Booking Section */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Book Your Table
            </h3>
            <div className="space-y-4">
              {/* People Selection */}
              <div className="relative">
                <select
                  value={people}
                  onChange={(e) => setPeople(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent appearance-none bg-white"
                >
                  <option>2 people</option>
                  <option>3 people</option>
                  <option>4 people</option>
                  <option>5 people</option>
                  <option>6 people</option>
                  <option>7+ people</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>

              {/* Date Selection */}
              <div className="relative">
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Yyyy-Mm-Dd"
                />
              </div>

              {/* Time Selection */}
              <div className="relative">
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent appearance-none bg-white"
                >
                  <option>6:30pm</option>
                  <option>7:00pm</option>
                  <option>7:30pm</option>
                  <option>8:00pm</option>
                  <option>8:30pm</option>
                  <option>9:00pm</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>

              {/* Find Table Button */}
              <button className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition-colors duration-200 font-medium">
                Find Table
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Logo and Navigation */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-6 lg:mb-0">
              <div className="text-2xl font-bold">
                <span className="bg-red-500 text-white px-3 py-1 rounded">
                  Khadyo
                </span>
              </div>
              <nav className="flex flex-wrap items-center space-x-6 text-gray-600">
                <a
                  href="#"
                  className="hover:text-red-500 transition-colors duration-200"
                >
                  HOME
                </a>
                <a
                  href="#"
                  className="hover:text-red-500 transition-colors duration-200"
                >
                  MENU
                </a>
                <a
                  href="#"
                  className="hover:text-red-500 transition-colors duration-200"
                >
                  ABOUT US
                </a>
                <a
                  href="#"
                  className="hover:text-red-500 transition-colors duration-200"
                >
                  PAGE
                </a>
                <a
                  href="#"
                  className="hover:text-red-500 transition-colors duration-200"
                >
                  CONTACT US
                </a>
              </nav>
            </div>

            {/* Copyright */}
            <div className="text-gray-500 text-sm text-center lg:text-right">
              <p>
                Copyright © 2021{" "}
                <span className="text-red-500 font-semibold">Khadyo</span>
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute right-4 bottom-4 opacity-10">
          <div className="w-16 h-16 border-2 border-gray-300 rounded-full"></div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="fixed bottom-0 left-0 opacity-5 pointer-events-none">
        <img
          src="data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M100 20c44.18 0 80 35.82 80 80s-35.82 80-80 80-80-35.82-80-80 35.82-80 80-80z' fill='%23000'/%3E%3C/svg%3E"
          alt=""
          className="w-48 h-48"
        />
      </div>

      <div className="fixed bottom-0 right-0 opacity-5 pointer-events-none">
        <img
          src="data:image/svg+xml,%3Csvg width='150' height='150' viewBox='0 0 150 150' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M75 10c35.9 0 65 29.1 65 65s-29.1 65-65 65-65-29.1-65-65 29.1-65 65-65z' fill='%23000'/%3E%3C/svg%3E"
          alt=""
          className="w-36 h-36"
        />
      </div>

      {/* Windows activation watermark simulation */}
      <div className="fixed bottom-4 right-4 text-xs text-gray-400 opacity-30 pointer-events-none">
        <p>Activate Windows</p>
        <p>Go to Settings to activate Windows.</p>
      </div>
    </footer>
  );
}
