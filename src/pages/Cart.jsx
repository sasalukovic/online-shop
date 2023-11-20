import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Cart = ({ cart }) => {
  return (
    <div>
      {cart.length > 0 ? (
        cart.map((item) => (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <p>{item.price}</p>
          </div>
        ))
      ) : (
        <>
          <p>No items in cart</p>
        </>
      )}
      <Link to="/">
        <p>Go back to the Home page</p>
      </Link>
    </div>
  );
};

export default Cart;
