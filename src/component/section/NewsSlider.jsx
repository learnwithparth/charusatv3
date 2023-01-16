import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../../assets/css/newsSlider.css";
import { Nav } from "react-bootstrap";

export default class NewsSlider extends Component {
  render() {
    var settings = {
      dots: true,
      arrows: false,
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
      <div
        style={{
          "text-align": "center",
          backgroundColor: "#FEFBF6",
          border: "1px solid red",
          borderRadius: "10px",
        }}
        className="news-all-link "
      >
        <br />
        <br />
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
        <br />
        <br />

        <Nav.Link
          href="www.google.com"
          style={{
            "text-decoration": "underline",
            "text-align": "right",
            fontSize: "1.2rem",
            padding: "1rem",
          }}
        >
          View All <i className="icofont-long-arrow-right"></i>
        </Nav.Link>
      </div>
    );
  }
}
