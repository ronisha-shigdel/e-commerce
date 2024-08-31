import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import ProductListing from "./pages/product-listing";
import ProductDetails from "./pages/product-details";
import Checkout from "./pages/checkout";
import Authentication from "./pages/authentication";
import PaymentMethod from "./pages/payment-method";
import CartSidebar from "./components/cart-sidebar";
import AboutUs from "./pages/about-us";
import ContactUs from "./pages/contact-us";
import { useSelector } from "react-redux";

const App = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-grow">
        <div className={`flex-grow ${isAuthenticated ? "w-3/4" : "w-full"}`}>
          <Routes>
            <Route path="/auth" element={<Authentication />} />
            <Route
              path="/"
              element={
                isAuthenticated ? <ProductListing /> : <Navigate to="/auth" />
              }
            />
            <Route
              path="/product/:id"
              element={
                isAuthenticated ? <ProductDetails /> : <Navigate to="/auth" />
              }
            />
            <Route
              path="/checkout"
              element={isAuthenticated ? <Checkout /> : <Navigate to="/auth" />}
            />
            <Route
              path="/payment"
              element={
                isAuthenticated ? <PaymentMethod /> : <Navigate to="/auth" />
              }
            />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />{" "}
          </Routes>
        </div>
        {isAuthenticated && (
          <div className="w-1/4 bg-gray-100 border-l">
            <CartSidebar />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;
