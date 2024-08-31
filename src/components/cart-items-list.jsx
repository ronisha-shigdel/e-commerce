import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItemFromCart } from "../features/cartSlice";

const CartItemsList = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemoveItem = (itemId) => {
    dispatch(removeItemFromCart(itemId));
  };

  return (
    <div className="p-4">
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-12 h-12 mr-4"
                />
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-gray-600">${item.price}</p>
                </div>
              </div>
              <div className="flex items-center">
                <p className="mr-4">Quantity: {item.quantity}</p>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="text-red-500"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartItemsList;
