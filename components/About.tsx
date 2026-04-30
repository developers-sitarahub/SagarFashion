'use client'

export default function About() {
  const strengths = [
    { icon: '⭐', title: 'Authentic Quality', desc: 'Premium Indian ethnic wear with certified quality standards' },
    { icon: '🌍', title: 'Global Reach', desc: 'Exporting to 50+ countries with reliable logistics' },
    { icon: '🎨', title: 'Creative Designs', desc: '1000+ unique designs combining tradition and modern trends' },
    { icon: '💼', title: 'Professional Service', desc: 'Dedicated account managers for wholesale partners' },
    { icon: '📦', title: 'Custom Orders', desc: 'Bulk customization and MOQ-friendly partnerships' },
    { icon: '🏆', title: 'Industry Certified', desc: 'GSTIN: 27ATGPK7058M1Z3 - Registered Business' },
  ]

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary-600 font-semibold uppercase tracking-widest text-sm mb-4">About Sagar Fashion</p>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Your Trusted Partner in <span className="text-primary-600">Ethnic Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Leading exporters and importers of authentic Indian ethnic wear since 2015
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-gray-900">Who We Are</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Sagar Fashion is a premier exporter and importer of premium Indian ethnic wear. With deep expertise in the garment industry, we bring authentic traditional designs to international markets while maintaining uncompromising quality standards and competitive pricing.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To celebrate and preserve Indian cultural heritage by delivering exceptional ethnic garments to global customers. We believe in blending traditional craftsmanship with contemporary design trends to create timeless pieces.
              </p>
            </div>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg"
              >
                Learn More About Us
              </a>
            </div>
          </div>

          {/* Visual */}
          <div className="relative h-96 lg:h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-50 rounded-3xl" />
            <div className="relative h-full flex items-center justify-center">
              <div className="text-center space-y-6">
                <div className="text-8xl">🧵</div>
                <h4 className="text-2xl font-bold text-primary-900">Crafted Excellence</h4>
                <p className="text-primary-700 font-medium">Premium Ethnic Heritage</p>
              </div>
            </div>
          </div>
        </div>

        {/* Strengths Grid */}
        <div className="bg-white rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Sagar Fashion?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strengths.map((item, idx) => (
              <div key={idx} className="p-6 border border-gray-200 rounded-xl hover:border-primary-300 hover:shadow-lg transition-all">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
