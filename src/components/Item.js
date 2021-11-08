import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/actions/cartActions";

const Item = ({ item, cart }) => {
  const [isAdded, setIsAdded] = useState(false);

  const dispatch = useDispatch();

  const handleCart = () => dispatch(addToCart(item));

  const getQuantity = () => {
    return cart.map((data) => data.id === item.id && data.quantity);
  };

  useEffect(() => {
    const added = cart.filter((data) => data.id === item.id);
    added.length > 0 ? setIsAdded(true) : setIsAdded(false);
  }, [cart, item.id]);

  return (
    <div className="item">
      {item.details.tag !== "" && <h6 className="tag">{item.details.tag}</h6>}
      <img src={item.details.image} alt={item.name} height={350} width={250} />
      <p className="item-name">{item.name.substring(0, 30)}</p>
      <div className="divider"></div>
      <div className="item-price">
        <span>$</span>
        <span className="main">
          {item.details.price.toString().split(".")[0]}
        </span>
        <span>.{item.details.price.toString().split(".")[1]}</span>
      </div>
      {!isAdded ? (
        <button className="add-to-cart" onClick={handleCart}>
          Add to cart
        </button>
      ) : (
        <div className="quantity-btn">
          <button className="increment">+</button>
          <p className="quantity">{getQuantity()}</p>
          <button className="decrement">-</button>
        </div>
      )}
    </div>
  );
};

export default Item;
