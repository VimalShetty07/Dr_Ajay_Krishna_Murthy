export default function EducationSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl shadow-xl p-12 border border-emerald-100">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-lg mb-6">
              <span className="text-3xl mr-3">🎓</span>
              <span className="text-emerald-600 font-semibold">Education</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Academic
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent"> Excellence</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mx-auto"></div>
          </div>

          {/* Education Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-emerald-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-4">
                  <span className="text-2xl text-white">🏥</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    Master's in Ophthalmology
                  </h3>
                  <p className="text-emerald-600 font-semibold">MS Ophthalmology</p>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-lg font-semibold text-gray-800">JIPMER, Pondicherry</p>
                <p className="text-gray-600">Jawaharlal Institute of Postgraduate Medical Education & Research</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                  Prestigious Medical Institution
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-green-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mr-4">
                  <span className="text-2xl text-white">👁️</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    Fellowship in Oculoplasty
                  </h3>
                  <p className="text-green-600 font-semibold">Advanced Specialized Training</p>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-lg font-semibold text-gray-800">L.V. Prasad Eye Institute, Hyderabad</p>
                <p className="text-gray-600">Leading center for ophthalmic education and research</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
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
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                  Board Certified
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
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