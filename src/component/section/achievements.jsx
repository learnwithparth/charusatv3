import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Link } from "react-router-dom";

export default function achievements() {
  //   const [key, setKey] = useState('');
  return (
    <div className="course-section padding-tb">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">Why to Choose CHARUSAT</span>
          <h2 className="title">Unique Initiatives</h2>
        </div>
        <div className="section-wrapper" style={{textAlign:'center'}}>
          {/* <div className="row g-4 justify-content-center row-cols-lg-2 row-cols-1">
                        {courseList.map((val, i) => (
                            <div className="col" key={i}>
                                <div className="course-item style-2">
                                    <div className="course-inner">
                                        <div className="course-thumb">
                                            <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                            <div className="course-price">{val.price}</div>
                                        </div>
                                        <div className="course-content">
                                            <div className="course-category">
                                                <div className="course-cate">
                                                    <a href="#">{val.cate}</a>
                                                </div>
                                                <div className="course-reiew">
                                                    <Rating />
                                                    <span className="ratting-count">{val.reviewCount}</span>
                                                </div>
                                            </div>
                                            <a href="/course-single"><h4>{val.title}</h4></a>
                                            <div className="course-details">
                                                <div className="couse-count"><i className="icofont-video-alt"></i> {val.totalLeson}</div>
                                                <div className="couse-topic"><i className="icofont-signal"></i> {val.schdule}</div>
                                            </div>
                                            <div className="course-footer">
                                                <div className="course-author">
                                                    <img src={`${val.authorImgUrl}`} alt={`${val.authorImgAlt}`} />
                                                    <Link to="/team-single" className="ca-name">{val.authorName}</Link>
                                                </div>
                                                <div className="course-btn">
                                                    <Link to="/course-single" className="lab-btn-text">{val.btnText} <i className="icofont-external-link"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div> */}
          <Link to="/blog-single" className="lab-btn" >
            <span >CHARUSAT Space Research and Technology Center</span>
            <hr />
            <span>Dr. K. C. Patel Research & Development Center</span>
            <hr />
            <span>International Cosmology Center (ICC)</span>
            <hr />
            <span>CHARUSAT Rural Education Development Program</span>
            <hr />
            <span>Pri. B. I. Patel Human Resource Development Center</span>
            <hr />
            <span>Entrepreneurship Development and Incubation Cell</span>
            <hr />
            <span>University Industry Interaction Cell</span>
            <hr />
            <span>NABL & Testing Facilities</span>
            <hr />
            <span>
              Sustainable Development Goals Laboratory (SDG Handprint Action
              Lab)
            </span>
          </Link>
        </div>
        <br />

        <div className="section-header text-center">
          {/* <span className="subtitle">Why to Choose CHARUSAT</span> */}
          <h2 className="title">Achievements</h2>
        </div>
      </div>
    </div>
  );
}
