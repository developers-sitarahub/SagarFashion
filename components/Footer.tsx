'use client'

import Image from 'next/image'
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Sagar Fashion"
                width={40}
                height={40}
                className="object-contain brightness-0 invert"
              />
              <div>
                <h3 className="text-xl font-bold">Sagar Fashion</h3>
                <p className="text-xs text-gray-400">Ethnic Excellence</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Global exporters of premium Indian ethnic wear since 2015. Bringing authentic tradition to the world with excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-white text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: '#home', label: 'Home' },
                { href: '#about', label: 'About Us' },
                { href: '#products', label: 'Products' },
                { href: '#services', label: 'Services' },
                { href: '#contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold mb-6 text-white text-sm uppercase tracking-wider">Products</h4>
            <ul className="space-y-3">
              {['Sarees', 'Kurtis', 'Lehengas', 'Formal Suits', 'Casual Wear', 'Bridal'].map((product) => (
                <li key={product}>
                  <a href="#products" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-6 text-white text-sm uppercase tracking-wider">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-primary-500 flex-shrink-0 mt-1" />
                <div className="text-sm">
                  <a href="tel:+919820531096" className="text-gray-400 hover:text-primary-400 transition-colors block">
                    +91 98205 31096
                  </a>
                  <a href="tel:+919833474854" className="text-gray-400 hover:text-primary-400 transition-colors block">
                    +91 98334 74854
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-primary-500 flex-shrink-0 mt-1" />
                <a href="mailto:sagarfashion.impex@gmail.com" className="text-gray-400 hover:text-primary-400 transition-colors text-sm block">
                  sagarfashion.impex@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-primary-500 flex-shrink-0 mt-1" />
                <div className="text-gray-400 text-sm">
                  Vasai, Mumbai<br />401202, India
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-400 text-sm">
                © {currentYear} Sagar Fashion. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-2">
                GSTIN: 27ATGPK7058M1Z3 | Certified Exporter & Importer
              </p>
            </div>
            <div className="md:text-right">
              <p className="text-gray-400 text-sm mb-4">Follow us on social media</p>
              <div className="flex gap-4 justify-start md:justify-end">
                {[
                  { icon: Facebook, label: 'Facebook' },
                  { icon: Instagram, label: 'Instagram' },
                  { icon: Linkedin, label: 'LinkedIn' },
                ].map((social) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={social.label}
                      href="#"
                      aria-label={social.label}
                      className="text-gray-400 hover:text-primary-400 transition-colors"
                    >
                      <IconComponent size={20} />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
