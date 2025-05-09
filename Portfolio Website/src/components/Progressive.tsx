import React from "react";

export default function Progressive() {
  return (
    <div className="flex justify-center items-start mt-10">
      <div className="flex items-start max-w-screen-lg w-full mx-auto space-x-8">
        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 mx-[1px] bg-amber-500 p-2.5 flex items-center justify-center rounded-full">
              <span className="text-base text-black font-bold">1</span>
            </div>
            <div className="w-full h-1 mx-4 rounded-lg bg-sky-500"></div>
          </div>
          <div className="mt-2 mr-4 text-center">
            <h6 className="text-base font-bold text-amber-600">
              Get started with your favorite shopping.
            </h6>
            <p className="text-xs text-white">
              Velvet Wholesale Bridal Lehenga Choli 3 Pieces Catalog
            </p>
          </div>
        </div>

        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 mx-[1px] bg-amber-500 p-2.5 flex items-center justify-center rounded-full">
              <span className="text-base text-black font-bold">2</span>
            </div>
            <div className="w-full h-1 mx-4 rounded-lg bg-sky-500"></div>
          </div>
          <div className="mt-2 mr-4 text-center">
            <h6 className="text-base font-bold text-amber-600">
              Choose Your Products
            </h6>
            <p className="text-xs text-white">Lawn dress designing for girls</p>
          </div>
        </div>

        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 mx-[1px] bg-amber-500 p-2.5 flex items-center justify-center rounded-full">
              <span className="text-base text-black font-bold">3</span>
            </div>
            <div className="w-full h-1 mx-4 rounded-lg bg-sky-500"></div>
          </div>
          <div className="mt-2 mr-4 text-center">
            <h6 className="text-base font-bold text-amber-600">
              Customize Your Order
            </h6>
            <p className="text-xs text-white">
              Pink Colour Designer Vichitra Silk Saree With Exclusive Blouse
              Work Saree.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
