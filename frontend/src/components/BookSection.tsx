'use client';

import { useState } from 'react';

export default function BookSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    message: ''
  });

  const services = [
    'Comprehensive Eye Examination',
    'Eyelid Surgery Consultation',
    'Orbital Disorder Treatment',
    'Cosmetic Enhancement',
    'Emergency Eye Care',
    'Follow-up Consultation'
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Appointment booking:', formData);
    alert('Appointment request submitted! We will contact you shortly to confirm.');
  };

  return (
    <section className="relative py-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-white"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-100/30 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white rounded-lg px-6 py-3 shadow-md mb-6">
            <div className="w-8 h-8 bg-amber-700 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white text-sm font-bold">AP</span>
            </div>
            <span className="text-amber-700 font-medium">Book Appointment</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Schedule Your
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent"> Consultation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Book your appointment with Dr. Ajay Krishna Murthy for expert 
            oculoplastic care and personalized treatment.
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Booking Form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Select Service *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                >
                  <option value="">Choose a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  />
                </div>
                
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Time *
                  </label>
                  <select
                    id="time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select time</option>
                    {timeSlots.map((time, index) => (
                      <option key={index} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  placeholder="Any specific concerns or questions..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-medium py-4 px-6 rounded-lg transition-all duration-300 hover:shadow-lg"
              >
                Book Appointment
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-600">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+91 96115 17424</p>
                    <p className="text-sm text-gray-500">Available 9 AM - 6 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-600">📧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@drajaykrishnamurthy.com</p>
                    <p className="text-sm text-gray-500">We&apos;ll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-600">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Clinic Address</h4>
                    <p className="text-gray-600">123 Medical Center,<br />Bangalore, Karnataka 560001</p>
                    <p className="text-sm text-gray-500">Free parking available</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-3xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Emergency Contact</h3>
              <p className="mb-4">For urgent eye emergencies, call our 24/7 helpline:</p>
              <div className="text-2xl font-bold">+91 98765 43210</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 