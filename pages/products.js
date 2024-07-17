import { useEffect, useState } from 'react';
import client, { urlFor } from '../sanityClient';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "product"]{
        name,
        slug,
        image,
        price,
        description
      }`)
      .then((data) => setProducts(data))
      .catch(console.error);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.slug.current} className="product bg-white shadow-md rounded-lg overflow-hidden">
            <img src={urlFor(product.image).url()} alt={product.name} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-700 mt-2">{product.description}</p>
              <p className="text-lg font-bold mt-4">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
