import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
// import Error from "./pages/Erorr";

const KEYS = ["name", "description"];

function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api");
      const newData = await res.json();
      setData(newData.products.data.items);
    };

    fetchData();
  }, []);

  const searchData = (data) => {
    return data.filter((item) =>
      KEYS.some((key) => item[key].toLowerCase().includes(input))
    );
  };

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const removeFromCart = (item) => {
    setCart((prev) => prev.filter((prevItem) => prevItem.id !== item.id));
  };

  const sortLowToHigh = () => {
    const sortedProducts = data.sort((a, b) => a.price - b.price);
    setData([...sortedProducts]);
  };

  const sortHighToLow = () => {
    const reverseSortedProducts = data.sort((a, b) => b.price - a.price);
    setData([...reverseSortedProducts]);
  };

  console.log(data);
  console.log(input);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          index
          element={
            <Home
              data={data}
              searchData={searchData}
              setInput={setInput}
              cart={cart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              sortLowToHigh={sortLowToHigh}
              sortHighToLow={sortHighToLow}
            />
          }
        />
        <Route path="/:id" element={<SingleProduct data={data} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
