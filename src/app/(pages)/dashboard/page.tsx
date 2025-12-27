"use client";
import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import MedicalHistoryTable from "./dashboard/page";

const GoodMorningCard = () => {
  return (
    <div>
      <div
        className="w-full h-60 rounded-xl bg-cover  bg-white bg-center p-6 flex items-center justify-between"
        style={{ backgroundImage: "url('/Banner.png')" }} // public folder e background
      >
        {/* Left Text Section */}
        <div className="flex flex-col  gap-1">
          <span className="text-[#2b6771] text-[30px] font-semibold">
            Good Morning
          </span>
          <span className="text-black text-[32px] font-semibold">
            Dr. Reyan  Anis
          </span>
          <span className="text-black text-[16px]">
            Have a nice day at work
          </span>
        </div>

        {/* Right Call Box */}
       <div className="relative">
  {/* 🔹 Glow / Pulse Ring */}
  <div className="absolute inset-0 rounded-full bg-[#33abae]/40 blur-md animate-pulse-ring"></div>

  {/* 🔹 Main Button */}
  <div className="relative flex items-center gap-3 bg-white px-4 py-3 rounded-full shadow-md">
    {/* Icon */}
    <div className="relative">
      <FiPhoneCall className="text-white bg-[#33abae] w-10 h-10 flex items-center justify-center rounded-full text-2xl p-2 animate-bounce-soft" />
    </div>

    {/* Texts */}
    <div className="flex flex-col leading-tight w-40 h-10 justify-center">
      <span className="text-black font-semibold text-sm">
        Need Help?
      </span>
      <span className="text-[#33abae] text-xs">
        Ask our AI Assistant
      </span>
    </div>
  </div>
</div>

      </div>
      <MedicalHistoryTable></MedicalHistoryTable>
    </div>
  );
};

export default GoodMorningCard;
