'use client'

const services = [
  {
    icon: '🌍',
    title: 'Global Shipping',
    description: 'Fast and reliable international shipping to 50+ countries worldwide',
  },
  {
    icon: '📦',
    title: 'Bulk Orders',
    description: 'Special pricing and customized packages for wholesale and bulk purchases',
  },
  {
    icon: '🎨',
    title: 'Custom Design',
    description: 'Create custom designs tailored to your specific requirements',
  },
  {
    icon: '✅',
    title: 'Quality Assurance',
    description: 'Rigorous quality control at every stage of production',
  },
  {
    icon: '💳',
    title: 'Multiple Payment',
    description: 'Easy payment options including bank transfer and online payments',
  },
  {
    icon: '📞',
    title: '24/7 Support',
    description: 'Dedicated customer support team ready to assist you anytime',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary-600 font-semibold uppercase tracking-widest text-sm mb-4">Our Services</p>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Comprehensive <span className="text-primary-600">Export Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need for seamless garment sourcing and bulk purchasing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-2xl border border-gray-200 hover:border-primary-300 hover:shadow-xl hover:bg-primary-50 transition-all duration-300"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Highlights Section */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-12 md:p-16 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-6">Wholesale Excellence</h3>
              <p className="text-primary-100 text-lg leading-relaxed mb-8">
                We specialize in bulk orders with competitive wholesale pricing. Whether you&apos;re a retailer, distributor, boutique owner, or fashion entrepreneur, we have flexible solutions tailored to your business needs.
              </p>
              <a
                href="#contact"
                className="inline-block bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition-all"
              >
                Request Quote
              </a>
            </div>

            <div className="space-y-6">
              {[
                { label: 'Minimum Order', value: '10 pieces' },
                { label: 'Lead Time', value: '7-14 days' },
                { label: 'Payment Terms', value: 'Flexible & Secure' },
                { label: 'Quality', value: 'Export Standard' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary-200" />
                  <div>
                    <p className="text-sm text-primary-100">{item.label}</p>
                    <p className="font-bold text-lg">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
