import React, { useEffect, useState } from "react";
import "./Cart.css";

function Cart({ cart, setcart,handleChange }) {
  const [price, setprice] = useState(0);
  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setprice(ans);
  };
  const handleRemove = (id)=>{
    const arr = cart.filter((item)=> item.id !== id);
    setcart(arr)
    handlePrice();
  }
  useEffect(() => {
    handlePrice();
  });

  return (
    <>
      <section id="cart">
        {cart.map((item) => (
          <div className="cart_box" key={item.id}>
            <div className="cart_img">
              <img src={item.images} alt="" />
              <p>{item.Model}</p>
            </div>
            <div>
              <button onClick={()=>handleChange(item, +1)}>+</button>
              <button>{item.amount}</button>
              <button onClick={()=>handleChange(item, -1)}>-</button>
            </div>
            <div>
              <span>₹{item.price}</span>
              <button onClick={()=>handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))}
        <div className="total">
          <span>Total price :</span>
          <span>₹{price}</span>
        </div>
      </section>
    </>
  );
}

export default Cart;
