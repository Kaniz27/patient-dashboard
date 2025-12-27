"use client";

import React from "react";
import Image from "next/image";

const StatsCards = () => {
  const cards = [
    { image: "/images/income/Simplification (3).png", title: "Total Revenue", value: "$25.00" },
    { image: "/images/income/Simplification.png", title: "Total Expenses", value: "$15.00" },
    { image: "/images/income/Simplification (2).png", title: "Net Income", value: "$25.00" },
    { image: "/images/income/Simplification (1).png", title: "Revenue Growth", value: "12.5%" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex items-center bg-white p-4 rounded-lg shadow-md"
        >
          <Image
            src={card.image}
            alt={card.title}
            width={48}
            height={48}
            className="mr-4 bg-[#41b3cc] rounded-md p-1"
          />
          <div className="flex flex-col">
            <p className="text-gray-500 text-sm">{card.title}</p>
            <p className="text-lg font-semibold">{card.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
