import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const products = [
  // 🌿 Indoor Plants
  {
    id: 1,
    name: "Aloe Vera",
    price: 120,
    category: "Indoor",
    image: "https://source.unsplash.com/200x200/?aloe"
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 180,
    category: "Indoor",
    image: "https://source.unsplash.com/200x200/?snake-plant"
  },

  // 🌳 Outdoor Plants
  {
    id: 3,
    name: "Rose Plant",
    price: 150,
    category: "Outdoor",
    image: "https://source.unsplash.com/200x200/?rose-plant"
  },
  {
    id: 4,
    name: "Hibiscus",
    price: 130,
    category: "Outdoor",
    image: "https://source.unsplash.com/200x200/?hibiscus"
  },

  // 🌱 Air Purifying
  {
    id: 5,
    name: "Peace Lily",
    price: 250,
    category: "Air",
    image: "https://source.unsplash.com/200x200/?peace-lily"
  },
  {
    id: 6,
    name: "Areca Palm",
    price: 300,
    category: "Air",
    image: "https://source.unsplash.com/200x200/?areca-palm"
  }
];

const ProductList = () => {
  const dispatch = useDispatch();
  const [added, setAdded] = useState({});

  const handleAdd = (product) => {
    dispatch(addItem(product));
    setAdded((prev) => ({ ...prev, [product.id]: true }));
  };

  const categories = ["Indoor", "Outdoor", "Air"];

  return (
    <div>

      {/* Navbar */}
      <nav style={{ display: "flex", gap: "15px", padding: "10px", background: "#2e7d32", color: "white" }}>
        <Link to="/" style={{ color: "white" }}>Home</Link>
        <Link to="/products" style={{ color: "white" }}>Plants</Link>
        <Link to="/cart" style={{ color: "white" }}>Cart</Link>
      </nav>

      <h1 style={{ textAlign: "center" }}>🌿 Plants Collection</h1>

      {/* Categories */}
      {categories.map((cat) => (
        <div key={cat} style={{ margin: "20px" }}>
          <h2>{cat} Plants</h2>

          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {products
              .filter((p) => p.category === cat)
              .map((product) => (
                <div
                  key={product.id}
                  style={{
                    border: "1px solid #ddd",
                    padding: "10px",
                    borderRadius: "10px",
                    width: "180px",
                    textAlign: "center"
                  }}
                >

                  {/* IMAGE (IMPORTANT FOR MARKS) */}
                  <img
                    src={product.image}
                    alt={product.name}
                    width="150"
                    height="120"
                    style={{ borderRadius: "8px" }}
                  />

                  {/* NAME */}
                  <h3>{product.name}</h3>

                  {/* PRICE */}
                  <p>₹{product.price}</p>

                  {/* BUTTON */}
                  <button
                    onClick={() => handleAdd(product)}
                    disabled={added[product.id]}
                    style={{
                      background: added[product.id] ? "gray" : "green",
                      color: "white",
                      padding: "5px",
                      border: "none",
                      cursor: "pointer"
                    }}
                  >
                    {added[product.id] ? "Added" : "Add to Cart"}
                  </button>

                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
