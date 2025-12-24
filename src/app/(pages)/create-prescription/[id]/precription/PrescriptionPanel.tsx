"use client";

import React from "react";
import Image from "next/image";
import { prescriptionData } from "@/data/prescriptionData";
import { Button, Select,  } from "antd";
import { UserOutlined } from "@ant-design/icons";

const PrescriptionPanel = () => {
  return (
    <div className="max-w-5xl mx-auto bg-white p-4 space-y-5 rounded-xl shadow">

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
      <p className="text-gray-500 py-10 text-sm text-center">Suggested Prescription</p>

      {/* 🔹 SUGGESTED PRESCRIPTION */}
      <div className="flex justify-center pb-10">
  <div className="space-y-3">
    {prescriptionData.suggestedPrescription.map((item) => (
      <div
        key={item.id}
        className="flex gap-2 justify-center"
      >
        <Select
          defaultValue={item.medicine}
          className="w-24"
          size="small"
        />
        <Select
          defaultValue={item.days}
          className="w-16"
          size="small"
        />
        <Select
          defaultValue={item.dosage}
          className="w-20"
          size="small"
        />
      </div>
    ))}
  </div>
</div>


      {/* 🔹 MEDICINE CARDS */}
      <div className="flex gap-3 overflow-x-auto pt-2">
        {prescriptionData.medicineCards.map((card) => (
          <div
            key={card.id}
            className="min-w-[110px] border rounded-lg p-2 text-center"
          >
            <div className="flex justify-center items-center gap-1 text-xs bg-yellow-400 text-white rounded px-1 mb-1">
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

      {/* 🔹 GENERATE BUTTON */}
      <div className="flex justify-center">
  <Button
    type="primary"
    className="mt-3 px-10! h-7 !bg-[#33aeab] hover:!bg-[#24575f] !text-white border-none rounded-md"
  >
    Generate
  </Button>
</div>



    <div className="flex gap-30">
          {/* 🔹 O/E SECTION */}
      <div className="space-y-1 text-sm">
        <h4 className="font-semibold text-[16px] text-[#33aeab]">O/E:</h4>
        <p>Pulse - {prescriptionData.physicalExamination.pulse}</p>
        <p>Bp - {prescriptionData.physicalExamination.bp}</p>
        <p>Heart - {prescriptionData.physicalExamination.heart}</p>
        <p>Lung - {prescriptionData.physicalExamination.lung}</p>
        <p>Others - {prescriptionData.physicalExamination.others}</p>
      </div>

      {/* 🔹 RISK FACTORS */}
      <div className="space-y-1 text-sm">
        <h4 className="font-semibold text-[16px] text-[#33aeab]">Risk Factors</h4>
        {prescriptionData.riskFactors.map((risk, index) => (
          <p key={index}>• {risk}</p>
        ))}
      </div>
    </div>
    </div>
  );
};

export default PrescriptionPanel;
