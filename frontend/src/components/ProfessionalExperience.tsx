export default function ProfessionalExperience() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white rounded-lg px-6 py-3 shadow-md mb-6">
            <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white text-sm font-bold">EX</span>
            </div>
            <span className="text-blue-700 font-medium">Experience</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional
                          <span className="bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent"> Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-500 rounded-full mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Current Positions */}
          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-blue-700 rounded-lg flex items-center justify-center mr-4">
                <span className="text-white text-lg font-bold">CR</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Current Positions</h3>
                <p className="text-blue-600">Active Practice</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-2">Freelance Oculoplasty Consultant</h4>
                <p className="text-gray-600 mb-2">Independent Practice, Bangalore</p>
                <div className="text-sm text-blue-600">
                  <a href="https://oculoplastix.in" className="hover:underline">oculoplastix.in</a>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-2">HCG Cancer Center - KR BLR</h4>
                <p className="text-gray-600">Consulting Ophthalmologist</p>
                <p className="text-sm text-blue-600 mt-2">K.R. Road, Bangalore</p>
              </div>
            </div>
          </div>

          {/* Previous Experience */}
          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-blue-700 rounded-lg flex items-center justify-center mr-4">
                <span className="text-white text-lg font-bold">PR</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Previous Experience</h3>
                <p className="text-blue-600">Training & Development</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-2">L.V. Prasad Eye Institute</h4>
                <p className="text-gray-600 mb-2">Consultant Oculoplasty</p>
                <p className="text-sm text-blue-600">Hyderabad</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-2">Narayana Nethralaya</h4>
                <p className="text-gray-600 mb-2">Consultant Ophthalmologist</p>
                <p className="text-sm text-blue-600">Bangalore</p>
              </div>
            </div>
          </div>
        </div>

        {/* Career Highlights */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-3xl p-8 shadow-lg inline-block max-w-4xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Career Highlights</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-sm font-bold">YE</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Years of Experience</h4>
                <p className="text-gray-600 text-sm">Extensive surgical expertise</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-sm font-bold">PI</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Prestigious Institutions</h4>
                <p className="text-gray-600 text-sm">Top-tier medical centers</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center mx-auto mb-3">
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