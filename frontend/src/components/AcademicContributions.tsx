export default function AcademicContributions() {
  const contributions = [
    {
      title: 'International Journal Publications',
      count: '15+',
      description: 'Peer-reviewed research papers in leading ophthalmology journals',
      items: [
        'Novel Oculoplastic Surgical Techniques',
        'Orbital Reconstruction Outcomes',
        'Aesthetic Periorbital Surgery'
      ],
      icon: '📄',
      color: '#B68C58'
    },
    {
      title: 'International Conferences',
      count: '25+',
      description: 'Presentations at global ophthalmology and oculoplastic conferences',
      items: [
        'APAO Conference Speaker',
        'World Ophthalmology Congress',
        'International Oculoplastic Symposium'
      ],
      icon: '🌍',
      color: '#8A7D71'
    },
    {
      title: 'Research Projects',
      count: '10+',
      description: 'Leading and collaborating on cutting-edge research initiatives',
      items: [
        'AI in Oculoplastic Diagnosis',
        'Minimally Invasive Techniques',
        'Patient Outcome Studies'
      ],
      icon: '🔬',
      color: '#9B8B7A'
    },
    {
      title: 'Educational Initiatives',
      count: '50+',
      description: 'Training programs and workshops for medical professionals',
      items: [
        'Surgical Skill Workshops',
        'Medical Student Training',
        'Continuing Medical Education'
      ],
      icon: '👨‍🏫',
      color: '#B68C58'
    }
  ];

  return (
    <section className="relative py-20" style={{backgroundColor: '#F5F0E8'}}>
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full" style={{background: 'linear-gradient(to bottom right, #F9F6F1, #F1EBE3)'}}></div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-30" style={{background: 'linear-gradient(to left, rgba(182, 140, 88, 0.1), transparent)'}}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white rounded-lg px-6 py-3 shadow-md mb-6">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3" style={{backgroundColor: '#B68C58'}}>
              <span className="text-white text-sm font-bold">AC</span>
            </div>
            <span className="font-medium" style={{color: '#8A7D71'}}>Academic Excellence</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Research &
            <span className="bg-gradient-to-r bg-clip-text text-transparent ml-3" style={{backgroundImage: 'linear-gradient(to right, #B68C58, #8A7D71)'}}>
              Academic Contributions
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contributing to the advancement of oculoplastic surgery through research, 
            education, and knowledge sharing with the global medical community.
          </p>
          
          <div className="mt-6 w-24 h-1 rounded-full mx-auto" style={{background: 'linear-gradient(to right, #B68C58, #8A7D71)'}}></div>
        </div>

        {/* Contributions Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {contributions.map((contribution, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
            >
              {/* Background effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500" style={{backgroundColor: contribution.color}}></div>
              
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl transform group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: contribution.color}}>
                  <span className="text-2xl text-white">{contribution.icon}</span>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold" style={{color: contribution.color}}>
                    {contribution.count}
                  </div>
                  <div className="text-sm text-gray-500">and counting</div>
                </div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {contribution.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {contribution.description}
                </p>
                
                {/* Items */}
                <div className="space-y-2">
                  {contribution.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 rounded-full mr-3" style={{backgroundColor: contribution.color}}></div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Decorative element */}
              <div className="absolute bottom-4 right-4 w-16 h-16 rounded-full opacity-10 group-hover:opacity-20 transition-opacity" style={{backgroundColor: contribution.color}}></div>
            </div>
          ))}
        </div>

        {/* Recent Publications Section */}
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Recent Publications</h3>
            <div className="w-16 h-1 rounded-full mx-auto" style={{backgroundColor: '#B68C58'}}></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl" style={{backgroundColor: '#F9F6F1'}}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{backgroundColor: '#B68C58'}}>
                <span className="text-white text-lg">📊</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Surgical Outcomes Study</h4>
              <p className="text-sm text-gray-600">International Journal of Oculoplastic Surgery, 2024</p>
            </div>
            
            <div className="p-6 rounded-2xl" style={{backgroundColor: '#F1EBE3'}}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{backgroundColor: '#8A7D71'}}>
                <span className="text-white text-lg">🔬</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Innovative Techniques</h4>
              <p className="text-sm text-gray-600">Ophthalmology Times Asia, 2024</p>
            </div>
            
            <div className="p-6 rounded-2xl" style={{backgroundColor: '#EDE5DC'}}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{backgroundColor: '#9B8B7A'}}>
                <span className="text-white text-lg">👁️</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Patient Care Review</h4>
              <p className="text-sm text-gray-600">Asian Journal of Ophthalmology, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 