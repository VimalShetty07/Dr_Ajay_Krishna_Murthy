export default function ContactSection() {
  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{background: 'linear-gradient(135deg, #F5F0E8, #F1EBE3, #EDE5DC)'}}>
        <div className="absolute top-0 left-0 w-full h-full" style={{background: 'linear-gradient(to bottom right, rgba(182, 140, 88, 0.1), rgba(138, 125, 113, 0.1))'}}></div>
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full opacity-20" style={{background: 'linear-gradient(45deg, #B68C58, #8A7D71)'}}></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full opacity-20" style={{background: 'linear-gradient(45deg, #8A7D71, #9B8B7A)'}}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white rounded-lg px-6 py-3 shadow-md mb-6">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3" style={{backgroundColor: '#B68C58'}}>
              <span className="text-white text-sm font-bold">CT</span>
            </div>
            <span className="font-medium" style={{color: '#8A7D71'}}>Get In Touch</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Schedule Your
            <span className="bg-gradient-to-r bg-clip-text text-transparent ml-3" style={{backgroundImage: 'linear-gradient(to right, #B68C58, #8A7D71)'}}>
              Consultation
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to take the next step in your eye care journey? Contact us to schedule 
            a consultation with Dr. Ajay Krishna Murthy.
          </p>
          
          <div className="mt-6 w-24 h-1 rounded-full mx-auto" style={{background: 'linear-gradient(to right, #B68C58, #8A7D71)'}}></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{backgroundColor: '#B68C58'}}>
                    <span className="text-white text-lg">📞</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+91 96115 17424</p>
                    <p className="text-sm text-gray-500">Available for calls & WhatsApp</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{backgroundColor: '#8A7D71'}}>
                    <span className="text-white text-lg">✉️</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">drajaykmurthy@gmail.com</p>
                    <p className="text-sm text-gray-500">24-48 hour response time</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{backgroundColor: '#9B8B7A'}}>
                    <span className="text-white text-lg">📍</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">Bangalore, Karnataka</p>
                    <p className="text-sm text-gray-500">Multiple clinic locations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid sm:grid-cols-2 gap-4">
              <a 
                href="tel:+919611517424"
                className="flex items-center justify-center space-x-3 text-white p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{background: 'linear-gradient(45deg, #B68C58, #8A7D71)'}}
              >
                <span className="text-2xl">📞</span>
                <span className="font-medium">Call Now</span>
              </a>
              
              <a 
                href="https://wa.me/919611517424"
                className="flex items-center justify-center space-x-3 text-white p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{background: 'linear-gradient(45deg, #8A7D71, #9B8B7A)'}}
              >
                <span className="text-2xl">💬</span>
                <span className="font-medium">WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Appointment Form */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Appointment</h3>
            
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-2 transition-colors"
                    style={{'--focus-border-color': '#B68C58'} as React.CSSProperties}
                    onFocus={(e) => e.target.style.borderColor = '#B68C58'}
                    onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-2 transition-colors"
                    onFocus={(e) => e.target.style.borderColor = '#B68C58'}
                    onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-2 transition-colors"
                  onFocus={(e) => e.target.style.borderColor = '#B68C58'}
                  onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-2 transition-colors"
                  onFocus={(e) => e.target.style.borderColor = '#B68C58'}
                  onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Required
                </label>
                <select 
                  id="service" 
                  name="service"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-2 transition-colors"
                  onFocus={(e) => e.target.style.borderColor = '#B68C58'}
                  onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                >
                  <option value="">Select a service</option>
                  <option value="consultation">Consultation</option>
                  <option value="eyelid-surgery">Eyelid Surgery</option>
                  <option value="orbital-surgery">Orbital Surgery</option>
                  <option value="aesthetic">Aesthetic Procedures</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-2 transition-colors resize-none"
                  onFocus={(e) => e.target.style.borderColor = '#B68C58'}
                  onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                  placeholder="Tell us about your needs or any specific concerns..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full text-white font-medium py-4 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{background: 'linear-gradient(45deg, #B68C58, #8A7D71)'}}
              >
                Request Appointment
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                We&apos;ll get back to you within 24 hours to confirm your appointment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 