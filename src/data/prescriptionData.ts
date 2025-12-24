// 🔹 Main Prescription Data Type
export type PrescriptionData = {
  doctor: {
    name: string;
  };

  chat: {
    id: number;
    sender: "doctor" | "patient";
    message: string;
    time: string;
  }[];

  suggestedPrescription: {
    id: number;
    medicine: string;
    days: number;
    dosage: string;
  }[];

  medicineCards: {
    id: number;
    rating: number;
    title: string;
    description: string;
  }[];

  physicalExamination: {
    pulse: string;
    bp: string;
    heart: string;
    lung: string;
    others: string;
  };

  riskFactors: string[];
};

// 🔹 DATA
export const prescriptionData: PrescriptionData = {
  doctor: {
    name: "Dr. Williams",
  },

  chat: [
    {
      id: 1,
      sender: "patient",
      message: "Write your message",
      time: "3:23 PM",
    },
    {
      id: 2,
      sender: "doctor",
      message: "Write your message",
      time: "3:23 PM",
    },
  ],

  suggestedPrescription: [
    {
      id: 1,
      medicine: "Napa",
      days: 3,
      dosage: "1+1+1",
    },
    {
      id: 2,
      medicine: "Azyth 500",
      days: 7,
      dosage: "1+0+1",
    },
  ],

  medicineCards: [
    {
      id: 1,
      rating: 4.2,
      title: "NATURE’S PLUS B COMPLEX 60",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      id: 2,
      rating: 4.2,
      title: "NATURE’S PLUS B COMPLEX 60",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      id: 3,
      rating: 4.2,
      title: "NATURE’S PLUS B COMPLEX 60",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
     {
      id: 4,
      rating: 4.2,
      title: "NATURE’S PLUS B COMPLEX 60",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
  ],

  physicalExamination: {
    pulse: "-",
    bp: "-",
    heart: "-",
    lung: "-",
    others: "-",
  },

  riskFactors: [
    "ECG, CXR (P/A), RBS",
    "Echo 2D / Doppler",
    "S. TSH, S. Creatinine",
    "CBC, FBS, 2HABF",
    "HbA1C",
  ],
};
