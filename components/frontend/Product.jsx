"use client";
import { calculateDiscountPercentage } from "@/lib/calculateDiscount";
import { addToCart } from "@/redux/slices/cartSlice";
import { ShoppingCart } from "lucide-react";
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
    <div className="mb-2 mx-1 bg-white dark:bg-slate-900 overflow-hidden border hover:shadow">
      <Link href={`/products/${product.slug}`}>
        <Image
          src={product.imageUrl}
          alt={product.title}
          width={500}
          height={500}
          className="w-full"
        />
      </Link>
      <div className="px-2">
        <Link href={`/products/${product.slug}`}>
          <h4 className="text-sm text-center dark:text-slate-200 text-slate-800 my-2 line-clamp-2">
            {product.title}
          </h4>
          {/* <p>{category.title}</p> */}
        </Link>
        <div className="flex items-center justify-between gap-2 pb-1 dark:text-slate-200 text-slate-800">
          <div>
            <p className="leading-none">৳ {product?.salePrice}</p>
            <del className="text-slate-500 text-sm mr-2">
              ৳ {product?.productPrice}
            </del>
            {/* show discount percentage where applicable */}
            {product?.salePrice < product?.productPrice && (
              <h5 className="bg-[#fef3e9] text-[#f68b1e] p-1 inline ">
                -
                {calculateDiscountPercentage(
                  product?.productPrice,
                  product?.salePrice
                ).toFixed(0)}
                %
              </h5>
            )}
          </div>
          <button
            onClick={() => handleAddToCart()}
            className="flex items-center hover:bg-gray-100 px-3 py-3 rounded-full text-black"
          >
            <ShoppingCart size={17} />
            {/* <span>Add</span> */}
          </button>
        </div>
      </div>
    </div>
  );
}
