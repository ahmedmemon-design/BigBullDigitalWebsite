'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Send, Navigation, Check } from 'lucide-react';

const SimpleContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen mt-32 bg-black text-white">
      {/* Header */}
      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Contact <span className="text-red-500">Us</span>
          </h1>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Get in touch with our team. We&apos;re here to help you with your digital transformation.
          </p>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Phone */}
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-bold">Phone</h3>
              </div>
              <div className="space-y-2">
                <p className="text-gray-300">+1 (708) 960 7181</p>
                <p className="text-gray-300">+92 331-2705270</p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-bold">Email</h3>
              </div>
              <div className="space-y-2">
                <p className="text-gray-300">info@bigbuilddigital.com</p>
                <p className="text-gray-300">support@bigbuilddigital.com</p>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-bold">Location</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-400 text-sm">USA</p>
                  <p className="text-gray-300">1533 Yellowstone Dr, Streamwood IL 60107</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Pakistan</p>
                  <p className="text-gray-300">Plot# 10 Line 7, Zamzam Commercial Phase V DHA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map and Form Section */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Map Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Navigation className="w-6 h-6 text-red-500" />
                Our Location
              </h2>
              
              <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden h-96">
                {/* Embedded Google Map */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.3344698354827!2d67.03808577607388!3d24.818232946944825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ddcf3e73a63%3A0x45eed6a990af0a76!2sBig%20Bull%20Digital%20PVT%20LTD!5e0!3m2!1sen!2s!4v1770455452612!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Big Build Digital Location"
                />
              </div>

              {/* Map Address */}
              <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
                <h3 className="font-bold mb-2">Big Bull Digital Pvt Ltd</h3>
                <p className="text-gray-400 text-sm">Plot# 1C, Lane 7, Zamzam Commercial, Phase V, DHA, Karachi, Pakistan</p>
                <p className="text-red-400 text-sm mt-2">www.bigbulldigital.com</p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-400 mb-2 text-sm">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter First Name"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2 text-sm">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter Last Name"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500"
                      required
                    />
                  </div>
                </div>

                {/* Contact Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-400 mb-2 text-sm">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter Email"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2 text-sm">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter Phone Number"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500"
                      required
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-400 mb-2 text-sm">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message..."
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className={`w-full py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                    isSubmitted
                      ? 'bg-green-600'
                      : 'bg-red-600 hover:bg-red-700 active:scale-95'
                  }`}
                >
                  {isSubmitted ? (
                    <>
                      <Check className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              {/* Additional Help */}
              <div className="mt-8 p-4 bg-white/5 rounded-lg">
                <p className="text-gray-400 text-sm">
                  Need help? Email us directly at:{' '}
                  <a href="mailto:info@bigbuilddigital.com" className="text-red-400 hover:underline">
                    info@bigbuilddigital.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Industries Section - Simple */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Industries We Serve</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                'Construction', 'Healthcare', 'Education', 'Real Estate',
                'Banking', 'Insurance', 'Hospitality', 'Retail',
                'Transport', 'Technology', 'Manufacturing', 'Entertainment', "Automotive"
              ].map((industry, index) => (
                <div
                  key={index}
                  className="px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm hover:border-red-500/30 transition-colors"
                >
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleContactPage;
