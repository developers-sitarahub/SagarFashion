'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="mb-2">
                <Image
                  src="/logo.png"
                  alt="Sagar Fashion Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <p className="text-primary-600 font-semibold uppercase tracking-widest text-sm">Welcome to Sagar Fashion</p>
            </div>
              <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Global Exporters of{' '}
                <span className="text-primary-600">Indian Ethnic Wear</span>
              </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Bringing authentic Indian traditional garments to the world. Premium quality, competitive pricing, and global reach. Your trusted partner for ethnic fashion exports.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href="#products"
                className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-md font-semibold transition-all shadow-lg hover:shadow-xl"
              >
                Explore Collection
              </a>
              <a
                href="#contact"
                className="inline-block border-2 border-gray-300 text-gray-900 hover:border-primary-600 hover:text-primary-600 px-8 py-4 rounded-md font-semibold transition-all"
              >
                Get in Touch
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-12 border-t border-gray-200">
              <div>
                <p className="text-4xl font-bold text-primary-600">500+</p>
                <p className="text-sm text-gray-600 mt-2">Global Clients</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary-600">50+</p>
                <p className="text-sm text-gray-600 mt-2">Countries Served</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary-600">1000+</p>
                <p className="text-sm text-gray-600 mt-2">Designs & Styles</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-96 lg:h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl blur-2xl opacity-40" />
            <div className="relative h-full bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl flex items-center justify-center border border-primary-200 shadow-2xl">
              <div className="text-center space-y-6">
                <div className="text-8xl">👗</div>
                <h3 className="text-2xl font-bold text-primary-900">Premium Collection</h3>
                <p className="text-primary-700 font-medium">Handcrafted & Export Quality</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
