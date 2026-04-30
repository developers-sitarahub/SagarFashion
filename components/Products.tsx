'use client'

import Image from 'next/image'

const products = [
  {
    id: 1,
    name: 'Traditional Sarees',
    description: 'Authentic silk and cotton sarees with intricate traditional patterns and zari work',
    image: '/products/saree.jpg',
    colors: ['Red', 'Gold', 'Maroon', 'Green'],
  },
  {
    id: 2,
    name: 'Designer Kurtis',
    description: 'Modern and traditional kurta designs perfect for casual and formal occasions',
    image: '/products/kurti.jpg',
    colors: ['Navy', 'Cream', 'Burgundy', 'Teal'],
  },
  {
    id: 3,
    name: 'Ethnic Lehengas',
    description: 'Stunning lehenga collections with embroidery work for celebrations',
    image: '/products/lehenga.jpg',
    colors: ['Pink', 'Purple', 'Gold', 'Black'],
  },
  {
    id: 4,
    name: 'Formal Ethnic Suits',
    description: 'Premium ethnic suits with contemporary designs and perfect tailoring',
    image: '/products/ethnic-wear.jpg',
    colors: ['Black', 'Grey', 'Navy', 'Brown'],
  },
  {
    id: 5,
    name: 'Casual Wear Collection',
    description: 'Comfortable ethnic casual wear for everyday style and elegance',
    image: '/products/kurti.jpg',
    colors: ['Beige', 'White', 'Mint', 'Khaki'],
  },
  {
    id: 6,
    name: 'Wedding & Bridal',
    description: 'Exclusive bridal and wedding wear with premium embellishments',
    image: '/products/lehenga.jpg',
    colors: ['Red', 'Gold', 'Cream', 'Maroon'],
  },
]

export default function Products() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary-600 font-semibold uppercase tracking-widest text-sm mb-4">Our Collections</p>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Premium <span className="text-primary-600">Product Range</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of authentic Indian ethnic wear, crafted for global markets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{product.description}</p>

                {/* Colors */}
                <div className="space-y-3 mb-8">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Available Colors:</p>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <span
                        key={color}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-primary-100 hover:text-primary-700 transition-colors"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
                  View Collection
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Looking for Bulk Orders?</h3>
          <p className="text-primary-100 mb-8 text-lg">We offer special wholesale pricing and customization options for large volume orders</p>
          <a
            href="#contact"
            className="inline-block bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold transition-all shadow-lg"
          >
            Get Wholesale Pricing
          </a>
        </div>
      </div>
    </section>
  )
}
