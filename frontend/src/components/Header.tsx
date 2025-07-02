'use client';

export default function Header() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Logo and Name */}
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <img 
                src="/images/logo.jpeg" 
                alt="Oculoplasty Logo" 
                className="h-10 w-10 object-cover rounded-lg"
              />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">
                Dr. Ajay Krishna Murthy
              </h1>
              <p className="text-sm text-blue-700">Oculoplasty Surgeon</p>
            </div>
          </div>

          {/* Right side - Quick Links and CTA */}
          <div className="flex items-center space-x-6">
            {/* Quick Links */}
            <nav className="hidden md:flex items-center space-x-6">
              <button 
                onClick={() => scrollToSection('#about')}
                className="text-gray-600 hover:text-blue-700 text-sm font-medium transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('#education')}
                className="text-gray-600 hover:text-blue-700 text-sm font-medium transition-colors"
              >
                Education
              </button>
              <button 
                onClick={() => scrollToSection('#specializations')}
                className="text-gray-600 hover:text-blue-700 text-sm font-medium transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('#experience')}
                className="text-gray-600 hover:text-blue-700 text-sm font-medium transition-colors"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('#contact')}
                className="text-gray-600 hover:text-blue-700 text-sm font-medium transition-colors"
              >
                Contact
              </button>
            </nav>

            {/* Call to Action Button */}
            <a 
              href="tel:+919611517424"
              className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
} 