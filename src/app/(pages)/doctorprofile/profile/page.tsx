import React from "react";

const Profilepage = () => {
  const chambers = [
    { hospital: "BIRDEM General Hospital" },
    { hospital: "Apollo Hospitals" },
    { hospital: "Labaid Hospital" },
    { hospital: "Evna Sina Hospital" },
  ];

  return (
    <div className="space-y-4">
      {chambers.map((item, index) => (
        <div
          key={index}
          className="bg-white p-5 rounded-xl shadow"
        >
          <h3 className="text-lg font-semibold mb-2">
            Doctor Chamber
          </h3>

          <p className="font-Bold text-[22px]">{item.hospital}</p>

          <div className="mt-2 text-sm text-gray-600 space-y-1">
            <p>
              <strong>Date :</strong> 14th–16th May 2025
            </p>
            <p>
              <strong>Day :</strong> Saturday, Sunday, Monday
            </p>
            <p>
              <strong>Time :</strong> 12:00 PM – 03:00 PM
            </p>
            <p className="font-semibold text-gray-800">
              Doctor Visit Price : 1200৳
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Profilepage;
