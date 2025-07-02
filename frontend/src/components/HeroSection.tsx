'use client';

import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Photo data for carousel
  const photos = [
    {
      id: 1,
      src: '/images/image1.jpg',
      caption: 'Professional Portrait',
      alt: 'Dr. Ajay Krishna Murthy - Professional Portrait'
    },
    {
      id: 2,
      src: '/images/image2.jpg',
      caption: 'Medical Practice',
      alt: 'Dr. Ajay Krishna Murthy - Medical Practice'
    },
    {
      id: 3,
      src: '/images/image3.jpg',
      caption: 'Patient Care',
      alt: 'Dr. Ajay Krishna Murthy - Patient Care'
    },
    {
      id: 4,
      src: '/images/image4.jpg',
      caption: 'Oculoplasty Expert',
      alt: 'Dr. Ajay Krishna Murthy - Oculoplasty Expert'
    }
  ];

  // Auto-slide functionality every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % photos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [photos.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % photos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <section className="relative py-16" style={{backgroundColor: '#F5F0E8'}}>
      {/* Background Elements */}
      <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom right, #F9F6F1, #F1EBE3)'}}></div>
      <div className="absolute top-10 right-10 w-72 h-72 rounded-full blur-3xl" style={{background: 'linear-gradient(to bottom right, rgba(212, 196, 176, 0.3), rgba(182, 140, 88, 0.2))'}}></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full blur-3xl" style={{background: 'linear-gradient(to bottom right, rgba(212, 196, 176, 0.2), rgba(155, 139, 122, 0.2))'}}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-12 border border-white/50">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            
            {/* Sliding Photo Section */}
            <div className="lg:col-span-2 text-center">
              <div className="relative inline-block">
                {/* Sliding Photo Container */}
                <div className="relative w-80 h-96 mx-auto rounded-xl overflow-hidden shadow-xl border-4" style={{borderColor: '#D4C4B0'}}>
                  {photos.map((photo, index) => (
                    <div
                      key={photo.id}
                      className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                        index === currentSlide
                          ? 'opacity-100'
                          : 'opacity-0'
                      }`}
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-full object-cover object-center"
                        onError={(e) => {
                          console.warn(`Failed to load image: ${photo.src}`);
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                  ))}
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white/90 rounded-md shadow-md flex items-center justify-center transition-all duration-200 z-20"
                  >
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <button
                    onClick={nextSlide}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white/90 rounded-md shadow-md flex items-center justify-center transition-all duration-200 z-20"
                  >
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                
                {/* Photo Indicators */}
                <div className="mt-4 flex justify-center space-x-3">
                  {photos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className="w-2 h-2 rounded-full transition-all duration-300"
                      style={{backgroundColor: index === currentSlide ? '#B68C58' : '#D4C4B0'}}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:col-span-3">
              <div className="space-y-8">
                {/* Title */}
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                    Meet Your
                    <span className="bg-gradient-to-r bg-clip-text text-transparent" style={{backgroundImage: 'linear-gradient(to right, #B68C58, #8A7D71)'}}> Expert Eye Surgeon</span>
                  </h2>
                  <div className="w-24 h-1 rounded-full" style={{background: 'linear-gradient(to right, #B68C58, #8A7D71)'}}></div>
                </div>

                {/* Description */}
                <div className="space-y-6">
                  <p className="text-xl text-gray-700 leading-relaxed font-light">
                    Dr. Ajay Krishna Murthy is a <strong style={{color: '#B68C58'}}>distinguished Oculoplasty consultant</strong> based in Bangalore, 
                    recognized for his academic excellence and extensive expertise in Ophthalmology.
                  </p>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    With advanced training from prestigious institutions and a commitment to precision and innovation, 
                    Dr. Murthy specializes in both <em style={{color: '#8A7D71'}}>fundamental and advanced lid, orbit, and aesthetic oculoplastic surgeries</em>.
                  </p>
                </div>

                {/* Professional Credentials */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-6 rounded-lg border hover:shadow-md transition-all duration-300" style={{borderColor: '#D4C4B0'}}>
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3" style={{backgroundColor: '#B68C58'}}>
                        <span className="text-white text-sm font-bold">MS</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-1">JIPMER Graduate</h3>
                      <p className="text-sm text-gray-600">MS Ophthalmology</p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg border hover:shadow-md transition-all duration-300" style={{borderColor: '#D4C4B0'}}>
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3" style={{backgroundColor: '#8A7D71'}}>
                        <span className="text-white text-sm font-bold">LV</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-1">L.V. Prasad Fellow</h3>
                      <p className="text-sm text-gray-600">Advanced Training</p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg border hover:shadow-md transition-all duration-300" style={{borderColor: '#D4C4B0'}}>
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3" style={{backgroundColor: '#B68C58'}}>
                        <span className="text-white text-sm font-bold">MD</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-1">Specialist Surgeon</h3>
                      <p className="text-sm text-gray-600">Oculoplasty Expert</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <button className="text-white font-medium py-4 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300" style={{backgroundColor: '#B68C58'}} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#8A7D71'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#B68C58'}>
                    Book Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 