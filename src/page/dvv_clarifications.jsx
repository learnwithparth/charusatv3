import React from "react";

const DvvClarifications = () => {
  const ExtendedProfile = [
    {
      title: "1.1 Number of programs offered year-wise for last five years",
      link: "http://charusat.ac.in/documents/pdfs/data_1/01.Extended%20Profile/1.1.pdf",
    },
    {
      title: "1.2 Number of departments offering academic programmes",
      link: "http://charusat.ac.in/documents/pdfs/data_1/01.Extended%20Profile/1.2.pdf",
    },
    {
      title: "2.1 Number of students year-wise during last five years",
      link: "http://charusat.ac.in/documents/pdfs/data_1/01.Extended%20Profile/2.1.pdf",
    },
    {
      title:
        "2.2 Number of outgoing / final year students year-wise during last five years",
      link: "http://charusat.ac.in/documents/pdfs/data_1/01.Extended%20Profile/2.2.pdf",
    },
    {
      title:
        "2.3 Number of students appeared in the University examination year-wise during the last five years",
      link: "http://charusat.ac.in/documents/pdfs/data_1/01.Extended%20Profile/2.3.pdf",
    },
    {
      title:
        "2.4 Number of revaluation applications year-wise during the last 5 years",
      link: "http://charusat.ac.in/documents/pdfs/data_1/01.Extended%20Profile/2.4.pdf",
    },
    {
      title:
        "3.1 Number of courses in all programs year-wise during last five years",
      link: "http://charusat.ac.in/documents/pdfs/data_1/01.Extended%20Profile/3.1.pdf",
    },
    {
      title:
        "3.2 Number of full time teachers year-wise during the last five years",
      link: "http://charusat.ac.in/documents/pdfs/data_1/01.Extended%20Profile/3.2.pdf",
    },
    {
      title: "3.3 Number of sanctioned posts year-wise during last five years",
      link: "http://charusat.ac.in/documents/pdfs/data_1/01.Extended%20Profile/3.3.pdf",
    },
    {
      title:
        "4.1 Number of eligible applications received for admissions to all the programs year-wise during last five years",
      link: "http://charusat.ac.in/documents/pdfs/data_1/01.Extended%20Profile/4.1.pdf",
    },
    {
      title:
        "4.2 Number of seats earmarked for reserved category as per GOI/State Govt. rule year-wise during last five years",
      link: "http://charusat.ac.in/documents/pdfs/data_1/01.Extended%20Profile/4.2.pdf",
    },
    {
      title: "4.3 Total number of classrooms and seminar halls",
      link: "http://charusat.ac.in/documents/pdfs/data_1/01.Extended%20Profile/4.3.pdf",
    },
    {
      title: "4.4 Total number of computers in the campus for academic purpose",
      link: "http://charusat.ac.in/documents/pdfs/data_1/01.Extended%20Profile/4.4.pdf",
    },
    {
      title:
        "4.5 Total Expenditure excluding salary year-wise during last five years ( INR in Lakhs)",
      link: "http://charusat.ac.in/documents/pdfs/data_1/01.Extended%20Profile/4.5.pdf",
    },
  ];

  const MetricsLevelClarifications = [
    {
      title:
        "1.1.2 Percentage of Programmes where syllabus revision was carried out during the last five years.",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/1.1.2.pdf",
    },
    {
      title:
        "1.1.3 Average percentage of courses having focus on employability/ entrepreneurship/ skill development offered by the institution during the last five years",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/1.1.3.pdf",
    },
    {
      title:
        "1.2.1 Percentage of new courses introduced of the total number of courses across all programs offered during the last five years. ",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/1.2.1.pdf",
    },
    {
      title:
        "1.2.2 Percentage of Programmes in which Choice Based Credit System (CBCS) / elective course system has been implemented (Data for the latest completed academic year). ",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/1.2.2.pdf",
    },
    {
      title:
        "1.3.2 Number of value-added courses for imparting transferable and life skills offered during last five years. ",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/1.3.2.pdf",
    },
    {
      title:
        "1.3.3 Average Percentage of students enrolled in the courses under 1.3.2 above. ",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/1.3.3.pdf",
    },
    {
      title:
        "1.3.4 Percentage of students undertaking field projects / research projects / internships (Data for the latest completed academic year). ",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/1.3.4.pdf",
    },
    {
      title:
        "1.4.1 Structured feedback for design and review of syllabus – semester-wise / year-wise is received from 1) Students, 2) Teachers, 3) Employers, 4) Alumni ",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/1.4.1.pdf",
    },
    {
      title:
        "1.4.2 Feedback processes of the institution may be classified A. Feedback collected, analysed, action taken and feedback hosted on the institutional website B. Feedback collected, analysed and action has been taken C. Feedback collected and analysed D. Feedback collected E. Feedback not collected ",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/1.4.2.pdf",
    },
    {
      title: "2.1.1 Demand Ratio (Average of last five years) ",

      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/2.1.1.pdf",
    },
    {
      title:
        "2.1.2 Average percentage of seats filled against reserved categories (SC, ST, OBC, Divyangjan, etc.) as per applicable reservation policy during the last five years ",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/2.1.2.pdf",
    },
    {
      title:
        "2.2.2 Student - Full time teacher ratio (Data for the latest completed academic year) ",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/2.2.2.pdf",
    },
    {
      title:
        "2.4.1 Average percentage of full time teachers against sanctioned posts during the last five years ",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/2.4.1.pdf",
    },
    {
      title:
        "2.4.2 Average percentage of full time teachers with Ph.D./D.M/M.Ch./D.N.B Superspeciality/D.Sc./D’Lit. year-wise during the last five years ",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/2.4.2.pdf",
    },
    {
      title:
        "2.4.3 Average teaching experience of full time teachers in the same institution (Data for the latest completed academic year in number of years) ",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/2.4.3.pdf",
    },
    {
      title:
        "2.4.4 Average percentage of full time teachers who received awards, recognition, fellowships at State, National, International level from Government/Govt. recognised bodies during the last five years ",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/2.4.4.pdf",
    },
    {
      title:
        "2.5.1 Average number of days from the date of last semester-end/ year- end examination till the declaration of results year-wise during the last five years ",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/2.5.1.pdf",
    },
    {
      title:
        "3.1.2 The institution provides seed money to its teachers for research (average per year, INR in Lakhs) ",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/3.1.2.pdf",
    },
    {
      title:
        "3.1.4 Number of JRFs, SRFs, Post Doctoral Fellows, Research Associates and other research fellows enrolled in the institution during the last five years. ",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/3.1.4.pdf",
    },
    {
      title:
        "3.1.6 Percentage of departments with UGC-SAP, CAS, DST-FIST, DBT, ICSSR and other recognitions by national and international agencies (Data for the latest completed academic year) ",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/3.1.6.pdf",
    },
    {
      title:
        "3.2.1 Extramural funding for Research (Grants sponsored by the non-government sources such as industry, corporate houses, international bodies for research projects) endowments, Chairs in the University during the last five years (INR in Lakhs). ",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/3.2.1.pdf",
    },
    {
      title:
        "3.2.2 Grants for research projects sponsored by the government agencies during the last five years (INR in Lakhs). ",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/3.2.2.pdf",
    },
    {
      title:
        "3.2.3 Number of research projects per teacher funded by government and non-government agencies during the last five years ",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/3.2.3.pdf",
    },
    {
      title:
        "3.3.3 Number of awards / recognitions received for research/innovations by the institution / teachers / research scholars / students during the last five years. ",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/3.3.3.pdf",
    },
    {
      title:
        "3.4.1 The Institution ensures implementation of its stated Code of Ethics for research through the following: 1. Inclusion of research ethics in the research methodology course work 2. Presence of Ethics committee 3. Plagiarism check through software 4. Research Advisory Committee ",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/3.4.1.pdf",
    },
    {
      title:
        "3.4.5 Number of research papers per teachers in the Journals notified on UGC website during the last five years ",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/3.4.5.pdf",
    },
    {
      title:
        "3.4.6 Number of books and chapters in edited volumes/books published and papers published in national/ international conference proceedings per teacher during last five years ",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/3.4.6.pdf",
    },
    {
      title:
        "3.4.7 E-content is developed by teachers : 1.For e-PG-Pathshala 2.For CEC (Under Graduate) 3.For SWAYAM 4. For other MOOCs platform 5.Any other Government Initiatives 6.For Institutional LMS ",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/3.4.7.pdf",
    },
    {
      title:
        "3.5.2 Revenue generated from consultancy and corporate training during the last five years (INR in Lakhs). ",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/3.5.2.pdf",
    },
    {
      title:
        "3.6.2 Number of awards received by the Institution, its teachers and students from Government /Government recognised bodies in recognition of the extension activities carried out during the last five years ",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/3.6.2.pdf",
    },
    {
      title:
        "3.6.3 Number of extension and outreach programs conducted by the institution through NSS/NCC, Government and Government recognised bodies during the last five years ",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/3.6.3.pdf",
    },
    {
      title:
        "3.6.4 Average percentage of students participating in extension activities listed at 3.6.3 above during the last five years ",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/3.6.4.pdf",
    },
    {
      title:
        "4.1.4 Average percentage of expenditure for infrastructure augmentation excluding salary during the last five years (INR in Lakhs) ",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/4.1.4.pdf",
    },
    {
      title:
        "4.2.2 Institution has access to the following: 1. e-journals 2. e-ShodhSindhu 3. Shodhganga Membership 4. e-books 5. Databases 6. Remote access to e-resources ",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/4.2.2.pdf",
    },
    {
      title:
        "4.2.3 Average annual expenditure for purchase of books/ e-books and subscription to journals/e-journals during the last five years (INR in Lakhs) ",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/4.2.3.pdf",
    },
    {
      title:
        "4.2.4 Percentage per day usage of library by teachers and students ( foot falls and login data for online access) during the latest completed academic year ",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/4.2.4.pdf",
    },
    {
      title:
        "4.3.1 Percentage of classrooms and seminar halls with ICT - enabled facilities such as LCD, smart board, Wi-Fi/LAN, audio video recording facilities. (Data for the latest completed academic year) ",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/4.3.1.pdf",
    },
    {
      title:
        "4.3.3 Student - Computer ratio (Data for the latest completed academic year) ",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/4.3.3.pdf",
    },
    {
      title:
        "4.3.4 Available bandwidth of internet connection in the Institutions (Leased line) ",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/4.3.4.pdf",
    },
    {
      title:
        "4.3.5 Institution has the following Facilities for e-content development 1.Media centre 2.Audio visual centre 3.Lecture Capturing System(LCS) 4.Mixing equipments and softwares for editing ",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/4.3.5.pdf",
    },
    {
      title:
        "4.4.1 Average percentage expenditure incurred on maintenance of physical facilities and academic support facilities excluding salary component during the last five years ",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/4.4.1.pdf",
    },
    {
      title:
        "5.1.1 Average percentage of students benefited by scholarships and freeships provided by the institution, Government and non-government agencies (NGOs) during the last five years (other than the students receiving scholarships under the government schemes for reserved categories). ",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/5.1.1.pdf",
    },
    {
      title:
        "5.1.3 Following Capacity development and skills enhancement activities are organised for improving students capability 1. Soft skills 2. Language and communication skills 3. Life skills (Yoga, physical fitness, health and hygiene) 4. Awareness of trends in technology ",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/5.1.3.pdf",
    },
    {
      title:
        "5.1.4 The institution adopts the following for redressal of student grievances including sexual harassment and ragging cases 1. Implementation of guidelines of statutory/regulatory bodies 2. Organisation wide awareness and undertakings on policies with zero tolerance 3. Mechanisms for submission of online/offline students’ grievances 4. Timely redressal of the grievances through appropriate committees ",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/5.1.4.pdf",
    },
    {
      title:
        "5.2.1 Average percentage of students qualifying in state/national/ international level examinations during the last five years (eg: IIT-JAM/CLAT/ NET/SLET/GATE/ GMAT/CAT/GRE/ TOEFL/ Civil Services/State government examinations, etc.) ",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/5.2.1.pdf",
    },
    {
      title:
        "5.2.2 Average percentage of placement of outgoing students during the last five years ",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/5.2.2.pdf",
    },
    {
      title:
        "5.2.3 Percentage of student progression to higher education (previous graduating batch). ",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/5.2.3.pdf",
    },
    {
      title:
        "5.3.1 Number of awards / medals won by students for outstanding performance in sports / cultural activities at inter-university / state / national / international events (award for a team event should be counted as one) during the last five years. ",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/5.3.1.pdf",
    },
    {
      title:
        "5.3.3 Average number of sports and cultural events / competitions organised by the institution per year ",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/5.3.3.pdf",
    },
    {
      title:
        "6.3.2 Average percentage of teachers provided with financial support to attend conferences / workshops and towards membership fee of professional bodies during the last five years. ",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/6.3.2.pdf",
    },
    {
      title:
        "6.3.3 Average number of professional development / administrative training Programmes organized by the institution for teaching and non-teaching staff during the last five years. ",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/6.3.3.pdf",
    },
    {
      title:
        "6.3.4 Average percentage of teachers undergoing online/ face-to-face Faculty Development Programmes (FDP)during the last five years (Professional Development Programmes, Orientation / Induction Programmes, Refresher Course, Short Term Course ). ",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/6.3.4.pdf",
    },
    {
      title:
        "6.4.2 Funds / Grants received from government bodies during the last five years for development and maintenance of infrastructure (not covered under Criteria III and V ) (INR in Lakhs). ",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/6.4.2.pdf",
    },
    {
      title:
        "6.4.3 Funds / Grants received from non-government bodies, individuals, philanthropists during the last five years (not covered in Criterion III and V) (INR in Lakhs) ",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/6.4.3.pdf",
    },
    {
      title:
        "7.1.2 The Institution has facilities for alternate sources of energy and energy conservation measures 1.Solar energy 2.Biogas plant 3.Wheeling to the Grid 4.Sensor-based energy conservation 5.Use of LED bulbs/ power efficient equipment ",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/7.1.2.pdf",
    },
    {
      title:
        "7.1.4 Water conservation facilities available in the Institution: 1.Rain water harvesting 2.Borewell /Open well recharge 3.Construction of tanks and bunds 4.Waste water recycling 5.Maintenance of water bodies and distribution system in the campus ",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/7.1.4.pdf",
    },
    {
      title:
        "7.1.5 Green campus initiatives include: 1.Restricted entry of automobiles 2.Use of Bicycles/ Battery powered vehicles 3.Pedestrian Friendly pathways 4.Ban on use of Plastic 5.landscaping with trees and plants ",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/7.1.5.pdf",
    },
    {
      title:
        "7.1.6 Quality audits on environment and energy are regularly undertaken by the Institution and any awards received for such green campus initiatives: 1.Green audit 2.Energy audit 3.Environment audit 4.Clean and green campus recognitions / awards 5.Beyond the campus environmental promotion activities . ",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/7.1.6.pdf",
    },
    {
      title:
        "7.1.7 The Institution has disabled-friendly, barrier free environment 1.Built environment with ramps/lifts for easy access to classrooms. 2.Divyangjan friendly washrooms 3.Signage including tactile path, lights, display boards and signposts 4.Assistive technology and facilities for Divyangjan accessible website, screen-reading software, mechanized equipment 5. Provision for enquiry and information : Human assistance, reader, scribe, soft copies of reading material, screen reading ",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/7.1.7.pdf",
    },
    {
      title:
        "7.1.10 The Institution has a prescribed code of conduct for students, teachers, administrators and other staff and conducts periodic programmes in this regard. 1.The Code of Conduct is displayed on the website 2.There is a committee to monitor adherence to the Code of Conduct 3.Institution organizes professional ethics programmes for students, teachers, administrators and other staff 4.Annual awareness programmes on Code of Conduct are organized ",
      link: "http://charusat.ac.in/documents/pdfs/data_1/02.Metric%20Level/7.1.10.pdf",
    },
  ];

  return (
    <>
      {/* <PageHeader title={'4 Results found for: Business'} curPage={'Search Result'} /> */}
      <div className="blog-section padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          <div className="post-content">
                            <h3>DVV Clarifications</h3>
                            <hr />
                            <br />
                            {/*  */}
                            <div className="course-single-section">
                              <div className="container">
                                <div className="row justify-content-left">
                                  <div className="col">
                                    <div className="main-part">
                                      <div className="course-video">
                                        <div className="course-video-content">
                                          <div
                                            className="accordion"
                                            id="accordionExample"
                                          >
                                            {/*  */}
                                            <div className="accordion-item">
                                              <div
                                                className="accordion-header"
                                                id="accordion01"
                                              >
                                                <button
                                                  className="d-flex flex-wrap justify-content-between"
                                                  data-bs-toggle="collapse"
                                                  data-bs-target="#videolist1"
                                                  aria-expanded="true"
                                                  aria-controls="videolist1"
                                                >
                                                  <span className="text-white">
                                                    Extended Profile
                                                  </span>{" "}
                                                  <span className="text-white">
                                                    <i class="icofont-square-down"></i>
                                                  </span>{" "}
                                                </button>
                                              </div>
                                              <div
                                                id="videolist1"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="accordion01"
                                                data-bs-parent="#accordionExample"
                                              >
                                                <div
                                                  className="row"
                                                  style={{
                                                    border: "1px solid #e5e5e5",
                                                    margin: "-5px 2px 2px 2px",
                                                    padding: "10px",
                                                  }}
                                                >
                                                  <div className="col">
                                                    <ul
                                                      style={{
                                                        listStyleType: "none",
                                                      }}
                                                    >
                                                      {ExtendedProfile.map(
                                                        (item, index) => (
                                                          <li
                                                            key={index}
                                                            className="my-2"
                                                          >
                                                            <a
                                                              style={{
                                                                color:
                                                                  "#0066b3",
                                                              }}
                                                              href={item.link}
                                                              target="_blank"
                                                              rel="noreferrer"
                                                            >
                                                              {item.title}
                                                            </a>
                                                          </li>
                                                        )
                                                      )}
                                                    </ul>
                                                  </div>
                                                </div>
                                                <br />
                                              </div>
                                            </div>
                                            {/*  */}
                                            <div className="accordion-item">
                                              <div
                                                className="accordion-header"
                                                id="accordion02"
                                              >
                                                <button
                                                  className="d-flex flex-wrap justify-content-between"
                                                  data-bs-toggle="collapse"
                                                  data-bs-target="#videolist2"
                                                  aria-expanded="true"
                                                  aria-controls="videolist2"
                                                >
                                                  <span className="text-white">
                                                    Metrics Level Clarifications
                                                  </span>{" "}
                                                  <span className="text-white">
                                                    <i class="icofont-square-down"></i>
                                                  </span>{" "}
                                                </button>
                                              </div>
                                              <div
                                                id="videolist2"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="accordion02"
                                                data-bs-parent="#accordionExample"
                                              >
                                                <div
                                                  className="row"
                                                  style={{
                                                    border: "1px solid #e5e5e5",
                                                    margin: "-5px 2px 2px 2px",
                                                    padding: "10px",
                                                  }}
                                                >
                                                  <div className="col">
                                                    <ul
                                                      style={{
                                                        listStyleType: "none",
                                                      }}
                                                    >
                                                      {MetricsLevelClarifications.map(
                                                        (item, index) => (
                                                          <li
                                                            key={index}
                                                            className="my-2"
                                                          >
                                                            <a
                                                              style={{
                                                                color:
                                                                  "#0066b3",
                                                              }}
                                                              href={item.link}
                                                              target="_blank"
                                                              rel="noreferrer"
                                                            >
                                                              {item.title}
                                                            </a>
                                                          </li>
                                                        )
                                                      )}
                                                    </ul>
                                                  </div>
                                                </div>
                                                <br />
                                              </div>
                                            </div>
                                            {/*  */}
                                          </div>
                                        </div>
                                      </div>
                                      {/* <Author /> */}

                                      {/* <Respond /> */}
                                    </div>
                                  </div>
                                  {/* <div className="col-lg-4"> */}

                                  {/* <div className="sidebar-part"> */}
                                  {/* <CourseSideDetail /> */}
                                  {/* <CourseSideCetagory /> */}
                                  {/* </div> */}
                                  {/* </div> */}
                                </div>
                              </div>
                            </div>
                            {/*  */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/*  */}

            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default DvvClarifications;
