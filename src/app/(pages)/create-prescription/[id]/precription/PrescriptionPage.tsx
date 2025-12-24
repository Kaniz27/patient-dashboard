"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { medicalHistoryData, MedicalHistoryItem } from "@/data/patienthistory";
import Image from "next/image";
import { Button } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
  HomeOutlined,
  BankOutlined,
} from "@ant-design/icons";

const PrescriptionPage = () => {
  const params = useParams();
  const patientId = params.id;
  const [patient, setPatient] = useState<MedicalHistoryItem | null>(null);

  useEffect(() => {
    if (patientId) {
      const found = medicalHistoryData.find(
        (item) => item.id.toString() === patientId
      );
      if (found) setPatient(found);
    }
  }, [patientId]);

  if (!patient) return <p className="text-center mt-10">Patient not found</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow space-y-6">
      {/* 🔹 About Patient Header */}
      <h2 className="text-2xl font-semibold">About Patient</h2>

      {/* 🔹 Image + Name + Designation */}
      <div className="flex items-center gap-6">
        <Image
          src="/images/profile/doctor.jpg" // replace with patient avatar if available
          alt={patient.name}
          width={120}
          height={120}
          className="rounded-full object-cover"
        />
        <div className="flex-1 space-y-1">
          <h3 className="text-xl font-semibold">{patient.name}</h3>
          <p className="text-gray-600">{patient.problems}</p>
        </div>
      </div>

      {/* 🔹 Patient Details */}
      <div className="space-y-4">
        {/* Email */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 text-gray-700">
            <MailOutlined className="text-blue-500" />
            <span>Email</span>
          </div>
          <span className="ml-6 text-gray-600">
            {patient.email || "dr.kararmahmud@gmail.com"}
          </span>
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 text-gray-700">
            <PhoneOutlined className="text-green-500" />
            <span>Phone</span>
          </div>
          <span className="ml-6 text-gray-600">
            {patient.phone || "01601524797"}
          </span>
        </div>

        {/* Gender */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 text-gray-700">
            <UserOutlined className="text-purple-500" />
            <span>Gender</span>
          </div>
          <span className="ml-6 text-gray-600">{patient.gender || "Male"}</span>
        </div>

        {/* Age */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 text-gray-700">
            <UserOutlined className="text-purple-500" />
            <span>Age</span>
          </div>
          <span className="ml-6 text-gray-600">{patient.age || "26 years"}</span>
        </div>

        {/* Address */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 text-gray-700">
            <HomeOutlined className="text-orange-500" />
            <span>Address</span>
          </div>
          <span className="ml-6 text-gray-600">
            {patient.address || "47 W 13th St, New York, NY 10011, USA"}
          </span>
        </div>

        {/* Hospital */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 text-gray-700">
            <BankOutlined className="text-red-500" />
            <span>Hospital</span>
          </div>
          <span className="ml-6 text-gray-600">
            {patient.hospital || "Apollo Hospitals"}
          </span>
        </div>
      </div>

      {/* 🔹 Buttons */}
      <div className="flex gap-2 mt-1">
  <Button 
  type="primary" 
  className="h-7 px-2 text-xl text-white bg-[#33aeab]! border-none"
>
  Download
</Button>

  <Button className="h-7 px-2 text-xs">
    View
  </Button>
</div>

    </div>
  );
};

export default PrescriptionPage;
