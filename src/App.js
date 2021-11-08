import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getData } from "./store/actions/shippingActions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  return <div></div>;
};

export default App;
