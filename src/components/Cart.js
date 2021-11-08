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

  const getTotal = () => {
    let total = 0;
    items.map((item) => (total += item.quantity * item.details.price));
    return total;
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
          <hr />
          {items.length > 0 && (
            <div className="sub-total">
              <p className="heading">Sub total</p>
              <p className="total-amount">${getTotal()}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
