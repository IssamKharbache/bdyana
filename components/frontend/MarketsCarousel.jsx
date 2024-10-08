"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function MarketsCarousel({ markets }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="transform 1000ms ease-in-out"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      // deviceType={}
      dotListClass="custom-dot-list-style"
      itemClass="px-2"
    >
      {markets.map((market, i) => {
        return (
          <Link
            key={i}
            href={`/market/${market.slug}`}
            className="rounded-lg mr-3  bg-red-400"
          >
            <Image
              src={market.logoUrl}
              alt={market.title}
              width={556}
              height={556}
              className="w-full rounded-2xl"
            />
            <h2 className="text-center dark:text-slate-200 text-slate-800 mt-2">
              {market.title}
            </h2>
          </Link>
        );
      })}
    </Carousel>
  );
}
