export default function SpecializationsSection() {
  const specializations = [
    {
      title: 'Lacrimal Disorders & DCR',
      description: 'Paediatric lacrimal disorders, endoscopic and external DCR procedures',
      icon: '💧',
      techniques: ['Paediatric Lacrimal Surgery', 'Endoscopic DCR', 'External DCR'],
      color: '#B68C58'
    },
    {
      title: 'Eyelid Cosmetic Surgery',
      description: 'Advanced cosmetic and reconstructive eyelid procedures for aesthetic enhancement',
      icon: '✨',
      techniques: ['Blepharoplasty', 'Ptosis Correction', 'Eyelid Rejuvenation'],
      color: '#8A7D71'
    },
    {
      title: 'Orbital Tumors & Decompression',
      description: 'Minimal invasive approach to orbital tumors and orbital decompression procedures',
      icon: '🔬',
      techniques: ['Minimally Invasive Surgery', 'Orbital Tumor Removal', 'Orbital Decompression'],
      color: '#9B8B7A'
    },
    {
      title: 'Reconstructive Surgery',
      description: 'Eyelid and socket reconstruction, cancer removal and repair procedures',
      icon: '🔧',
      techniques: ['Eyelid Reconstruction', 'Socket Reconstruction', 'Cancer Reconstruction'],
      color: '#B68C58'
    },
    {
      title: 'Orbital Fracture Repair',
      description: 'Expert repair of orbital fractures with advanced surgical techniques',
      icon: '🏥',
      techniques: ['Orbital Floor Repair', 'Medial Wall Repair', 'Complex Fracture Surgery'],
      color: '#8A7D71'
    },
    {
      title: 'Botox Treatments',
      description: 'Botox for Blepharospasm, Hemifacial spasm and age-related changes',
      icon: '💉',
      techniques: ['Blepharospasm Treatment', 'Hemifacial Spasm', 'Anti-aging Botox'],
      color: '#9B8B7A'
    }
  ];

  return (
    <section id="specializations" className="relative py-20" style={{backgroundColor: '#F5F0E8'}}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full" style={{background: 'linear-gradient(135deg, #F9F6F1, #F1EBE3, #EDE5DC)'}}></div>
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-10" style={{backgroundColor: '#B68C58'}}></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full opacity-10" style={{backgroundColor: '#8A7D71'}}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* <div className="inline-flex items-center bg-white rounded-lg px-6 py-3 shadow-md mb-6">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3" style={{backgroundColor: '#B68C58'}}>
              <span className="text-white text-sm font-bold">SP</span>
            </div>
            <span className="font-medium" style={{color: '#8A7D71'}}>Specializations</span>
          </div> */}
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Advanced
            <span className="bg-gradient-to-r bg-clip-text text-transparent ml-3" style={{backgroundImage: 'linear-gradient(to right, #B68C58, #8A7D71)'}}>
              Oculoplastic Expertise
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized training from premier institutions ensures comprehensive care 
            across all aspects of oculoplastic and orbital surgery.
          </p>
          
          <div className="mt-6 w-24 h-1 rounded-full mx-auto" style={{background: 'linear-gradient(to right, #B68C58, #8A7D71)'}}></div>
        </div>

        {/* Specializations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {specializations.map((spec, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              {/* Background gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500" style={{backgroundColor: spec.color}}></div>
              
              {/* Icon */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl transform group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: spec.color}}>
                  <span className="text-2xl text-white">{spec.icon}</span>
                </div>
                <div className="text-right">
                  <div className="w-8 h-8 rounded-lg opacity-20 group-hover:opacity-30 transition-opacity" style={{backgroundColor: spec.color}}></div>
                </div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800">
                  {spec.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {spec.description}
                </p>
                
                {/* Techniques */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                    Key Procedures:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {spec.techniques.map((technique, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs font-medium px-3 py-1 rounded-full text-white"
                        style={{backgroundColor: spec.color}}
                      >
                        {technique}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Decorative element */}
              <div className="absolute bottom-4 right-4 w-20 h-20 rounded-full opacity-10 group-hover:opacity-20 transition-opacity" style={{backgroundColor: spec.color}}></div>
            </div>
          ))}
        </div>

        {/* Training & Credentials Section */}
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Training & Credentials</h3>
            <div className="w-16 h-1 rounded-full mx-auto" style={{backgroundColor: '#B68C58'}}></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#B68C58'}}>
                <span className="text-2xl text-white">🎓</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">JIPMER Graduate</h4>
              <p className="text-gray-600">Premier medical education from Jawaharlal Institute of Postgraduate Medical Education</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#8A7D71'}}>
                <span className="text-2xl text-white">🏥</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">L.V. Prasad Fellowship</h4>
              <p className="text-gray-600">Advanced fellowship training in Oculoplasty from L.V. Prasad Eye Institute</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#9B8B7A'}}>
                <span className="text-2xl text-white">📋</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Board Certified</h4>
              <p className="text-gray-600">Certified specialist in Ophthalmology and Oculoplastic Surgery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 