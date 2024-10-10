import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

const Home = () => {
  const [products, setProducts] = useState<any[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto bg-white p-6">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">Featured Products</h1>
      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product: any) => (
          <div
            key={product.id}
            className="flex flex-col border-green-200 overflow-hidden rounded-lg border bg-white"
          >
            <Link to={`/product-details/${product.id}`}>
              <img
                className="h-48 w-full object-cover"
                src={product.image}
                alt={product.title}
              />
            </Link>
            <div className="p-4 flex-grow">
              <h3 className="mb-2 text-lg font-semibold text-gray-800">
                {product.title}
              </h3>
              <p className="mb-4 text-gray-600">${product.price}</p>
            </div>
            <div className="p-4 mt-auto">
              <button
                onClick={() => addToCart(product)} 
                className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
