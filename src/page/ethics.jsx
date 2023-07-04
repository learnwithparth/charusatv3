import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../component/layout/pageheader";
import Contact from "../component/section/contact";
import Accordion from "react-bootstrap/Accordion";
import authorityForInformation from "../files/IEC-CHARUSAT/sop/sop_1_authority_for_formation.pdf";
import sop_2_sop_for_sops from "../files/IEC-CHARUSAT/sop/sop_2_sop_for_sops.pdf";
import sop_3_ec_composition from "../files/IEC-CHARUSAT/sop/sop_3_ec_composition.pdf";
import sop_4_review_of_clinical_trial_protocol from "../files/IEC-CHARUSAT/sop/sop_4_review_of_clinical_trial_protocol.pdf";
import sop_5_process_of_review from "../files/IEC-CHARUSAT/sop/sop_5_process_of_review.pdf";
import sop_6_Decision from "../files/IEC-CHARUSAT/sop/sop_6_Decision Making and Post Review Activities.pdf";
import sop_7_Monitoring from "../files/IEC-CHARUSAT/sop/sop_7_Monitoring of Research Projects.pdf";
import sop_8_Administrative from "../files/IEC-CHARUSAT/sop/sop_8_Administrative Support.pdf";
import sop_9_Record from "../files/IEC-CHARUSAT/sop/sop_9_Record Keeping and Archival.pdf";
import sop_10_Master from "../files/IEC-CHARUSAT/sop/sop_10_Master Training & Self-Assessment.pdf";
import Amendment_1 from "../files/IEC-CHARUSAT/sop/Amendment_1.pdf";
import Amendment_2 from "../files/IEC-CHARUSAT/sop/Amendment_2.pdf";

import Annexure_1 from "../files/IEC-CHARUSAT/annexure/Annexure_1_ IEC-CHARUSAT Members.pdf";
import annexure_2 from "../files/IEC-CHARUSAT/annexure/annexure_2_confidentiality_coi_agreement_for_members_0-converted.doc";
import annexure_2_1 from "../files/IEC-CHARUSAT/annexure/annexure_2.1_format_for_declaration_of_conflict_of_interest_for_iec_members_or_investigators_3.doc";
import annexure_3 from "../files/IEC-CHARUSAT/annexure/annexure_3_rights_responsibilities_of_research_participants_english_0-converted.doc";
import annexure_4 from "../files/IEC-CHARUSAT/annexure/annexure_4_application_format_for_investigator_initiated_full_committee_or_exempt_review_project_0.doc";
import annexure_4_1 from "../files/IEC-CHARUSAT/annexure/annexure_4.1_protocol_format_for_investigator_initiated_full_committee_or_exempt_review_project_0(1).doc";
import annexure_4_2 from "../files/IEC-CHARUSAT/annexure/annexure_4.2_participant_information_sheet_english_1.docx";
import "../assets/css/ethics.css";

