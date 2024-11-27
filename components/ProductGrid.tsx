const products = [
  {
    name: "Castor",
    description: "A lighting tool for pathways and plazas",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    name: "Iku",
    description: "For electrified rails",
    image: "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    name: "Nova",
    description: "Ambient lighting for modern spaces",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    name: "Stellar",
    description: "Architectural accent lighting",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    name: "Lumina",
    description: "Premium pendant lighting",
    image: "https://images.unsplash.com/photo-1541832676-9b2b69774c1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    name: "Axis Pro",
    description: "Professional display lighting",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
];

export default function ProductGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.name} className="relative group cursor-pointer">
            <div className="aspect-square relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white p-4 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                <h2 className="text-lg md:text-xl font-bold mb-1">{product.name}</h2>
                <p className="text-sm md:text-base">{product.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}