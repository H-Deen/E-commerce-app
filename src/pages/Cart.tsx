import { useCart } from "../Context/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const calculateTotal = () => {
    return cart.reduce((acc: any, item: { price: any; }) => acc + item.price, 0).toFixed(2);
  };

  return (
    <div className="container mx-auto mb-10 max-w-6xl bg-white p-6">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">Shopping Cart</h1>
      {/* Cart Items Section */}
      <div className="flex flex-col gap-6 lg:flex-row">
        {/* Cart Items List */}
        <div className="w-full lg:w-3/4">
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            {cart.length > 0 ? (
              cart.map((product: { image: string; title: string; price: number; }, index: number) => (
                <div key={index} className="mb-4 flex items-center justify-between border-b pb-4">
                  <div className="flex items-center space-x-4">
                    <img
                      className="h-20 w-20 object-cover"
                      src={product.image}
                      alt={product.title}
                    />
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800">
                        {product.title}
                      </h2>
                      <p className="text-sm text-gray-500">Price: ${product.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(index)} 
                    className="text-red-500 hover:text-red-600"
                  >
                    Remove
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-600">Your cart is empty.</p>
            )}
          </div>
        </div>
        {/* Cart Summary Section */}
        <div className="w-full lg:w-1/4">
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h2 className="mb-4 text-xl font-bold text-gray-800">Summary</h2>
            <div className="mb-2 flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-semibold text-gray-800">${calculateTotal()}</span>
            </div>
            <div className="mb-2 flex justify-between">
              <span className="text-gray-600">Shipping</span>
              <span className="font-semibold text-gray-800">$10.00</span>
            </div>
            <div className="mt-4 flex justify-between border-t pt-4">
              <span className="font-semibold text-gray-800">Total</span>
              <span className="font-bold text-gray-900">${(parseFloat(calculateTotal()) + 10).toFixed(2)}</span>
            </div>
            {cart.length > 0 && (
              <button className="mt-6 w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
                Proceed to Checkout
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
