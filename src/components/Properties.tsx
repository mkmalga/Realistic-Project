import React from 'react';
import { Bed, Bath, Square, ArrowRight } from 'lucide-react';

const properties = [
  {
    id: 1,
    title: "Modern Villa",
    price: "$850,000",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80",
    beds: 4,
    baths: 3,
    sqft: "3,500",
    location: "Upper West Side"
  },
  {
    id: 2,
    title: "Luxury Apartment",
    price: "$450,000",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80",
    beds: 2,
    baths: 2,
    sqft: "1,200",
    location: "Chelsea"
  },
  {
    id: 3,
    title: "Family Home",
    price: "$650,000",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80",
    beds: 3,
    baths: 2,
    sqft: "2,800",
    location: "Brooklyn Heights"
  },
];

export default function Properties() {
  const handleViewAll = () => {
    const propertiesSection = document.getElementById('all-properties');
    propertiesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="properties" className="py-20 bg-gray-50">
      <div className="responsive-container responsive-padding">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold">Featured Properties</h2>
          <button 
            onClick={handleViewAll}
            className="group flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-300"
          >
            <span>View All Properties</span>
            <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
        <div className="property-grid">
          {properties.map((property) => (
            <div 
              key={property.id} 
              className="group bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-1 rounded-full">
                  {property.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                <p className="text-gray-600 mb-4">{property.location}</p>
                <div className="flex justify-between text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Bed className="h-5 w-5" />
                    <span>{property.beds} beds</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Bath className="h-5 w-5" />
                    <span>{property.baths} baths</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Square className="h-5 w-5" />
                    <span>{property.sqft} sq ft</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}