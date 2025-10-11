import { label, path, title } from "framer-motion/client";

export const headerMenu = [
  {
    title: "Home",
    Path: "/",
    items: null,
  },
  {
    title: "Services",
    Path: "/services",
  },
  {
    title: "Patient Care",
    items: [
      { label: "Appointments", Path: "/bookAnAppointment" },
      { label: "Billing & Insurance" },
    ],
  },
  {
    title: "Meet Our Team",
    Path: "/meetourteam",
    items: null,
  },
  {
    title: "Facility Tour",
    Path: "/facilityTour",
    items: null,
  },
  {
    title: "Contact Us",
    items: ["+91 62395 07877", "drpreetisbrighteyecare@gmail.com"],
  },
  {
    title: "About-Us",

    items: [
      { label: "Terms of Services", Path: "/termsofservices" },
      { label: "Privacy Policy", Path: "/privacyPolicy" },
      { label: "About-Us", path: "/AboutUs" },
    ],
  },
];

// src/constants/footerLinks.js

// constant.js or wherever you define headerMenu

export const footerLinks = {
  quickLinks: [
    {
      title: "Quick Link",
      submenu: [
        { label: "Home", path: "/" },
        { label: "Facility Tour", path: "/facilityTour" },
        { label: "Meet Our Team", path: "/meetourteam" },
      ],
    },
    {
      title: "About Us",
      submenu: [
        { label: "Terms of Services", path: "/termsofservices" },
        { label: "Privacy Policy", path: "/privacyPolicy" },
      ],
    },
    {
      title: "Services",
      submenu: [
        {
          label: "Cataract Surgery",
          path: "/services/cataract",
        },
        {
          label: "Cornea",
          path: "/services/cornea",
        },
        {
          label: "Refractive Surgery",
          path: "/services/refractive",
        },
        {
          label: "Dry Eye Disease",
          path: "/services/dryeye",
        },
        {
          label: "Oculoplastic Surgery",
          path: "/services/Oculoplastic",
        },
        {
          lable: "Vitreoretinal Services",
          path: "/services/Vitreoretinal%20Services",
        },
        {
          label: "Glaucoma",
          path: "/services/Glaucoma",
        },
        {
          label: "Pediatric",
          path: "/services/Pediatric",
        },
        {
          label: "Keratoconus",
          path: "/services/Keratoconus",
        },
        {
          label: "General Ophthalmology",
          path: "/services/General%20Ophthalmology",
        },
      ],
    },
  ],

  contact: {
    phone: "+91-62395 07877",
    email: "drpreetisbrighteyecare@gmail.com",
    address: "Durga Market, Chhoti Nehar to Sarna Road,",
    address1: "Near Flyover, Pathankot, Punjab, India",
    emergency: "+91-62395 07877",
  },

  social: ["facebook", "twitter", "linkedin", "whatsapp", "youtube"],
};

