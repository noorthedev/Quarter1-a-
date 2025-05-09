import Image from "next/image";
import React from "react";

export default function Slider() {
  return (
    <div>
      <section className="bg-gradient-to-r from-black to-gray-700">
        <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-tr from-black to-gray-700 h-auto md:h-full flex flex-col">
              <a href="#" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                <Image
                  src="https://aishanaheed.com/wp-content/uploads/omj8224.jpg"
                  alt="Product 1"
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0 group-hover:scale-105 transition-transform duration-500 ease-in"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/15"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4">
                  Classic Shirts
                </h3>
              </a>
            </div>
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-gray-700">
              <a href="#" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                <Image
                  src="https://media.istockphoto.com/id/458689475/photo/rolex-shop-window.jpg?s=612x612&w=0&k=20&c=NvaJNm-W0YUEI8ft7EW7M93_9_ciGQxH-RgBTM4z13k="
                  alt="Product 2"
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0 group-hover:scale-105 transition-transform duration-500 ease-in"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/15"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4">
                  Luxury Watch
                </h3>
              </a>
              {/* Additional products */}
              {/* Repeat similar structure */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
