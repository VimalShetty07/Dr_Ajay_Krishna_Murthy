export default function SpecializationsSection() {
  const specializations = [
    {
      title: 'Eyelid Reconstructive Surgery',
      description: 'Comprehensive reconstruction of eyelid defects and malformations',
      icon: '👁️',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Orbital Surgery',
      description: 'Advanced surgical procedures for orbital tumors and fractures',
      icon: '🔬',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Aesthetic Oculoplastic Procedures',
      description: 'Cosmetic enhancement of the eye area and facial rejuvenation',
      icon: '✨',
      color: 'from-pink-500 to-rose-600'
    },
    {
      title: 'Lid Surgery (Blepharoplasty)',
      description: 'Surgical correction of droopy eyelids and excess skin',
      icon: '⚕️',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Fundamental Oculoplastic Procedures',
      description: 'Essential treatments for common eyelid and tear duct conditions',
      icon: '🏥',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      title: 'Advanced Oculoplastic Surgery',
      description: 'Complex surgical interventions requiring specialized expertise',
      icon: '🎯',
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section className="relative py-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-100/30 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white rounded-lg px-6 py-3 shadow-md mb-6">
            <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white text-sm font-bold">SP</span>
            </div>
            <span className="text-blue-700 font-medium">Specializations</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Areas of
            <span className="bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent"> Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dr. Ajay Krishna Murthy offers comprehensive oculoplastic surgery services 
            with precision, innovation, and personalized care.
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-500 rounded-full mx-auto"></div>
        </div>

        {/* Specializations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specializations.map((specialization, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${specialization.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${specialization.color} rounded-2xl mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-2xl text-white">{specialization.icon}</span>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800">
                  {specialization.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {specialization.description}
                </p>
                
                {/* Learn More Link */}
                <div className="flex items-center text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition-colors">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              
              {/* Decorative element */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl p-8 shadow-lg inline-block">
            <p className="text-lg text-gray-600 mb-4">
              Need a specialized consultation for your eye condition?
            </p>
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-md">
              Discuss Your Case
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 