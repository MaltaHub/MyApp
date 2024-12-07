'use client';

import { useState, useEffect } from 'react';

// Simulação de dados (Substitua com dados de uma API no futuro)
const mockProducts = [
  { id: 1, name: "Produto A", price: 49.87, image: "NaN" },
  { id: 2, name: "Produto B", price: 57.98, image: "NaN" },
  { id: 3, name: "Produto C", price: 99.99, image: "NaN" },
];

export default function StorePage() {
  const [products, setProducts] = useState(mockProducts);

  // Exemplo: Buscando dados de uma API
  useEffect(() => {
    // Substitua pelo fetch de uma API real
    // fetch('/api/products').then((res) => res.json()).then(setProducts);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Loja</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow-md overflow-hidden bg-white hover:shadow-lg transition-shadow"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600">R$ {product.price.toFixed(2)}</p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}