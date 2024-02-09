import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

function Category({ user }) {
  const { categoryName } = useParams();

  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
      .then((res) => res.json())
      .then((res) => setCategoryProducts(res))
      .catch((err) => console.log(err));
  }, [categoryName]);

  return (
    <>
      <h1>Kategori: {categoryName}</h1>
      <div className="row row-cols-sm-3 row-cols-md-4">
        {categoryProducts.map((item) => (
          <ProductCard user={user} key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default Category;
