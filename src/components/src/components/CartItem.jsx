import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeItem,
  updateQuantity
} from "../redux/CartSlice";
import { Link } from "react-router-dom";

const CartItem = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  // ✅ TOTAL CART AMOUNT (REQUIRED)
  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  return (
    <div style={{ padding: "20px" }}>

      <h1>Shopping Cart</h1>

      {/* If cart empty */}
      {cartItems.length === 0 ? (
        <h3>Your cart is empty</h3>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              border: "1px solid #ddd",
              padding: "10px",
              marginBottom: "10px"
            }}
          >

            {/* IMAGE (REQUIRED) */}
            <img
              src={item.image}
              alt={item.name}
              width="100"
              height="80"
              style={{ borderRadius: "8px" }}
            />

            {/* NAME */}
            <h3>{item.name}</h3>

            {/* PRICE */}
            <p>Price: ₹{item.price}</p>

            {/* QUANTITY */}
            <div>
              <button
                onClick={() =>
                  dispatch(
                    updateQuantity({ id: item.id, type: "decrease" })
                  )
                }
              >
                -
              </button>

              <span style={{ margin: "0 10px" }}>
                {item.quantity}
              </span>

              <button
                onClick={() =>
                  dispatch(
                    updateQuantity({ id: item.id, type: "increase" })
                  )
                }
              >
                +
              </button>
            </div>

            {/* TOTAL PER ITEM */}
            <p>
              Total: ₹{item.price * item.quantity}
            </p>

            {/* DELETE BUTTON */}
            <button
              onClick={() => dispatch(removeItem(item.id))}
              style={{ background: "red", color: "white" }}
            >
              Delete
            </button>

          </div>
        ))
      )}

      {/* TOTAL CART AMOUNT (IMPORTANT) */}
      <h2>
        Total Amount: ₹{calculateTotalAmount()}
      </h2>

      {/* BUTTONS */}
      <button onClick={() => alert("Coming Soon")}>
        Checkout
      </button>

      <Link to="/products">
        <button>Continue Shopping</button>
      </Link>

    </div>
  );
};

export default CartItem;
