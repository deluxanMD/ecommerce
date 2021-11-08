import React from "react";

const Item = ({ item }) => {
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
      <button className="add-to-cart">Add to cart</button>
    </div>
  );
};

export default Item;
