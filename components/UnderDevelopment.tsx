import Image from 'next/image'

export default function UnderDevelopment() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Blur backdrop */}
      <div className="fixed inset-0 backdrop-blur-md bg-black/20" />

      {/* Under Development Message */}
      <div className="relative z-[10000] text-center px-6">
        <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-md">
          <div className="flex justify-center mb-6">
            <Image
              src="/logo.png"
              alt="Sagar Fashion Logo"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Coming Soon
          </h1>
          
          <p className="text-xl text-gray-600 mb-2 font-semibold">
            Sagar Fashion
          </p>
          
          <p className="text-gray-600 mb-8 leading-relaxed">
            We&apos;re working hard to bring you an amazing experience. This website is under development.
          </p>

          <div className="space-y-3">
            <p className="text-sm text-gray-700 font-medium">
              📧 Contact us in the meantime:
            </p>
            <div className="space-y-2">
              <a
                href="tel:+919820531096"
                className="block text-primary-600 hover:text-primary-700 font-semibold transition-colors"
              >
                +91 98205 31096
              </a>
              <a
                href="mailto:sagarfashion.impex@gmail.com"
                className="block text-primary-600 hover:text-primary-700 font-semibold transition-colors"
              >
                sagarfashion.impex@gmail.com
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              Check back soon for our official launch
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
