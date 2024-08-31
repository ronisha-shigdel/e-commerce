import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();

  const handleConfirmPurchase = () => {
    navigate("/payment");
  };

  return (
    <div className="container p-4 mx-auto">
      <h2 className="mb-4 text-2xl font-semibold">Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between mb-4"
              >
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-gray-600">${item.price}</p>
                </div>
                <p>Quantity: {item.quantity}</p>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <button
              onClick={handleConfirmPurchase}
              className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
            >
              Confirm Purchase
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
