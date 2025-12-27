"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaEdit } from "react-icons/fa"; 

const DoctorProfile = () => {
  const router = useRouter();

  const handleEditClick = () => {
    // ID chara edit page navigate
    router.push(`/doctor/edit`);
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow w-full max-w-4xl mx-auto">
      <div className="flex items-start gap-6">
        {/* 🔹 Doctor Image */}
        <div className="flex-shrink-0">
          <Image
            src="/photo_4-removebg-preview 1.png"
            alt="Dr. Karar Mahmud"
            width={275}
            height={275}
            className="rounded-md object-cover"
          />
        </div>

        {/* 🔹 Doctor Info */}
        <div className="flex-1 flex flex-col justify-between">
          <div className="space-y-2 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">Karar Mahmud</h2>
              <p className="text-gray-600">Consultant Retina & UVEA</p>
              <p className="text-gray-700 text-sm">
                MBBS, DDV (DU), MSc (SUB), DCPD (UK)
              </p>
              <p className="text-gray-500 text-sm">
                <strong>Email:</strong> reyananisd@gmail.com
              </p>
              <p className="text-gray-500 text-sm">
                <strong>Address:</strong> 21 Hazelmere Close, Billin
              </p>
            </div>

            {/* 🔹 Edit Button with Icon */}
            <button
              onClick={handleEditClick}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
            >
              <FaEdit /> Edit
            </button>
          </div>

          <div className="mt-4 flex gap-10 text-gray-700 text-sm">
            <div>
              <p className="font-semibold py-3 text-[#2b6771]">Experience</p>
              <p>
                <span className="text-[22px] font-bold text-black">16</span> Years of experience since 2011
              </p>
            </div>
            <div>
              <p className="font-semibold py-3 text-[#2b6771]">Rating</p>
              <p>
                <span className="text-[22px] font-bold text-black">5</span> - This Doctor rating is Good
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
