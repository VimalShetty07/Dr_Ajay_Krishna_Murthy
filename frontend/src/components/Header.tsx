'use client';

export default function Header() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="border-b shadow-sm" style={{backgroundColor: '#F5F0E8', borderColor: '#D4C4B0'}}>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Logo and Name */}
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{backgroundColor: '#B68C58'}}>
                <span className="text-white text-sm font-bold">DM</span>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">
                Dr. Ajay Krishna Murthy
              </h1>
              <p className="text-sm" style={{color: '#8A7D71'}}>Oculoplasty Surgeon</p>
            </div>
          </div>

          {/* Right side - Quick Links and CTA */}
          <div className="flex items-center space-x-6">
            {/* Quick Links */}
            <nav className="hidden md:flex items-center space-x-6">
              <button 
                onClick={() => scrollToSection('#about')}
                className="text-sm font-medium transition-colors hover:opacity-80"
                style={{color: '#8A7D71'}}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('#specializations')}
                className="text-sm font-medium transition-colors hover:opacity-80"
                style={{color: '#8A7D71'}}
              >
                Specialization
              </button>
              <button 
                onClick={() => scrollToSection('#services')}
                className="text-sm font-medium transition-colors hover:opacity-80"
                style={{color: '#8A7D71'}}
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('#book')}
                className="text-sm font-medium transition-colors hover:opacity-80"
                style={{color: '#8A7D71'}}
              >
                Book
              </button>
              <button 
                onClick={() => scrollToSection('#vlogs')}
                className="text-sm font-medium transition-colors hover:opacity-80"
                style={{color: '#8A7D71'}}
              >
                Vlogs
              </button>
            </nav>

            {/* Call to Action Button */}
            <a 
              href="tel:+919611517424"
              className="text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:opacity-90"
              style={{backgroundColor: '#B68C58'}}
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
} 