import { Fragment } from "react";
import { Link } from "react-router-dom";

import Fellowship from "../files/PhD/Fellowship.pdf";
import Regulations from "../../src/files/PhD/Regulations.pdf";
import Supervisors from "../../src/files/PhD/Supervisors.pdf";
import Scholar from "../../src/files/PhD/Scholar.pdf";
import "../assets/css/EOC.css";

// const searchList = [
//   {
//     title: "PhD Fellowship Guidelines",
//     btnText: "Read More",
//     link: Fellowship,
//     metaList: [
//       {
//         iconName: "icofont-calendar",
//         text: "May 22,2023",
//       },
//     ],
//   },
//   {
//     title: "PhD Guidelines",
//     btnText: "Read More",
//     link: Regulations,
//     metaList: [
//       {
//         iconName: "icofont-calendar",
//         text: "May 22,2023",
//       },
//     ],
//   },
//   {
//     title: "PhD Supervisors List",
//     btnText: "Read More",
//     link: Supervisors,
//     metaList: [
//       {
//         iconName: "icofont-calendar",
//         text: "May 22,2023",
//       },
//     ],
//   },
//   {
//     title: "PhD Scholar List",
//     btnText: "Read More",
//     link: Scholar,
//     metaList: [
//       {
//         iconName: "icofont-calendar",
//         text: "May 22,2023",
//       },
//     ],
//   },
// ];

// const PhDPrograms = () => {
//   return (
//     <Fragment>
//       <div className="blog-section padding-tb section-bg">
//         <h1 className="inner-title text-center mb-5">PhD Programs</h1>
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-lg-8 col-12">
//               <article>
//                 <div className="section-wrapper">
//                   <div className="row row-cols-1 justify-content-center g-4">
//                     {searchList.map((val, i) => (
//                       <div className="col" key={i}>
//                         <div className="post-item style-2">
//                           <div className="post-inner">
//                             <div className="post-content">
//                               <Link to={val.link}>
//                                 <h3>{val.title}</h3>
//                               </Link>
//                               <div className="meta-post">
//                                 <ul className="lab-ul">
//                                   {val.metaList.map((val, i) => (
//                                     <li key={i}>
//                                       <i className={val.iconName}></i>
//                                       {val.text}
//                                     </li>
//                                   ))}
//                                 </ul>
//                               </div>
//                               <Link to={val.link} className="lab-btn">
//                                 <span>
//                                   {val.btnText}{" "}
//                                   <i className="icofont-external-link"></i>
//                                 </span>
//                               </Link>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </article>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Fragment>
//   );
// };

const PhDPrograms = () => {
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
                          <h3>PhD Programs</h3>
                          <br />
                          <div className="meta-post" >
                            
                              <a className="pdfLink" href={Fellowship}> Equal Opportunity Cell Policy  <i class="icofont-file-pdf" style={{ fontSize: "22px" }}></i></a>
                              <br />
                              <a className="pdfLink" href={Regulations}> Equal Opportunity Cell Circular <i class="icofont-file-pdf" style={{ fontSize: "22px" }}></i></a>
                              <br />
                              <a className="pdfLink" href={Supervisors}> Constitution of EOC at Charusat <i class="icofont-file-pdf" style={{ fontSize: "22px" }}></i></a>
                              <br />
                              <a className="pdfLink" href={Scholar}> Contact Details for any grievance related to Equal Opportunity matter <i class="icofont-file-pdf" style={{ fontSize: "22px" }}></i></a>
                              <br />                           
                          </div>
                          {/* <Link to="/blog-single" className="lab-btn"><span>Operator's Detail <i className="icofont-external-link"></i></span></Link> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
  );
}

export default PhDPrograms;
