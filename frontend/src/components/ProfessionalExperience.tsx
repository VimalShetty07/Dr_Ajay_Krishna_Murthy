export default function ProfessionalExperience() {
  return (
    <section className="py-16" style={{background: 'linear-gradient(to bottom right, #F1EBE3, #F5F0E8)'}}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="bg-white rounded-lg px-6 py-3 shadow-md mb-6 inline-flex items-center">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3" style={{backgroundColor: '#B68C58'}}>
              <span className="text-white text-sm font-bold">EX</span>
            </div>
            <span className="font-medium" style={{color: '#8A7D71'}}>Experience</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional
            <span className="bg-gradient-to-r bg-clip-text text-transparent" style={{backgroundImage: 'linear-gradient(to right, #B68C58, #8A7D71)'}}> Journey</span>
          </h2>
          <div className="w-24 h-1 rounded-full mx-auto" style={{background: 'linear-gradient(to right, #B68C58, #8A7D71)'}}></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Current Position */}
          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border" style={{borderColor: '#D4C4B0'}}>
            <div className="flex items-start mb-6">
              <div className="w-16 h-16 rounded-lg flex items-center justify-center mr-4" style={{backgroundColor: '#B68C58'}}>
                <span className="text-white text-lg font-bold">CR</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Current Positions</h3>
                <p style={{color: '#8A7D71'}}>Active Practice</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 border" style={{borderColor: '#D4C4B0'}}>
                <h4 className="font-semibold text-gray-900 mb-2">Freelance Oculoplasty Consultant</h4>
                <p className="text-gray-600 mb-2">Independent Practice, Bangalore</p>
                <div className="text-sm" style={{color: '#B68C58'}}>
                  <p>• Comprehensive oculoplastic surgical services</p>
                  <p>• Advanced lid and orbital procedures</p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border" style={{borderColor: '#D4C4B0'}}>
                <h4 className="font-semibold text-gray-900 mb-2">HCG Cancer Center - KR BLR</h4>
                <p className="text-gray-600">Consulting Ophthalmologist</p>
                <p className="text-sm mt-2" style={{color: '#8A7D71'}}>K.R. Road, Bangalore</p>
              </div>
            </div>
          </div>

          {/* Previous Experience */}
          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border" style={{borderColor: '#D4C4B0'}}>
            <div className="flex items-start mb-6">
              <div className="w-16 h-16 rounded-lg flex items-center justify-center mr-4" style={{backgroundColor: '#8A7D71'}}>
                <span className="text-white text-lg font-bold">PR</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Previous Experience</h3>
                <p style={{color: '#B68C58'}}>Training & Development</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 border" style={{borderColor: '#D4C4B0'}}>
                <h4 className="font-semibold text-gray-900 mb-2">L.V. Prasad Eye Institute</h4>
                <p className="text-gray-600 mb-2">Consultant Oculoplasty</p>
                <p className="text-sm" style={{color: '#B68C58'}}>Hyderabad</p>
              </div>
              <div className="bg-white rounded-lg p-6 border" style={{borderColor: '#D4C4B0'}}>
                <h4 className="font-semibold text-gray-900 mb-2">Narayana Nethralaya</h4>
                <p className="text-gray-600 mb-2">Consultant Ophthalmologist</p>
                <p className="text-sm" style={{color: '#8A7D71'}}>Bangalore</p>
              </div>
            </div>
          </div>
        </div>

        {/* Career Highlights */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-3xl p-8 shadow-lg inline-block max-w-4xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Career Highlights</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3" style={{backgroundColor: '#B68C58'}}>
                  <span className="text-white text-sm font-bold">YE</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Years of Experience</h4>
                <p className="text-gray-600 text-sm">Extensive surgical expertise</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3" style={{backgroundColor: '#8A7D71'}}>
                  <span className="text-white text-sm font-bold">PI</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Prestigious Institutions</h4>
                <p className="text-gray-600 text-sm">Top-tier medical centers</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3" style={{backgroundColor: '#B68C58'}}>
                  <span className="text-white text-sm font-bold">SC</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Specialized Care</h4>
                <p className="text-gray-600 text-sm">Comprehensive oculoplasty services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 