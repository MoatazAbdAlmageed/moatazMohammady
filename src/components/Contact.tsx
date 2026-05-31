'use client';

import { useState } from 'react';
import { FORMSPREE, email, phone, phone2, address, location, whatsapp } from '@/data/config';

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });

      if (response.ok) {
        setStatus('Thank you! Your message has been sent successfully.');
        form.reset();
      } else {
        setStatus('Oops! There was a problem submitting your form.');
      }
    } catch (err) {
      setStatus('Oops! There was a network issue submitting your form.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-6xl mx-auto relative">
      <div className="relative mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold font-display inline-block">
          Get in Touch
        </h2>
        <div className="w-16 h-1 bg-orange-400 rounded mt-2" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact details */}
        <div>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Interested in collaboration, custom integration work, or have questions about any of my open-source projects? Drop me a message. I usually respond within 24 hours.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-orange-400">
                <i className="fas fa-envelope text-lg"></i>
              </span>
              <div>
                <span className="text-xs text-slate-500 font-bold block uppercase tracking-wider">Email Address</span>
                <a href={`mailto:${email}`} className="text-slate-200 hover:text-orange-400 transition font-medium">
                  {email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-orange-400">
                <i className="fas fa-phone text-lg"></i>
              </span>
              <div>
                <span className="text-xs text-slate-500 font-bold block uppercase tracking-wider">Primary Phone</span>
                <a href={`tel:${phone}`} className="text-slate-200 hover:text-orange-400 transition font-medium">
                  {phone}
                </a>
              </div>
            </div>

            {phone2 && (
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-orange-400">
                  <i className="fas fa-mobile-alt text-lg"></i>
                </span>
                <div>
                  <span className="text-xs text-slate-500 font-bold block uppercase tracking-wider">Alternative Mobile</span>
                  <a href={`tel:${phone2}`} className="text-slate-200 hover:text-orange-400 transition font-medium">
                    {phone2}
                  </a>
                </div>
              </div>
            )}

            <div className="flex items-center gap-4">
              <span className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-orange-400">
                <i className="fas fa-map-marker-alt text-lg"></i>
              </span>
              <div>
                <span className="text-xs text-slate-500 font-bold block uppercase tracking-wider">Office Location</span>
                <a href={location} target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-orange-400 transition font-medium">
                  {address}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form card */}
        <div className="p-6 sm:p-8 bg-slate-900/40 border border-slate-800 rounded-2xl backdrop-blur-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-xs font-bold text-slate-400 uppercase mb-2 tracking-wider">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-4 py-3 bg-slate-950 border border-slate-900 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-xl text-slate-200 placeholder-slate-600 focus:outline-none transition"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-bold text-slate-400 uppercase mb-2 tracking-wider">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 bg-slate-950 border border-slate-900 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-xl text-slate-200 placeholder-slate-600 focus:outline-none transition"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-bold text-slate-400 uppercase mb-2 tracking-wider">
                Message Description
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 bg-slate-950 border border-slate-900 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-xl text-slate-200 placeholder-slate-600 focus:outline-none transition resize-none"
                placeholder="Tell me about your project needs..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-400 hover:to-pink-500 text-white font-semibold rounded-xl shadow-lg transition-all disabled:opacity-50 cursor-pointer text-center"
            >
              {loading ? 'Sending Message...' : 'Send Message'}
            </button>

            {status && (
              <p className="text-sm font-semibold text-orange-400 mt-4 text-center animate-pulse">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Floating Animated WhatsApp Button */}
      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 left-8 w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center text-3xl shadow-xl shadow-emerald-500/20 z-40 transition-all hover:scale-110 hover:rotate-6 animate-float-slow"
        title="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </section>
  );
}
