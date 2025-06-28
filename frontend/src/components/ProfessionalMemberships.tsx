export default function ProfessionalMemberships() {
  const memberships = [
    { 
      acronym: "AIOS", 
      fullName: "All India Ophthalmological Society",
      color: "from-blue-500 to-blue-600",
      icon: "👥"
    },
    { 
      acronym: "OAI", 
      fullName: "Oculoplastics Association of India",
      color: "from-emerald-500 to-emerald-600",
      icon: "👁️"
    },
    { 
      acronym: "ISOO", 
      fullName: "International Society of Ocular Oncology",
      color: "from-purple-500 to-purple-600",
      icon: "🌍"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gray-50 rounded-full px-6 py-3 shadow-lg mb-6">
            <span className="text-3xl mr-3">🏆</span>
            <span className="text-blue-600 font-semibold">Memberships</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Affiliations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Active membership in leading professional organizations demonstrates commitment to excellence and continuous learning.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {memberships.map((membership, index) => (
            <div key={index} className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100">
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${membership.color} rounded-2xl mb-6 mx-auto transform group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-3xl text-white">{membership.icon}</span>
              </div>
              
              {/* Content */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {membership.acronym}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {membership.fullName}
                </p>
                
                {/* Membership Badge */}
                <div className={`inline-flex items-center bg-gradient-to-r ${membership.color} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                  <span className="mr-2">✓</span>
                  Active Member
                </div>
              </div>
              
              {/* Decorative element */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Commitment to Excellence</h3>
            <p className="text-gray-600 text-lg max-w-4xl mx-auto">
              These professional memberships reflect Dr. Murthy's dedication to staying current with the latest 
              advancements in oculoplastic surgery and maintaining the highest standards of patient care.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                Continuing Education
              </span>
              <span className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium">
                Professional Networks
              </span>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                Global Standards
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 