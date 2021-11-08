import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { SIZES } from "../constants/sizes";

import { filterBySize, clearFilter } from "../store/actions/shippingActions";

const SizeFilter = () => {
  const [selectedSize, setSelectedSize] = useState(null);

  const shipping = useSelector((state) => state.shipping);

  const dispatch = useDispatch();

  const handleSizeClick = (size) => {
    dispatch(clearFilter(size.value));
    dispatch(filterBySize(size.value));
    setSelectedSize(size.value);
  };

  const renderSizes = () => {
    return SIZES.map((size) => {
      return (
        <div
          key={size.id}
          className="size"
          style={{
            backgroundColor: selectedSize === size.value && "gray",
            color: selectedSize === size.value && "white",
          }}
          onClick={() => handleSizeClick(size)}
        >
          <p>{size.code.toUpperCase()}</p>
        </div>
      );
    });
  };
  return (
    <div className="ecommerce-size-filter">
      <h5>Sizes:</h5>
      <div className="sizes">{renderSizes()}</div>
    </div>
  );
};

export default SizeFilter;
