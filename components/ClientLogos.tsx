"use client";

const clients = [
  { name: "Tech Corp", logo: "https://placehold.co/70x40/e5e7eb/a3a3a3?text=TECH+CO" },
  { name: "Innovate Inc", logo: "https://placehold.co/70x40/e5e7eb/a3a3a3?text=INNOV" },
  { name: "Future Systems", logo: "https://placehold.co/70x40/e5e7eb/a3a3a3?text=FUTURE" },
  { name: "Global Retail", logo: "https://placehold.co/70x40/e5e7eb/a3a3a3?text=GLOBAL" },
  { name: "Metro Group", logo: "https://placehold.co/70x40/e5e7eb/a3a3a3?text=METRO" },
  { name: "Design Co", logo: "https://placehold.co/70x40/e5e7eb/a3a3a3?text=DESIGN" },
  { name: "Arch Studios", logo: "https://placehold.co/70x40/e5e7eb/a3a3a3?text=ARCH" },
  { name: "Smart Space", logo: "https://placehold.co/70x40/e5e7eb/a3a3a3?text=SMART" },
  { name: "Build Better", logo: "https://placehold.co/70x40/e5e7eb/a3a3a3?text=BUILD" },
  { name: "Elite Homes", logo: "https://placehold.co/70x40/e5e7eb/a3a3a3?text=ELITE" },
  { name: "Urban Living", logo: "https://placehold.co/70x40/e5e7eb/a3a3a3?text=URBAN" },
  { name: "Prime Properties", logo: "https://placehold.co/70x40/e5e7eb/a3a3a3?text=PRIME" },
  { name: "Modern Spaces", logo: "https://placehold.co/70x40/e5e7eb/a3a3a3?text=MODERN" },
  { name: "Creative Solutions", logo: "https://placehold.co/70x40/e5e7eb/a3a3a3?text=CREATE" },
  { name: "Next Level", logo: "https://placehold.co/70x40/e5e7eb/a3a3a3?text=NEXT" },
  { name: "Peak Performance", logo: "https://placehold.co/70x40/e5e7eb/a3a3a3?text=PEAK" },
  { name: "Vista Group", logo: "https://placehold.co/70x40/e5e7eb/a3a3a3?text=VISTA" },
  { name: "Alpha Industries", logo: "https://placehold.co/70x40/e5e7eb/a3a3a3?text=ALPHA" },
  { name: "Beta Solutions", logo: "https://placehold.co/70x40/e5e7eb/a3a3a3?text=BETA" },
  { name: "Omega Corp", logo: "https://placehold.co/70x40/e5e7eb/a3a3a3?text=OMEGA" },
];

export default function ClientLogos() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center mb-12">Trusted by Industry Leaders</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center justify-items-center">
          {clients.map((client) => (
            <div
              key={client.name}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="h-auto w-[70px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}