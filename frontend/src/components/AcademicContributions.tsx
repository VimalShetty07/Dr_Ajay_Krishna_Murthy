export default function AcademicContributions() {
  const contributions = [
    {
      title: "Research & Publications",
      description: "Active participant in ophthalmic research with contributions to peer-reviewed publications in oculoplasty and orbital surgery.",
      icon: "📖",
      color: "from-blue-500 to-blue-600",
      items: [
        "Active participant in National conferences",
        "Presents research papers at International meetings", 
        "Contributes to advancement in Ophthalmology"
      ]
    },
    {
      title: "Professional Standing",
      description: "Recognized expertise in the field with active participation in professional organizations and continuing medical education.",
      icon: "🏅",
      color: "from-purple-500 to-purple-600",
      items: [
        "Respected figure in Oculoplasty field",
        "Commitment to precision and innovation",
        "High standards of patient care"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-lg mb-6">
            <span className="text-3xl mr-3">📚</span>
            <span className="text-blue-600 font-semibold">Academic</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Academic
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Contributions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Contributing to the advancement of oculoplastic surgery through research, education, and knowledge sharing.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {contributions.map((contribution, index) => (
            <div key={index} className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100">
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${contribution.color} rounded-2xl mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-2xl text-white">{contribution.icon}</span>
              </div>
              
              {/* Content */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {contribution.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {contribution.description}
                </p>
                
                {/* Items List */}
                <ul className="space-y-3">
                  {contribution.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Research Highlights */}
        <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Research Highlights</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dr. Murthy's commitment to advancing the field of oculoplastic surgery through evidence-based practice and continuous learning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Data-Driven</h4>
              <p className="text-gray-600 text-sm">Evidence-based surgical approaches</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🌐</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Global Reach</h4>
              <p className="text-gray-600 text-sm">International collaboration</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Innovation</h4>
              <p className="text-gray-600 text-sm">Advanced surgical techniques</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">👨‍🎓</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Education</h4>
              <p className="text-gray-600 text-sm">Knowledge sharing & mentoring</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 