import React from "react";
import "./styles/global.scss";

import Shop from "./components/Shop";
import SizeFilter from "./components/SizeFilter";

const App = () => {
  return (
    <div className="ecommerce-app">
      <SizeFilter />
      <Shop />
    </div>
  );
};

export default App;
