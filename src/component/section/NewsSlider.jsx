import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../../assets/css/newsSlider.css";

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
        <h6 className="desc">Announcements</h6>
        <Slider {...settings}>
          <div className="slider-item">
            <Link to="/course">
              <span>Tender for providing Canteen Services to CHARUSAT</span>
            </Link>
          </div>
          <div className="slider-item">
            <Link to="/course">
              <span>Registration for 12th Convocation</span>
            </Link>
          </div>
          <div className="slider-item">
            <Link to="/course">
              <span>Notice for 12th Convocation</span>
            </Link>
          </div>
          <div className="slider-item">
            <Link to="/course">
              <span>PG Admission under DASA Scheme</span>
            </Link>
          </div>
          <div className="slider-item">
            <Link to="/course">
              <span>DASA Online Reporting Form</span>
            </Link>
          </div>
        </Slider>
      </div>
    );
  }
}
