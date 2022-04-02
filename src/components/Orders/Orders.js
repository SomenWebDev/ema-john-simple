import React from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProduct";
import ReviewItem from "../ReviewItem/ReviewItem";
import Cart from "./../Cart/Cart";

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);

  const handleRemoveProduct = (product) => {
    const rest = cart.filter((pd) => pd.id !== product.id);
    setCart(rest);
  };

  return (
    <div className="shop-container">
      {/* <h2>Place the order:{products.length}</h2>
      <p>cart has:{cart.length}</p> */}
      <div className="review-items-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handleRemoveProduct={handleRemoveProduct}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Orders;
