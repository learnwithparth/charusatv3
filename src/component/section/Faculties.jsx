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
  const subTitle = "Academics";
  const title = "Our offerings";
  return (
    <section className="feature-section style-2 padding-tb">
      <div className="container" >
        <div className="section-header text-center">
          <span className="subtitle yellow-color">{subTitle}</span>
          <h2 className="title">{title}</h2>
        </div>
        <Accordion defaultActiveKey="0" style={{textAlign:'center'}}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Faculty of medical Sciences</Accordion.Header>
            <Accordion.Body>
            <div className="blog-section">
            <Link to="/blog-single" className="lab-btn"><span>Manikaka Topawala Institute of Nursing <i className="icofont-external-link"></i></span></Link>
            <br/>
            <br/>
            <Link to="/blog-single" className="lab-btn"><span>Manikaka Topawala Institute of Nursing <i className="icofont-external-link"></i></span></Link>
            </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
          <FontAwesomeIcon icon="fa-graduation-cap" /> <Accordion.Header> <i class="fa-solid fa-graduation-cap"></i>  Faculty of Engineering & Technology</Accordion.Header>
            <Accordion.Body>
            <Link to="/blog-single" className="lab-btn"><span>Manikaka Topawala Institute of Nursing <i className="icofont-external-link"></i></span></Link>
            <br/>
            <br/>
            <Link to="/blog-single" className="lab-btn"><span>Manikaka Topawala Institute of Nursing <i className="icofont-external-link"></i></span></Link>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
          <FontAwesomeIcon icon="fa-graduation-cap" /> <Accordion.Header> <i class="fa-solid fa-graduation-cap"></i>  Faculty of Engineering & Technology</Accordion.Header>
            <Accordion.Body>
            <Link to="/blog-single" className="lab-btn"><span>Manikaka Topawala Institute of Nursing <i className="icofont-external-link"></i></span></Link>
            <br/>
            <br/>
            <Link to="/blog-single" className="lab-btn"><span>Manikaka Topawala Institute of Nursing <i className="icofont-external-link"></i></span></Link>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
          <FontAwesomeIcon icon="fa-graduation-cap" /> <Accordion.Header> <i class="fa-solid fa-graduation-cap"></i>  Faculty of Engineering & Technology</Accordion.Header>
            <Accordion.Body>
            <Link to="/blog-single" className="lab-btn"><span>Manikaka Topawala Institute of Nursing <i className="icofont-external-link"></i></span></Link>
            <br/>
            <br/>
            <Link to="/blog-single" className="lab-btn"><span>Manikaka Topawala Institute of Nursing <i className="icofont-external-link"></i></span></Link>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
          <FontAwesomeIcon icon="fa-graduation-cap" /> <Accordion.Header> <i class="fa-solid fa-graduation-cap"></i>  Faculty of Engineering & Technology</Accordion.Header>
            <Accordion.Body>
            <Link to="/blog-single" className="lab-btn"><span>Manikaka Topawala Institute of Nursing <i className="icofont-external-link"></i></span></Link>
            <br/>
            <br/>
            <Link to="/blog-single" className="lab-btn"><span>Manikaka Topawala Institute of Nursing <i className="icofont-external-link"></i></span></Link>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
          <FontAwesomeIcon icon="fa-graduation-cap" /> <Accordion.Header> <i class="fa-solid fa-graduation-cap"></i>  Faculty of Engineering & Technology</Accordion.Header>
            <Accordion.Body>
            <Link to="/blog-single" className="lab-btn"><span>Manikaka Topawala Institute of Nursing <i className="icofont-external-link"></i></span></Link>
            <br/>
            <br/>
            <Link to="/blog-single" className="lab-btn"><span>Manikaka Topawala Institute of Nursing <i className="icofont-external-link"></i></span></Link>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </section>
  );
}
