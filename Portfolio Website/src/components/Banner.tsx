import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-black to-gray-700 font-sans px-6 py-12 md:7 ">
      {/* IMAGE CONTAINER */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPxobGctO_ILUg6XJFPbUzzEYGa-4Aj0f8ew&s"
          alt="Online shopping for Online order"
          layout="fill" // Makes the image fill its container
          objectFit="cover" // Ensures the image covers the container proportionally
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 container mx-auto flex flex-col justify-center items-center text-center">
        <h2 className="text-white sm:text-3xl font-black mb-4">
          Discover Our Product
        </h2>
        <p className="text-white text-lg text-center mb-6 max-w-xl">
          Shop Now for Exclusive Discount On All Products
        </p>
        <button
          type="button"
          className="bg-cyan-500 text-white text-sm font-semibold py-3 px-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
        >
          Exciting Deals Launch at 12pm
        </button>
      </div>
    </div>
  );
}
