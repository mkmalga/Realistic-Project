import React from 'react';
import { Star, Users, Calendar } from 'lucide-react';

const completedProjects = [
  {
    id: 1,
    title: "Luxury Apartments Complex",
    location: "Downtown Manhattan",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80",
    completion: "2023",
    units: 250,
    rating: 4.8
  },
  {
    id: 2,
    title: "Green Valley Residences",
    location: "Brooklyn Heights",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
    completion: "2022",
    units: 180,
    rating: 4.9
  },
  {
    id: 3,
    title: "Riverside Towers",
    location: "Upper East Side",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80",
    completion: "2023",
    units: 320,
    rating: 4.7
  }
];

export default function CompletedProjects() {
  return (
    <section className="py-20 bg-white">
      <div className="responsive-container responsive-padding">
        <h2 className="text-4xl font-bold text-center mb-12">Completed Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {completedProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 w-full p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-200 mb-4">{project.location}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{project.completion}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4" />
                    <span>{project.units} units</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span>{project.rating}</span>
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