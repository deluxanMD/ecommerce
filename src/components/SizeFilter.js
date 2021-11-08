import React, { useState } from "react";

import { SIZES } from "../constants/sizes";

const SizeFilter = () => {
  const [selectedSize, setSelectedSize] = useState(null);

  const renderSizes = () => {
    return SIZES.map((size) => {
      return (
        <div key={size.id} className="size">
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
