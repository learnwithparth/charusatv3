import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../component/layout/pageheader";
import Contact from "../component/section/contact";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

const CourseList = [
  {
    courseName: "Bachelor of Business Administration (BBA)",
    faculty: "Faculty of Management Studies",
    Institute: "Indukaka Ipcowala Institute of Management(I2IM)",
    CourseDuration: "03 Years",
    Intake: "180",
    Fees: "Rs 50,000/-",
    Eligibility:
      "CBSE/ISCE/State Board Minimum 50% required in Commerce Stream / Art Stream (with English as a subject)Student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FMS%20I2IM/",
    brochureBtn: "Download Brochure",
    brochureLink:
      "http://charusat.ac.in/Downloads/Brochure/IIIM/",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/i2im/",
    programCode: "4401",
  },
  {
    courseName: "Master of Business Administration (MBA)",
    faculty: "Faculty of Management Studies",
    Institute: "Indukaka Ipcowala Institute of Management(I2IM)",
    CourseDuration: "02 Years",
    Intake: "120",
    Fees: "Rs 1,29,000/-",
    Eligibility:
      "Any Graduate with 50% marks in BBA, B.Tech, B.Com, B.Pharm, BE,Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FMS%20I2IM/",
    brochureBtn: "Download Brochure",
    brochureLink:
      "http://charusat.ac.in/Downloads/Brochure/IIIM/",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/i2im/",
    programCode: "4501",
  },
  {
    courseName: "Bachelor of Computer Application (BCA)",
    faculty: "Faculty of Computer Science and Applications",
    Institute:
      "Smt.Chandaben Mohanbhai Patel Institute of Computer Application(CMPICA)",
    CourseDuration: "03 Years",
    Intake: "180",
    Fees: "Rs 40,000/-",
    Eligibility:
      "CBSE/ISCE/State Board/Commerce Stream with minimum 50% required and Science Stream minimum 45% required, Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FCA%20CMPICA/",
    brochureBtn: "Download Brochure",
    brochureLink:
      "https://charusat.ac.in/Downloads/Brochure/CMPICA/CMPICA_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/cmpica/",
    programCode: "2401",
  },
  {
    courseName: "Master of Computer Application (MCA)",
    faculty: "Faculty of Computer Science and Applications",
    Institute:
      "Smt.Chandaben Mohanbhai Patel Institute of Computer Application(CMPICA)",
    CourseDuration: "02 Years",
    Intake: "120",
    Fees: "Rs 1,11,000/-",
    Eligibility:
      "Any Graduate with 50% marks in BCA, B.Sc (IT), B.Tech Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FCA%20CMPICA/",
    brochureBtn: "Download Brochure",
    brochureLink:
      "https://charusat.ac.in/Downloads/Brochure/CMPICA/CMPICA_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/cmpica/",
    programCode: "2501",
  },
  {
    courseName: "Bachelor of Pharmacy(B.Pharm.)",
    faculty: "Faculty of Pharmacy",
    Institute: "Ramanbhai Patel College of Pharmacy",
    CourseDuration: "04 Years",
    Intake: "100",
    Fees: "Rs 1,30,000/-",
    Eligibility:
      "CBSE/ISCE/State board, Minimum 45% required in PCM subjects (as per PCI), Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "http://charusat.ac.in/Downloads/Syllabus/FPH%20RPCP",
    brochureBtn: "Download Brochure",
    brochureLink:
      "https://charusat.ac.in/Downloads/Brochure/RPCP/RPCP_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/rpcp/",
    programCode: "3401",
  },
  {
    courseName: "Master of Pharmacy (Pharmaceutical Technology)",
    faculty: "Faculty of Pharmacy",
    Institute: "Ramanbhai Patel College of Pharmacy",
    CourseDuration: "02 Years",
    Intake: "15",
    Fees: "Rs 1,89,000/-",
    Eligibility:
      "B.Pharm from PCI approved institute with minimum 50% Should have applied for GPAT/Non GPAT entrance exam Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "http://charusat.ac.in/Downloads/Syllabus/FPH%20RPCP",
    brochureBtn: "Download Brochure",
    brochureLink:
      "https://charusat.ac.in/Downloads/Brochure/RPCP/RPCP_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/rpcp/",
    programCode: "3501",
  },
  {
    courseName: "Master of Pharmacy (Pharmaceutical Quality Assurance)",
    faculty: "Faculty of Pharmacy",
    Institute: "Ramanbhai Patel College of Pharmacy",
    CourseDuration: "02 Years",
    Intake: "15",
    Fees: "Rs 1,89,000/-",
    Eligibility:
      "B.Pharm from PCI approved institute with minimum 50% Should have applied for GPAT/Non GPAT entrance exam Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "http://charusat.ac.in/Downloads/Syllabus/FPH%20RPCP",
    brochureBtn: "Download Brochure",
    brochureLink:
      "https://charusat.ac.in/Downloads/Brochure/RPCP/RPCP_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/rpcp/",
    programCode: "3502",
  },
  {
    courseName: "Master of Pharmacy (Pharmacology)",
    faculty: "Faculty of Pharmacy",
    Institute: "Ramanbhai Patel College of Pharmacy",
    CourseDuration: "02 Years",
    Intake: "9",
    Fees: "Rs 1,89,000/-",
    Eligibility:
      "B.Pharm from PCI approved institute with minimum 50% Should have applied for GPAT/Non GPAT entrance exam Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "http://charusat.ac.in/Downloads/Syllabus/FPH%20RPCP",
    brochureBtn: "Download Brochure",
    brochureLink:
      "https://charusat.ac.in/Downloads/Brochure/RPCP/RPCP_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/rpcp/",
    programCode: "3505",
  },
  {
    courseName: "Master of Pharmacy (Pharmacy Practice)",
    faculty: "Faculty of Pharmacy",
    Institute: "Ramanbhai Patel College of Pharmacy",
    CourseDuration: "02 Years",
    Intake: "3",
    Fees: "Rs 1,89,000/-",
    Eligibility:
      "B.Pharm from PCI approved institute with minimum 50% Should have applied for GPAT/Non GPAT entrance exam Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "http://charusat.ac.in/Downloads/Syllabus/FPH%20RPCP",
    brochureBtn: "Download Brochure",
    brochureLink:
      "https://charusat.ac.in/Downloads/Brochure/RPCP/RPCP_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/rpcp/",
    programCode: "3503",
  },
  {
    courseName: "Master of Pharmacy (Regulatory Affairs)",
    faculty: "Faculty of Pharmacy",
    Institute: "Ramanbhai Patel College of Pharmacy",
    CourseDuration: "02 Years",
    Intake: "15",
    Fees: "Rs 1,89,000/-",
    Eligibility:
      "B.Pharm from PCI approved institute with minimum 50% Should have applied for GPAT/Non GPAT entrance exam Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "http://charusat.ac.in/Downloads/Syllabus/FPH%20RPCP",
    brochureBtn: "Download Brochure",
    brochureLink:
      "https://charusat.ac.in/Downloads/Brochure/RPCP/RPCP_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/rpcp/",
    programCode: "3504",
  },
  {
    courseName: "Bachelor of Physiotherapy (BPT)",
    faculty: "Faculty of Medical Sciences",
    Institute: "Ashok and Rita Patel Institute of Physiotherapy",
    CourseDuration: "4.5 Years",
    Intake: "100",
    Fees: "Rs 1,65,000/-",
    Eligibility:
      "CBSE/ISCE/State board Minimum 35% in PCB subjects Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FMD%20ARIP/",
    brochureBtn: "Download Brochure",
    brochureLink:
      "https://charusat.ac.in/Downloads/Brochure/ARIP/ARIP_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/arip/",
    programCode: "6401",
  },
  {
    courseName: "Master of Physiotherapy (Musculoskeletal Science)",
    faculty: "Faculty of Medical Sciences",
    Institute: "Ashok and Rita Patel Institute of Physiotherapy",
    CourseDuration: "02 Years",
    Intake: "06",
    Fees: "Rs 2,00,000/-",
    Eligibility:
      "A degree in BPT minimum 50 % or equivalent grade pointand compulsory rotatory internship of 6 months with, Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FMD%20ARIP/",
    brochureBtn: "Download Brochure",
    brochureLink:
      "https://charusat.ac.in/Downloads/Brochure/ARIP/ARIP_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/arip/",
    programCode: "6501",
  },
  {
    courseName: "Master of Physiotherapy (Neurological Science)",
    faculty: "Faculty of Medical Sciences",
    Institute: "Ashok and Rita Patel Institute of Physiotherapy",
    CourseDuration: "02 Years",
    Intake: "06",
    Fees: "Rs 2,00,000/-",
    Eligibility:
      "A degree in BPT minimum 50 % or equivalent grade pointand compulsory rotatory internship of 6 months with, Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FMD%20ARIP/",
    brochureBtn: "Download Brochure",
    brochureLink:
      "https://charusat.ac.in/Downloads/Brochure/ARIP/ARIP_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/arip/",
    programCode: "6502",
  },
  {
    courseName: "Master of Physiotherapy (Cardiopulmonary Science)",
    faculty: "Faculty of Medical Sciences",
    Institute: "Ashok and Rita Patel Institute of Physiotherapy",
    CourseDuration: "02 Years",
    Intake: "03",
    Fees: "Rs 2,00,000/-",
    Eligibility:
      "A degree in BPT minimum 50 % or equivalent grade pointand compulsory rotatory internship of 6 months with, Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FMD%20ARIP/",
    brochureBtn: "Download Brochure",
    brochureLink:
      "https://charusat.ac.in/Downloads/Brochure/ARIP/ARIP_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/arip/",
    programCode: "6503",
  },
  {
    courseName: "Master of Physiotherapy (Paediatric)",
    faculty: "Faculty of Medical Sciences",
    Institute: "Ashok and Rita Patel Institute of Physiotherapy",
    CourseDuration: "02 Years",
    Intake: "03",
    Fees: "Rs 2,00,000/-",
    Eligibility:
      "A degree in BPT minimum 50 % or equivalent grade pointand compulsory rotatory internship of 6 months with, Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FMD%20ARIP/",
    brochureBtn: "Download Brochure",
    brochureLink:
      "https://charusat.ac.in/Downloads/Brochure/ARIP/ARIP_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/arip/",
    programCode: "6504",
  },
  {
    courseName: "Master of Physiotherapy (Rehabilitation)",
    faculty: "Faculty of Medical Sciences",
    Institute: "Ashok and Rita Patel Institute of Physiotherapy",
    CourseDuration: "02 Years",
    Intake: "03",
    Fees: "Rs 2,00,000/-",
    Eligibility:
      "A degree in BPT minimum 50 % or equivalent grade pointand compulsory rotatory internship of 6 months with, Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FMD%20ARIP/",
    brochureBtn: "Download Brochure",
    brochureLink:
      "https://charusat.ac.in/Downloads/Brochure/ARIP/ARIP_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/arip/",
    programCode: "6505",
  },
  {
    courseName: "Bachelor of Science (Physics)",
    faculty: "Faculty of Sciences",
    Institute: "P D Patel Institute of Applied Science (PDPIAS)",
    CourseDuration: "03 Years",
    Intake: "30",
    Fees: "Rs 49,000/-",
    Eligibility:
      "CBSE/ISCE/State board Minimum 55% in PCM/B subject, Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink:
      "https://charusat.ac.in/Downloads/Syllabus/FOS%20PDPIAS/Physics/",
    brochureBtn: "Download Brochure",
    brochureLink: "http://charusat.ac.in/Downloads/Brochure/PDPIAS/",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/pdpias/",
    programCode: "5402a",
  },
  {
    courseName:
      "Bachelor of Science (Biological Sciences) (Microbiology/Biochemistry/Biotechnology)",
    faculty: "Faculty of Sciences",
    Institute: "P D Patel Institute of Applied Science (PDPIAS)",
    CourseDuration: "03 Years",
    Intake: "120",
    Fees: "Rs 70,000/-",
    Eligibility:
      "CBSE/ISCE/State board Minimum 55% in PCM/B subject, Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink:
      "https://charusat.ac.in/Downloads/Syllabus/FOS%20PDPIAS/Biology/",
    brochureBtn: "Download Brochure",
    brochureLink: "http://charusat.ac.in/Downloads/Brochure/PDPIAS/",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/pdpias/",
    programCode: "5401",
  },
  {
    courseName: "Master of Science (Microbiology)",
    faculty: "Faculty of Sciences",
    Institute: "P D Patel Institute of Applied Science (PDPIAS)",
    CourseDuration: "02 Years",
    Intake: "30",
    Fees: "Rs 80,000/-",
    Eligibility:
      "B.Sc (Micro/Bio Chemistry/ Biotechnology) minimum 50% required, Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink:
      "https://charusat.ac.in/Downloads/Syllabus/FOS%20PDPIAS/Biology/",
    brochureBtn: "Download Brochure",
    brochureLink: "http://charusat.ac.in/Downloads/Brochure/PDPIAS/",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/pdpias/",
    programCode: "5503",
  },
  {
    courseName: "Master of Science (Biochemistry)",
    faculty: "Faculty of Sciences",
    Institute: "P D Patel Institute of Applied Science (PDPIAS)",
    CourseDuration: "02 Years",
    Intake: "30",
    Fees: "Rs 80,000/-",
    Eligibility:
      "B.Sc (Micro/Bio Chemistry/ Biotechnology) minimum 50% required, Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink:
      "https://charusat.ac.in/Downloads/Syllabus/FOS%20PDPIAS/Biology/",
    brochureBtn: "Download Brochure",
    brochureLink: "http://charusat.ac.in/Downloads/Brochure/PDPIAS/",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/pdpias/",
    programCode: "5502",
  },
  {
    courseName: "Master of Science (Biotechnology)",
    faculty: "Faculty of Sciences",
    Institute: "P D Patel Institute of Applied Science (PDPIAS)",
    CourseDuration: "02 Years",
    Intake: "30",
    Fees: "Rs 80,000/-",
    Eligibility:
      "B.Sc (Micro/Bio Chemistry/ Biotechnology) minimum 50% required, Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink:
      "https://charusat.ac.in/Downloads/Syllabus/FOS%20PDPIAS/Biology/",
    brochureBtn: "Download Brochure",
    brochureLink: "http://charusat.ac.in/Downloads/Brochure/PDPIAS/",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/pdpias/",
    programCode: "5501",
  },
  {
    courseName: "Master of Science (Advance Organic Chemistry)",
    faculty: "Faculty of Sciences",
    Institute: "P D Patel Institute of Applied Science (PDPIAS)",
    CourseDuration: "02 Years",
    Intake: "40",
    Fees: "Rs 70,000/-",
    Eligibility:
      "B.Sc(Chemistry) minimum 50% required, Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink:
      "https://charusat.ac.in/Downloads/Syllabus/FOS%20PDPIAS/Chemistry/",
    brochureBtn: "Download Brochure",
    brochureLink: "http://charusat.ac.in/Downloads/Brochure/PDPIAS/",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/pdpias/",
    programCode: "5505",
  },
  {
    courseName: "Master of Science (Physics)",
    faculty: "Faculty of Sciences",
    Institute: "P D Patel Institute of Applied Science (PDPIAS)",
    CourseDuration: "02 Years",
    Intake: "30",
    Fees: "Rs 60,000/-",
    Eligibility:
      "B.Sc(Physics) minimum 50% required,Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink:
      "https://charusat.ac.in/Downloads/Syllabus/FOS%20PDPIAS/Physics/",
    brochureBtn: "Download Brochure",
    brochureLink: "http://charusat.ac.in/Downloads/Brochure/PDPIAS/",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/pdpias/",
    programCode: "5506",
  },
  {
    courseName: "Bachelor of Science (Information Technology)",
    faculty: "Faculty of Computer Sceince and Applications",
    Institute:
      "Smt.Chandaben Mohanbhai Patel Institute of Computer Application (CMPICA)",
    CourseDuration: "03 Years",
    Intake: "120",
    Fees: "Rs 40,000/-",
    Eligibility:
      "CBSE/ISCE/State Board/Commerce Stream with minimum 50% required and Science Stream minimum 45% required, Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FCA%20CMPICA/",
    brochureBtn: "Download Brochure",
    brochureLink:
      "https://charusat.ac.in/Downloads/Brochure/CMPICA/CMPICA_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/cmpica/",
    programCode: "2402",
  },
  {
    courseName: "Master of Science (Information Technology)",
    faculty: "Faculty of Computer Sceince and Applications",
    Institute:
      "Smt.Chandaben Mohanbhai Patel Institute of Computer Application (CMPICA)",
    CourseDuration: "02 Years",
    Intake: "30",
    Fees: "Rs 60,000/-",
    Eligibility:
      "Any Graduate with 50% marks in BCA, B.Sc (IT), B.Tech Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FCA%20CMPICA/",
    brochureBtn: "Download Brochure",
    brochureLink:
      "https://charusat.ac.in/Downloads/Brochure/CMPICA/CMPICA_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/cmpica/",
    programCode: "2502",
  },
  {
    courseName: "Bachelor of Science (Nursing)",
    faculty: "Faculty of Medical Sciences",
    Institute: "Manikaka Topawala Institute of Nursing (MTIN)",
    CourseDuration: "04 Years",
    Intake: "60",
    Fees: "Rs 1,56,000/-",
    Eligibility:
      "CBSE/ISCE/State board Minimum 45% in PCB subjects (as per INC)",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FMD%20MTIN/",
    brochureBtn: "Download Brochure",
    brochureLink:
      "https://charusat.ac.in/Downloads/Brochure/MTIN/MTIN_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/mtin/",
    programCode: "6402",
  },
  {
    courseName: "Master of Science Nursing (Community Health)",
    faculty: "Faculty of Medical Sciences",
    Institute: "Manikaka Topawala Institute of Nursing (MTIN)",
    CourseDuration: "02 Years",
    Intake: "04",
    Fees: "Rs 1,92,000/-",
    Eligibility:
      "A degree in B.Sc. (Nursing) andminimum 1 year of work experience post B.Sc. Nursing and Minimum 1 year experience,Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FMD%20MTIN/",
    brochureBtn: "Download Brochure",
    brochureLink:
      "https://charusat.ac.in/Downloads/Brochure/MTIN/MTIN_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/mtin/",
    programCode: "6510",
  },
  {
    courseName: "Master of Science Nursing (Mental Health)",
    faculty: "Faculty of Medical Sciences",
    Institute: "Manikaka Topawala Institute of Nursing (MTIN)",
    CourseDuration: "02 Years",
    Intake: "04",
    Fees: "Rs 1,92,000/-",
    Eligibility:
      "A degree in B.Sc. (Nursing) andminimum 1 year of work experience post B.Sc. Nursing and Minimum 1 year experience,Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FMD%20MTIN/",
    brochureBtn: "Download Brochure",
    brochureLink:
      "https://charusat.ac.in/Downloads/Brochure/MTIN/MTIN_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/mtin/",
    programCode: "6511",
  },
  {
    courseName: "Master of Science Nursing (Obstetrics and Gynaecology)",
    faculty: "Faculty of Medical Sciences",
    Institute: "Manikaka Topawala Institute of Nursing (MTIN)",
    CourseDuration: "02 Years",
    Intake: "04",
    Fees: "Rs 1,92,000/-",
    Eligibility:
      "A degree in B.Sc. (Nursing) andminimum 1 year of work experience post B.Sc. Nursing and Minimum 1 year experience,Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FMD%20MTIN/",
    brochureBtn: "Download Brochure",
    brochureLink:
      "https://charusat.ac.in/Downloads/Brochure/MTIN/MTIN_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/mtin/",
    programCode: "6508",
  },
  // {
  //   courseName:"Master of Science Nursing (Pediatrics)",
  //   faculty:"Faculty of Medical Sciences",
  //   Institute:"Manikaka Topawala Institute of Nursing (MTIN)",
  //   CourseDuration: "02 Years",
  //   Intake:"04",
  //   Fees:"Rs 1,92,000/-",
  //   Eligibility:"A degree in B.Sc. (Nursing) andminimum 1 year of work experience post B.Sc. Nursing and Minimum 1 year experience,Any student within/outside Gujarat",
  //   syllabusBtn:"View Syllabus",
  //   syllabusLink:"https://charusat.ac.in/Downloads/Syllabus/FMD%20MTIN/",
  //   brochureBtn:"Download Brochure",
  //   brochureLink:"https://charusat.ac.in/Downloads/Brochure/MTIN/MTIN_Brochure.pdf",
  //   websiteBtn:"Visit Website",
  //   websiteLink:"https://charusat.ac.in/mtin/",
  //   programCode:"",
  // },
  {
    courseName: "Master of Science Nursing (Medical Surgical)",
    faculty: "Faculty of Medical Sciences",
    Institute: "Manikaka Topawala Institute of Nursing (MTIN)",
    CourseDuration: "02 Years",
    Intake: "04",
    Fees: "Rs 1,92,000/-",
    Eligibility:
      "A degree in B.Sc. (Nursing) andminimum 1 year of work experience post B.Sc. Nursing and Minimum 1 year experience,Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FMD%20MTIN/",
    brochureBtn: "Download Brochure",
    brochureLink:
      "https://charusat.ac.in/Downloads/Brochure/MTIN/MTIN_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/mtin/",
    programCode: "6507",
  },
  {
    courseName: "Bachelor of Science (Medical Imaging Technology)",
    faculty: "Faculty of Medical Sciences",
    Institute:
      "Bapubhai Desaibhai Patel Institute of Paramedical Science(BDPIPS)",
    CourseDuration: "04 Years",
    Intake: "30",
    Fees: "Rs 60,000/-",
    Eligibility:
      "CBSE/ISCE/State board Minimum 50% in PCB subjects, Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FMD%20CIPS/",
    brochureBtn: "Download Brochure",
    brochureLink: "http://charusat.ac.in/Downloads/Brochure/CIPS/",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/cips/",
    programCode: "6403",
  },
  {
    courseName: "Bachelor of Science (Medical Technology)",
    faculty: "Faculty of Medical Sciences",
    Institute:
      "Bapubhai Desaibhai Patel Institute of Paramedical Science(BDPIPS)",
    CourseDuration: "03+1 Years",
    Intake: "40",
    Fees: "Rs 40,000/-",
    Eligibility:
      "CBSE/ISCE/State board Minimum 50% in PCB subjects, Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FMD%20CIPS/",
    brochureBtn: "Download Brochure",
    brochureLink: "http://charusat.ac.in/Downloads/Brochure/CIPS/",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/cips/",
    programCode: "6406",
  },
  {
    courseName:
      "Bachelor of Science (Operation Theater and Anaesthesia Technology)",
    faculty: "Faculty of Medical Sciences",
    Institute:
      "Bapubhai Desaibhai Patel Institute of Paramedical Science(BDPIPS)",
    CourseDuration: "04 Years",
    Intake: "30",
    Fees: "Rs 40,000/-",
    Eligibility:
      "CBSE/ISCE/State board Minimum 50% in PCB subjects, Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FMD%20CIPS/",
    brochureBtn: "Download Brochure",
    brochureLink: "http://charusat.ac.in/Downloads/Brochure/CIPS/",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/cips/",
    programCode: "6404",
  },
  {
    courseName: "Master of Science (Medical Laboratory Technology)",
    faculty: "Faculty of Medical Sciences",
    Institute:
      "Bapubhai Desaibhai Patel Institute of Paramedical Science(BDPIPS)",
    CourseDuration: "02 Years",
    Intake: "30",
    Fees: "Rs 60,000/-",
    Eligibility:
      "B.Sc (Micro/Bio Technology/Chemistry and DMLT) minimum 50% required, Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FMD%20CIPS/",
    brochureBtn: "Download Brochure",
    brochureLink: "http://charusat.ac.in/Downloads/Brochure/CIPS/",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/cips/",
    programCode: "6513",
  },
  {
    courseName: "Master of Science (Medical Imaging Technology)",
    faculty: "Faculty of Medical Sciences",
    Institute:
      "Bapubhai Desaibhai Patel Institute of Paramedical Science(BDPIPS)",
    CourseDuration: "02 Years",
    Intake: "10",
    Fees: "Rs 1,00,000/-",
    Eligibility:
      "B.Sc (Medical Imaging Technology) minimum 50% required, Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FMD%20CIPS/",
    brochureBtn: "Download Brochure",
    brochureLink: "http://charusat.ac.in/Downloads/Brochure/CIPS/",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/cips/",
    programCode: "6514",
  },
  {
    courseName: "Bachelor of Optometry",
    faculty: "Faculty of Medical Sciences",
    Institute:
      "Bapubhai Desaibhai Patel Institute of Paramedical Science(BDPIPS)",
    CourseDuration: "04 Years",
    Intake: "20",
    Fees: "Rs 1,00,000/-",
    Eligibility:
      "CBSE/ISCE/State board Minimum 50% in PCB subjects, Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FMD%20CIPS/",
    brochureBtn: "Download Brochure",
    brochureLink: "http://charusat.ac.in/Downloads/Brochure/CIPS/",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/cips/",
    programCode: "6405",
  },
  {
    courseName: "Bachelor of Technology (Civil Engineering)",
    faculty: "Faculty of Technology and Engineering",
    Institute: "Chandubhai S. Patel Insitute of Technology(CSPIT)",
    CourseDuration: "04 Years",
    Intake: "90",
    Fees: "1,28,000/-",
    Eligibility:
      "CBSE/ISCE/State board, Minimum 45% required in PCM subjects (as per AICTE), Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FTE%20CSPIT/CL/",
    brochureBtn: "Download Brochure",
    brochureLink: "http://charusat.ac.in/Downloads/Brochure/CSPIT/IT/B.TECH_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://cspitcivil.com/",
    programCode: "1406",
  },
  {
    courseName: "Bachelor of Technology (Computer Engineering)",
    faculty: "Faculty of Technology and Engineering",
    Institute:
      "Chandubhai S. Patel Insitute of Technology(CSPIT) | Devang Patel Institute of Advance Technology and Research (DEPSTAR)",
    CourseDuration: "04 Years",
    Intake: "CSPIT-120 | DEPSTAR-120",
    Fees: "CSPIT-Rs 1,28,000/- | DEPSTAR-Rs 98,000/-",
    Eligibility:
      "CBSE/ISCE/State board, Minimum 45% required in PCM subjects (as per AICTE), Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FTE%20CSPIT/CE/",
    brochureBtn: "Download Brochure",
    brochureLink: "http://charusat.ac.in/Downloads/Brochure/CSPIT/IT/B.TECH_Brochure.pdf",
    websiteBtn: "Visit CSPIT",
    websiteLink: "https://charusat.ac.in/cspit/ce/",
    txtBtn4: "Visit DEPSTAR",
    linkbtn4: "https://charusat.ac.in/depstar/ce/",
    showLinkBtn4: true,
    programCode: "1401",
  },
  {
    courseName: "Bachelor of Technology (Computer Science and Engineering)",
    faculty: "Faculty of Technology and Engineering",
    Institute:
      "Chandubhai S. Patel Insitute of Technology(CSPIT) | Devang Patel Institute of Advance Technology and Research (DEPSTAR)",
    CourseDuration: "04 Years",
    Intake: "CSPIT-60 | DEPSTAR-120",
    Fees: "CSPIT-Rs 1,28,000/- | DEPSTAR-Rs 98,000/-",
    Eligibility:
      "CBSE/ISCE/State board, Minimum 45% required in PCM subjects (as per AICTE), Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FTE%20CSPIT/CSE/",
    brochureBtn: "Download Brochure",
    brochureLink: "http://charusat.ac.in/Downloads/Brochure/CSPIT/IT/B.TECH_Brochure.pdf",
    websiteBtn: "Visit CSPIT",
    websiteLink: "https://charusat.ac.in/cspit/cse/",
    txtBtn4: "Visit DEPSTAR",
    linkbtn4: "https://charusat.ac.in/depstar/cse/",
    showLinkBtn4: true,
    programCode: "1407",
  },
  {
    courseName:
      "Bachelor of Technology (Computer Science and Engineering Artificial Intelligence and Machine Learning)",
    faculty: "Faculty of Technology and Engineering",
    Institute:
      "Chandubhai S. Patel Insitute of Technology(CSPIT) | Devang Patel Institute of Advance Technology and Research (DEPSTAR)",
    CourseDuration: "04 Years",
    Intake: "CSPIT-60 | DEPSTAR-120",
    Fees: "CSPIT-Rs 1,35,000/- | DEPSTAR-Rs 1,0,000/-",
    Eligibility:
      "CBSE/ISCE/State board, Minimum 45% required in PCM subjects (as per AICTE), Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FTE%20CSPIT/CSE/",
    brochureBtn: "Download Brochure",
    brochureLink: "http://charusat.ac.in/Downloads/Brochure/CSPIT/IT/B.TECH_Brochure.pdf",
    websiteBtn: "Visit CSPIT",
    websiteLink: "https://charusat.ac.in/cspit/ce/",
    txtBtn4: "Visit DEPSTAR",
    linkbtn4: "https://charusat.ac.in/depstar/cse/",
    showLinkBtn4: true,
    programCode: "14075",
  },
  {
    courseName: "Bachelor of Technology (Electrical Engineering)",
    faculty: "Faculty of Technology and Engineering",
    Institute: "Chandubhai S. Patel Insitute of Technology(CSPIT)",
    CourseDuration: "04 Years",
    Intake: "60",
    Fees: "Rs 1,28,000/-",
    Eligibility:
      "CBSE/ISCE/State board, Minimum 45% required in PCM subjects (as per AICTE), Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FTE%20CSPIT/EE/",
    brochureBtn: "Download Brochure",
    brochureLink: "http://charusat.ac.in/Downloads/Brochure/CSPIT/IT/B.TECH_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/cspit/ee/",
    programCode: "1403",
  },
  {
    courseName:
      "Bachelor of Technology (Electronics and Communication Engineering)",
    faculty: "Faculty of Technology and Engineering",
    Institute: "Chandubhai S. Patel Insitute of Technology(CSPIT)",
    CourseDuration: "04 Years",
    Intake: "60",
    Fees: "Rs 1,28,000/-",
    Eligibility:
      "CBSE/ISCE/State board, Minimum 45% required in PCM subjects (as per AICTE), Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FTE%20CSPIT/EC/",
    brochureBtn: "Download Brochure",
    brochureLink: "http://charusat.ac.in/Downloads/Brochure/CSPIT/IT/B.TECH_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/cspit/ec/",
    programCode: "1402",
  },
  {
    courseName: "Bachelor of Technology (Information Technology)",
    faculty: "Faculty of Technology and Engineering",
    Institute:
      "Chandubhai S. Patel Insitute of Technology(CSPIT) | Devang Patel Institute of Advance Technology and Research (DEPSTAR)",
    CourseDuration: "04 Years",
    Intake: "CSPIT-120 | DEPSTAR-60",
    Fees: "CSPIT-Rs 1,28,000/- | DEPSTAR-Rs 98,000/-",
    Eligibility:
      "CBSE/ISCE/State board, Minimum 45% required in PCM subjects (as per AICTE), Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FTE%20CSPIT/IT/",
    brochureBtn: "Download Brochure",
    brochureLink: "http://charusat.ac.in/Downloads/Brochure/CSPIT/IT/B.TECH_Brochure.pdf",
    websiteBtn: "Visit CSPIT",
    websiteLink: "https://charusat.ac.in/cspit/it/",
    txtBtn4: "Visit DEPSTAR",
    linkbtn4: "https://charusat.ac.in/depstar/it/",
    showLinkBtn4: true,
    programCode: "1404",
  },
  {
    courseName: "Bachelor of Technology (Mechanical Engineering)",
    faculty: "Faculty of Technology and Engineering",
    Institute: "Chandubhai S. Patel Insitute of Technology(CSPIT)",
    CourseDuration: "04 Years",
    Intake: "60",
    Fees: "Rs 1,28,000/-",
    Eligibility:
      "CBSE/ISCE/State board, Minimum 45% required in PCM subjects (as per AICTE), Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FTE%20CSPIT/ME",
    brochureBtn: "Download Brochure",
    brochureLink: "http://charusat.ac.in/Downloads/Brochure/CSPIT/IT/B.TECH_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/cspit/me/",
    programCode: "1405",
  },
  // {
  //   courseName:"Master of Technology (Embedded System and VLSI Design)",
  //   faculty:"Faculty of Technology and Engineering",
  //   Institute:"Chandubhai S. Patel Insitute of Technology(CSPIT)",
  //   CourseDuration: "02 Years",
  //   Intake:"18",
  //   Fees:"Rs 1,59,000/-",
  //   Eligibility:"BE/B.Tech in relevant discipline with minimum 50 % and should have applied/appeared in GATE/Non-GATE Entrance Exam Any student within/outside Gujarat",
  //   syllabusBtn:"View Syllabus",
  //   syllabusLink:"https://charusat.ac.in/Downloads/Syllabus/FTE%20CSPIT/EC/",
  //   brochureBtn:"Download Brochure",
  //   brochureLink:"",
  //   websiteBtn:"Visit Website",
  //   websiteLink:"https://charusat.ac.in/cspit/ec/",
  //   programCode:"",
  // },
  {
    courseName: "Master of Technology (Structural Engineering)",
    faculty: "Faculty of Technology and Engineering",
    Institute: "Chandubhai S. Patel Insitute of Technology(CSPIT)",
    CourseDuration: "02 Years",
    Intake: "18",
    Fees: "Rs 1,59,000/-",
    Eligibility:
      "BE/B.Tech in relevant discipline with minimum 50 % and should have applied/appeared in GATE/Non-GATE Entrance Exam Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FTE%20CSPIT/CL/",
    brochureBtn: "Download Brochure",
    brochureLink: "http://charusat.ac.in/Downloads/Brochure/CSPIT/IT/B.TECH_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://cspitcivil.com",
    programCode: "1406",
  },
  {
    courseName: "Master of Technology (Computer Engineering)",
    faculty: "Faculty of Technology and Engineering",
    Institute: "Chandubhai S. Patel Insitute of Technology(CSPIT)",
    CourseDuration: "02 Years",
    Intake: "18",
    Fees: "Rs 1,59,000/-",
    Eligibility:
      "BE/B.Tech in relevant discipline with minimum 50 % and should have applied/appeared in GATE/Non-GATE Entrance Exam Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FTE%20CSPIT/CE/",
    brochureBtn: "Download Brochure",
    brochureLink: "http://charusat.ac.in/Downloads/Brochure/CSPIT/IT/B.TECH_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/cspit/ce/",
    programCode: "1503",
  },
  {
    courseName: "Master of Technology (Electrical Power System)",
    faculty: "Faculty of Technology and Engineering",
    Institute: "Chandubhai S. Patel Insitute of Technology(CSPIT)",
    CourseDuration: "02 Years",
    Intake: "18",
    Fees: "Rs 1,59,000/-",
    Eligibility:
      "BE/B.Tech in relevant discipline with minimum 50 % and should have applied/appeared in GATE/Non-GATE Entrance Exam Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FTE%20CSPIT/EE/",
    brochureBtn: "Download Brochure",
    brochureLink: "http://charusat.ac.in/Downloads/Brochure/CSPIT/IT/B.TECH_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/cspit/ee/",
    programCode: "1504",
  },
  {
    courseName: "Master of Technology (Advanced Manufacturing Technology)",
    faculty: "Faculty of Technology and Engineering",
    Institute: "Chandubhai S. Patel Insitute of Technology(CSPIT)",
    CourseDuration: "02 Years",
    Intake: "18",
    Fees: "Rs 1,59,000/-",
    Eligibility:
      "BE/B.Tech in relevant discipline with minimum 50 % and should have applied/appeared in GATE/Non-GATE Entrance Exam Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FTE%20CSPIT/ME/",
    brochureBtn: "Download Brochure",
    brochureLink: "http://charusat.ac.in/Downloads/Brochure/CSPIT/IT/B.TECH_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/cspit/me/",
    programCode: "1507",
  },
  // {
  //   courseName:"Master of Technology (Thermal Engineering)",
  //   faculty:"Faculty of Technology and Engineering",
  //   Institute:"Chandubhai S. Patel Insitute of Technology(CSPIT)",
  //   CourseDuration: "02 Years",
  //   Intake:"18",
  //   Fees:"Rs 1,59,000/-",
  //   Eligibility:"BE/B.Tech in relevant discipline with minimum 50 % and should have applied/appeared in GATE/Non-GATE Entrance Exam Any student within/outside Gujarat",
  //   syllabusBtn:"View Syllabus",
  //   syllabusLink:"https://charusat.ac.in/Downloads/Syllabus/FTE%20CSPIT/ME/",
  //   brochureBtn:"Download Brochure",
  //   brochureLink:"#",
  //   websiteBtn:"Visit Website",
  //   websiteLink:"https://charusat.ac.in/cspit/me/",
  //   programCode:"",
  // },
  {
    courseName:
      "Post Graduate Diploma in Medical Laboratory Technology (PGDMLT)",
    faculty: "Faculty of Medical Sciences",
    Institute:
      "Bapubhai Desaibhai Patel Institute of Paramedical Sciences(BDPIPS)",
    CourseDuration: "01 Years",
    Intake: "20",
    Fees: "Rs 20,000/-",
    Eligibility:
      "B.Sc (Micro/Bio Technology/Chemistry DMLT)minimum 50% required,Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "http://charusat.ac.in/Downloads/Syllabus/FMD%20CIPS/",
    brochureBtn: "Download Brochure",
    brochureLink: "http://charusat.ac.in/Downloads/Brochure/CIPS/",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/cips/",
    programCode: "PGDMLT",
  },
  {
    courseName: "Post Graduate Diploma in Clinical Hypnosis (PGDCH)",
    faculty: "Faculty of Medical Sciences",
    Institute:
      "Bapubhai Desaibhai Patel Institute of Paramedical Sciences(BDPIPS)",
    CourseDuration: "01 Years",
    Intake: "30",
    Fees: "Rs 45,000/-",
    Eligibility:
      "B.Sc (Micro/Bio Technology/Chemistry DMLT)minimum 50% required,Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FMD%20CIPS/",
    brochureBtn: "Download Brochure",
    brochureLink: "http://charusat.ac.in/Downloads/Brochure/CIPS/",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/cips/",
    programCode: "6303",
  },
  {
    courseName: "Post Graduate Diploma in Cyber Security (PGDCS)",
    faculty: "Faculty of Technology and Engineering",
    Institute: "Chandubhai S. Patel Institute of Technology (CSPIT)",
    CourseDuration: "01 Years",
    Intake: "15",
    Fees: "Rs 1,50,000/-",
    Eligibility: "Graduate in any discipline",
    syllabusBtn: "View Syllabus",
    syllabusLink: "http://charusat.ac.in/Downloads/Syllabus/FTE%20CSPIT/",
    brochureBtn: "Download Brochure",
    brochureLink: "http://charusat.ac.in/Downloads/Brochure/CSPIT/IT/B.TECH_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://pgdcs.charusat.ac.in/",
    programCode: "1301",
  },
  {
    courseName: "General Nursing Midwifery (GNM)",
    faculty: "Faculty of Medical Sciences",
    Institute: "Manikaka Topawala Institute of Nursing (MTIN)",
    CourseDuration: "03 Years",
    Intake: "40",
    Fees: "Rs 1,10,000/-",
    Eligibility:
      "HSC or Equivalent examination with Science Stream, General Stream,Vyavsaylakshi stream,Uchchatar Uttar Buniyadi Pravah Stream with English subject Minimum 40% required",
    syllabusBtn: "View Syllabus",
    syllabusLink: "http://charusat.ac.in/Downloads/Syllabus/FMD%20MTIN/",
    brochureBtn: "Download Brochure",
    brochureLink:
      "https://charusat.ac.in/Downloads/Brochure/MTIN/MTIN_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/mtin",
    programCode: "GNM",
  },
];

