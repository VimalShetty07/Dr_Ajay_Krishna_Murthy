'use client';

export default function Footer() {
  return (
    <footer className="relative text-white overflow-hidden" style={{background: 'linear-gradient(to bottom right, #8A7D71, #B68C58, #9B8B7A)'}}>
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-1" style={{background: 'linear-gradient(to right, #B68C58, #8A7D71, #D4C4B0)'}}></div>
      
      {/* Floating background elements */}
      <div className="absolute top-10 right-10 w-32 h-32 rounded-full blur-xl animate-pulse" style={{backgroundColor: 'rgba(182, 140, 88, 0.1)'}}></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full blur-2xl animate-pulse" style={{backgroundColor: 'rgba(138, 125, 113, 0.1)'}}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Doctor Info */}
          <div className="lg:col-span-2">
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4" style={{background: 'linear-gradient(to right, #B68C58, #8A7D71)'}}>
                <span className="text-xl">👨‍⚕️</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Dr. Ajay Krishna Murthy</h3>
                <p style={{color: '#F5F0E8'}}>Oculoplasty Surgeon</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Specialized consultant in Oculoplasty with extensive training from prestigious institutions. 
              Committed to providing exceptional care in ophthalmology and advanced surgical procedures.
            </p>
            
            <div className="flex space-x-4">
              <a href="tel:+919611517424" className="p-3 rounded-lg transition-colors" style={{backgroundColor: '#B68C58'}} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#8A7D71'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#B68C58'}>
                <span className="text-xl">📞</span>
              </a>
              <a href="mailto:drajaykmurthy@gmail.com" className="p-3 rounded-lg transition-colors" style={{backgroundColor: '#8A7D71'}} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#B68C58'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#8A7D71'}>
                <span className="text-xl">✉️</span>
              </a>
              <a href="https://wa.me/919611517424" className="p-3 rounded-lg transition-colors" style={{backgroundColor: '#B68C58'}} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#8A7D71'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#B68C58'}>
                <span className="text-xl">💬</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6" style={{color: '#F5F0E8'}}>Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors hover:underline">About Dr. Murthy</a></li>
              <li><a href="#specializations" className="text-gray-300 hover:text-white transition-colors hover:underline">Specializations</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors hover:underline">Services</a></li>
              <li><a href="#experience" className="text-gray-300 hover:text-white transition-colors hover:underline">Experience</a></li>
              <li><a href="#education" className="text-gray-300 hover:text-white transition-colors hover:underline">Education</a></li>
              <li><a href="#book" className="text-gray-300 hover:text-white transition-colors hover:underline">Book Appointment</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Dr. Ajay Krishna Murthy. All rights reserved. | Excellence in Oculoplastic Surgery
          </p>
        </div>
      </div>
    </footer>
  );
} 