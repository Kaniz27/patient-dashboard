"use client";

import React, { useState } from "react";
import Image from "next/image";

const page = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [signaturePreview, setSignaturePreview] = useState<string | null>(null);
  const [chambers, setChambers] = useState<number[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSignatureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSignaturePreview(URL.createObjectURL(file));
    }
  };

  const handleAddChamber = () => {
    setChambers([...chambers, Date.now()]);
  };

  const handleRemoveChamber = (id: number) => {
    setChambers(chambers.filter((ch) => ch !== id));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow space-y-8">
      <h2 className="text-2xl font-semibold">Edit Doctor Profile</h2>

      {/* ================= BASIC INFO ================= */}
      <div className="space-y-3">
        <h3 className="font-semibold text-lg">Basic Information</h3>

        <div className="flex gap-10 flex-wrap">
          {/* Profile Image */}
          <div className="space-y-2">
            <div className="w-32 h-32 border rounded-md flex items-center justify-center overflow-hidden">
              {imagePreview ? (
                <Image
                  src={imagePreview}
                  alt="Doctor Preview"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              ) : (
                <span className="text-gray-400 text-sm">No Image</span>
              )}
            </div>

            <label className="cursor-pointer text-[#41b3cc] font-medium text-sm">
              Upload Photo
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>

          {/* Signature */}
          <div className="space-y-2">
            <div className="w-40 h-20 border rounded-md flex items-center justify-center overflow-hidden bg-gray-50">
              {signaturePreview ? (
                <Image
                  src={signaturePreview}
                  alt="Signature Preview"
                  width={160}
                  height={80}
                  className="object-contain"
                />
              ) : (
                <span className="text-gray-400 text-sm">No Signature</span>
              )}
            </div>

            <label className="cursor-pointer text-[#41b3cc] font-medium text-sm">
              Upload Signature
              <input
                type="file"
                accept="image/*"
                onChange={handleSignatureChange}
                className="hidden"
              />
            </label>
          </div>
        </div>

        <input className="input" placeholder="Doctor Name" />
        <input className="input" placeholder="Degree" />
        <input className="input" placeholder="Email" />
        <input className="input" placeholder="Address" />
      </div>

      {/* ================= BIO ================= */}
      <div className="space-y-3">
        <h3 className="font-semibold text-lg">Bio / About</h3>
        <textarea className="input h-28" placeholder="Write doctor bio" />
      </div>

      {/* ================= EDUCATION ================= */}
      <div className="space-y-3">
        <h3 className="font-semibold text-lg">Education</h3>
        <textarea className="input h-24" placeholder="Education details" />
      </div>

      {/* ================= EXPERIENCE ================= */}
      <div className="space-y-3">
        <h3 className="font-semibold text-lg">Experience</h3>
        <textarea className="input h-24" placeholder="Experience details" />
      </div>

      {/* ================= CHAMBER / HOSPITAL INFO ================= */}
      <div className="space-y-6 border-t pt-6">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg">Chamber / Hospital Info</h3>
          <button
            onClick={handleAddChamber}
            className="text-[#41b3cc] font-semibold"
          >
            + Add Chamber
          </button>
        </div>

        {chambers.map((id, index) => (
          <div
            key={id}
            className="space-y-3 p-4 border rounded-lg bg-gray-50"
          >
            <div className="flex justify-between items-center">
              <h4 className="font-semibold text-[#41b3cc]">
                Chamber {index + 1}
              </h4>
              <button
                onClick={() => handleRemoveChamber(id)}
                className="text-red-500 text-sm font-semibold"
              >
                Remove
              </button>
            </div>

            <input className="input" placeholder="Hospital Name" />
            <input className="input" placeholder="Visiting Hour" />
            <input className="input" placeholder="Visiting Charge (৳)" />
          </div>
        ))}
      </div>

      {/* ================= ACTION BUTTONS ================= */}
      <div className="flex gap-3 pt-4">
        <button className="bg-[#41b3cc] text-white px-6 py-2 rounded">
          Save
        </button>
        <button className="bg-gray-300 px-6 py-2 rounded">
          Cancel
        </button>
      </div>

      <style jsx>{`
        .input {
          width: 100%;
          border: 1px solid #d1d5db;
          padding: 8px;
          border-radius: 6px;
        }
      `}</style>
    </div>
  );
};

export default page;
