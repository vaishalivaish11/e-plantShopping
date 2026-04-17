import React, { useState } from "react";
import ProductList from "./components/ProductList";
import AboutUs from "./components/AboutUs";
import CartItem from "./components/CartItem";
import "./App.css";

const App = () => {
  const [showProducts, setShowProducts] = useState(false);

  // REQUIRED FUNCTION (as per feedback)
  const handleGetStartedClick = () => {
    setShowProducts(true);
  };

  return (
    <div>

      {/* LANDING PAGE */}
      {!showProducts ? (
        <div className="landing-page">
          <h1>Paradise Nursery</h1>

          {/* REQUIRED BUTTON WITH onClick */}
          <button onClick={handleGetStartedClick}>
            Get Started
          </button>
        </div>
      ) : (
        <ProductList />
      )}

    </div>
  );
};

export default App;
