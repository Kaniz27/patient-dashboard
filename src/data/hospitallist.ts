
export type Hospital = {
  id: number;
  name: string;
  location: string;
  specialty: string;
  
  contact: string;
};

export const hospitalList: Hospital[] = [
  {
    id: 1,
    name: "Square Hospital Ltd.",
    location: "Panthapath, Dhaka",
    specialty: "Multi-specialty Hospital",
    
    contact: "+880 2-8144400",
  },
  {
    id: 2,
    name: "United Hospital Dhaka",
    location: "Gulshan, Dhaka",
    specialty: "Cardiology, Neurology, Pediatrics",
    
    contact: "+880 2-8836000",
  },
  {
    id: 3,
    name: "Evercare Hospital Dhaka",
    location: "Bashundhara, Dhaka",
    specialty: "Cancer Care, Surgery, Critical Care",
  
    contact: "+880 2-55037242",
  },
  {
    id: 4,
    name: "Labaid Specialized Hospital",
    location: "Dhanmondi, Dhaka",
    specialty: "Cardiac Care, Diagnostics",
   
    contact: "+880 2-58610793",
  },
];

