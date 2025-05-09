import { FaShoppingCart } from "react-icons/fa";

import React from "react";
import Image from "next/image";

const productCardId = () => {
  const productImages = [
    "https://aishanaheed.com/wp-content/uploads/Couture-Main-Image.jpeg.webp",

    "https://aishanaheed.com/wp-content/uploads/Bridal-Collection.jpeg.webp",

    "https://aishanaheed.com/wp-content/uploads/OMJ0006-400x516.jpg",

    "https://aishanaheed.com/wp-content/uploads/IMG_1863-677x675.jpg.webp",

    "https://aishanaheed.com/wp-content/uploads/omj7928-400x516.jpg",

    "https://aishanaheed.com/wp-content/uploads/omj8095.jpg",
  ];

  return (
    <div className="relative text-center p-10">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://aishanaheed.com/wp-content/uploads/IMG_0422.jpg ')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
          opacity: 0.1,
        }}
      />
      <h1 className="font-bold text-4xl mb-4 text-white z-10 relative">
        Most Requested Products
      </h1>

      <h1 className="text-3xl text-white z-10 relative">Order now</h1>

      <section
        id="projects"
        className="w-full mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5 "
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="w-70 bg-white shadow-xl rounded-xl duration-500 hover:scale-105 hover:shadow-xl z-10 relative"
          >
            <a href="#">
              <Image
                src={productImages[index]}
                alt={`product ${index + 1}`}
                className="h-80 w-75 object-cover rounded-t-xl "
              />

              <div className="p-4 py-3 w-72">
                <span className="text-slate-600 mr-3 uppercase text-xs ">
                  Category
                </span>
                <p className="text-lg font-bold text-red-900 truncate block capitalize">
                  Dress Name {index + 1}
                </p>

                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black my-3 cursor-auto">
                    $50.00
                  </p>

                  <del>
                    <br />
                    <p className="text-sm text-blue-950 cursor-auto ml-2">
                      $60.00
                    </p>
                  </del>

                  <div className="ml-auto">
                    <FaShoppingCart className="w-5 h-5 text-orange-500 " />
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default productCardId;
