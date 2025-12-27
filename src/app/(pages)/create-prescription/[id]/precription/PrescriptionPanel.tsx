"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Button, Select } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { prescriptionData } from "@/data/prescriptionData";

const PrescriptionPanel = () => {
  // Shared state for Suggested Prescription dropdowns
  const [selectedMedicine, setSelectedMedicine] = useState(
    prescriptionData.suggestedPrescription[0]?.medicine || ""
  );
  const [selectedDays, setSelectedDays] = useState(
    prescriptionData.suggestedPrescription[0]?.days || ""
  );
  const [selectedDosage, setSelectedDosage] = useState(
    prescriptionData.suggestedPrescription[0]?.dosage || ""
  );

  /* ---------------- Carousel Logic ---------------- */
  const cardRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    cardRef.current?.scrollBy({ left: -150, behavior: "smooth" });
  };

  const scrollRight = () => {
    cardRef.current?.scrollBy({ left: 150, behavior: "smooth" });
  };

  return (
    <div className="max-w-5xl mx-auto bg-white p-4 space-y-5 rounded-xl shadow-lg">
      {/* 🔹 CHAT SECTION */}
      <div className="space-y-3">
        {prescriptionData.chat.map((item) => (
          <div
            key={item.id}
            className={`flex items-end gap-2 ${
              item.sender === "doctor" ? "justify-end" : "justify-start"
            }`}
          >
            {item.sender === "patient" && (
              <Image
                src="/images/profile/doctor.jpg"
                alt="avatar"
                width={28}
                height={28}
                className="rounded-full"
              />
            )}

            <div
              className={`px-4 py-2 rounded-2xl text-sm max-w-[70%] ${
                item.sender === "doctor"
                  ? "bg-[#33aeab] text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              <p>{item.message}</p>
              <span className="block text-[10px] mt-1 opacity-70">
                {item.time}
              </span>
            </div>

            {item.sender === "doctor" && (
              <Image
                src="/images/profile/doctor.jpg"
                alt="avatar"
                width={28}
                height={28}
                className="rounded-full"
              />
            )}
          </div>
        ))}
      </div>

      {/* 🔹 RX TITLE */}
      <h3 className="text-3xl font-semibold">℞</h3>
      <p className="text-gray-500 text-sm text-center">Sample Prescription</p>

      {/* 🔹 SUGGESTED PRESCRIPTION */}
      <div className="flex justify-center items-center pb-6 gap-4 overflow-x-auto">
        {prescriptionData.suggestedPrescription.map((item) => (
          <div key={item.id} className="flex gap-2 items-center">
            <Select
              value={selectedMedicine}
              onChange={setSelectedMedicine}
              className="w-24"
              size="small"
              options={[
                { value: "Napa", label: "Napa" },
                { value: "Paracetamol", label: "Paracetamol" },
              ]}
            />
            <Select
              value={selectedDays}
              onChange={setSelectedDays}
              className="w-16"
              size="small"
              options={[
                { value: "1", label: "1" },
                { value: "2", label: "2" },
                { value: "3", label: "3" },
              ]}
            />
            <Select
              value={selectedDosage}
              onChange={setSelectedDosage}
              className="w-20"
              size="small"
              options={[
                { value: "1x", label: "1x" },
                { value: "2x", label: "2x" },
                { value: "3x", label: "3x" },
              ]}
            />
          </div>
        ))}
      </div>

      {/* 🔹 O/E & ADVICE */}
      <div className="flex justify-around py-6">
        <div className="space-y-1 text-sm">
          <h4 className="font-semibold text-[16px] text-[#33aeab]">O/E:</h4>
          <p>Pulse - {prescriptionData.physicalExamination.pulse}</p>
          <p>Bp - {prescriptionData.physicalExamination.bp}</p>
          <p>Heart - {prescriptionData.physicalExamination.heart}</p>
          <p>Lung - {prescriptionData.physicalExamination.lung}</p>
          <p>Others - {prescriptionData.physicalExamination.others}</p>
        </div>

        <div className="space-y-1 text-sm">
          <h4 className="font-semibold text-[16px] text-[#33aeab]">Advice</h4>
          {prescriptionData.riskFactors.map((risk, index) => (
            <p key={index}>• {risk}</p>
          ))}
        </div>
      </div>

      {/* 🔹 GENERATE BUTTON */}
      <div className="flex justify-center py-16">
        <Button
          type="primary"
          className="mt-3 !px-10 h-7 !bg-[#33aeab] hover:!bg-[#24575f] !text-white border-none rounded-md"
        >
          Generate
        </Button>
      </div>

      {/* 🔹 MEDICINE CARDS CAROUSEL */}
      <div className="relative pb-10">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full w-7 h-7 flex items-center justify-center"
        >
          <LeftOutlined />
        </button>

        {/* Cards */}
        <div
          ref={cardRef}
          className="flex gap-3 overflow-hidden scroll-smooth px-8"
        >
          {prescriptionData.medicineCards.map((card) => (
            <div
              key={card.id}
              className="min-w-[110px] shadow-xl rounded-lg p-2 text-center relative flex-shrink-0"
            >
              <div className="absolute top-2 right-2 text-[10px] bg-yellow-400 text-white rounded px-1">
                ⭐ {card.rating}
              </div>

              <Image
                src="/image 2.png"
                alt="medicine"
                width={60}
                height={60}
                className="mx-auto"
              />
              <p className="text-xs font-medium mt-2">{card.title}</p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full w-7 h-7 flex items-center justify-center"
        >
          <RightOutlined />
        </button>
      </div>
    </div>
  );
};

export default PrescriptionPanel;
