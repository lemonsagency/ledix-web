"use client";

import { FileDown } from "lucide-react";

export default function CatalogDownload() {
  const handleDownload = () => {
    // In a real application, this would trigger the actual PDF download
    console.log("Downloading catalog...");
  };

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Download Our Product Catalog
            </h2>
            <p className="text-gray-400 text-lg max-w-xl">
              Explore our complete range of lighting solutions in our comprehensive product catalog.
              Features detailed specifications, dimensions, and application examples.
            </p>
          </div>
          
          <button
            onClick={handleDownload}
            className="group flex items-center space-x-3 bg-white text-black px-8 py-4 hover:bg-gray-100 transition-colors"
          >
            <FileDown className="h-5 w-5 transition-transform group-hover:-translate-y-1" />
            <span className="text-lg font-semibold">Download Catalog</span>
          </button>
        </div>
      </div>
    </section>
  );
}