const Transport = () => {
  return (
    <Fragment>
      {/* <PageHeader title={'4 Results found for: Business'} curPage={'Search Result'} /> */}

      <div className="blog-section padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              {CourseList.map((val, i) => (
                <article id={val.programCode}>
                  <div className="section-wrapper">
                    <div className="row row-cols-1 justify-content-center g-4">
                      <div className="col">
                        <div className="post-item style-2">
                          <div className="post-inner">
                            <div className="post-content">
                              <h4>{val.courseName}</h4>
                              <div className="meta-post">
                                {/* <h2>{val.courseName}</h2> */}
                                {/* <p>
                                  <b>Faculty:</b> {val.faculty}
                                </p>
                                <p>
                                  <b>Institute:</b> {val.Institute}
                                </p>
                                <p>
                                  <b>Course Duration:</b> {val.CourseDuration}
                                </p>
                                <p>
                                  <b>Intake:</b> {val.Intake}
                                </p>
                                <p>
                                  <b>Fees:</b> {val.Fees}
                                </p>
                                <p>
                                  <b>Eligibility:</b> {val.Eligibility}
                                </p> */}
                                <table
                                  style={{
                                    width: "100%",
                                    borderCollapse: "collapse",
                                    textAlign: "left",
                                  }}
                                >
                                  <tr>
                                    <td>
                                      <b>Faculty: </b>
                                    </td>
                                    <td>{val.faculty}</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <b>Institute: </b>
                                    </td>
                                    <td>{val.Institute}</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <b>Course Duration: </b>
                                    </td>
                                    <td>{val.CourseDuration}</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <b>Intake: </b>
                                    </td>
                                    <td>{val.Intake}</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <b>Fees: </b>
                                    </td>
                                    <td>{val.Fees}</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <b>Eligibility: </b>
                                    </td>
                                    <td>{val.Eligibility}</td>
                                  </tr>
                                </table>
                                {val.syllabusLink !== "#" ? (
                                  <a class="lab-btn" href={val.syllabusLink}>
                                    <span>{val.syllabusBtn}</span>
                                  </a>
                                ) : (
                                  <span></span>
                                )}{" "}
                                {val.brochureLink !== "#" ? (
                                  <a
                                    class="lab-btn my-2"
                                    href={val.brochureLink}
                                  >
                                    <span>{val.brochureBtn}</span>
                                  </a>
                                ) : (
                                  <span></span>
                                )}{" "}
                                {val.websiteLink !== "#" ? (
                                  <a
                                    class="lab-btn my-2"
                                    href={val.websiteLink}
                                  >
                                    <span>{val.websiteBtn}</span>
                                  </a>
                                ) : (
                                  <span></span>
                                )}{" "}
                                {val.showLinkBtn4 ? (
                                  <a class="lab-btn my-2" href={val.linkbtn4}>
                                    <span>{val.txtBtn4}</span>
                                  </a>
                                ) : (
                                  <span></span>
                                )}
                              </div>

                              {/* <Link to="/blog-single" className="lab-btn"><span>Operator's Detail <i className="icofont-external-link"></i></span></Link> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                </article>
              ))}
            </div>
            {/* <Contact
                name="Dr Swayamprakash Patel"
                email="swayamprakash.patel@charusat.ac.in"
                phone="+91-1234567890"
              /> */}
          </div>
        </div>
      </div>

      {/* <div className="shop-cart padding-tb">
        <div className="container">
          <div className="section-wrapper">
            <div className="cart-top">
              <table>
                <thead>
                  <tr>
                    <th className="cat-product">Sr No.</th>
                    <th className="cat-product">Route</th>
                    <th className="cat-price">Transporters' Name</th>
                    <th className="cat-toprice">Contact Person</th>
                    <th className="cat-edit">Contact No.</th>
                  </tr>
                </thead>
                <tbody>
                  {transporterList.map((val, i) => (
                    <tr key={i}>
                      <td className="product-item cat-product">
                        {val.srNo}
                      </td>
                      <td className="cat-product">{val.route}</td>
                      <td className="cat-price">{val.transporterName}</td>
                      <td className="cat-toprice">{val.contactPerson}</td>
                      <td className="cat-edit">{val.contactNo}</td>
                      
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div> */}
    </Fragment>
  );
};

export default Transport;
