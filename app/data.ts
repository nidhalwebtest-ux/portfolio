export type Project = {
  id: string;
  type:
    | "Integration"
    | "SuiteScript"
    | "Custom Module"
    | "Mobile App"
    | "Desktop App";
  title: string;
  custEntity: string; // Client or Company Name
  status: "Released" | "In Progress" | "Testing";
  date: string;
  memo: string; // Short "Impact" description for the list view
  description: string; // Detailed HTML description for the record view
  techStack: string[];
};

export const projects: Project[] = [
  {
    id: "INT-001",
    type: "Integration",
    title: "NetSuite to WhatsApp Automation",
    custEntity: "Overall Global General Trading",
    status: "Released",
    date: "2024-02-01",
    memo: "Automated messaging, reminders, and report sharing.",
    description: `
      <p><strong>Business Problem:</strong> The sales team experienced delays in communicating order updates and sharing invoices with clients manually.</p>
      <br>
      <p><strong>Solution:</strong> Engineered a robust integration between NetSuite and the WhatsApp Business API using SuiteScript 2.1 and RESTlets.</p>
      <ul>
        <li>Automated order confirmation messages upon Sales Order approval.</li>
        <li>Implemented scheduled scripts to send payment reminders with PDF invoice attachments.</li>
        <li>Reduced manual communication time by approximately 40%.</li>
      </ul>
    `,
    techStack: ["SuiteScript 2.1", "RESTlet", "Node.js", "WhatsApp API"],
  },
  {
    id: "MOD-002",
    type: "Custom Module",
    title: "HR & Payroll Management",
    custEntity: "Overall Global General Trading",
    status: "Released",
    date: "2023-11-15",
    memo: "Automated payroll calculations and leave management.",
    description: `
      <p><strong>Challenge:</strong> The company relied on external software for payroll, causing data discrepancies with the ERP finance data.</p>
      <br>
      <p><strong>Solution:</strong> Built a native HRIS module entirely within NetSuite.</p>
      <ul>
        <li>Created Custom Records for Employees, Leave Requests, and Salary Structures.</li>
        <li>Wrote Map/Reduce scripts to automate monthly salary slip generation based on attendance and leave balance.</li>
        <li>Implemented SuiteFlow workflows for leave approval hierarchies.</li>
      </ul>
    `,
    techStack: ["Custom Records", "Map/Reduce", "SuiteFlow", "SuiteGL"],
  },
  {
    id: "MOD-003",
    type: "Custom Module",
    title: "Fixed Assets Tracker",
    custEntity: "Overall Global General Trading",
    status: "Released",
    date: "2023-08-10",
    memo: "Enhanced tracking and depreciation management.",
    description: `
      <p>Developed a custom Fixed Assets solution to replace legacy Excel tracking.</p>
      <ul>
        <li>Automated depreciation journal entries using Scheduled Scripts.</li>
        <li>Created a dashboard for Finance to view asset value in real-time.</li>
        <li>Ensured 100% compliance with internal accounting standards.</li>
      </ul>
    `,
    techStack: ["SuiteScript 2.0", "Custom Transactions", "Saved Searches"],
  },
  {
    id: "APP-004",
    type: "Custom Module",
    title: "Property Management System (PMS)",
    custEntity: "Overall Global General Trading",
    status: "Released",
    date: "2023-05-20",
    memo: "Managed via custom transactions and records.",
    description: `
      <p>A comprehensive system to manage real estate assets directly within NetSuite.</p>
      <ul>
        <li>Tracked tenant contracts, rental payments, and unit availability.</li>
        <li>Automated recurring invoicing for rent based on contract terms.</li>
        <li>Built utilizing Custom Transactions to separate rental income from standard sales.</li>
      </ul>
    `,
    techStack: ["Custom Records", "Client Scripts", "Workflows"],
  },
  {
    id: "MOB-005",
    type: "Mobile App",
    title: "Android Sales App",
    custEntity: "Overall Global General Trading",
    status: "Released",
    date: "2023-03-01",
    memo: "Track stores, create transactions, and print invoices.",
    description: `
      <p>Built a native Android application for field sales representatives to operate offline and sync with NetSuite.</p>
      <ul>
        <li>Enabled sales reps to create Sales Orders and print invoices via Bluetooth thermal printers.</li>
        <li>Syncs data back to NetSuite via RESTlets when internet is available.</li>
      </ul>
    `,
    techStack: ["Kotlin", "RESTlet", "Android SDK"],
  },
  {
    id: "POS-006",
    type: "Desktop App",
    title: "Retail POS System",
    custEntity: "Retail Division",
    status: "Released",
    date: "2023-01-15",
    memo: "Electron.js based Point of Sale for retail stores.",
    description: `
      <p>Designed a desktop POS system for high-speed retail checkout.</p>
      <ul>
        <li>Built with Electron.js for cross-platform compatibility.</li>
        <li>Integrated directly with NetSuite Inventory to update stock levels in real-time.</li>
      </ul>
    `,
    techStack: ["Electron.js", "Node.js", "NetSuite API"],
  },
];

export const skills = [
  { name: "NetSuite Development", level: "95%", category: "ERP" }, // SuiteScript 1.0/2.0 [cite: 22]
  { name: "Next.js / React", level: "90%", category: "Web" }, // [cite: 25]
  { name: "Mobile (Kotlin)", level: "80%", category: "Mobile" }, // [cite: 24]
  { name: "Electron.js", level: "85%", category: "Software" }, // [cite: 26]
  { name: "SQL / Database", level: "85%", category: "Backend" }, // [cite: 27]
];

export const profileData = {
  name: "Nidhal Ghdiri",
  role: "NetSuite Administrator & Developer",
  location: "Oman",
  phone: "+968 98590405",
  email: "ghdiri.nidhal@gmail.com",
  experience: "3+ Years",
  linkedIn: "linkedin.com/in/nidhal-ghdiri",
};

export const education = [
  {
    degree: "Master's Degree in Project Management",
    school: "Higher Institute of Computer Science & Multimedia of Sfax",
    year: "2021 - 2023",
    status: "Completed",
  },
  {
    degree: "Bachelor's Degree in Computer Science",
    school: "Higher Institute of Computer Science & Multimedia of Sfax",
    year: "2018 - 2020",
    status: "Completed",
  },
];

export const languages = [
  { name: "Arabic", level: "Native", percent: "100%" },
  { name: "English", level: "Proficient", percent: "90%" },
  { name: "French", level: "Basic", percent: "40%" },
];
