import { Fragment } from "react";
import Iframe from "react-iframe";

const IEC = () => {
  const SOPData = [
    {
      title: "1. authority for formation",
      href: "https://charusat.ac.in/files/IEC-CHARUSAT/sop/sop_1_authority_for_formation.pdf",
    },
    {
      title: "2. sop for sops",
      href: "https://charusat.ac.in/files/IEC-CHARUSAT/sop/sop_2_sop_for_sops.pdf",
    },
    {
      title: "3. ec composition",
      href: "https://charusat.ac.in/files/IEC-CHARUSAT/sop/sop_3_ec_composition.pdf",
    },
    {
      title: "4. review of clinical trial protocol",
      href: "https://charusat.ac.in/files/IEC-CHARUSAT/sop/sop_4_review_of_clinical_trial_protocol.pdf",
    },
    {
      title: "5. process of review",
      href: "https://charusat.ac.in/files/IEC-CHARUSAT/sop/sop_5_process_of_review.pdf",
    },
    {
      title: "6. Decision Making and Post Review Activities",
      href: "https://charusat.ac.in/files/IEC-CHARUSAT/sop/sop_6_Decision Making and Post Review Activities.pdf",
    },
    {
      title: "7. Monitoring of Research Projects",
      href: "https://charusat.ac.in/files/IEC-CHARUSAT/sop/sop_7_Monitoring of Research Projects.pdf",
    },
    {
      title: "8. Administrative Support",
      href: "https://charusat.ac.in/files/IEC-CHARUSAT/sop/sop_8_Administrative Support.pdf",
    },
    {
      title: "9. Record Keeping and Archival",
      href: "https://charusat.ac.in/files/IEC-CHARUSAT/sop/sop_9_Record Keeping and Archival.pdf",
    },
    {
      title: "10. Master Training & Self-Assessment",
      href: "https://charusat.ac.in/files/IEC-CHARUSAT/sop/sop_10_Master Training & Self-Assessment.pdf",
    },
    {
      title: "11. Amendment-1",
      href: "https://charusat.ac.in/files/IEC-CHARUSAT/sop/Amendment_1.pdf",
    },
    {
      title: "12. Amendment-2",
      href: "https://charusat.ac.in/files/IEC-CHARUSAT/sop/Amendment_2.pdf",
    },
  ];

  const annexureData = [
    {
      title: "1. Application Form for Ethical Approval",
      href: "https://charusat.ac.in/files/IEC-CHARUSAT/annexure/Annexure_1_ IEC-CHARUSAT Members.pdf",
    },
    {
      title: "2. confidentiality coi agreement for members",
      href: "https://charusat.ac.in/files/IEC-CHARUSAT/annexure/annexure_2_confidentiality_coi_agreement_for_members_0-converted.doc",
    },
    {
      title:
        "2.1 format for declaration of conflict of interest for iec members or investigators",
      href: "https://charusat.ac.in/files/IEC-CHARUSAT/annexure/annexure_2.1_format_for_declaration_of_conflict_of_interest_for_iec_members_or_investigators_3.doc",
    },
    {
      title: "3. rights responsibilities of research participants",
      href: "https://charusat.ac.in/files/IEC-CHARUSAT/annexure/annexure_3_rights_responsibilities_of_research_participants_english_0-converted.doc",
    },
    {
      title:
        "4. application format for investigator initiated full committee or exempt review project",
      href: "https://charusat.ac.in/files/IEC-CHARUSAT/annexure/annexure_4_application_format_for_investigator_initiated_full_committee_or_exempt_review_project_0.doc",
    },
    {
      title:
        "4.1 protocol format for investigator initiated full committee or exempt review project",
      href: "https://charusat.ac.in/files/IEC-CHARUSAT/annexure/annexure_4.1_protocol_format_for_investigator_initiated_full_committee_or_exempt_review_project_0(1).doc",
    },
    {
      title: "4.2 participant information sheet",
      href: "https://charusat.ac.in/files/IEC-CHARUSAT/annexure/annexure_4.2_participant_information_sheet_english_1.docx",
    },
    {
      title: "4.4 informed consent form",
      href: "https://charusat.ac.in/files/IEC-CHARUSAT/annexure/annexure_4.4_informed_consent_form_english_1.doc",
    },
    {
      title:
        "5. application format for industry or government initiated full committee review project",
      href: "https://charusat.ac.in/files/IEC-CHARUSAT/annexure/annexure_5_application_format_for_industry_or_government_initiated_full_committee_review_project_1.doc",
    },
    {
      title: "5.1 participant information sheet",
      href: "https://charusat.ac.in/files/IEC-CHARUSAT/annexure/annexure_5.1_participant_information_sheet_english_0.docx",
    },
    {
      title: "5.3 informed consent form",
      href: "https://charusat.ac.in/files/IEC-CHARUSAT/annexure/annexure_5.3_informed_consent_form_english_0.doc",
    },
    {
      title:
        "6. application format for investigator initiated case reports reveiw",
      href: "https://charusat.ac.in/files/IEC-CHARUSAT/annexure/annexure_6_application_format_for_investigator_initiated_case_reports_reveiw_1.doc",
    },
    {
      title:
        "6.1 protocol format for investigator initiated case reports reveiw",
      href: "https://charusat.ac.in/files/IEC-CHARUSAT/annexure/annexure_6.1_protocol_format_for_investigator_initiated_case_reports_reveiw_1.doc",
    },
    {
      title: "6.2 case report consent or assent form",
      href: "https://charusat.ac.in/files/IEC-CHARUSAT/annexure/annexure_6.2_case_report_consent_or_assent_form_english_1.doc",
    },
    {
      title: "7. project submission check lists for investigators BMR",
      href: "https://charusat.ac.in/files/IEC-CHARUSAT/annexure/annexure_7_project_submission_check_lists_for_investigators BMR.doc",
    },
    {
      title: "7.1 project submission check lists for investigators",
      href: "https://charusat.ac.in/files/IEC-CHARUSAT/annexure/annexure_7_1project_submission_check_lists_for_investigators.doc",
    },
    {
      title: "8. format of response to query letter by investigator",
      href: "https://charusat.ac.in/files/IEC-CHARUSAT/annexure/annexure_8_format_of_response_to_query_letter_by_investigator_1.doc",
    },
    {
      title: "8.1 Suggestion letter",
      href: "https://charusat.ac.in/files/IEC-CHARUSAT/annexure/Annexure_8.1 Suggestion letter.docx",
    },
    {
      title: "9. Approval letter",
      href: "https://charusat.ac.in/files/IEC-CHARUSAT/annexure/annexure_9_Approval letter.docx",
    },
    {
      title: "9. format of approval letter by institutional ethics committee",
      href: "https://charusat.ac.in/files/IEC-CHARUSAT/annexure/annexure_9_format_of_approval_letter_by_institutional_ethics_committee_0-converted.docx",
    },
    {
      title: "10. Format for Site Monitoring Report",
      href: "https://charusat.ac.in/files/IEC-CHARUSAT/annexure/Annexure_10_Format for Site Monitoring Report.pdf",
    },
    {
      title: "10.1 av consenting monitoring report - regulated trial",
      href: "https://charusat.ac.in/files/IEC-CHARUSAT/annexure/annexure_10.1_av_consenting_monitoring_report_-_regulated_trial-converted.docx",
    },
    {
      title: "11. who tool for causality assessment-converted",
      href: "https://charusat.ac.in/files/IEC-CHARUSAT/annexure/annexure_11_who_tool_for_causality_assessment-converted.docx",
    },
    {
      title: "12. reviewer format institutional ethics committee",
      href: "https://charusat.ac.in/files/IEC-CHARUSAT/annexure/annexure_12_reviewer format Institutional Ethics Committee.doc",
    },
    {
      title: "13. format of iec meeting minutes",
      href: "https://charusat.ac.in/files/IEC-CHARUSAT/annexure/annexure_13_format_of_iec_meeting_minutes.doc",
    },
  ];

  return (
    <Fragment>
      {/* <PageHeader title={'4 Results found for: Business'} curPage={'Search Result'} /> */}
      <div className="blog-section padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          <div className="post-content">
                            <h3>
                              Institutional Ethics Committee-CHARUSAT
                              (IEC-CHARUSAT)
                            </h3>
                            <hr />
                            <br />
                            <p style={{ fontSize: "1rem" }}>
                              <p style={{ fontSize: "1rem" }}>
                                The Institutional Ethic Committee-CHARUSAT
                                (IEC-CHARUSAT) is a formally designated
                                independent entity which reviews, approves and
                                monitors all research projects involving human
                                participants. The primary aim of the
                                IEC-CHARUSAT is to protect the rights and
                                welfare of all the participants of the
                                biomedical /clinical research.
                              </p>
                              <br />
                              <p style={{ fontSize: "1rem" }}>
                                The mandate of IEC-CHARUSAT is to ensure
                                participants be exposed to minimum risk or no
                                risk i.e which may be anticipated as harm or
                                discomfort not greater than that encountered in
                                routine daily life activities of the general
                                population or during the performance of routine
                                physical or psychological examination, procedure
                                or tests.
                              </p>
                              <br />
                              <p style={{ fontSize: "1rem" }}>
                                The mandate of IEC-CHARUSAT is to ensure the
                                volunteer participation, dignity, rights, safety
                                and well being of participants during the
                                biomedical or clinical study and to provide
                                transparent assurance of protection that the
                                research is carried out upholding the ethical
                                values. IEC-CHARUSAT will keep all emerging
                                ethical issues keeping in the view of social,
                                cultural, economic, legal and religious concerns
                                of the society. Ethics is a subject of
                                discussions and debates and each and every word
                                and line will be deliberated by the
                                IEC-CHARUSAT.
                              </p>
                              <br />
                              <p style={{ fontSize: "1rem" }}>
                                Ethical Clinical research and practice must
                                respect all four of the basic prima facie moral
                                commitments: autonomy, justice, beneficence and
                                Non-maleficence - plus concern for their scope
                                of application. These “four principles plus
                                scope” approach provides a simple, accessible,
                                and culturally neutral approach for considering
                                ethical issues.
                              </p>
                              <br />
                              <p style={{ fontSize: "1rem" }}>
                                IEC-CHARUSAT is constituted in line of ICMR
                                guideline 2017 for National Ethical Guidelines
                                for Biomedical and Health Research involving
                                Human Participants, and registered successfully
                                with Department of Health and Research (DHR),
                                Govt. of India, New Delhi, Central Drugs
                                Standard Control Organisation (CDSCO), Govt. of
                                India, New Delhi and U.S. Department of Health
                                and Human Services (HHS) & Registration of an
                                Institutional Review Board (IRB).
                              </p>
                              <br />
                            </p>

                            <hr />
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
                                                    SOPS
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
                                                        color: "#0066b3",
                                                        listStyleType: "none",
                                                      }}
                                                    >
                                                      {SOPData.map(
                                                        (item, index) => (
                                                          <li key={index}>
                                                            <a
                                                              style={{
                                                                color:
                                                                  "#0066b3",
                                                              }}
                                                              href={item.href}
                                                              target="_blank"
                                                              rel="noopener noreferrer"
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
                                                    Annexure
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
                                                        color: "#0066b3",
                                                        listStyle: "none",
                                                      }}
                                                    >
                                                      {annexureData.map(
                                                        (item, index) => (
                                                          <li key={index}>
                                                            <a
                                                              style={{
                                                                color:
                                                                  "#0066b3",
                                                              }}
                                                              href={item.href}
                                                              target="_blank"
                                                              rel="noopener noreferrer"
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
                                                id="accordion03"
                                              >
                                                <button
                                                  className="d-flex flex-wrap justify-content-between"
                                                  data-bs-toggle="collapse"
                                                  data-bs-target="#videolist3"
                                                  aria-expanded="true"
                                                  aria-controls="videolist3"
                                                >
                                                  <span className="text-white">
                                                    Registration
                                                  </span>{" "}
                                                  <span className="text-white">
                                                    <i class="icofont-square-down"></i>
                                                  </span>{" "}
                                                </button>
                                              </div>
                                              <div
                                                id="videolist3"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="accordion03"
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
                                                    {[
                                                      {
                                                        title:
                                                          "IEC-CHARUSAT, CDSCO Registration, 2021-26",
                                                        link: "https://charusat.ac.in/files/IEC-CHARUSAT/CDSCO_Approval_letter.pdf",
                                                      },
                                                      {
                                                        title:
                                                          "IEC-CHARUSAT, DHR Registration, 2023-2028",
                                                        link: "https://charusat.ac.in/files/IEC-CHARUSAT/DHR-Approval-2023-28.pdf",
                                                      },
                                                      {
                                                        title:
                                                          "IEC-CHARUSAT, OHRP Registration, 2021-2024",
                                                        link: "https://charusat.ac.in/files/IEC-CHARUSAT/IORG_Approval_Letter.pdf",
                                                      },
                                                    ].map((item, index) => (
                                                      <div
                                                        key={index}
                                                        style={{
                                                          color: "#0066b3",
                                                          listStyle: "none",
                                                        }}
                                                      >
                                                        <a
                                                          style={{
                                                            color: "#0066b3",
                                                          }}
                                                          href={item.link}
                                                          target="_blank"
                                                          rel="noopener noreferrer"
                                                        >
                                                          {item.title}
                                                        </a>
                                                      </div>
                                                    ))}
                                                  </div>
                                                </div>
                                                <br />
                                              </div>
                                            </div>
                                            {/*  */}
                                            <div className="accordion-item">
                                              <div
                                                className="accordion-header"
                                                id="accordion04"
                                              >
                                                <button
                                                  className="d-flex flex-wrap justify-content-between"
                                                  data-bs-toggle="collapse"
                                                  data-bs-target="#videolist4"
                                                  aria-expanded="true"
                                                  aria-controls="videolist4"
                                                >
                                                  <span className="text-white">
                                                    IEC-CHARUSAT Approved
                                                    Projects/Proposals
                                                  </span>{" "}
                                                  <span className="text-white">
                                                    <i class="icofont-square-down"></i>
                                                  </span>{" "}
                                                </button>
                                              </div>
                                              <div
                                                id="videolist4"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="accordion04"
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
                                                    <div>
                                                      <p
                                                        style={{
                                                          fontSize: "1rem",
                                                        }}
                                                      >
                                                        Year 2020 Proposals -{" "}
                                                        <a
                                                          style={{
                                                            color: "#0066b3",
                                                          }}
                                                          href="https://charusat.ac.in/files/IEC-CHARUSAT/iec_approved_proposals-2020.pdf"
                                                          target="_blank"
                                                        >
                                                          Click Here
                                                        </a>
                                                      </p>
                                                      <p
                                                        style={{
                                                          fontSize: "1rem",
                                                        }}
                                                      >
                                                        Year 2021 Proposals -{" "}
                                                        <a
                                                          style={{
                                                            color: "#0066b3",
                                                          }}
                                                          href="https://charusat.ac.in/files/IEC-CHARUSAT/iec_approved_proposals-2021.pdf"
                                                          target="_blank"
                                                        >
                                                          Click Here
                                                        </a>
                                                      </p>
                                                      <p
                                                        style={{
                                                          fontSize: "1rem",
                                                        }}
                                                      >
                                                        Year 2022 Proposals -{" "}
                                                        <a
                                                          style={{
                                                            color: "#0066b3",
                                                          }}
                                                          href="https://charusat.ac.in/files/IEC-CHARUSAT/IEC_approved_proposals_2022_new.pdf"
                                                          target="_blank"
                                                        >
                                                          Click Here
                                                        </a>
                                                      </p>
                                                    </div>
                                                  </div>
                                                </div>
                                                <br />
                                              </div>
                                            </div>
                                            {/*  */}
                                            <div className="accordion-item">
                                              <div
                                                className="accordion-header"
                                                id="accordion05"
                                              >
                                                <button
                                                  className="d-flex flex-wrap justify-content-between"
                                                  data-bs-toggle="collapse"
                                                  data-bs-target="#videolist5"
                                                  aria-expanded="true"
                                                  aria-controls="videolist5"
                                                >
                                                  <span className="text-white">
                                                    Submit Proposal
                                                  </span>{" "}
                                                  <span className="text-white">
                                                    <i class="icofont-square-down"></i>
                                                  </span>{" "}
                                                </button>
                                              </div>
                                              <div
                                                id="videolist5"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="accordion05"
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
                                                    <strong>
                                                      “Note: kindly upload
                                                      appropriate Annexures
                                                      while submitting your
                                                      proposal, refer Annexures
                                                      tab for the detail
                                                      information of Annexures.”
                                                    </strong>
                                                    <br />
                                                    <br />
                                                    <p
                                                      style={{
                                                        fontSize: "1rem",
                                                      }}
                                                    >
                                                      For New Proposal
                                                      Submission after
                                                      August-2022 -{" "}
                                                      <a
                                                        style={{
                                                          color: "#0066b3",
                                                        }}
                                                        href="https://charusat.ac.in/ieccharusat/index.php"
                                                        target="_blank"
                                                      >
                                                        Click Here
                                                      </a>
                                                    </p>
                                                    <p
                                                      style={{
                                                        fontSize: "1rem",
                                                      }}
                                                    >
                                                      To Acess/Edit/Update older
                                                      proposals (submitted till
                                                      July-2022):{" "}
                                                      <a
                                                        style={{
                                                          color: "#0066b3",
                                                        }}
                                                        href="https://charusat.ac.in/ieccharusat_2021/index.php"
                                                        target="_blank"
                                                      >
                                                        Click Here
                                                      </a>
                                                    </p>
                                                  </div>
                                                </div>
                                                <br />
                                              </div>
                                            </div>
                                            <div className="accordion-item">
                                              <div
                                                className="accordion-header"
                                                id="accordion06"
                                              >
                                                <button
                                                  className="d-flex flex-wrap justify-content-between"
                                                  data-bs-toggle="collapse"
                                                  data-bs-target="#videolist6"
                                                  aria-expanded="true"
                                                  aria-controls="videolist6"
                                                >
                                                  <span className="text-white">
                                                    FAQs
                                                  </span>{" "}
                                                  <span className="text-white">
                                                    <i class="icofont-square-down"></i>
                                                  </span>{" "}
                                                </button>
                                              </div>
                                              <div
                                                id="videolist6"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="accordion06"
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
                                                    <iframe
                                                      width="100%"
                                                      height="696"
                                                      src="https://charusat.ac.in/files/IEC-CHARUSAT/FAQ.pdf"
                                                      frameborder="0"
                                                    />
                                                  </div>
                                                </div>
                                                <br />
                                              </div>
                                            </div>
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
            <div className="col-lg-4 col-12">
              <aside>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          <div className="post-content">
                            {/* <Link to="/blog-single"> */}
                            <h3>Contact Person</h3>
                            {/* </Link> */}
                            <div className="meta-post">
                              <ul className="lab-ul">
                                <li
                                  style={{
                                    marginBottom: "10px",
                                  }}
                                >
                                  <i className="icofont-ui-user"></i>
                                  Member Secretary, IEC-CHARUSAT
                                </li>
                                <li
                                  style={{
                                    marginBottom: "10px",
                                  }}
                                >
                                  <i className="icofont-email"></i>
                                  iec.coordinator@charusat.ac.in
                                </li>
                                <li
                                  style={{
                                    marginBottom: "10px",
                                  }}
                                >
                                  <i className="icofont-phone"></i>
                                  +91-02697-265204 / 70
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default IEC;
