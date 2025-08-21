import React from 'react';

export default function CareerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Career Opportunities
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join our team and be part of something extraordinary. Discover exciting career paths 
            and opportunities to grow with us.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {/* Career Card 1 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Software Developer</h3>
            <p className="text-gray-300 mb-4">
              Build innovative solutions and work with cutting-edge technologies.
            </p>
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-lg transition-colors">
              Apply Now
            </button>
          </div>
          
          {/* Career Card 2 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Designer</h3>
            <p className="text-gray-300 mb-4">
              Create beautiful and intuitive user experiences that users love.
            </p>
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-lg transition-colors">
              Apply Now
            </button>
          </div>
          
          {/* Career Card 3 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Product Manager</h3>
            <p className="text-gray-300 mb-4">
              Lead product strategy and drive innovation across our platform.
            </p>
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-lg transition-colors">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
