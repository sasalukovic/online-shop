/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Home = ({
  data,
  searchData,
  setInput,
  addToCart,
  cart,
  removeFromCart,
  sortLowToHigh,
  sortHighToLow,
}) => {
  return (
    <>
      <Link to="/cart">
        <p>Go to the Cart</p>
      </Link>

      <div className="input">
        <label htmlFor="input">Search by name and description</label>
        <input
          type="text"
          id="input"
          onChange={(e) => setInput(e.target.value)}
        />
        <div>
          Sort by price:
          <button onClick={sortLowToHigh}>low to high</button>
          <button onClick={sortHighToLow}>high to low</button>
        </div>
      </div>
      <div className="app">
        {data.length > 0 &&
          searchData(data).map((item) => (
            <div className="item" key={item.id}>
              <img src={item.images?.[0]} alt="" className="image" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}$</p>
              <Link to={`/${item.id}`}>
                <p>More details</p>
              </Link>
              {cart.some((c) => c.id === item.id) ? (
                <button onClick={() => removeFromCart(item)}>
                  Remove from cart
                </button>
              ) : (
                <button onClick={() => addToCart(item)}>
                  Add item to Cart
                </button>
              )}
            </div>
          ))}
      </div>
    </>
  );
};

export default Home;
