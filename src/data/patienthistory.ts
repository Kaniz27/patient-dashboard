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
  avatar: string; // profile image
};

export const medicalHistoryData: MedicalHistoryItem[] = [
  {
    id: 1,
    name: " Ayesha Rahman",
    date: "May 19, 2025",
    time: "09:30 AM",
    phone: "01710011223",
    problems: "Migraine and nausea",
    hospital: "City Hospital",
    email: "ayesha.rahman@example.com",
    gender: "Female",
    age: "32 years",
    address: "12 Baker St, London, UK",
    avatar: "https://randomuser.me/api/portraits/women/10.jpg",
  },
  {
    id: 2,
    name: " Tanvir Ahmed",
    date: "May 19, 2025",
    time: "10:15 AM",
    phone: "01820022334",
    problems: "High blood pressure",
    hospital: "Green Valley Clinic",
    email: "tanvir.ahmed@example.com",
    gender: "Male",
    age: "45 years",
    address: "45 Maple Ave, Toronto, Canada",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    id: 3,
    name: " Sabrina Karim",
    date: "May 19, 2025",
    time: "11:00 AM",
    phone: "01930033445",
    problems: "Asthma and shortness of breath",
    hospital: "Sunrise Hospital",
    email: "sabrina.karim@example.com",
    gender: "Female",
    age: "28 years",
    address: "78 Pine St, New York, USA",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    id: 4,
    name: " Imran Hossain",
    date: "May 19, 2025",
    time: "01:30 PM",
    phone: "01640044556",
    problems: "Diabetes and fatigue",
    hospital: "Evercare Hospital",
    email: "imran.hossain@example.com",
    gender: "Male",
    age: "38 years",
    address: "22 Elm Rd, Sydney, Australia",
    avatar: "https://randomuser.me/api/portraits/men/13.jpg",
  },
  {
    id: 5,
    name: " Farhana Chowdhury",
    date: "May 19, 2025",
    time: "02:45 PM",
    phone: "01750055667",
    problems: "Fever and cough",
    hospital: "Metro Medical Center",
    email: "farhana.chowdhury@example.com",
    gender: "Female",
    age: "30 years",
    address: "15 Oak St, Dhaka, Bangladesh",
    avatar: "https://randomuser.me/api/portraits/women/14.jpg",
  },
];
