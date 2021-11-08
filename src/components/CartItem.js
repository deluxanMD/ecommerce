import React from "react";

const CartItem = ({ item }) => {
  console.log(item);
  return (
    <div className="cart-item">
      <img src={item.details.image} alt={item.name} width={100} height={150} />
      <div className="cart-item-details">
        <p>{item.name.substring(0, 30)}</p>
        <p className="quantity">Quantity: 4</p>
      </div>
      <p className="price">${item.details.price}</p>
    </div>
  );
};

export default CartItem;
