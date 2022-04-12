import React from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProduct";
import { removeFromDb } from "../../utilities/fakedb";
import ReviewItem from "../ReviewItem/ReviewItem";
import Cart from "./../Cart/Cart";
import "./Orders.css";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  const navigate = useNavigate();

  const handleRemoveProduct = (product) => {
    const rest = cart.filter((pd) => pd.id !== product.id);
    setCart(rest);
    removeFromDb(product.id);
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
        <Cart cart={cart}>
          <button onClick={() => navigate("/shipment")}>Check Out</button>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
