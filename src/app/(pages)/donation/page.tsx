import React from "react";
import DonationsGrid from "./donation1/DonationsGrid";
import DonationsStatistics from "./donation1/DonationsStatistics";
import MedicalHistoryTable1 from "./donation1/MedicalHistoryTable1";
import ActivityGraph from "./donation1/ActivityGraph";

const Page = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 w-full">
      {/* Left section (≈70%) */}
      <div className="w-full space-y-5 xl:col-span-9">
        <DonationsGrid />
        <MedicalHistoryTable1 />
      </div>

      {/* Right section (≈30%) */}
      <div className="w-full space-y-5">
        <DonationsStatistics />
        <ActivityGraph />
      </div>
    </div>
  );
};

export default Page;
