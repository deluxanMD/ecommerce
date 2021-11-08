import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getData } from "../store/actions/shippingActions";
import Item from "./Item";

const Shop = () => {
  const dispatch = useDispatch();
  const shipping = useSelector((state) => state.shipping);

  useEffect(() => {
    dispatch(getData());
  }, []);

  const renderItems = () => {
    const { data } = shipping;

    return data.map((item) => {
      return <Item key={item.id} item={item} />;
    });
  };

  return (
    <div className="ecommerce-shop">
      <p>{shipping.data.length} Product(s) found.</p>
      <div className="items">{shipping.data.length > 0 && renderItems()}</div>
    </div>
  );
};

export default Shop;
