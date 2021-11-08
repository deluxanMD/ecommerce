import React, { useState } from "react";
import CartItem from "./CartItem";

const Cart = ({ items }) => {
  const [isCartOpened, setIsCartOpened] = useState(false);

  const handleClick = () => setIsCartOpened(!isCartOpened);

  const renderCartItems = () => {
    if (items.length === 0) {
      return <CartItem item={null} />;
    } else {
      return items.map((item) => <CartItem item={item} />);
    }
  };

  return (
    <div>
      <i
        className="fas fa-shopping-cart fa-2x"
        onClick={handleClick}
        style={{ right: isCartOpened ? "510px" : "10px", top: "10px" }}
      ></i>
      {isCartOpened && (
        <div className="ecommerce-cart">
          <p className="total">{items.length} Items</p>
          <div className="cart-items">{renderCartItems()}</div>
        </div>
      )}
    </div>
  );
};

export default Cart;
