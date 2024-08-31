import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentMethod = () => {
  const [paymentOption, setPaymentOption] = useState("");
  const navigate = useNavigate();

  const handlePaymentOptionChange = (e) => {
    setPaymentOption(e.target.value);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    alert("Payment successful!");
    navigate("/");
  };

  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-4 text-3xl font-bold">Payment Method</h1>
      <form onSubmit={handlePaymentSubmit}>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Select Payment Method
          </label>
          <select
            value={paymentOption}
            onChange={handlePaymentOptionChange}
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select...</option>
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bankTransfer">Bank Transfer</option>
          </select>
        </div>

        {paymentOption === "creditCard" && (
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Credit Card Details
            </label>
            <input
              type="text"
              placeholder="Card Number"
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              required
            />
            <input
              type="text"
              placeholder="Expiration Date"
              className="w-full px-3 py-2 mt-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              required
            />
            <input
              type="text"
              placeholder="CVV"
              className="w-full px-3 py-2 mt-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              required
            />
          </div>
        )}

        <button
          type="submit"
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        >
          Submit Payment
        </button>
      </form>
    </div>
  );
};

export default PaymentMethod;