const Ethics = () => {
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
                            <h3>Ethics Committee</h3>
                            <hr />
                            <br />
                            <div className="meta-post">
                              <ul className="lab-ul">
                                The Institutional Ethic Committee-CHARUSAT
                                (IEC-CHARUSAT) is a formally designated
                                independent entity which reviews, approves and
                                monitors all research projects involving human
                                participants. The primary aim of the
                                IEC-CHARUSAT is to protect the rights and
                                welfare of all the participants of the
                                biomedical /clinical research.
                                <br />
                                <br />
                                The mandate of IEC-CHARUSAT is to ensure
                                participants be exposed to minimum risk or no
                                risk i.e which may be anticipated as harm or
                                discomfort not greater than that encountered in
                                routine daily life activities of the general
                                population or during the performance of routine
                                physical or psychological examination, procedure
                                or tests.
                                <br />
                                <br />
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
                                <br />
                                <br />
                                Ethical Clinical research and practice must
                                respect all four of the basic prima facie moral
                                commitments: autonomy, justice, beneficence and
                                Non-maleficence - plus concern for their scope
                                of application. These “four principles plus
                                scope” approach provides a simple, accessible,
                                and culturally neutral approach for considering
                                ethical issues.
                                <br />
                                <br />
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
                              </ul>
                              <br />
                              {/* <a class="lab-btn" href={IPRBroucher}><span>Brochure</span></a>{"    "}
                              <a class="lab-btn" href={InquiryForm}><span>Inquiry Form</span></a> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="course-video">
                  {/* <div className="course-video-title">
                    <h4>Course Content</h4>
                  </div> */}
                  <div className="course-video-content">
                    <div className="accordion" id="accordionExample">
                      <div className="accordion-item">
                        <div className="accordion-header" id="accordion01">
                          <button
                            className="d-flex flex-wrap justify-content-between"
                            data-bs-toggle="collapse"
                            data-bs-target="#videolist1"
                            aria-expanded="false"
                            aria-controls="videolist1"
                          >
                            <span>Standard Operating Procedures</span>{" "}
                            <span>
                              <i className="icofont-square-down"></i>
                            </span>
                          </button>
                        </div>
                        <div
                          id="videolist1"
                          className="accordion-collapse collapse"
                          aria-labelledby="accordion01"
                          data-bs-parent="#accordionExample"
                        >
                          <ul className="lab-ul video-item-list">
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                <a
                                  class="lab-btn"
                                  href={authorityForInformation}
                                  target="_blank"
                                >
                                  1. authority For Formation
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                <a
                                  class="lab-btn"
                                  href={sop_2_sop_for_sops}
                                  target="_blank"
                                >
                                  2. sop for sops
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                <a
                                  class="lab-btn"
                                  href={sop_3_ec_composition}
                                  target="_blank"
                                >
                                  3. EC composition
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                <a
                                  class="lab-btn"
                                  href={sop_4_review_of_clinical_trial_protocol}
                                  target="_blank"
                                >
                                  4. review of clinical trial protocol
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                <a
                                  class="lab-btn"
                                  href={sop_5_process_of_review}
                                  target="_blank"
                                >
                                  5. process of review
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                <a
                                  class="lab-btn"
                                  href={sop_6_Decision}
                                  target="_blank"
                                >
                                  6. Decision Making and Post Review Activities
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                <a
                                  class="lab-btn"
                                  href={sop_7_Monitoring}
                                  target="_blank"
                                >
                                  7. Monitoring of Research Projects
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                <a
                                  class="lab-btn"
                                  href={sop_8_Administrative}
                                  target="_blank"
                                >
                                  8. Administrative Support
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                <a
                                  class="lab-btn"
                                  href={sop_9_Record}
                                  target="_blank"
                                >
                                  9. Record Keeping and Archival
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                <a
                                  class="lab-btn"
                                  href={sop_10_Master}
                                  target="_blank"
                                >
                                  10. Master Training &amp; Self-Assessment
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                <a
                                  class="lab-btn"
                                  href={Amendment_1}
                                  target="_blank"
                                >
                                  11. Amendment-1
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                <a
                                  class="lab-btn"
                                  href={Amendment_2}
                                  target="_blank"
                                >
                                  12. Amendment-2
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <div className="accordion-header" id="accordion02">
                          <button
                            className="d-flex flex-wrap justify-content-between"
                            data-bs-toggle="collapse"
                            data-bs-target="#videolist2"
                            aria-expanded="true"
                            aria-controls="videolist2"
                          >
                            <span>Annexures</span>
                            <span>
                              <i className="icofont-square-down"></i>
                            </span>
                          </button>
                        </div>
                        <div
                          id="videolist2"
                          className="accordion-collapse collapse"
                          aria-labelledby="accordion02"
                          data-bs-parent="#accordionExample"
                        >
                          <ul className="lab-ul video-item-list">
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                <a
                                  class="lab-btn"
                                  href={Annexure_1}
                                  target="_blank"
                                >
                                  1. IEC-CHARUSAT Members
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                <a
                                  class="lab-btn"
                                  href={annexure_2}
                                  target="_blank"
                                >
                                  2. confidentiality_coi_agreement_for_members
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                <a
                                  class="lab-btn"
                                  href={annexure_2_1}
                                  target="_blank"
                                >
                                  2.1 format for declaration of conflict of
                                  interest for iec members or investigators
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                <a
                                  class="lab-btn"
                                  href={annexure_3}
                                  target="_blank"
                                >
                                  3. rights responsibilities of research
                                  participants
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                <a
                                  class="lab-btn"
                                  href={annexure_4}
                                  target="_blank"
                                >
                                  4. application format for investigator
                                  initiated full committee or exempt review
                                  project
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                <a
                                  class="lab-btn"
                                  href={annexure_4_1}
                                  target="_blank"
                                >
                                  4.1 protocol format for investigator initiated
                                  full committee or exempt review project
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                <a
                                  class="lab-btn"
                                  href={annexure_4_2}
                                  target="_blank"
                                >
                                  4.2 participant information sheet
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                <a
                                  class="lab-btn"
                                  href="../files/IEC-CHARUSAT/annexure/annexure_4.4_informed_consent_form_english_1.doc"
                                  target="_blank"
                                >
                                  4.4 informed consent form
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                <a
                                  class="lab-btn"
                                  href="../files/IEC-CHARUSAT/annexure/annexure_5_application_format_for_industry_or_government_initiated_full_committee_review_project_1.doc"
                                  target="_blank"
                                >
                                  5. application format for industry or
                                  government initiated full committee review
                                  project
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                <a
                                  class="lab-btn"
                                  href="../files/IEC-CHARUSAT/annexure/annexure_5.1_participant_information_sheet_english_0.docx"
                                  target="_blank"
                                >
                                  5.1 participant information sheet
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                <a
                                  class="lab-btn"
                                  href="../files/IEC-CHARUSAT/annexure/annexure_5.3_informed_consent_form_english_0.doc"
                                  target="_blank"
                                >
                                  5.3 informed consent form
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                <a
                                  class="lab-btn"
                                  href="../files/IEC-CHARUSAT/annexure/annexure_6_application_format_for_investigator_initiated_case_reports_reveiw_1.doc"
                                  target="_blank"
                                >
                                  6. application format for investigator
                                  initiated case reports reveiw
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                <a
                                  class="lab-btn"
                                  href="../files/IEC-CHARUSAT/annexure/annexure_6.1_protocol_format_for_investigator_initiated_case_reports_reveiw_1.doc"
                                  target="_blank"
                                >
                                  6.1 protocol format for investigator initiated
                                  case reports reveiw
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                <a
                                  class="lab-btn"
                                  href="../files/IEC-CHARUSAT/annexure/annexure_6.2_case_report_consent_or_assent_form_english_1.doc"
                                  target="_blank"
                                >
                                  6.2 case report consent or assent form
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                <a
                                  class="lab-btn"
                                  href="../files/IEC-CHARUSAT/annexure/annexure_7_project_submission_check_lists_for_investigators BMR.doc"
                                  target="_blank"
                                >
                                  7. project submission check lists for
                                  investigators BMR
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                <a
                                  class="lab-btn"
                                  href="../files/IEC-CHARUSAT/annexure/annexure_7_1project_submission_check_lists_for_investigators.doc"
                                  target="_blank"
                                >
                                  7.1 project submission check lists for
                                  investigators
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                <a
                                  class="lab-btn"
                                  href="../files/IEC-CHARUSAT/annexure/annexure_8_format_of_response_to_query_letter_by_investigator_1.doc"
                                  target="_blank"
                                >
                                  8. format of response to query letter by
                                  investigator
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                <a
                                  class="lab-btn"
                                  href="../files/IEC-CHARUSAT/annexure/Annexure_8.1 Suggestion letter.docx"
                                  target="_blank"
                                >
                                  8.1 Suggestion letter
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                <a
                                  class="lab-btn"
                                  href="../files/IEC-CHARUSAT/annexure/annexure_9_Approval letter.docx"
                                  target="_blank"
                                >
                                  9. Approval letter
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                <a
                                  class="lab-btn"
                                  href="../files/IEC-CHARUSAT/annexure/annexure_9_format_of_approval_letter_by_institutional_ethics_committee_0-converted.docx"
                                  target="_blank"
                                >
                                  9. format of approval letter by institutional
                                  ethics committee
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                <a
                                  class="lab-btn"
                                  href="../files/IEC-CHARUSAT/annexure/Annexure_10_Format for Site Monitoring Report.pdf"
                                  target="_blank"
                                >
                                  10. Format for Site Monitoring Report
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                <a
                                  class="lab-btn"
                                  href="../files/IEC-CHARUSAT/annexure/annexure_10.1_av_consenting_monitoring_report_-_regulated_trial-converted.docx"
                                  target="_blank"
                                >
                                  10.1 av consenting monitoring report -
                                  regulated trial
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                <a
                                  class="lab-btn"
                                  href="../files/IEC-CHARUSAT/annexure/annexure_11_who_tool_for_causality_assessment-converted.docx"
                                  target="_blank"
                                >
                                  11. who tool for causality
                                  assessment-converted
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                <a
                                  class="lab-btn"
                                  href="../files/IEC-CHARUSAT/annexure/annexure_13_format_of_iec_report_to_cdsco_in_case_of_sae-converted.docx"
                                  target="_blank"
                                >
                                  13. format of iec report to cdsco in case of
                                  sae
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                <a
                                  class="lab-btn"
                                  href="../files/IEC-CHARUSAT/annexure/Annexure_14_Format for Detailed Summary of Protocol Changes.doc"
                                  target="_blank"
                                >
                                  14. Format for Detailed Summary of Protocol
                                  Changes
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                <a
                                  class="lab-btn"
                                  href="../files/IEC-CHARUSAT/annexure/Annexure_15 Approval letter of Clinical Trials.docx"
                                  target="_blank"
                                >
                                  15. Approval letter of Clinical Trials
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                <a
                                  class="lab-btn"
                                  href="../files/IEC-CHARUSAT/annexure/annexure_16_checklist_informed_consent_document-converted.docx"
                                  target="_blank"
                                >
                                  16. checklist informed consent
                                  document-converted
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                <a
                                  class="lab-btn"
                                  href="../files/IEC-CHARUSAT/annexure/Annexure17.pdf"
                                  target="_blank"
                                >
                                  17. GCP inspection checklist
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                <a
                                  class="lab-btn"
                                  href="../files/IEC-CHARUSAT/annexure/Annexure_18_Documents Checklist for Clinical Trial.pdf"
                                  target="_blank"
                                >
                                  18. checklist For Clinical Trial
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                <a
                                  class="lab-btn"
                                  href="../files/IEC-CHARUSAT/annexure/annexure_19_checklist_review_of_sae-converted.docx"
                                  target="_blank"
                                >
                                  19. checklist review of sae
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                <a
                                  class="lab-btn"
                                  href="../files/IEC-CHARUSAT/annexure/annexure_20_apendix_xi_-_schedule_y_0-converted.doc"
                                  target="_blank"
                                >
                                  20. apendix xi - schedule
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                <a
                                  class="lab-btn"
                                  href="../files/IEC-CHARUSAT/annexure/annexure_21_appendix_xii_-_schedule_y_0-converted.doc"
                                  target="_blank"
                                >
                                  21. appendix xii - schedule
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                <a
                                  class="lab-btn"
                                  href="../files/IEC-CHARUSAT/annexure/Annexure_22 .1_Gujarati.pdf"
                                  target="_blank"
                                >
                                  22.1. Gujarati form
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                <a
                                  class="lab-btn"
                                  href="../files/IEC-CHARUSAT/annexure/annexure_22_research_participant_interview_guide_english (1)-converted (1).doc"
                                  target="_blank"
                                >
                                  22. research participant interview guide
                                  english
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                <a
                                  class="lab-btn"
                                  href="../files/IEC-CHARUSAT/annexure/annexure_23_format for project report submission.docx"
                                  target="_blank"
                                >
                                  23. format for project report submission
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <div className="accordion-header" id="accordion03">
                          <button
                            className="d-flex flex-wrap justify-content-between"
                            data-bs-toggle="collapse"
                            data-bs-target="#videolist3"
                            aria-expanded="true"
                            aria-controls="videolist3"
                          >
                            <span>Registration</span>
                            <span>
                              <i className="icofont-square-down"></i>
                            </span>
                          </button>
                        </div>
                        <div
                          id="videolist3"
                          className="accordion-collapse collapse"
                          aria-labelledby="accordion03"
                          data-bs-parent="#accordionExample"
                        >
                          <ul className="lab-ul video-item-list">
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                <a
                                  class="lab-btn"
                                  href="../files/IEC-CHARUSAT/CDSCO_Approval_letter.pdf"
                                  target="_blank"
                                >
                                  IEC-CHARUSAT, CDSCO Registration, 2021-26
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                <a
                                  class="lab-btn"
                                  href="../files/IEC-CHARUSAT/DHR_provisional_certificate.pdf"
                                  target="_blank"
                                >
                                  IEC-CHARUSAT, DHR Registration, 2021-2023
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                <a
                                  class="lab-btn"
                                  href="../files/IEC-CHARUSAT/IORG_Approval_Letter.pdf"
                                  target="_blank"
                                >
                                  IEC-CHARUSAT, OHRP Registration, 2021-2024
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <div className="accordion-header" id="accordion04">
                          <button
                            className="d-flex flex-wrap justify-content-between"
                            data-bs-toggle="collapse"
                            data-bs-target="#videolist4"
                            aria-expanded="true"
                            aria-controls="videolist4"
                          >
                            <span>Approved Projects</span>
                            <span>
                              <i className="icofont-square-down"></i>
                            </span>
                          </button>
                        </div>
                        <div
                          id="videolist4"
                          className="accordion-collapse collapse"
                          aria-labelledby="accordion04"
                          data-bs-parent="#accordionExample"
                        >
                          <ul className="lab-ul video-item-list">
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                <a
                                  class="lab-btn"
                                  href="../files/IEC-CHARUSAT/iec_approved_proposals-2020.pdf"
                                  target="_blank"
                                >
                                  Year 2020 Proposals
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                <a
                                  class="lab-btn"
                                  href="../files/IEC-CHARUSAT/iec_approved_proposals-2021.pdf"
                                  target="_blank"
                                >
                                  Year 2021 Proposals
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                <a
                                  class="lab-btn"
                                  href="../files/IEC-CHARUSAT/IEC_approved_proposals_2022.pdf"
                                  target="_blank"
                                >
                                  Year 2022 Proposals
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <div className="accordion-header" id="accordion05">
                          <button
                            className="d-flex flex-wrap justify-content-between"
                            data-bs-toggle="collapse"
                            data-bs-target="#videolist5"
                            aria-expanded="true"
                            aria-controls="videolist5"
                          >
                            <span>Proposal Submission</span>
                            <span>
                              <i className="icofont-square-down"></i>
                            </span>
                          </button>
                        </div>
                        <div
                          id="videolist5"
                          className="accordion-collapse collapse"
                          aria-labelledby="accordion05"
                          data-bs-parent="#accordionExample"
                        >
                          <ul className="lab-ul video-item-list">
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                1.1 Welcome to the course 02:30 minutes
                              </div>
                              <div className="video-item-icon">
                                <a
                                  href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                  className="popup"
                                  target="_blank"
                                >
                                  <i className="icofont-play-alt-2"></i>
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            <Contact
              name="Member Secretary, IEC-CHARUSAT"
              email="iec.coordinator@charusat.ac.in"
              phone="+91-02697-265204/70"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Ethics;
