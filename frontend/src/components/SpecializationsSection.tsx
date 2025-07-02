'use client';

export default function SpecializationsSection() {
  const specializations = [
    {
      title: 'Paediatric Lacrimal Disorders',
      subtitle: 'Endoscopic/External DCR',
      description: 'Expert management of tear drainage problems in children using advanced endoscopic and external dacryocystorhinostomy techniques',
      icon: '👶',
      gradient: 'from-blue-500 to-indigo-600',
      features: ['Minimally invasive procedures', 'Child-friendly approach', 'High success rates']
    },
    {
      title: 'Eyelid Cosmetic Surgeries',
      subtitle: 'Aesthetic Enhancement',
      description: 'Advanced blepharoplasty and cosmetic procedures to rejuvenate the eye area while maintaining natural appearance',
      icon: '✨',
      gradient: 'from-purple-500 to-pink-600',
      features: ['Upper & lower blepharoplasty', 'Ptosis correction', 'Natural results']
    },
    {
      title: 'Orbital Tumors & Decompression',
      subtitle: 'Minimal Invasive Approach',
      description: 'State-of-the-art minimal invasive techniques for orbital tumor removal and thyroid eye disease decompression',
      icon: '🔬',
      gradient: 'from-teal-500 to-cyan-600',
      features: ['Minimal scarring', 'Faster recovery', 'Preserve vision']
    },
    {
      title: 'Eyelid & Socket Reconstruction',
      subtitle: 'Complex Reconstructive Surgery',
      description: 'Comprehensive reconstruction of eyelids and eye sockets following trauma, tumor removal, or congenital defects',
      icon: '🏗️',
      gradient: 'from-amber-500 to-orange-600',
      features: ['Functional restoration', 'Aesthetic outcomes', 'Custom solutions']
    },
    {
      title: 'Eyelid Cancer Management',
      subtitle: 'Removal & Reconstruction',
      description: 'Complete excision of eyelid malignancies with immediate reconstruction to restore function and appearance',
      icon: '🛡️',
      gradient: 'from-red-500 to-rose-600',
      features: ['Mohs surgery coordination', 'Margin clearance', 'Aesthetic reconstruction']
    },
    {
      title: 'Orbital Fracture Repair',
      subtitle: 'Trauma Management',
      description: 'Expert repair of orbital floor and wall fractures to restore normal eye position and prevent long-term complications',
      icon: '🦴',
      gradient: 'from-emerald-500 to-green-600',
      features: ['3D imaging guidance', 'Implant placement', 'Vision preservation']
    },
    {
      title: 'Botox Treatments',
      subtitle: 'Therapeutic & Cosmetic',
      description: 'Precision Botox injections for blepharospasm, hemifacial spasm, and age-related facial rejuvenation',
      icon: '💉',
      gradient: 'from-indigo-500 to-purple-600',
      features: ['Medical conditions', 'Wrinkle reduction', 'Expert technique']
    }
  ];

  return (
    <div className="relative py-20 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Advanced Background Design */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Professional Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-orange-50 rounded-full px-6 py-2 mb-6">
            <div className="w-2 h-2 bg-amber-600 rounded-full animate-pulse"></div>
            <span className="text-amber-700 font-semibold text-sm uppercase tracking-wider">Specialized Expertise</span>
            <div className="w-2 h-2 bg-amber-600 rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Areas of
            <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent"> Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Dr. Ajay Krishna Murthy specializes in advanced oculoplastic procedures, 
            combining surgical precision with aesthetic excellence to deliver optimal patient outcomes.
          </p>
          <div className="mt-8 flex justify-center gap-2">
            <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
            <div className="w-4 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
            <div className="w-2 h-1 bg-red-500 rounded-full"></div>
          </div>
        </div>

        {/* Enhanced Specializations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {specializations.map((spec, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${spec.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl`}></div>
              
              <div className="relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full flex flex-col">
                {/* Icon Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${spec.gradient} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <span className="text-2xl text-white">{spec.icon}</span>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className={`w-1 h-1 rounded-full bg-gradient-to-r ${spec.gradient} opacity-60`}></div>
                    ))}
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className={`text-lg font-bold text-gray-900 mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r ${spec.gradient} group-hover:bg-clip-text transition-all duration-300`}>
                    {spec.title}
                  </h3>
                  <p className={`text-sm font-semibold bg-gradient-to-r ${spec.gradient} bg-clip-text text-transparent mb-3`}>
                    {spec.subtitle}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {spec.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2 mt-auto">
                    {spec.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-500">
                        <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${spec.gradient}`}></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Hover Indicator */}
                <div className={`absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0`}>
                  <div className={`w-8 h-8 bg-gradient-to-r ${spec.gradient} rounded-lg flex items-center justify-center`}>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-red-50 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto border border-amber-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Experience Expert Care?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Schedule a consultation with Dr. Ajay Krishna Murthy to discuss your specific needs 
              and explore the best treatment options for your condition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Book Consultation
              </button>
              <button className="bg-white hover:bg-gray-50 text-amber-700 font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-amber-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
} 