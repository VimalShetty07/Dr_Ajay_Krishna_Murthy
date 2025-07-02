export default function EducationSection() {
  const education = [
    {
      degree: "MBBS",
      institution: "JIPMER, Puducherry",
      year: "2010-2016",
      description: "Bachelor of Medicine and Bachelor of Surgery from the prestigious Jawaharlal Institute of Postgraduate Medical Education and Research",
      color: '#B68C58',
      icon: '🎓'
    },
    {
      degree: "MS Ophthalmology",
      institution: "JIPMER, Puducherry", 
      year: "2017-2020",
      description: "Master of Surgery in Ophthalmology with comprehensive training in eye diseases and surgical procedures",
      color: '#8A7D71',
      icon: '👁️'
    },
    {
      degree: "Fellowship in Oculoplasty",
      institution: "L.V. Prasad Eye Institute, Hyderabad",
      year: "2020-2021",
      description: "Advanced fellowship training in Oculoplastic and Orbital Surgery from India&apos;s premier eye care institution",
      color: '#9B8B7A',
      icon: '🏥'
    }
  ];

  const achievements = [
    {
      title: "JIPMER Gold Medal",
      description: "Outstanding academic performance in Ophthalmology",
      year: "2020",
      color: '#B68C58'
    },
    {
      title: "Research Excellence Award",
      description: "Recognition for innovative research in oculoplastic surgery",
      year: "2021",
      color: '#8A7D71'
    },
    {
      title: "Best Paper Presentation",
      description: "International Conference on Oculoplastic Surgery",
      year: "2022",
      color: '#9B8B7A'
    }
  ];

  return (
    <section id="education" className="relative py-20" style={{backgroundColor: '#F5F0E8'}}>
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full" style={{background: 'linear-gradient(to bottom right, #F9F6F1, #F1EBE3)'}}></div>
        <div className="absolute top-0 left-0 w-1/2 h-full opacity-30" style={{background: 'linear-gradient(to right, rgba(182, 140, 88, 0.1), transparent)'}}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white rounded-lg px-6 py-3 shadow-md mb-6">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3" style={{backgroundColor: '#B68C58'}}>
              <span className="text-white text-sm font-bold">ED</span>
            </div>
            <span className="font-medium" style={{color: '#8A7D71'}}>Education & Training</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Academic
            <span className="bg-gradient-to-r bg-clip-text text-transparent ml-3" style={{backgroundImage: 'linear-gradient(to right, #B68C58, #8A7D71)'}}>
              Excellence
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive medical education and specialized training from India&apos;s most 
            prestigious institutions in ophthalmology and oculoplastic surgery.
          </p>
          
          <div className="mt-6 w-24 h-1 rounded-full mx-auto" style={{background: 'linear-gradient(to right, #B68C58, #8A7D71)'}}></div>
        </div>

        {/* Education Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Educational Journey</h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full rounded-full" style={{backgroundColor: '#D4C4B0'}}></div>
            
            <div className="space-y-12">
              {education.map((edu, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full" style={{backgroundColor: edu.color}}></div>
                  
                  {/* Content card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                      <div className="flex items-start mb-4">
                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center mr-4" style={{backgroundColor: edu.color}}>
                          <span className="text-white text-lg">{edu.icon}</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-gray-900 mb-1">{edu.degree}</h4>
                          <p className="font-medium" style={{color: edu.color}}>{edu.institution}</p>
                          <p className="text-sm text-gray-500">{edu.year}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{edu.description}</p>
                    </div>
                  </div>
                  
                  {/* Empty space for the other side */}
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-3xl p-8 shadow-lg mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Academic Achievements</h3>
            <div className="w-16 h-1 rounded-full mx-auto" style={{backgroundColor: '#B68C58'}}></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-6 rounded-2xl" style={{backgroundColor: index % 2 === 0 ? '#F9F6F1' : '#F1EBE3'}}>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{backgroundColor: achievement.color}}>
                  <span className="text-white text-2xl">🏆</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{achievement.title}</h4>
                <p className="text-gray-600 text-sm mb-2">{achievement.description}</p>
                <span className="text-xs font-medium px-3 py-1 rounded-full text-white" style={{backgroundColor: achievement.color}}>
                  {achievement.year}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Professional Certifications</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full mr-4" style={{backgroundColor: '#B68C58'}}></div>
                <span className="text-gray-700">Board Certified Ophthalmologist</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full mr-4" style={{backgroundColor: '#8A7D71'}}></div>
                <span className="text-gray-700">Fellowship Trained Oculoplastic Surgeon</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full mr-4" style={{backgroundColor: '#9B8B7A'}}></div>
                <span className="text-gray-700">Member, All India Ophthalmological Society</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Continuing Education</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full mr-4" style={{backgroundColor: '#B68C58'}}></div>
                <span className="text-gray-700">Annual CME Programs</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full mr-4" style={{backgroundColor: '#8A7D71'}}></div>
                <span className="text-gray-700">International Conference Participation</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full mr-4" style={{backgroundColor: '#9B8B7A'}}></div>
                <span className="text-gray-700">Advanced Surgical Technique Workshops</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 