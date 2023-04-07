import React from "react";

const Product = ({ product }) => {
  console.log(product);
  return (
    <div>
      <img className="rounded-md" src={product.strMealThumb} alt="" />
      <h2 className="text-xl font-medium">Name: {product.strMeal}</h2>
    </div>
  );
};

export default Product;
