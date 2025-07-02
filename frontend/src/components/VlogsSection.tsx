'use client';

export default function VlogsSection() {

  const categories = [
    { name: "All", count: 6, color: '#B68C58' },
    { name: "Educational", count: 2, color: '#8A7D71' },
    { name: "Procedure", count: 1, color: '#9B8B7A' },
    { name: "Care Tips", count: 1, color: '#B68C58' }
  ];

  const vlogs = [
    {
      title: "Understanding Oculoplastic Surgery",
      description: "Comprehensive overview of what oculoplastic surgery involves and when it's needed",
      duration: "8:45",
      views: "12.5K",
      category: "Educational",
      thumbnail: "🎥",
      color: '#B68C58'
    },
    {
      title: "Eyelid Surgery: Before & After",
      description: "Patient journey through blepharoplasty procedure with detailed explanation",
      duration: "6:32",
      views: "8.9K", 
      category: "Procedure",
      thumbnail: "👁️",
      color: '#8A7D71'
    },
    {
      title: "Post-Surgery Care Tips",
      description: "Essential guidelines for recovery and achieving the best surgical outcomes",
      duration: "5:18",
      views: "15.2K",
      category: "Care Tips",
      thumbnail: "🏥",
      color: '#9B8B7A'
    },
    {
      title: "When to See an Oculoplastic Surgeon",
      description: "Signs and symptoms that indicate you should consult an oculoplastic specialist",
      duration: "7:22",
      views: "9.8K",
      category: "Consultation",
      thumbnail: "👨‍⚕️",
      color: '#B68C58'
    },
    {
      title: "Myths vs Facts: Eye Surgery",
      description: "Debunking common misconceptions about oculoplastic procedures",
      duration: "9:15",
      views: "18.7K",
      category: "Educational",
      thumbnail: "💡",
      color: '#8A7D71'
    },
    {
      title: "Latest Advances in Orbital Surgery",
      description: "Cutting-edge techniques and technologies in modern orbital surgery",
      duration: "11:03",
      views: "6.4K",
      category: "Advanced",
      thumbnail: "🔬",
      color: '#9B8B7A'
    }
  ];

  return (
    <section id="vlogs" className="relative py-20" style={{backgroundColor: '#F5F0E8'}}>
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full" style={{background: 'linear-gradient(to bottom right, #F9F6F1, #F1EBE3)'}}></div>
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-30" style={{background: 'linear-gradient(to left, rgba(182, 140, 88, 0.1), transparent)'}}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          {/* <div className="inline-flex items-center bg-white rounded-lg px-6 py-3 shadow-md mb-6">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3" style={{backgroundColor: '#B68C58'}}>
              <span className="text-white text-sm font-bold">VL</span>
            </div>
            <span className="font-medium" style={{color: '#8A7D71'}}>Educational Content</span>
          </div> */}
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Educational
            <span className="bg-gradient-to-r bg-clip-text text-transparent ml-3" style={{backgroundImage: 'linear-gradient(to right, #B68C58, #8A7D71)'}}>
              Video Library
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn about oculoplastic surgery, procedures, and eye care through our 
            comprehensive educational video series by Dr. Ajay Krishna Murthy.
          </p>
          
          <div className="mt-6 w-24 h-1 rounded-full mx-auto" style={{background: 'linear-gradient(to right, #B68C58, #8A7D71)'}}></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className="flex items-center px-6 py-3 rounded-full text-white font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{backgroundColor: category.color}}
            >
              <span>{category.name}</span>
              <span className="ml-2 text-sm bg-white/20 px-2 py-1 rounded-full">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {vlogs.map((vlog, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100"
            >
              {/* Video Thumbnail */}
              <div className="relative h-48 flex items-center justify-center" style={{backgroundColor: vlog.color}}>
                <div className="text-6xl text-white opacity-80">
                  {vlog.thumbnail}
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <span className="text-2xl ml-1" style={{color: vlog.color}}>▶️</span>
                  </button>
                </div>
                
                {/* Duration Badge */}
                <div className="absolute bottom-4 right-4 bg-black/70 text-white text-sm px-3 py-1 rounded-full">
                  {vlog.duration}
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 text-white text-xs px-3 py-1 rounded-full" style={{backgroundColor: 'rgba(255, 255, 255, 0.2)'}}>
                  {vlog.category}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                  {vlog.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                  {vlog.description}
                </p>
                
                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <span className="text-lg mr-2">👁️</span>
                    <span>{vlog.views} views</span>
                  </div>
                  <button className="text-white px-4 py-2 rounded-lg font-medium transition-colors hover:opacity-90" style={{backgroundColor: vlog.color}}>
                    Watch Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Stats & CTA */}
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#B68C58'}}>
                <span className="text-white text-2xl">📺</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">50+ Videos</h4>
              <p className="text-gray-600">Educational content covering all aspects of eye care</p>
            </div>
            
            <div>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#8A7D71'}}>
                <span className="text-white text-2xl">👥</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">100K+ Views</h4>
              <p className="text-gray-600">Helping patients understand their treatment options</p>
            </div>
            
            <div>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#9B8B7A'}}>
                <span className="text-white text-2xl">⭐</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">Expert Content</h4>
              <p className="text-gray-600">Created by Dr. Ajay Krishna Murthy</p>
            </div>
          </div>
          
          {/* <div className="text-center mt-8">
            <p className="text-lg text-gray-600 mb-6">
              Subscribe to stay updated with the latest educational content and surgical insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg" style={{backgroundColor: '#B68C58'}}>
                Subscribe to Channel
              </button>
              <button className="border-2 font-medium py-3 px-8 rounded-lg transition-all duration-300" style={{borderColor: '#B68C58', color: '#B68C58'}} onMouseOver={(e) => {e.currentTarget.style.backgroundColor = '#B68C58'; e.currentTarget.style.color = 'white'}} onMouseOut={(e) => {e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#B68C58'}}>
                View All Videos
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
} 