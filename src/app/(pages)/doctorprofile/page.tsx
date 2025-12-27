import React from "react";
import Profilepage from "./profile/page";
import DoctorProfile from "./profile/DoctorProfile";
import DoctorTabs from "./profile/DoctorTabs";



const page = () => {
  return (
    <div className="flex  gap-4">
      {/* 30% */}
      <div className="w-[30%]   ">
      <Profilepage></Profilepage>
      </div>

      {/* 70% */}
      <div className="w-[70%]  ">
        <DoctorProfile></DoctorProfile>
        <DoctorTabs></DoctorTabs>
      </div>
    </div>
  );
};

export default page;
