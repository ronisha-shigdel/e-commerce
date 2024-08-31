import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../features/productsSlice";
import { addItemToCart } from "../features/cartSlice";

const ProductListing = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const categories = [...new Set(products.map((product) => product.category))];
  const [sortOrder, setSortOrder] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleCategoryFilterChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOrder === "asc") return a.price - b.price;
    if (sortOrder === "desc") return b.price - a.price;
    return 0;
  });

  const filteredProducts = categoryFilter
    ? sortedProducts.filter((product) => product.category === categoryFilter)
    : sortedProducts;

  const handleAddToCart = (product) => {
    dispatch(addItemToCart({ ...product, quantity: 1 }));
  };

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Product Listing</h1>
        <div className="flex space-x-4">
          <select
            value={sortOrder}
            onChange={handleSortOrderChange}
            className="p-2 border rounded"
          >
            <option value="">Sort by Price</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>

          <select
            value={categoryFilter}
            onChange={handleCategoryFilterChange}
            className="p-2 border rounded"
          >
            <option value="">All Categories</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="p-4 border rounded shadow">
            <img
              src={product.image}
              alt={product.title}
              className="object-cover w-full h-64 mb-2"
            />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-600">${product.price}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="w-full py-2 mt-2 text-white bg-blue-500 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
