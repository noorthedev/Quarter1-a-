import React from "react";
import Image from "next/image";

const products = [
  {
    id: 1,
    title: "Color: Sliver Luxury Bridal Dress",
    category: "Catalog",
    price: "700.00",
    imageUrl: "https://glamorousthreads.pk/wp-content/uploads/2024/04/ex-138b_540x.webp",
    bgColor: "bg-gray-800",
  },
  {
    id: 2,
    title: "Lawn dress designing for girls",
    category: "Gary color",
    price: "500.00",
    imageUrl: "https://aishanaheed.com/wp-content/uploads/Ready-To-Wear.jpeg.webp",
    bgColor: "bg-blue-800",
  },
  {
    id: 3,
    title: "Silk Saree With Exclusive Blouse",
    category: "Peach color",
    price: "900.00",
    imageUrl: "https://aishanaheed.com/wp-content/uploads/IMG_0422.jpg",
    bgColor: "bg-red-800",
  },
];

export default function Product() {
  return (
    <div className="p-1 flex flex-wrap items-center justify-center mb-4">
      {products.map((product) => (
        <div
          key={product.id}
          className={`flex shrink-0 m-6 relative overflow-hidden ${product.bgColor} p-4 rounded-lg shadow-lg group max-w-sm`}
        >
          <svg
            className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
            viewBox="0 0 375 283"
            fill="none"
            width="152"
            height="152"
            style={{ opacity: 0.1 }}
          >
            <rect
              x="159.52"
              y="152"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="white"
            />
          </svg>

          <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Image
              src={product.imageUrl}
              alt={product.title}
              width={200}
              height={200}
              className="relative w-55"
            />
          </div>

          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">{product.category}</span>

            <div className="flex justify-between items-center mt-2">
              <span className="block font-semibold text-xl">
                {product.title}
              </span>
              <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-1">
                ${product.price}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
