import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getData } from "../store/actions/shippingActions";
import Cart from "./Cart";
import Item from "./Item";

const Shop = () => {
  const dispatch = useDispatch();
  const shipping = useSelector((state) => state.shipping);
  const cart = useSelector((state) => state.cart);

  const { data, filteredData } = shipping;

  useEffect(() => {
    dispatch(getData());
  }, []);

  const renderItems = (data) => {
    return data.map((item) => {
      return <Item key={item.id} item={item} cart={cart.data} />;
    });
  };

  return (
    <div className="ecommerce-shop">
      <p>{shipping.data.length} Product(s) found.</p>
      {filteredData.length === 0 && (
        <div className="items">{data.length > 0 && renderItems(data)}</div>
      )}
      {filteredData.length > 0 && (
        <div className="items">{renderItems(filteredData)}</div>
      )}
      <Cart items={cart.data} />
    </div>
  );
};

export default Shop;
