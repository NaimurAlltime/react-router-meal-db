import React from "react";
import { useLoaderData } from "react-router-dom";

const ProductDetail = () => {
  const products = useLoaderData();
  console.log(products);
  //   console.log(product.meals.strMeal);
  return (
    <div>
      {/* <img className="rounded-md" src={product.strMealThumb} alt="" /> */}
      {/* <h2 className="text-xl font-medium">Name: {product.strMeal}</h2> */}
    </div>
  );
};

export default ProductDetail;