// data
export const doctorData = [
  {
    name: "Dr. Preeti",
    description: " Founder & Chief Consultant  ",
    description1: "Cornea Cataract and Refractive Surgeon",
    url: "/Dr_preeti.jpeg",
    description2:
      "Dr. Preeti, Founder & Chief Consultant, is a renowned Cornea, Cataract, and Refractive Surgeon dedicated to delivering advanced eye care. Specializing in corneal transplants, cataract surgery, and LASIK, she combines expertise with cutting-edge technology to restore vision and improve lives, ensuring every patient receives precise, personalized, and compassionate treatment.",
    description3: "Every Day ⏰ (09:00 AM to 05:00 PM)",
  },
  {
    name: "Dr. Manju Kumari ",
    description: "Orbit & Oculoplasty Surgeon",
    url: "/Dr. MANJU KUMARI.jpg",
    description2:
      "Dr. Manju Kumari, a skilled Orbit & Oculoplasty Surgeon, specializes in advanced treatments for eye socket disorders, eyelid reconstruction, tear duct surgeries, and cosmetic eye procedures. With expertise in functional and aesthetic eye care, she delivers precise, compassionate, and technology-driven solutions to enhance both vision and appearance for patients of all ages.",
    description3: " 1st & 3rd Sunday ⏰ (09:00 AM to 05:00 PM)",
  },
  {
    name: "Dr Ashima Monga",
    description: "Vitreoretinal Surgeon",
    url: "/Drashima.jpeg",
    description2:
      " Dr. Ashima Monga, where advanced ophthalmic expertise meets compassionate, patient-centered care. With over 9 years of experience, Dr. Monga is a highly qualified specialist in both modern Cataract Surgery and complex Medical Retina conditions.",
    description3: " Every saturday ⏰ (09:00 AM to 05:00 PM)",
  },
  {
    name: "Dr. Mohit Mahajan ",
    description: " MD & DNB General Medicine",
    url: "/Dr Mohit Mahajan.jpeg",
    description2:
      "Dr. Mohit Mahajan, MD & DNB in General Medicine, is dedicated to providing comprehensive care for a wide range of medical conditions. With expertise in diagnosing, treating, and managing chronic and acute illnesses, he combines evidence-based medicine with a compassionate approach, ensuring personalized healthcare solutions that promote long-term wellness and a better quality of life.",
    description3: " Monday and Thursday ⏰ (3:00 PM)",
  },
  {
    name: "Dr. Raghuraj Sharma",
    description: " MD Anesthesia",
    url: "/Dr Raghuraj shamra.jpeg",
    description2:
      "Dr. Raghuraj Sharma, MD in Anesthesia, is an experienced anesthesiologist specializing in safe and effective anesthesia management for surgeries and medical procedures. With expertise in pain control, sedation techniques, and patient monitoring, he ensures comfort, safety, and smooth recovery, delivering the highest standards of perioperative care with precision and compassion.",
  },
];
export const patientTestimonials = [
  {
    name: "John Doe",
    description:
      "“I was nervous about my cataract surgery, but the doctors at Bright Eye Care Hospital made me feel completely at ease. The surgery was smooth, painless, and I can see clearly again. Truly life-changing!”.",
    treatment: "Cataract Surgery",
    url: "/logo2.png",
  },
  {
    name: "John Doe",
    description:
      "“I was nervous about my cataract surgery, but the doctors at Bright Eye Care Hospital made me feel completely at ease. The surgery was smooth, painless, and I can see clearly again. Truly life-changing!”.",
    treatment: "Cataract Surgery",
    url: "/logo2.png",
  },
  {
    name: "John Doe",
    description:
      "“I was nervous about my cataract surgery, but the doctors at Bright Eye Care Hospital made me feel completely at ease. The surgery was smooth, painless, and I can see clearly again. Truly life-changing!”.",
    treatment: "Cataract Surgery",
    url: "/logo2.png",
  },
];
// src/constants/faqData.ts

export interface FAQItem {
  question: string;
  answer: string;
  icon: string;
}

