export default function FeaturedProject() {
  return (
    <div className="relative">
      <div className="aspect-[16/9] relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Axis Showcase Projector"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Axis Showcase Projector</h2>
          <p className="text-xl mb-8">Spectacular magic in a small setting</p>
          <button className="border border-white px-8 py-3 hover:bg-white hover:text-black transition-colors">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}