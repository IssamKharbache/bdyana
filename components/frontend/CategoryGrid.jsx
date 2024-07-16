import { getData } from "@/lib/getData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function CategoryGrid() {
  const categoriesData = await getData("categories");
  const categories = categoriesData.filter(
    (category) => category.products.length > 0
  );

  const selectRandomCategories = (categories, count) => {
    let shuffled = categories.sort(() => 0.5 - Math.random());

    return shuffled.slice(0, count);
  };

  const newCategories = selectRandomCategories(categories, 16);
  // console.log(categories);
  return (
    <div className="sm:col-span-3 sm:block bg-white border border-gray-300 rounded-sm dark:bg-gray-700 dark:border-gray-700 text-slate-800 overflow-hidden hidden">
      <h2 className="bg-slate-100 dark:bg-gray-800 py-3 px-4 font-semibold border-b border-gray-300 dark:border-gray-600 text-slate-800 dark:text-slate-100">
        Shop By Category
      </h2>
      <div className="grid grid-cols-8 text-center items-center px-5 py-8 gap-x-3 gap-y-8">
        {newCategories.length > 0 &&
          newCategories.map((category, i) => {
            return (
              <Link
                key={i}
                href={`/category/${category.slug}`}
                className="gap-3 hover:bg-slate-50 duration-300 transition-all dark:text-slate-300 dark:hover:bg-slate-600 rounded-md"
              >
                <Image
                  width={500}
                  height={500}
                  className="w-20 h-20 rounded-full object-cover border border-gray-300 m-auto"
                  src={category.imageUrl}
                  alt={category.title}
                />
                <span className="text-sm block mt-4">{category.title}</span>
              </Link>
            );
          })}
      </div>
    </div>
  );
}
