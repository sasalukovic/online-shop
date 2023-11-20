/* eslint-disable react/prop-types */
import { Link, useParams } from "react-router-dom";

const SingleProduct = ({ data }) => {
  const { id } = useParams();
  const product = data.find((product) => product.id === id);
  const { name, description, images } = product;

  return (
    <div>
      <img src={images?.[0]} alt="image" />
      <p>{name}</p>
      <p>{description}</p>
      <Link to="/">
        <p>Back to the Home page</p>
      </Link>
    </div>
  );
};

export default SingleProduct;
