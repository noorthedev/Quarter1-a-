import Image from "next/image";
import React from "react";

const products = [
  {
    id: 1,
    title: "Velvet Wholesale Bridal Lehenga Choli",
    category: "Catalog",
    price: "700.00",
    imageUrl:
      "https://images.wholesalesalwar.com/2024y/August/52219/Pink-Velvet-Bridal%20Wear-Embroidery%20Work-Lehenga%20Choli-2747-A.jpg",
    bgColor: "", // You can add background color class here if needed
  },
  {
    id: 2,
    title: "Lawn dress designing for girls",
    category: "Red color",
    price: "500.00",
    imageUrl: "https://aishanaheed.com/wp-content/uploads/omj8475.jpg",
    bgColor: "", // You can add background color class here if needed
  },
  {
    id: 3,
    title: "Silk Saree With Exclusive Blouse",
    category: "Pink Color",
    price: "900.00",
    imageUrl:
      "https://i.pinimg.com/originals/36/ea/56/36ea5632931ef1bff03f832ec95a88ec.jpg",
    bgColor: "", // You can add background color class here if needed
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
          {/* SVG Background Pattern */}
          <svg
            className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
            viewBox="0 0 375 283"
            fill="none"
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

          {/* Image Section */}
          <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 mb-24 ml-3"
              style={{
                background: "radial-gradient(black, transparent 50%)",
                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 1, 1)",
                opacity: 0.2,
              }}
            ></div>

            <Image
              className="relative w-full h-auto object-cover"
              src={product.imageUrl}
              alt={product.title}
            />
          </div>

          {/* Product Details */}
          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">{product.category}</span>

            <div className="flex justify-between items-center">
              <span className="block font-semibold text-xl">{product.title}</span>
              <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none">
                ${product.price}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
