import React from "react";
import { Link } from "react-router-dom";

// const contactList = [
//     {
//       title: "Contact Person @ CHARUSAT",
//       btnText: "Operators' Detail",
//       metaList: [
//         {
//           iconName: "icofont-ui-user",
//           text: "Mr Dharmendra Patel",
//         },
//         {
//           iconName: "icofont-email",
//           text: "dharmendrapatel.adm@charusat.ac.in",
//         },
//         {
//           iconName: "icofont-phone",
//           text: "+91-9586967008",
//         },
//       ],
//     },
//   ];

export default function contact_donation(props) {
  return (
    <div className="col-lg-4 col-12">
      <aside>
        <div className="section-wrapper">
          <div className="row row-cols-1 justify-content-center g-4">
            <div className="col">
              <div className="post-item style-2">
                <div className="post-inner">
                  <div className="post-content">
                    {/* <Link to="/blog-single"> */}
                    <h3>{props.title}</h3>
                    {/* </Link> */}
                    <div className="meta-post">
                      <ul className="lab-ul">
                        <li>
                          <i className="icofont-ui-user"></i>
                          {props.name}
                        </li>
                        <li>
                          <i className="icofont-email"></i>
                          {props.email}
                        </li>
                        <li>
                          <i className="icofont-phone"></i>
                          {props.phone}
                        </li>
                      </ul>
                    </div>
                    <br />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "fit-content",
                      }}
                    >
                      <a
                        href="./assets/files/BankAccountDetailsforDonors.pdf"
                        className="lab-btn"
                        target="_blank"
                      >
                        <span>
                          Get Bank Details{" "}
                          <i className="icofont-external-link"></i>
                        </span>
                      </a>
                      <br />
                      <br />
                      <Link to="/#" className="lab-btn">
                        <span>
                          Donate Online{" "}
                          <i className="icofont-external-link"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
