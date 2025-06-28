export default function Header() {
  return (
    <header className="bg-gradient-to-r from-emerald-900 via-green-900 to-teal-900 shadow-lg relative">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-800/20 to-green-900/40"></div>
      
      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="text-center">
          {/* Main Title - Clean and Professional */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Dr. Ajay Krishna Murthy
            </h1>
            
            {/* Professional Subtitle */}
            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl text-emerald-100 font-light">
                Oculoplasty Surgeon
              </h2>
              <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-lg text-green-200">
                <span>MS Ophthalmology</span>
                <div className="hidden md:block w-1 h-1 bg-green-300 rounded-full"></div>
                <span>JIPMER, Pondicherry</span>
                <div className="hidden md:block w-1 h-1 bg-green-300 rounded-full"></div>
                <span>L.V. Prasad Fellow</span>
              </div>
            </div>
          </div>

          {/* Professional Credentials - Clean Design */}
          <div className="inline-flex flex-col md:flex-row items-center gap-4 md:gap-8">
            {/* Specialty Badge */}
            <div className="bg-white/10 backdrop-blur-sm border border-emerald-400/30 rounded-lg px-6 py-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-white font-medium">Specialized in Oculoplastic Surgery</span>
              </div>
            </div>
            
            {/* Contact Badge */}
            <div className="bg-emerald-700/50 backdrop-blur-sm border border-emerald-500/30 rounded-lg px-6 py-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                <span className="text-green-100 font-medium">+91-96115 17424</span>
              </div>
            </div>
          </div>

          {/* Simple Professional Divider */}
          <div className="mt-12 flex justify-center">
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Clean bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent"></div>
    </header>
  );
} 