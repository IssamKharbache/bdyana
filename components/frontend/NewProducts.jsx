"use client";
import { getLatestProducts } from "@/actions/products/products.actions";
import { useCallback, useEffect, useState } from "react";
import Product from "./Product";

export default function NewProduct() {
  const [productsList, setProductsList] = useState([]);

  const getLatest = useCallback(async () => {
    const latestProducts = await getLatestProducts(12);
    setProductsList(latestProducts);
  });
  useEffect(() => {
    getLatest();
  }, []);

  return (
    <div className="py-14">
      <h2>New Arrivals</h2>
      <p>100+ products added today</p>
      <div className="flex grid grid-cols-2 sm:grid-cols-6 mt-4">
      {productsList.map((product) => (
        <div key={product.id}>
          <Product product={product}/>
        </div>
      ))}
        </div>
        </div>
  );
}
