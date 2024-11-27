"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" aria-label="LeDix Home">
              <Logo />
            </Link>
          </div>

          <div className="flex items-center">
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/products" className="text-gray-700 hover:text-gray-900">
                Products
              </Link>
              <Link href="/projects" className="text-gray-700 hover:text-gray-900">
                Projects
              </Link>
              <Link href="/planning" className="text-gray-700 hover:text-gray-900">
                Planning
              </Link>
            </div>
            
            <button className="md:hidden ml-4 p-2 hover:bg-gray-100" aria-label="Menu">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}