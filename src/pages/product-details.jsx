import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addItemToCart } from "../features/cartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.products.products.find((product) => product.id === parseInt(id))
  );
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItemToCart({ ...product, quantity: 1 }));
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="p-4">
      <h1 className="mb-4 text-3xl font-bold">{product.name}</h1>
      <p className="mb-4 text-xl">${product.price}</p>
      <button
        className="px-4 py-2 text-white bg-blue-500 rounded"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
