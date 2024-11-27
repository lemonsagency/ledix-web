"use client";

import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <Link href="/" className="text-2xl font-bold">
              LUXCO
            </Link>
            <p className="mt-4 text-gray-400 max-w-md">
              Professional lighting solutions for modern spaces. Creating exceptional 
              illumination experiences for retail, commercial, and architectural projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/planning" className="text-gray-400 hover:text-white transition-colors">
                  Planning
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-2">
            <h3 className="text-lg font-semibold mb-4">¿Tiene preguntas?</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <a href="mailto:info@grupophal.com" className="text-gray-400 hover:text-white">
                  info@grupophal.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <a href="tel:08102200009" className="text-gray-400 hover:text-white">
                  0810 220 0009
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 text-gray-400" />
                <a 
                  href="https://wa.me/5491162329101" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white"
                >
                  +54 9 11 6232 9101
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gray-400 mt-1" />
                <address className="text-gray-400 not-italic">
                  Av. Santa Fe 476<br />
                  Lomas de Zamora, Buenos Aires<br />
                  Argentina
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4 mt-8">
          <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
          <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
          <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
          <Linkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} LUXCO. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}