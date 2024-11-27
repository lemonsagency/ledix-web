"use client";

const solutions = [
  {
    name: "Retail Lighting",
    description: "Enhance product displays and create engaging shopping environments",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
  },
  {
    name: "Office Solutions",
    description: "Optimal lighting for productive work environments",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
  },
  {
    name: "Architectural Lighting",
    description: "Highlight architectural features and create ambiance",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
  },
  {
    name: "Outdoor Illumination",
    description: "Durable and efficient outdoor lighting solutions",
    image: "https://images.unsplash.com/photo-1520970014086-2208d157c9e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
  }
];

export default function SolutionsGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Lighting Solutions</h2>
        <div className="grid grid-cols-2 gap-4 md:gap-8">
          {solutions.map((solution) => (
            <div key={solution.name} className="group cursor-pointer">
              <div className="relative h-48 md:h-[400px] overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 md:p-8">
                  <h3 className="text-white text-lg md:text-2xl font-bold mb-1 md:mb-2">{solution.name}</h3>
                  <p className="text-white/90 text-sm md:text-base">{solution.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}