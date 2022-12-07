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
      speed: 200,
      autoplay: true,
      slidesToShow: 1,
      //   slidesToScroll: 1,
      initialSlide: 0,
      //   cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <br />
        {/* <h3>Announcements</h3> */}
        <Slider {...settings}>
          <div className="lab-btn">
            <Link to="/course">
              <span>Tender for providing Canteen Services to CHARUSAT</span>
            </Link>
          </div>
          <div>
            <Link to="/course" className="lab-btn">
              <span>Registration for 12th Convocation</span>
            </Link>
          </div>
          <div>
            <Link to="/course" className="lab-btn">
              <span>Notice for 12th Convocation</span>
            </Link>
          </div>
          <div>
            <Link to="/course" className="lab-btn">
              <span>PG Admission under DASA Scheme</span>
            </Link>
          </div>
          <div>
            <Link to="/course" className="lab-btn">
              <span>DASA Online Reporting Form</span>
            </Link>
          </div>
        </Slider>
      </div>
    );
  }
}