export interface FAQCategory {
  title: string;
  emoji: string;
  items: FAQItem[];
}
export const faqCategories: FAQCategory[] = [
  {
    title: "Appointments & Visiting Hours",
    emoji: "📅",
    items: [
      {
        question: "What are the hospital's visiting hours?",
        answer:
          "Visiting hours are from 9:00 AM to 11:00 AM and 5:00 PM to 7:00 PM, all days of the week. ICU visits are limited and require prior permission from hospital staff.",
        icon: "🕒",
      },
      {
        question: "How can I book an appointment?",
        answer:
          "You can book an appointment through our website using the ‘Book Appointment’ button or call our reception at +91-62395 07877.",
        icon: "📱",
      },
      {
        question: "Is walk-in consultation available?",
        answer:
          "Yes, walk-ins are allowed but we recommend booking an appointment in advance to avoid waiting time.",
        icon: "✅",
      },
    ],
  },
  {
    title: "Billing & Insurance",
    emoji: "💰",
    items: [
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept cash, UPI, debit/credit cards, and most digital wallets.",
        icon: "💳",
      },
      {
        question: "Do you accept health insurance?",
        answer:
          "Yes, we are empaneled with major insurance companies and TPAs. Please carry your insurance card and valid ID proof.",
        icon: "🩺",
      },
      {
        question: "Can I get a detailed bill or estimate before treatment?",
        answer:
          "Yes, we provide a detailed cost estimate before all major treatments or surgeries. Final billing will be shared at discharge.",
        icon: "📄",
      },
    ],
  },
  {
    title: "Admission & Discharge",
    emoji: "🏥",
    items: [
      {
        question: "What documents are needed for hospital admission?",
        answer:
          "You need to bring:\n- A valid government ID (Aadhaar, PAN, etc.)\n- Doctor's prescription (if referred)\n- Insurance documents (if applicable)",
        icon: "📂",
      },
      {
        question: "What is the hospital discharge process?",
        answer:
          "Once the doctor approves your discharge, the billing team will prepare the final invoice. After settlement, the nurse will provide discharge summary and prescriptions.",
        icon: "🛏️",
      },
    ],
  },
  {
    title: "Medical Records & Reports",
    emoji: "🧾",
    items: [
      {
        question: "How can I collect my lab or radiology reports?",
        answer:
          "Reports can be collected from the Diagnostics Counter or accessed online through the Patient Portal (coming soon).",
        icon: "📑",
      },
      {
        question: "Can I get a duplicate copy of my medical records?",
        answer:
          "Yes, please fill a request form at the helpdesk with your ID proof. A nominal fee may apply.",
        icon: "🗂️",
      },
    ],
  },
];

// src/constants/contactInfo.ts

export const contactInfo = {
  address: "Bright Eye Care Hospital,Sarna, Choti Nehar, Pathankot India",
  email: "drpreetisbrighteyecare@gmail.com",
  phone: "+91-62395 07877",
  emergency: "+91-62395 07877",
};
export const careModelData = [
  {
    id: 0,
    title: "Exceptional clinical talent",
    description:
      "We bring together the brightest minds in medicine to provide exceptional care.",
    image: "/Exeptional_Clinical Talent.jpg",
    direction: "top",
  },
  {
    id: 1,
    title: "Trust-based compassionate care",
    description:
      "Our care model is rooted in empathy and trust for every patient.",
    image: "/Trust_based.jpg",
    direction: "left",
  },
  {
    id: 2,
    title: "Caring systems and processes",
    description: "Streamlined systems to ensure patient comfort and safety.",
    image: "/Caring_Sytem.jpg",
    direction: "bottom-left",
  },
  {
    id: 3,
    title: "World-class infrastructure",
    description: "Modern, clean, and fully equipped hospital infrastructure.",
    image: "/HSP_INFRA.webp",
    direction: "right",
  },
  {
    id: 4,
    title: "Latest high-end technology",
    description:
      "Cutting-edge medical technology for accurate diagnosis and treatment.",
    image: "/OT_INFRA.jpg",
    direction: "bottom-right",
  },
];
// constants/termsContent.js

