import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Products = () => {
  const loadProducts = useLoaderData();
  const products = loadProducts.meals;
  console.log(products.meals);
  return (
    <div className="mx-12">
      <h2 className="text-3xl font-semibold text-center">
        There are all products: {products.length}
      </h2>
      <div className="grid md:grid-cols-3 gap-4">
        {products.map((product) => (
          <Product key={product.idMeal} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
