"use client";
import { addToCart } from "@/redux/slices/cartSlice";
import { ShoppingCart  } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

export default function Product({ product }) {
  const dispatch = useDispatch();
  function handleAddToCart() {
    // Dispatch the reducer
    dispatch(addToCart(product));
    toast.success("Item added Successfully");
  }
  return (
    <div className="mx-1 mb-5 bg-white dark:bg-slate-900 overflow-hidden border hover:shadow">
      <Link href={`/products/${product.slug}`}>
        <Image
          src={product.imageUrl}
          alt={product.title}
          width={700}
          height={700}
          className="w-full"
        />
      </Link>
      <div className="px-2">
        <Link href={`/products/${product.slug}`}>
          <h4 className="text-sm text-center dark:text-slate-200 text-slate-800 my-2">
            {product.title}
          </h4>
        </Link>
        <div className="flex items-center justify-between gap-2 pb-3 dark:text-slate-200 text-slate-800">
          <p>৳ {product.salePrice}</p>
          <button
            onClick={() => handleAddToCart()}
            className="flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-md text-black border border-gray-300"
          >
            <ShoppingCart size={18} />
            {/* <span>Add</span> */}
          </button>
        </div>
      </div>
    </div>
  );
}
