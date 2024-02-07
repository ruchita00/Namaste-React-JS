import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOGO_URL } from "../Utils/constants";
import { clearCart } from "../Utils/cartSlice";

const Cart = () => {
  //subscribe
  const cartItems = useSelector((store) => store.cart.items);
  //   console.log("cartItems", cartItems[0].card.info);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div style={{ marginTop: "112px", margin: "112px 40px 0px 40px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1 style={{ color: "gray" }}>Cart</h1>
        <button className="clear-btn" onClick={handleClearCart}>
          {" "}
          Clear
        </button>
        {cartItems.length === 0 && (
          <h1 style={{ marginTop: "20px" }}>
            Cart is empty, Add Items to the cart
          </h1>
        )}
      </div>
      <div className="menu-items-list">
        {cartItems.map((item) => (
          <div className="menu-item" key={item?.card?.info?.id}>
            <div className="menu-item-details">
              <h3 className="item-title">{item?.card?.info?.name}</h3>
              <p className="item-cost">
                {item?.card?.info?.price > 0
                  ? new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "INR",
                    }).format(item?.card?.info?.price / 100)
                  : " "}
              </p>
              <p className="item-desc">{item?.card?.info?.description}</p>
            </div>
            <div className="menu-img-wrapper">
              {item?.card?.info?.imageId && (
                <img
                  className="menu-item-img"
                  src={LOGO_URL + item?.card?.info?.imageId}
                  alt={item?.card?.info?.name}
                />
              )}
              <button className="add-btn" onClick={() => handleAddItem(item)}>
                {" "}
                ADD +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
