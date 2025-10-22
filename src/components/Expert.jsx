import React from 'react';

const Expert = () => {
    return (
       <div className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Left Side - Header */}
      <div className="lg:col-span-1">
        <div className="sticky top-8">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">
            Meet Our <span className="text-blue-600">Expert</span> Vets
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Our team of certified veterinary professionals provides exceptional care for your pets during winter months.
          </p>
          <button className="btn btn-primary bg-blue-600 border-none hover:bg-blue-700 px-8">
            Meet All Vets
          </button>
        </div>
      </div>

      {/* Right Side - Vet Cards */}
      <div className="lg:col-span-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Vet 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white text-2xl">
                🐕
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Dr. Sarah Johnson</h3>
                <p className="text-blue-600 font-semibold text-sm">Winter Care Specialist</p>
                <div className="flex gap-2 mt-2">
                  <span className="badge badge-outline badge-sm">Dogs</span>
                  <span className="badge badge-outline badge-sm">Nutrition</span>
                </div>
              </div>
            </div>
            <p className="text-gray-600 mt-4 text-sm">Specialized in cold weather pet health and preventive care.</p>
          </div>

          {/* Vet 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center text-white text-2xl">
                🐈
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Dr. Michael Chen</h3>
                <p className="text-green-600 font-semibold text-sm">Emergency Care</p>
                <div className="flex gap-2 mt-2">
                  <span className="badge badge-outline badge-sm">Cats</span>
                  <span className="badge badge-outline badge-sm">Emergency</span>
                </div>
              </div>
            </div>
            <p className="text-gray-600 mt-4 text-sm">Expert in cold weather emergencies and urgent care.</p>
          </div>

          {/* Vet 3 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white text-2xl">
                🐇
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Dr. Emily Rodriguez</h3>
                <p className="text-purple-600 font-semibold text-sm">Small Animals</p>
                <div className="flex gap-2 mt-2">
                  <span className="badge badge-outline badge-sm">Rabbits</span>
                  <span className="badge badge-outline badge-sm">Exotics</span>
                </div>
              </div>
            </div>
            <p className="text-gray-600 mt-4 text-sm">Specialized care for small pets during winter months.</p>
          </div>

          {/* Vet 4 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center text-white text-2xl">
                🦜
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Dr. James Wilson</h3>
                <p className="text-orange-600 font-semibold text-sm">Avian Specialist</p>
                <div className="flex gap-2 mt-2">
                  <span className="badge badge-outline badge-sm">Birds</span>
                  <span className="badge badge-outline badge-sm">Reptiles</span>
                </div>
              </div>
            </div>
            <p className="text-gray-600 mt-4 text-sm">Expert in exotic pet care and winter adaptations.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default Expert;