export const termsOfServiceContent = {
  effectiveDate: " 24-July-2025 ",
  hospitalName: "Dr. Preeti’s Bright Eye Care Hospital",
  sections: [
    {
      title: "1. Introduction and Acceptance",
      content:
        "Dr. Preeti’s Bright Eye Care Hospital is committed to delivering advanced, patient-centric ophthalmic care. Our website and digital platforms are designed to enhance patient convenience by offering online services such as appointment booking, health information, teleconsultations, and more.\n\nBy using this site or any service offered herein, you confirm that:\n- You are 18 years of age or older;\n- You are legally competent to enter into this agreement;\n- You accept and will comply with these Terms and our Privacy Policy.",
    },
    {
      title: "2. Medical Disclaimer",
      content:
        "The information on this website is for general informational purposes only and does not constitute medical advice, diagnosis, or treatment. You must consult a qualified ophthalmologist or medical professional in person for specific medical issues.\n\nTeleconsultation and any suggestions via online modes are meant only for preliminary discussion and do not substitute an in-person diagnosis.",
    },
    {
      title: "3. Services Provided",
      content:
        "We offer the following services through our digital platform:\n- General information on eye conditions\n- Online appointment booking\n- Teleconsultation (subject to doctor availability)\n- Patient registration and forms\n- Payment gateway for services\n- Medical reports and prescription access\n- Health awareness blogs\n- Event and camp announcements\n- Emergency contact and feedback forms\n\nWe reserve the right to add, modify, or discontinue any services at any time.",
    },
    {
      title: "4. User Responsibilities",
      content:
        "Users agree to:\n- Provide complete and accurate personal and health details when using our services\n- Maintain confidentiality of any login credentials\n- Refrain from posting harmful, misleading, or inappropriate content\n- Avoid any activity that harms or interferes with the website or other users\n- Comply with local and international laws when using our platform",
    },
    {
      title: "5. Appointment & Teleconsultation Policy",
      content:
        "Appointments must be booked with accurate patient details. Confirmations will be sent via SMS or email.\n\nTeleconsultation services should be used only when a physical visit is not possible. Patients must be aware that a proper diagnosis may require physical examination.\n\nRepeated cancellations, no-shows, or misuse of booking privileges may lead to suspension of access.",
    },
    {
      title: "6. Payment & Refund Policy",
      content:
        "Payments made online or at the hospital are subject to our billing policies.\n\nRefunds for duplicate or failed transactions will be processed within 7 working days after verification.\n\nRefunds are not available once a consultation or procedure has been completed.",
    },
    {
      title: "7. Patient Data & Confidentiality",
      content:
        "We are committed to protecting patient data. All data shared during registration, consultation, or treatment is stored securely and only used for internal operations or treatment purposes.\n\nData may be shared with government or legal bodies if required by law.",
    },
    {
      title: "8. Intellectual Property Rights",
      content:
        "All content including text, images, videos, branding, and layout on this site are the property of the hospital.\n\nYou may not copy, redistribute, or use them for commercial purposes without explicit written permission.",
    },
    {
      title: "9. Website Access and Availability",
      content:
        "We aim for uninterrupted access, but we are not liable for any downtime due to maintenance, upgrades, or technical issues.\n\nUsers are encouraged to report broken links or technical errors through our feedback form.",
    },
    {
      title: "10. Third-Party Links",
      content:
        "External links provided are for reference only. Dr. Preeti’s Bright Eye Care Hospital does not control the content or policies of those sites and is not responsible for any damages arising from their use.",
    },
    {
      title: "11. Limitation of Liability",
      content:
        "Our hospital will not be held liable for any incidental, indirect, or consequential damages resulting from use of the Services, including data loss, service interruption, or financial losses.",
    },
    {
      title: "12. Indemnification",
      content:
        "Users agree to indemnify and defend the hospital against all liabilities, legal claims, losses, and expenses arising from their misuse of the website or violation of the Terms.",
    },
    {
      title: "13. Termination of Use",
      content:
        "We reserve the right to block or suspend access to our Services for any violation of our Terms or suspected misuse.\n\nIn the event of termination, any pending dues or legal obligations will remain enforceable.",
    },
    {
      title: "14. Children’s Use Policy",
      content:
        "Children under 18 must use this site under the guidance and supervision of a parent or guardian.\n\nWe do not knowingly collect personal data from minors without parental consent.",
    },
    {
      title: "15. Emergency and Crisis Protocols",
      content:
        "This website is not intended for emergency eye care. In case of an urgent medical need, visit the nearest emergency care facility or contact local emergency services.",
    },
    {
      title: "16. Governing Law and Jurisdiction",
      content:
        "These Terms shall be governed by the laws of India. Any disputes shall fall under the jurisdiction of courts in [Insert City].",
    },
    {
      title: "17. Changes to These Terms",
      content:
        "We may modify these Terms at any time. Updated versions will be posted on our site with a revised effective date. Continued use of the Services constitutes acceptance of the new terms.",
    },
    {
      title: "18. Contact Us",
      content:
        "Dr. Preeti’s Bright Eye Care Hospital\n[Insert full address]\nPhone: [Insert number]\nEmail: [Insert hospital email]\nWebsite: [Insert site URL]",
    },
    {
      title: "19. Feedback and Suggestions",
      content:
        "Suggestions submitted through our website or email become the property of the hospital. We reserve the right to use them without any obligation or compensation.",
    },
    {
      title: "20. Accessibility Statement",
      content:
        "We strive to ensure accessibility for all individuals, including those with disabilities. If you encounter barriers while accessing our Services, please contact us for assistance.",
    },
  ],
};
export const privacyPolicyContent = {
  lastUpdated: "July 23, 2025",
  hospitalName: "Dr. Preeti’s Bright Eye Care Hospital",
  sections: [
    {
      title: "1. Introduction",
      content:
        "At Dr. Preeti’s Bright Eye Care Hospital, we value your privacy and are committed to protecting your personal data. This policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us digitally.",
    },
    {
      title: "2. Information We Collect",
      content:
        "We may collect the following categories of personal information:\n- Full name, address, phone number, and email\n- Demographic details such as age and gender\n- Health-related data required for medical services\n- Payment and transaction information\n- Website usage data via cookies and analytics tools",
    },
    {
      title: "3. How We Use Your Information",
      content:
        "We use your personal data for the following purposes:\n- To provide healthcare services and consultations\n- To process payments and generate invoices\n- To manage patient records and communication\n- To improve our website and digital services\n- To comply with regulatory and legal obligations",
    },
    {
      title: "4. Data Retention",
      content:
        "We retain your data only as long as necessary for the purposes mentioned in this policy or as required by law. Medical and transactional data may be retained for statutory periods.",
    },
    {
      title: "5. Sharing of Information",
      content:
        "We do not sell or lease your data. However, we may share your information with:\n- Healthcare professionals within the hospital\n- Government agencies as mandated by law\n- Authorized service providers under confidentiality agreements\n- Emergency responders when necessary",
    },
    {
      title: "6. Cookies and Analytics",
      content:
        "We use cookies and third-party analytics tools (such as Google Analytics) to improve your experience and track website performance. You may disable cookies in your browser settings.",
    },
    {
      title: "7. Your Rights",
      content:
        "You have the right to access, correct, or delete your data subject to legal and medical record-keeping requirements. You may also opt-out of non-essential communications at any time.",
    },
    {
      title: "8. Data Security Measures",
      content:
        "We implement strict technical and organizational safeguards to protect your data from unauthorized access, disclosure, or misuse.",
    },
    {
      title: "9. Children's Privacy",
      content:
        "We do not knowingly collect data from children under the age of 18 without verifiable parental consent. Parents/guardians are encouraged to monitor online activity.",
    },
    {
      title: "10. Third-Party Links",
      content:
        "Our website may contain links to external sites. We are not responsible for their privacy practices. Please review their policies before providing personal data.",
    },
    {
      title: "11. Changes to This Policy",
      content:
        "We reserve the right to update this Privacy Policy at any time. Updates will be posted on this page with a revised effective date. Your continued use of our services indicates acceptance of changes.",
    },
    {
      title: "12. Contact Us",
      content:
        "If you have any questions or concerns regarding this policy or your personal data, please contact:\nDr. Preeti’s Bright Eye Care Hospital\n[Insert Address]\nEmail: [Insert Email]\nPhone: [Insert Number]",
    },
  ],
};

export const appointmentTypes = [
  "Telephonic Consultation",
  "Video Call Consultation",
  "Visit Hospital",
];

export const purposesOfVisit = [
  "General Check-up",
  "Eye Surgery",
  "Follow-up",
  "Emergency",
  "Other",
];
