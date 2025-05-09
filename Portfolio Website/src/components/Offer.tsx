'use client'
import React from "react";

type Offer = {
  title: string;
  description: string;
};

const SpecialOffers: React.FC = () => {
  const offers: Offer[] = [
    {
      title: "Clothing",
      description: `1. Buy 1 Get 1 50% Off (T-shirts, jeans, dresses) 
      
      2. 20% Off (Formal wear, suits, blazers) 
      3. Discounted Prices (Plus size clothing)`,
    },

    {
      title: "Footwear",
      description: `1. Buy 1 Get 1 Free (Sneakers, boots, heels)
      2. 40% Off (Sandals, loafers, flats)
      3. Free Accessories (Belts, socks, hats)`,
    },

    {
      title: "Accessories",
      description: `1. 50% Off (Jewelry, watches, sunglasses)
      2. Buy 1 Get 1 Free (Scarves, hats, bags)
      3. 20% Off (Perfumes, wallets, phone cases)`,
    },

    {
      title: "Brands",
      description: `1. Levi's - 20% Off Jeans
      2. Nike - Buy 1 Get 1 50% Off Shoes
      3. Zara - Flat 30% Off Dresses
      4. Adidas - Discounted Prices Sportswear`,
    },

    {
      title: "Seasonal Offers",
      description: `1. Summer Sale - 50% Off Shorts, Tank Tops
      2. Winter Sale - 30% Off Coats, Gloves
      3. Festive Offer - 20% Off Traditional Wear`,
    },
    {
      title: "Online Exclusive",
      description: `1. Free Shipping Above ₹500
      2. Cashback Upto 20%
      3. Exclusive Discounts for App Users`,
    },
  ];

  const handleOfferClick = (description: string) => {
    alert(description);
  };

  return (
    <section className="py-10">
      <div className="container mx-auto text-center ">
        <h2 className="text-4xl font-bold mb-6 text-white">Special offer&apos;s</h2>
        <div className="grid grid-cols-1 mb:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <button
              key={index}
              onClick={() => handleOfferClick(offer.description)}
              className="bg-white shadow-lg rounded-lg text-center hover:-bg-gray-300 transition duration-300 transform hover:scale-105"
            >
              <h3 className="text-2xl font-semibold text-red-600">{offer.title}</h3>
              <p className="text-gray-600 mt-3">{offer.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
