'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', company: '', message: '' })
    }, 3000)
  }

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary-600 font-semibold uppercase tracking-widest text-sm mb-4">Get in Touch</p>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Let&apos;s Connect & Grow Together
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Contact us for inquiries, wholesale orders, custom designs, or partnership opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900">Contact Information</h3>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all">
                <MapPin className="text-primary-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Address</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    HNO.1782 VISHNUSAGAR BUNGALOW<br />
                    SAKAI NAGAR, UMELA, NAIGAON WEST<br />
                    (VASAI) Mumbai - 401202<br />
                    <span className="text-xs text-gray-500 block mt-2">📍 Landmark: Ganesh Mandir</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all">
                <Phone className="text-primary-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Phone</h4>
                  <div className="space-y-2">
                    <a
                      href="tel:+919820531096"
                      className="text-primary-600 hover:text-primary-700 font-semibold block text-lg"
                    >
                      +91 98205 31096
                    </a>
                    <a
                      href="tel:+919833474854"
                      className="text-primary-600 hover:text-primary-700 font-semibold block text-lg"
                    >
                      +91 98334 74854
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all">
                <Mail className="text-primary-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Email</h4>
                  <div className="space-y-2">
                    <a
                      href="mailto:sagarfashion.impex@gmail.com"
                      className="text-primary-600 hover:text-primary-700 font-semibold block text-sm break-all"
                    >
                      sagarfashion.impex@gmail.com
                    </a>
                    <a
                      href="mailto:sagarfashion221@gmail.com"
                      className="text-primary-600 hover:text-primary-700 font-semibold block text-sm break-all"
                    >
                      sagarfashion221@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl border border-primary-200">
                <h4 className="font-bold text-gray-900 mb-3">Business Details</h4>
                <p className="text-gray-700 font-semibold mb-1">
                  <span className="text-primary-600">GSTIN:</span> 27ATGPK7058M1Z3
                </p>
                <p className="text-gray-600 text-sm">
                  Certified Exporter & Importer of Indian Ethnic Wear
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Send Inquiry</h3>
            <p className="text-gray-600 text-sm mb-8">We&apos;ll respond within 24 hours</p>

            {submitted ? (
              <div className="bg-green-50 border border-green-300 rounded-xl p-8 text-center">
                <p className="text-green-700 font-bold text-lg">Thank you! 🎉</p>
                <p className="text-green-600 mt-2">We&apos;ve received your inquiry and will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    placeholder="+91 98205 31096"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent resize-none"
                    placeholder="Tell us about your requirements, products needed, quantity, etc."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white py-4 rounded-lg font-bold transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
