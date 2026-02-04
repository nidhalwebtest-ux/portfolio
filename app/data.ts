export type Project = {
  id: string;
  type: "Integration" | "SuiteScript" | "Workflow" | "Advanced PDF";
  title: string;
  custEntity: string; // Customer Name
  status: "Released" | "Testing" | "Planned";
  date: string;
  memo: string; // Short description
  description: string; // Long HTML description
  techStack: string[];
};

export const projects: Project[] = [
  {
    id: "PRJ-001",
    type: "Integration",
    title: "WhatsApp Notification System",
    custEntity: "Global General Trading",
    status: "Released",
    date: "02/02/2026",
    memo: "Automated 2-way sync using RESTlets",
    description:
      "<p>Engineered a RESTlet-based middleware to connect NetSuite with WhatsApp Business API...</p>",
    techStack: ["SuiteScript 2.1", "Node.js", "RESTlet"],
  },
  {
    id: "PRJ-002",
    type: "SuiteScript",
    title: "HR & Payroll Module",
    custEntity: "Internal Project",
    status: "Released",
    date: "15/01/2026",
    memo: "Custom payroll calculations and leave management",
    description:
      "<p>Built a custom record structure to handle employee leave requests and salary slip generation...</p>",
    techStack: ["Map/Reduce", "Suitelet", "Custom Records"],
  },
  {
    id: "PRJ-003",
    type: "Advanced PDF",
    title: "Dynamic Invoice Layout",
    custEntity: "Retail Client",
    status: "Released",
    date: "10/12/2025",
    memo: "HTML/FreeMarker template with conditional logic",
    description:
      "<p>Created a complex Advanced PDF/HTML template that changes layout based on subsidiary...</p>",
    techStack: ["FreeMarker", "HTML/CSS", "BFO"],
  },
  // Add more from your CV...
];
