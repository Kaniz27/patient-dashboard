"use client";

import React from "react";
import Image from "next/image";
import { Button } from "antd";

const PrescriptionPage = () => {
  return (
    <div
      className="relative bg-white mx-auto pl-12 my-10 overflow-hidden"
      style={{ width: "831px", height: "1125px" }}
    >
      {/* 🔹 WATERMARK */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span
          className="text-[60px] font-bold uppercase tracking-widest select-none whitespace-nowrap"
          style={{
            transform: "rotate(-35deg)",
            background:
              "linear-gradient(to top, rgba(0,0,0,0.03), rgba(0,0,0,0.12))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Sample Prescription
        </span>
      </div>

      {/* 🔹 MAIN CONTENT */}
      <div className="relative z-10">
        {/* Doctor Info */}
        <div className="flex justify-between items-center pb-4 mb-6">
          <Image
            src="/sidebar.png"
            alt="Doctor"
            width={120}
            height={120}
            className="rounded-full object-cover"
          />

          <div
            className="flex flex-col w-[450px] h-[200px] p-4 gap-2 text-right rounded relative overflow-hidden"
            style={{
              backgroundImage: "url('/Group 8845.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="relative z-10">
              <h2 className="text-lg font-semibold text-white">
                DR. ALEXIS WOLVES
              </h2>
              <p className="text-white">Cardiologist</p>
              <p className="text-white">MBBS, Diploma, FCPS (UK)</p>
              <p className="text-white">BMDC Reg. No: 20536</p>
            </div>
          </div>
        </div>

        {/* Patient Info */}
        <div className="grid grid-cols-2 gap-4 border-b-2 border-dashed border-[#2b6771] mb-6 pb-4">
          <div className="space-y-1">
            <p>
              <span className="font-semibold">Patient Name:</span> Karar Mahmud
            </p>
            <p>
              <span className="font-semibold">Phone Number:</span> 0123569752
            </p>
            <p>
              <span className="font-semibold">Patient Age:</span> 26
            </p>
          </div>
          <div className="space-y-1">
            <p>
              <span className="font-semibold">Sex:</span> Male
            </p>
            <p>
              <span className="font-semibold">Select Patient Disease:</span> I
              have a fever and body aches.
            </p>
          </div>
        </div>

        {/* Risk Factors + Medicine */}
        <div className="flex gap-6 mb-6 h-[400px] overflow-hidden">
          {/* O/E + Advice */}
          <div className="w-[30%] flex flex-col justify-between">
            <div>
              <h3 className="inline-block px-3 py-1 mb-3 font-semibold text-[#2b6771] bg-[#e6f2f3] rounded">
                On Examination (O/E)
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>O/E -</p>
                <p>Pulse -</p>
                <p>Bp -</p>
                <p>Heart -</p>
                <p>Lung -</p>
                <p>Others -</p>
              </div>
            </div>

            <div>
              <h3 className="inline-block px-3 py-1 mb-3 font-semibold text-[#2b6771] bg-[#e6f2f3] rounded">
                Advice
              </h3>
              <div className="space-y-2 text-gray-700 text-[14px]">
                <p>ECG, CXR (P/A), RBS</p>
                <p>Echo 2D/Doppler, S. TSH, S. Creatine</p>
                <p>CBC, FBS, 2HABF, HbA1C</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-px bg-gray-300 opacity-60"></div>

          {/* Medicine */}
          <div className="w-[70%] overflow-y-auto">
            <h3 className="inline-block px-3 py-1 mb-3 font-semibold text-[#2b6771] bg-[#e6f2f3] rounded">
              Rx – Medicines
            </h3>

            <table className="w-full text-left text-gray-700">
              <thead>
                <tr className="border-b border-[#2b6771]">
                  <th className="pb-2">Name</th>
                  <th className="pb-2">Days</th>
                  <th className="pb-2">Dose</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-dashed border-[#2b6771]">
                  <td className="py-2">Napa</td>
                  <td>3 days</td>
                  <td>1+1+1+1</td>
                </tr>
                <tr className="border-b border-dashed border-[#2b6771]">
                  <td className="py-2">Azyth 500</td>
                  <td>7 days</td>
                  <td>1+0+1</td>
                </tr>
                <tr className="border-b border-dashed border-[#2b6771]">
                  <td className="py-2">Paracetamol</td>
                  <td>5 days</td>
                  <td>1+0+1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Verify Button */}
        <div className="flex justify-center items-center py-10 ">
          <Button className="bg-[#42b3ce]! text-white! border-none">
            Verify 
          </Button>
        </div>

        {/* General Advice + QR + Doctor Signature */}
        <div className="border-t-2 border-dashed border-gray-400 pt-6 flex justify-between items-start">
          <div className="max-w-[70%]">
            <h3 className="font-semibold text-[#2b6771] mb-3 text-lg">
              General Advice
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-[15px]">
              <li>Always keep learning – Medicine never stops evolving.</li>
              <li>Really listen to patients.</li>
              <li>Protect your own health.</li>
              <li>Document clearly and timely.</li>
              <li>Treat the whole team with respect.</li>
            </ul>
          </div>

          <div className="flex flex-col items-center p-6">
            {/* Signature Space */}
            <div className="w-48  border-b-2 border-gray-700 mb-2"></div>
            {/* Doctor Name */}
            <p className="text-gray-700 font-semibold">Dr. Alexis Wolves</p>
            <p className="text-gray-700 text-sm! font-normal">MBBS, DDV (DU), MSc (SUB), DCPD (UK)</p>

            {/* QR Code */}
            <Image
              src="/scan_me_qr_code 1.png"
              alt="Prescription QR"
              width={120}
              height={110}
              className="mt-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrescriptionPage;
