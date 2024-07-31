"use client";
import { DoorOpen, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

export default function SearchForm() {
  const { register, handleSubmit, reset } = useForm();
  const router = useRouter();
  function handleSearch(data) {
    const { searchTerm } = data;
    console.log(searchTerm);
    reset();
    router.push(`/search?search=${searchTerm}`);
  }
  return (
    <form onSubmit={handleSubmit(handleSearch)} className="flex items-center">
      <label htmlFor="voice-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <DoorOpen className="w-4 h-4 text-gray-500 dark:text-gray-400" />
        </div>
        <input
          {...register("searchTerm")}
          type="text"
          id="voice-search"
          className="class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-gray-500 focus:border-gray-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500""
          placeholder="Search Products, Categories, Markets..."
          required
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center py-2.5 px-3 text-sm font-medium text-white bg-gray-700 border border-lime-700 hover:bg-gray-800 focus:outline-none dark:bg-lime-600 dark:hover:bg-lime-700"
      >
        <Search className="w-4 h-4 me-2" />
        Search
      </button>
    </form>
  );
}
