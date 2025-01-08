import React from 'react';
import { Users, Award, Clock, Building } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">About company</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6">
            <Users className="h-12 w-12 mx-auto text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
            <p className="text-gray-600">Professional agents with years of experience</p>
          </div>
          <div className="text-center p-6">
            <Award className="h-12 w-12 mx-auto text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Award Winning</h3>
            <p className="text-gray-600">Recognized for excellence in real estate</p>
          </div>
          <div className="text-center p-6">
            <Clock className="h-12 w-12 mx-auto text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">Always here to help our clients</p>
          </div>
          <div className="text-center p-6">
            <Building className="h-12 w-12 mx-auto text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Wide Portfolio</h3>
            <p className="text-gray-600">Diverse range of properties</p>
          </div>
        </div>
      </div>
    </section>
  );
}