import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class NewsSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
    };
    return (
      <div>
        <br />
        {/* <h3>Announcements</h3> */}
        <Slider {...settings}>
          <div>
            <Link to="/course" className="lab-btn">
              <span>Tender for providing Canteen Services to CHARUSAT</span>
            </Link>
            ||||
          </div>
          <div>
            <Link to="/course" className="lab-btn">
              <span>Registration for 12th Convocation</span>
            </Link>
            ||||
          </div>
          <div>
            <Link to="/course" className="lab-btn">
              <span>Notice for 12th Convocation</span>
            </Link>
            ||||
          </div>
          <div>
            <Link to="/course" className="lab-btn">
              <span>PG Admission under DASA Scheme</span>
            </Link>
            ||||
          </div>
          <div>
            <Link to="/course" className="lab-btn">
              <span>DASA Online Reporting Form</span>
            </Link>
            ||||
          </div>
        </Slider>
      </div>
    );
  }
}
