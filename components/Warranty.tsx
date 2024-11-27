"use client";

import { Wrench, Box, Package, Award } from "lucide-react";

export default function Warranty() {
  const warranties = [
    {
      icon: <Wrench className="h-12 w-12" />,
      title: "Raparación/Remplazo",
      description: "Si la luminaria presenta algún defecto de fabricación o de material durante su vida útil, la empresa se compromete a repararla o reemplazarla sin costo adicional para el propietario."
    },
    {
      icon: <Package className="h-12 w-12" />,
      title: "Producto",
      description: "La garantía de por vida se aplica solo al producto en sí mismo, y no a cualquier componente o accesorio que pueda ser incluido con la luminaria."
    },
    {
      icon: <Box className="h-12 w-12" />,
      title: "Daños",
      description: "Esta garantía no cubre daños causados por un mal uso o abuso del producto, ni tampoco cubre daños causados por circunstancias ajenas a la calidad de la luminaria."
    },
    {
      icon: <Award className="h-12 w-12" />,
      title: "Alta Calidad",
      description: "LeDix busca brindar tranquilidad y seguridad a sus clientes al comprar sus luminarias LED, asegurándoles que están adquiriendo un producto confiable y de alta calidad que durará por mucho tiempo."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Garantía Extendida</h2>
          <div className="w-24 h-1 bg-black mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {warranties.map((item, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-6 text-gray-800 transform transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}