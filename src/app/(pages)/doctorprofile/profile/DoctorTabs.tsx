"use client";

import React, { useState } from "react";

const DoctorTabs = () => {
  const [activeTab, setActiveTab] = useState<"About" | "Education" | "Experience">("About");

  return (
    <div className="max-w-4xl mx-auto mt-4 p-6 bg-white rounded-xl shadow">
      {/* 🔹 Tabs */}
      <div className="flex justify-between border-b border-gray-300">
        {["About", "Education", "Experience"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`flex-1 text-center py-3 font-semibold transition-colors ${
              activeTab === tab
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-blue-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 🔹 Content */}
      <div className="mt-4 text-gray-700 text-sm space-y-4">
        {activeTab === "About" && (
          <p>
            Dr. Karar Mahmud is a Senior Consultant Orthopedic Surgeon at Apollo Hospitals, Chennai, with over 25 years of experience. He specializes in trauma, sports injury, and joint replacement surgeries, including robotic hip and knee replacements. Dr. Kosygin has been recognized as one of India's most inspiring orthopedic surgeons and has treated patients globally. His areas of expertise include adult complex reconstruction, bone and soft tissue infections, regenerative techniques for cartilage loss, and tumor reconstruction. He also plays an active role in teaching and training medical professionals across more than 15 countries.
          </p>
        )}
        {activeTab === "Education" && (
          <p>
            MBBS, MD Orthopedics, Fellowship in Joint Replacement Surgery, University of Chennai, India. Additional training in trauma and sports injuries from top international medical institutions.
          </p>
        )}
        {activeTab === "Experience" && (
          <p>
            Over 25 years of experience in orthopedic surgeries, specializing in complex joint replacements, trauma care, sports injuries, and regenerative techniques for cartilage and bone repair. Actively trains medical professionals worldwide.
          </p>
        )}
      </div>
    </div>
  );
};

export default DoctorTabs;
