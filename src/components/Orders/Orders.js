import React from "react";
import useProducts from "../../hooks/useProduct";

const Orders = () => {
  const [products, setProducts] = useProducts();
  return (
    <div>
      <h2>Place the order:{products.length}</h2>
    </div>
  );
};

export default Orders;
