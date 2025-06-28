export default function ContactSection() {
  return (
    <section className="relative py-16">
      {/* Background with animated elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-400/20 rounded-full blur-xl animate-pulse"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
          
          {/* Header */}
          <div className="text-center py-12 border-b border-white/20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Ready to take the next step in your eye care journey? Contact Dr. Ajay Krishna Murthy today.
            </p>
          </div>

          <div className="p-8 md:p-12">
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Contact Cards */}
              <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
                
                {/* Phone Contact */}
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-lg rounded-2xl p-8 border border-blue-400/30 hover:border-blue-300/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-2xl text-white">📞</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Direct Line</h3>
                      <p className="text-blue-200">Call for appointments</p>
                    </div>
                  </div>
                  <a href="tel:+919611517424" className="text-2xl font-bold text-blue-300 hover:text-white transition-colors">
                    +91-96115 17424
                  </a>
                </div>

                {/* Email Contact */}
                <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-8 border border-purple-400/30 hover:border-purple-300/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-2xl text-white">✉️</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Email</h3>
                      <p className="text-purple-200">Send your queries</p>
                    </div>
                  </div>
                  <a href="mailto:drajaykmurthy@gmail.com" className="text-lg font-semibold text-purple-300 hover:text-white transition-colors break-all">
                    drajaykmurthy@gmail.com
                  </a>
                </div>

                {/* WhatsApp Contact */}
                <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-lg rounded-2xl p-8 border border-green-400/30 hover:border-green-300/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-2xl text-white">💬</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">WhatsApp</h3>
                      <p className="text-green-200">Quick messages</p>
                    </div>
                  </div>
                  <a href="https://wa.me/919611517424" className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors">
                    <span className="mr-2">📱</span>
                    Message on WhatsApp
                  </a>
                </div>

                {/* HCG Cancer Center */}
                <div className="bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 backdrop-blur-lg rounded-2xl p-8 border border-indigo-400/30 hover:border-indigo-300/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-2xl text-white">🏥</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">HCG Cancer Center</h3>
                      <p className="text-indigo-200">Also available at</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-indigo-300 font-semibold">+91 7406 4999 99</p>
                    <p className="text-sm text-indigo-200">
                      K.R. Road, Bengaluru
                    </p>
                  </div>
                </div>
              </div>

              {/* Consultation Info */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Consultation Info</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-blue-300 mb-2">🕒 Availability</h4>
                    <p className="text-blue-100">Available for consultations and surgical procedures</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-purple-300 mb-2">🗣️ Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">English</span>
                      <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">Hindi</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-green-300 mb-2">💡 Specializations</h4>
                    <ul className="text-sm text-green-100 space-y-1">
                      <li>• Eyelid Surgery</li>
                      <li>• Orbital Surgery</li>
                      <li>• Aesthetic Procedures</li>
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-white/20">
                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      🗓️ Schedule Consultation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 