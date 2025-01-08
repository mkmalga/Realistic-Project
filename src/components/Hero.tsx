import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const handleViewProperties = () => {
    const propertiesSection = document.getElementById('properties');
    propertiesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="hero-title font-bold mb-6">Find Your Dream Home</h1>
          <p className="hero-subtitle mb-8">Discover the perfect property with ILA Real Estate</p>
          <button 
            onClick={handleViewProperties}
            className="group bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 flex items-center space-x-2 mx-auto"
          >
            <span>View Properties</span>
            <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
}