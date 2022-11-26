import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../layout/footer";
import Header from "../layout/header";
import PageHeader from "../layout/pageheader";
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Faculties() {
  const searchTitle = "Need a new search?";
  const searchDesc =
    "If you didn't find what you were looking for, try a new search!";

  const searchList = [
    {
      title: "Interactively Morph High Standards Anding",
      btnText: "Read More",
      metaList: [
        {
          iconName: "icofont-calendar",
          text: "April 23,2021",
        },
        {
          iconName: "icofont-ui-user",
          text: "Begrass Tyson",
        },
        {
          iconName: "icofont-speech-comments",
          text: "09 Comments",
        },
      ],
    },
    {
      title: "Financial Reporting Qoncil What Could More.",
      btnText: "Read More",
      metaList: [
        {
          iconName: "icofont-calendar",
          text: "April 23,2021",
        },
        {
          iconName: "icofont-ui-user",
          text: "Begrass Tyson",
        },
        {
          iconName: "icofont-speech-comments",
          text: "09 Comments",
        },
      ],
    },
    {
      title: "Consulting Reporting Qounc Arei Could More.",
      btnText: "Read More",
      metaList: [
        {
          iconName: "icofont-calendar",
          text: "April 23,2021",
        },
        {
          iconName: "icofont-ui-user",
          text: "Begrass Tyson",
        },
        {
          iconName: "icofont-speech-comments",
          text: "09 Comments",
        },
      ],
    },
    {
      title: "Strategic Social Media and of visual design",
      btnText: "Read More",
      metaList: [
        {
          iconName: "icofont-calendar",
          text: "April 23,2021",
        },
        {
          iconName: "icofont-ui-user",
          text: "Begrass Tyson",
        },
        {
          iconName: "icofont-speech-comments",
          text: "09 Comments",
        },
      ],
    },
  ];
  return (

    <div className="blog-section padding-tb section-bg">
      
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">Faculties</span>
          <h2 className="title">FACULTY OF TECHNOLOGY & ENGINEERING</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-12">
            <article>
              <div className="section-wrapper">
                <div className="row row-cols-1 justify-content-center g-4">
                  
                    <div className="col" >
                      <div className="post-item style-2">
                        <div className="post-inner">
                          <div className="post-content">
                            <Link to="/blog-single">
                              <h3>C S Patel Institute of Technology</h3>
                            </Link>
                            
                            <Link to="/blog-single" className="lab-btn">
                              <span>
                                {/* {val.btnText}{" "} */}
                                <i className="icofont-external-link"></i>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  
                </div>
              </div>
            </article>
            <br/>
            <article>
              <div className="section-wrapper">
                <div className="row row-cols-1 justify-content-center g-4">
                  
                    <div className="col" >
                      <div className="post-item style-2">
                        <div className="post-inner">
                          <div className="post-content">
                            <Link to="/blog-single">
                              <h3>Devang Patel Institute of Advanced Teachnology and Research</h3>
                            </Link>
                            
                            <Link to="/blog-single" className="lab-btn">
                              <span>
                                {/* {val.btnText}{" "} */}
                                <i className="icofont-external-link"></i>
                              </span>
                            </Link>
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
      <br/>
      <div className="container">
        <div className="section-header text-center">
          {/* <span className="subtitle">Faculties</span> */}
          <h2 className="title">FACULTY OF PHARMACY</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-12">
            <article>
              <div className="section-wrapper">
                <div className="row row-cols-1 justify-content-center g-4">
                  
                    <div className="col" >
                      <div className="post-item style-2">
                        <div className="post-inner">
                          <div className="post-content">
                          <Link to="/blog-single">
                              <h3>Ramanbhai Patel College of Pharmacy</h3>
                            </Link>
                            
                            <Link to="/blog-single" className="lab-btn">
                              <span>
                                {/* {val.btnText}{" "} */}
                                <i className="icofont-external-link"></i>
                              </span>
                            </Link>
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
      <br/>
      <div className="container">
        <div className="section-header text-center">
          {/* <span className="subtitle">Faculties</span> */}
          <h2 className="title">FACULTY OF COMPUTER SCIENCES AND APPLICATIONS</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-12">
            <article>
              <div className="section-wrapper">
                <div className="row row-cols-1 justify-content-center g-4">
                  
                    <div className="col" >
                      <div className="post-item style-2">
                        <div className="post-inner">
                          <div className="post-content">
                          <Link to="/blog-single">
                              <h3>Chandaben Mohanbhai Patel Institute of Computer Application</h3>
                            </Link>
                            
                            <Link to="/blog-single" className="lab-btn">
                              <span>
                                {/* {val.btnText}{" "} */}
                                <i className="icofont-external-link"></i>
                              </span>
                            </Link>
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
      <br/>
      <div className="container">
        <div className="section-header text-center">
          {/* <span className="subtitle">Faculties</span> */}
          <h2 className="title">FACULTY OF MANAGEMENT STUDIES</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-12">
            <article>
              <div className="section-wrapper">
                <div className="row row-cols-1 justify-content-center g-4">
                  
                    <div className="col" >
                      <div className="post-item style-2">
                        <div className="post-inner">
                          <div className="post-content">
                          <Link to="/blog-single">
                              <h3>Indukaka Ipcowala Institute of Management</h3>
                            </Link>
                            
                            <Link to="/blog-single" className="lab-btn">
                              <span>
                                {/* {val.btnText}{" "} */}
                                <i className="icofont-external-link"></i>
                              </span>
                            </Link>
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
      <br/>
      <div className="container">
        <div className="section-header text-center">
          {/* <span className="subtitle">Faculties</span> */}
          <h2 className="title">FACULTY OF SCIENCES</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-12">
            <article>
              <div className="section-wrapper">
                <div className="row row-cols-1 justify-content-center g-4">
                  
                    <div className="col" >
                      <div className="post-item style-2">
                        <div className="post-inner">
                          <div className="post-content">
                          <Link to="/blog-single">
                              <h3>P. D. Patel Institute of Applied Science</h3>
                            </Link>
                            
                            <Link to="/blog-single" className="lab-btn">
                              <span>
                                {/* {val.btnText}{" "} */}
                                <i className="icofont-external-link"></i>
                              </span>
                            </Link>
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
      <br/>
      <div className="container">
        <div className="section-header text-center">
          {/* <span className="subtitle">Faculties</span> */}
          <br/>
          <h2 className="title">FACULTY OF MEDICAL SCIENCES</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-12">
            <article>
              <div className="section-wrapper">
                <div className="row row-cols-1 justify-content-center g-4">
                  
                    <div className="col" >
                      <div className="post-item style-2">
                        <div className="post-inner">
                          <div className="post-content">
                          <Link to="/blog-single">
                              <h3>Manikaka Topawala Institute of Nursing</h3>
                            </Link>
                            
                            <Link to="/blog-single" className="lab-btn">
                              <span>
                                {/* {val.btnText}{" "} */}
                                <i className="icofont-external-link"></i>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  
                </div>
              </div>
            </article>
            <br/>
            <article>
              <div className="section-wrapper">
                <div className="row row-cols-1 justify-content-center g-4">
                  
                    <div className="col" >
                      <div className="post-item style-2">
                        <div className="post-inner">
                          <div className="post-content">
                          <Link to="/blog-single">
                              <h3>Ashok & Rita Patel Institute of Physiotherapy</h3>
                            </Link>
                            
                            <Link to="/blog-single" className="lab-btn">
                              <span>
                                {/* {val.btnText}{" "} */}
                                <i className="icofont-external-link"></i>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  
                </div>
              </div>
            </article>
            <br/>
            <article>
              <div className="section-wrapper">
                <div className="row row-cols-1 justify-content-center g-4">
                  
                    <div className="col" >
                      <div className="post-item style-2">
                        <div className="post-inner">
                          <div className="post-content">
                          <Link to="/blog-single">
                              <h3>Bapubhai Desaibhai Patel Institute of Paramedical Sciences</h3>
                            </Link>
                            
                            <Link to="/blog-single" className="lab-btn">
                              <span>
                                {/* {val.btnText}{" "} */}
                                <i className="icofont-external-link"></i>
                              </span>
                            </Link>
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
  );
}
