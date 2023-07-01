import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../component/layout/pageheader";
import Contact from "../component/section/contact";
import { colors } from "@mui/material";
import { Helmet } from "react-helmet";
import { Table } from "react-bootstrap";

const transporterList = [
  {
    srNo: "1",
    route: "Ahmedabad - Changa",
    transporterName: "Brahmani Travels",
    contactPerson: "Jitubhai Patel & Dipakbhai Patel",
    contactNo: "942675359, 9537537247, 942730082",
  },
  {
    srNo: "2",
    route: "Ahmedabad - Changa",
    transporterName: "Ajitnath Travels",
    contactPerson: "Dhaneshbhai & Rajendrabhai",
    contactNo: "9825024830, 8780326123",
  },
  {
    srNo: "3",
    route: "Vodadara - Changa",
    transporterName: "Sunita Travels",
    contactPerson: "Jagadishbhai & Rakeshbhai",
    contactNo: "9228419146, 9724190723",
  },
  {
    srNo: "4",
    route: "Vodadara - Changa",
    transporterName: "Jay Mataji Travels",
    contactPerson: "Someshbhai",
    contactNo: "9427839755",
  },
  {
    srNo: "5",
    route: "Vodadara - Changa",
    transporterName: "Bansari Travels",
    contactPerson: "Tarakbhai",
    contactNo: "9825081590, 9825415074",
  },
  {
    srNo: "6",
    route: "Vidyanagar - Changa",
    transporterName: "Waiting 4 You",
    contactPerson: "Kiritbhai",
    contactNo: "9898469027, ",
  },
  {
    srNo: "7",
    route: "Anand - Changa",
    transporterName: "Dhanlaxmi Travels",
    contactPerson: "Indrajitbhai",
    contactNo: "9979100479, 9265250430",
  },
  {
    srNo: "8",
    route: "Khambhat - Changa",
    transporterName: "Roshan Travels",
    contactPerson: "Yunusbhai",
    contactNo: "9537788237",
  },
  {
    srNo: "9",
    route: "Borsad - Changa",
    transporterName: "Other Travels",
    contactPerson: "Arjunbhai",
    contactNo: "9624720956",
  },
];

const Transport = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Transportation</title>
        <meta http-equiv="Content-Type" content=" text/html; charset=utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Career " />
        <meta name="keywords" content="" />
        <meta name="robots" content="index" />
        <meta name="robots" content="follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="translate" />
        <meta name="google" content="nopagereadaloud" />
        <meta property="og:type" content="homepage" />
        <meta property="og:title" content="CSPIT Homepage" />
        <meta
          property="og:description"
          content="CSPIT - best engineering college to study in Gujarat."
        />
        <meta name="author" content="CHARUSAT Web Team" />
      </Helmet>
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
                            <h3>Transportation Facilities</h3>
                            <div className="meta-post">
                              <ul className="lab-ul">
                                At CHARUSAT, we understand that transportation
                                is a crucial aspect of student life. To ensure
                                that our students have easy access to our
                                campus, we have partnered with reliable
                                transport providers to offer daily bus services
                                from Ahmedabad, Nadiad, Anand, and Vadodara. In
                                addition, we have our own vehicles that are used
                                for internal transportation needs.
                              </ul>
                              <Table striped bordered hover className="my-3">
                                <thead>
                                  <tr>
                                    <th>Sr No.</th>
                                    <th>Route</th>
                                    <th>Transporters' Name</th>
                                    <th>Contact Person</th>
                                    <th>Contact No.</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {transporterList.map((val, i) => (
                                    <tr key={i}>
                                      <td className="product-item cat-product">
                                        {val.srNo}
                                      </td>
                                      <td>{val.route}</td>
                                      <td>{val.transporterName}</td>
                                      <td>{val.contactPerson}</td>
                                      <td>{val.contactNo}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </Table>
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
            <Contact
              name="Mr Dharmendra Patel"
              email="dharmendrapatel.adm@charusat.ac.in"
              phone="+91-9586967008"
            />
            {/* <div className="col-lg-4 col-12">
              <aside>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    {contactList.map((val, i) => (
                      <div className="col" key={i}>
                        <div className="post-item style-2">
                          <div className="post-inner">
                            <div className="post-content">
                              <Link to="/blog-single">
                                <h3>{val.title}</h3>
                              </Link>
                              <div className="meta-post">
                                <ul className="lab-ul">
                                  {val.metaList.map((val, i) => (
                                    <li key={i}>
                                      <i className={val.iconName}></i>
                                      {val.text}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </aside>
            </div> */}
          </div>
          <div className="row justify-content-center">
            <div className="col">
              <div className="shop-cart padding-tb">
                <div className="container">
                  <div className="section-wrapper">
                    <div>
                      {/* <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>Sr No.</th>
                            <th>Route</th>
                            <th>Transporters' Name</th>
                            <th>Contact Person</th>
                            <th>Contact No.</th>
                          </tr>
                        </thead>
                        <tbody>
                          {transporterList.map((val, i) => (
                            <tr key={i}>
                              <td className="product-item cat-product">
                                {val.srNo}
                              </td>
                              <td>{val.route}</td>
                              <td>{val.transporterName}</td>
                              <td>{val.contactPerson}</td>
                              <td>{val.contactNo}</td>
                            </tr>
                          ))}
                        </tbody>
                      </Table> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Transport;
