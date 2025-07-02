export default function ProfessionalMemberships() {
  const memberships = [
    {
      name: "All India Ophthalmological Society",
      abbreviation: "AIOS",
      description: "Premier professional organization for ophthalmologists in India",
      status: "Active Member",
      since: "2017",
      color: '#B68C58',
      icon: '👁️'
    },
    {
      name: "Oculoplasty Association of India",
      abbreviation: "OPAI", 
      description: "Specialized society for oculoplastic and orbital surgery practitioners in India",
      status: "Fellow",
      since: "2021",
      color: '#8A7D71',
      icon: '🏥'
    },
    {
      name: "International Society of Ocular Oncology",
      abbreviation: "ISOO",
      description: "Global network of specialists in ocular and orbital oncology",
      status: "International Member",
      since: "2022",
      color: '#9B8B7A',
      icon: '🌍'
    },
    {
      name: "Karnataka Ophthalmic Society",
      abbreviation: "KOS",
      description: "State-level professional organization for ophthalmologists in Karnataka",
      status: "Active Member",
      since: "2018",
      color: '#B68C58',
      icon: '🏛️'
    }
  ];

  const certifications = [
    {
      title: "Board Certification in Ophthalmology",
      issuer: "Medical Council of India",
      year: "2020",
      color: '#B68C58'
    },
    {
      title: "Fellowship Certificate in Oculoplasty",
      issuer: "L.V. Prasad Eye Institute",
      year: "2021",
      color: '#8A7D71'
    },
    {
      title: "Advanced Surgical Skills Certification",
      issuer: "International Oculoplastic Academy",
      year: "2022",
      color: '#9B8B7A'
    }
  ];

  return (
    <section className="relative py-20" style={{backgroundColor: '#F5F0E8'}}>
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full" style={{background: 'linear-gradient(to bottom right, #F9F6F1, #F1EBE3)'}}></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-full opacity-30" style={{background: 'linear-gradient(to left, rgba(138, 125, 113, 0.1), transparent)'}}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white rounded-lg px-6 py-3 shadow-md mb-6">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3" style={{backgroundColor: '#B68C58'}}>
              <span className="text-white text-sm font-bold">PM</span>
            </div>
            <span className="font-medium" style={{color: '#8A7D71'}}>Professional Standing</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional
            <span className="bg-gradient-to-r bg-clip-text text-transparent ml-3" style={{backgroundImage: 'linear-gradient(to right, #B68C58, #8A7D71)'}}>
              Memberships
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Active participation in leading professional organizations and societies 
            dedicated to advancing the field of oculoplastic surgery.
          </p>
          
          <div className="mt-6 w-24 h-1 rounded-full mx-auto" style={{background: 'linear-gradient(to right, #B68C58, #8A7D71)'}}></div>
        </div>

        {/* Memberships Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {memberships.map((membership, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
            >
              {/* Background effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500" style={{backgroundColor: membership.color}}></div>
              
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl transform group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: membership.color}}>
                  <span className="text-2xl text-white">{membership.icon}</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium px-3 py-1 rounded-full text-white" style={{backgroundColor: membership.color}}>
                    Since {membership.since}
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {membership.name}
                  </h3>
                  <p className="text-lg font-semibold" style={{color: membership.color}}>
                    {membership.abbreviation}
                  </p>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {membership.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">
                    Status: {membership.status}
                  </span>
                  <div className="w-3 h-3 rounded-full" style={{backgroundColor: membership.color}}></div>
                </div>
              </div>
              
              {/* Decorative element */}
              <div className="absolute bottom-4 right-4 w-20 h-20 rounded-full opacity-10 group-hover:opacity-20 transition-opacity" style={{backgroundColor: membership.color}}></div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="bg-white rounded-3xl p-8 shadow-lg mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Certifications</h3>
            <div className="w-16 h-1 rounded-full mx-auto" style={{backgroundColor: '#B68C58'}}></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center p-6 rounded-2xl" style={{backgroundColor: index % 2 === 0 ? '#F9F6F1' : '#F1EBE3'}}>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{backgroundColor: cert.color}}>
                  <span className="text-white text-2xl">📜</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h4>
                <p className="text-gray-600 text-sm mb-2">{cert.issuer}</p>
                <span className="text-xs font-medium px-3 py-1 rounded-full text-white" style={{backgroundColor: cert.color}}>
                  {cert.year}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Activities */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Committee Positions</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-3 h-3 rounded-full mt-2 mr-4" style={{backgroundColor: '#B68C58'}}></div>
                <div>
                  <p className="font-semibold text-gray-900">Scientific Committee Member</p>
                  <p className="text-sm text-gray-600">AIOS Annual Conference 2023-2024</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 rounded-full mt-2 mr-4" style={{backgroundColor: '#8A7D71'}}></div>
                <div>
                  <p className="font-semibold text-gray-900">Editorial Board Reviewer</p>
                  <p className="text-sm text-gray-600">Indian Journal of Ophthalmology</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 rounded-full mt-2 mr-4" style={{backgroundColor: '#9B8B7A'}}></div>
                <div>
                  <p className="font-semibold text-gray-900">Workshop Faculty</p>
                  <p className="text-sm text-gray-600">AOPSI Training Programs</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Professional Recognition</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-3 h-3 rounded-full mt-2 mr-4" style={{backgroundColor: '#B68C58'}}></div>
                <div>
                  <p className="font-semibold text-gray-900">Young Ophthalmologist Award</p>
                  <p className="text-sm text-gray-600">AIOS Southern Chapter 2022</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 rounded-full mt-2 mr-4" style={{backgroundColor: '#8A7D71'}}></div>
                <div>
                  <p className="font-semibold text-gray-900">Excellence in Surgery Recognition</p>
                  <p className="text-sm text-gray-600">L.V. Prasad Eye Institute 2021</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 rounded-full mt-2 mr-4" style={{backgroundColor: '#9B8B7A'}}></div>
                <div>
                  <p className="font-semibold text-gray-900">International Speaker Invitation</p>
                  <p className="text-sm text-gray-600">APAO Congress 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 