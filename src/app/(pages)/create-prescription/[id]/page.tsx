import React from "react";
import PrescriptionPage from "./precription/PrescriptionPage";
import PrescriptionPanel from "./precription/PrescriptionPanel";

const Page = () => {
  return (
    <div className="flex gap-4 p-4">
      {/* Left content */}
      <div className="w-[70%]">
       <PrescriptionPanel></PrescriptionPanel>
      </div>

      {/* Right side: Prescription Page */}
      <div className="w-[30%]">
        <PrescriptionPage />
      </div>
    </div>
  );
};

export default Page;
