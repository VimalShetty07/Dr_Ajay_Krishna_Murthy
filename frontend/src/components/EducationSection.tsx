export default function EducationSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-br from-blue-50 to-blue-50 rounded-3xl shadow-xl p-12 border border-blue-100">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-white rounded-lg px-6 py-3 shadow-md mb-6">
              <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">ED</span>
              </div>
              <span className="text-blue-700 font-medium">Education</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Academic
              <span className="bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent"> Excellence</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-500 rounded-full mx-auto"></div>
          </div>

          {/* Education Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-700 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white text-lg font-bold">MS</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    Master&apos;s in Ophthalmology
                  </h3>
                  <p className="text-blue-600 font-semibold">MS Ophthalmology</p>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-lg font-semibold text-gray-800">JIPMER, Pondicherry</p>
                <p className="text-gray-600">Jawaharlal Institute of Postgraduate Medical Education & Research</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Prestigious Medical Institution
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-700 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white text-lg font-bold">LV</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    Fellowship in Oculoplasty
                  </h3>
                  <p className="text-blue-600 font-semibold">Advanced Specialized Training</p>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-lg font-semibold text-gray-800">L.V. Prasad Eye Institute, Hyderabad</p>
                <p className="text-gray-600">Leading center for ophthalmic education and research</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  International Recognition
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 inline-block shadow-lg">
              <p className="text-gray-600 mb-2">
                Combining academic excellence with practical expertise
              </p>
              <div className="flex items-center justify-center space-x-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Board Certified
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Fellowship Trained
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 