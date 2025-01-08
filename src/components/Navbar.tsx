import React from 'react';
import { Home, Phone } from 'lucide-react';
import { isMobileDevice } from '../utils/deviceDetection';

export default function Navbar() {
  const phoneNumber = "+91123456789"; // Replace with actual phone number

  const handlePhoneClick = () => {
    if (isMobileDevice()) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      alert("Please visit our website on a mobile device to call us. Alternatively, you can reach us at " + phoneNumber);
    }
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Home className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800"> Real Estate</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#properties" className="text-gray-600 hover:text-blue-600">Properties</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
          </div>
          <button 
            onClick={handlePhoneClick}
            className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
          >
            <Phone className="h-5 w-5" />
            <span className="hidden md:inline">{phoneNumber}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}