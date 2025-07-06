import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const {
    product_list,
    cartItem,
    setCartItem,
    addCart,
    gettotalCartAmt,
    removeCart,
    url
  } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className=" cart">
      <div className="cart-item">
        <div className="cart-item-list">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {product_list
          .filter((item) => cartItem[item._id] > 0) // ✅ Filters only selected items
          .map((item) => (
            <div key={item._id}>
              <div className="cart-item-list cart-item-item">
              <img src={url+"/uploads/"+item.image} alt={item.name} />

                <p>{item.name}</p>
                <p>₹{item.price}</p>
                <p>{cartItem[item._id]}</p>
                {Number(item.price) * (Number(cartItem[item._id]) || 0)}
                <p className="cross" onClick={() => removeCart(item._id)}>
                  x
                </p>
              </div>
              <hr />
            </div>
          ))}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-detail">
              <p>SubTotal</p>
              <p>{gettotalCartAmt()}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <p>Delivery Fee</p>
              <p>{gettotalCartAmt() == 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <b>Total</b>
              <b>{gettotalCartAmt() === 0 ? 0 : gettotalCartAmt() + 2}</b>
            </div>
          </div>

          <button onClick={() => navigate("/palceOrder")}>
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have promocode enter here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="promocode" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;

