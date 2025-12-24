export type MedicalHistoryItem = {
  id: number;
  name: string;
  date: string;
  time: string;
  phone: string;
  problems: string;
  hospital: string;
  email: string;
  gender: string;
  age: string;
  address: string;
};

export const medicalHistoryData: MedicalHistoryItem[] = [
  {
    id: 1,
    name: "Dr. Reyan Anis",
    date: "May 19, 2025",
    time: "03:20 PM",
    phone: "01601524797",
    problems: "Fever and headache",
    hospital: "Apollo Hospitals",
    email: "dr.kararmahmud@gmail.com",
    gender: "Male",
    age: "26 years",
    address: "47 W 13th St, New York, NY 10011, USA",
  },
  {
    id: 2,
    name: "Dr. Karar Mahmud",
    date: "May 19, 2025",
    time: "03:20 PM",
    phone: "01601528792",
    problems: "Diabetes and high blood pressure",
    hospital: "Apollo Hospitals",
    email: "dr.kararmahmud2@gmail.com",
    gender: "Male",
    age: "35 years",
    address: "21 Hazelmere Close, Billin",
  },
  {
    id: 3,
    name: "Dr. Karar Mahmud",
    date: "May 19, 2025",
    time: "03:20 PM",
    phone: "01601528792",
    problems: "Chest pain and shortness of breath",
    hospital: "Apollo Hospitals",
    email: "dr.kararmahmud2@gmail.com",
    gender: "Male",
    age: "35 years",
    address: "21 Hazelmere Close, Billin",
  },
  {
    id: 4,
    name: "Dr. Karar Mahmud",
    date: "May 19, 2025",
    time: "03:20 PM",
    phone: "01601528792",
    problems: "Stomach pain and nausea",
    hospital: "Apollo Hospitals",
    email: "dr.kararmahmud2@gmail.com",
    gender: "Male",
    age: "35 years",
    address: "21 Hazelmere Close, Billin",
  },
  {
    id: 5,
    name: "Dr. Karar Mahmud",
    date: "May 19, 2025",
    time: "03:20 PM",
    phone: "01601528792",
    problems: "Cough and sore throat",
    hospital: "Apollo Hospitals",
    email: "dr.kararmahmud2@gmail.com",
    gender: "Male",
    age: "35 years",
    address: "21 Hazelmere Close, Billin",
  },
];
