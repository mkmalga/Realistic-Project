import React from 'react';
import { MapPin, Phone, Mail, Clock, Loader } from 'lucide-react';
import { useContactForm } from '../hooks/useContactForm';

export default function Contact() {
  const { formData, setFormData, isSubmitting, isSuccess, handleSubmit } = useContactForm();

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Our Office</h3>
                <p className="text-gray-600">India ,Hyderbad</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <p className="text-gray-600">+91 123456789</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-gray-600">contact@abcd.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Clock className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Business Hours</h3>
                <p className="text-gray-600">Mon - Fri: 9:00 AM - 9:00 PM</p>
                <p className="text-gray-600">Sat: 10:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <Loader className="h-5 w-5 animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <span>Send Message</span>
              )}
            </button>
            {isSuccess && (
              <div className="text-green-600 text-center mt-4">
                Message sent successfully! Our team will reach out to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}