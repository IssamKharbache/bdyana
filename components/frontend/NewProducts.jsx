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
    <div>
      <h2>Latest Products</h2>
      <div className="flex grid grid-cols-6">
      {productsList.map((product) => (
        <div key={product.id}>
          <Product product={product}/>
        </div>
      ))}
        </div>
        </div>
  );
}
