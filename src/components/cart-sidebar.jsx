import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItemFromCart } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";

const CartSidebar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemove = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const handleProceedToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="w-full h-screen p-4 overflow-y-auto bg-gray-100">
      <h2 className="text-xl font-bold">Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between mb-4"
            >
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-12 h-12 mr-4"
                />
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                  <p className="text-gray-600">Price: ${item.price}</p>
                </div>
              </div>
              <button
                onClick={() => handleRemove(item.id)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      {cartItems.length > 0 && (
        <div>
          <p className="mt-4 font-bold">Total Quantity: {cartItems.length}</p>
          <button
            onClick={handleProceedToCheckout}
            className="w-full px-4 py-2 mt-4 font-bold text-white bg-green-500 rounded hover:bg-green-700"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartSidebar;
