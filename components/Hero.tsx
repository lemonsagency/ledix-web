"use client";

import { useState } from 'react';

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    whatsapp: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Modern retail space"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative container mx-auto px-4 py-20 md:py-0">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between min-h-[calc(100vh-80px)]">
          <div className="max-w-xl text-left mb-12 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              The concept of lighting for avant-garde retail
            </h1>
            <p className="text-xl text-white/90">
              LUXCO lighting solutions at Highsnobiety, Berlin
            </p>
          </div>

          <div className="w-full md:w-96 bg-white/10 backdrop-blur-md p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Us</h3>
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Your company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium text-white mb-2">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Your WhatsApp number"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black px-8 py-3 hover:bg-gray-100 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}