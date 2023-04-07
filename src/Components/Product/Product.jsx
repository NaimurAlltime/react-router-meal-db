import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  console.log(product);
  return (
    <div>
      <img className="rounded-md" src={product.strMealThumb} alt="" />
      <h2 className="text-xl font-medium">Name: {product.strMeal}</h2>
      <Link to={`/product/${product.idMeal}`}>
        <button className="bg-purple-300 px-2 rounded-md">
          Product Detail
        </button>
      </Link>
    </div>
  );
};

export default Product;
