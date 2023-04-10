import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../component/layout/pageheader";
import Contact from "../component/section/contact"



const CourseList = [
  {
    courseName:"Bachelor of Technology (Civil Engineering)",
    faculty:"Faculty of Technology & Engineering",
    Institute:"Chandubhai S. Patel Insitute of Technology",
    CourseDuration: "04 Years",
    Intake:"120",
    Fees:"1,28,000/-",
    Eligibility:"",
    txtBtn1:"View Syllabus",
    linkbtn1:"",
    txtBtn2:"Download Brochure",
    linkbtn2:"",
    txtBtn3:"Visit Website",
    linkbtn3:"",
  },
  {
    courseName:"Bachelor of Technology (Information Technology)",
    faculty:"Faculty of Technology & Engineering",
    Institute:"Chandubhai S. Patel Insitute of Technology",
    CourseDuration: "04 Years",
    Intake:"120",
    Fees:"1,28,000/-",
    Eligibility:"",
    txtBtn1:"View Syllabus",
    linkbtn1:"",
    txtBtn2:"Download Brochure",
    linkbtn2:"",
    txtBtn3:"Visit Website",
    linkbtn3:"",
  },
  {
    courseName:"Bachelor of Technology (Computer Engineering)",
    faculty:"Faculty of Technology & Engineering",
    Institute:"Chandubhai S. Patel Insitute of Technology",
    CourseDuration: "04 Years",
    Intake:"120",
    Fees:"1,28,000/-",
    Eligibility:"",
    txtBtn1:"View Syllabus",
    linkbtn1:"",
    txtBtn2:"Download Brochure",
    linkbtn2:"",
    txtBtn3:"Visit Website",
    linkbtn3:"",
  },
  {
    courseName:"Bachelor of Technology (Civil Engineering)",
    faculty:"Faculty of Technology & Engineering",
    Institute:"Chandubhai S. Patel Insitute of Technology",
    CourseDuration: "04 Years",
    Intake:"120",
    Fees:"1,28,000/-",
    Eligibility:"",
    txtBtn1:"View Syllabus",
    linkbtn1:"",
    txtBtn2:"Download Brochure",
    linkbtn2:"",
    txtBtn3:"Visit Website",
    linkbtn3:"",
  },
  {
    courseName:"Bachelor of Technology (Civil Engineering)",
    faculty:"Faculty of Technology & Engineering",
    Institute:"Chandubhai S. Patel Insitute of Technology",
    CourseDuration: "04 Years",
    Intake:"120",
    Fees:"1,28,000/-",
    Eligibility:"",
    txtBtn1:"View Syllabus",
    linkbtn1:"",
    txtBtn2:"Download Brochure",
    linkbtn2:"",
    txtBtn3:"Visit Website",
    linkbtn3:"",
  },
  {
    courseName:"Bachelor of Technology (Civil Engineering)",
    faculty:"Faculty of Technology & Engineering",
    Institute:"Chandubhai S. Patel Insitute of Technology",
    CourseDuration: "04 Years",
    Intake:"120",
    Fees:"1,28,000/-",
    Eligibility:"",
    txtBtn1:"View Syllabus",
    linkbtn1:"",
    txtBtn2:"Download Brochure",
    linkbtn2:"",
    txtBtn3:"Visit Website",
    linkbtn3:"",
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
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          <div className="post-content">
                            <h4>{val.courseName}</h4>
                            <div className="meta-post">
                              {/* <h2>{val.courseName}</h2> */}
                              <p>Faculty: {val.faculty}</p>
                              <p>Institute:{val.Institute}</p>
                              <p>Course Duration: {val.CourseDuration}</p>
                              <p>Intake: {val.Intake}</p>
                              <p>Fees: Rs. {val.Fees}</p>
                              <p>Eligibility: {val.Eligibility}</p>
                              <a class="lab-btn" href={val.linkbtn1}><span>{val.txtBtn1}</span></a>{"    "}
                              <a class="lab-btn" href={val.linkbtn2}><span>{val.txtBtn2}</span></a>{" "}
                              <a class="lab-btn" href={val.linkbtn3}><span>{val.txtBtn3}</span></a>
                            </div>
                           
                            {/* <Link to="/blog-single" className="lab-btn"><span>Operator's Detail <i className="icofont-external-link"></i></span></Link> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br/>
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
