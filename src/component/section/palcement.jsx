import React from "react";
import { MDBContainer } from "mdbreact";
import { Line } from "react-chartjs-2";
import 'chart.js/auto'

export default function placement() {
  const data_highest_package = {
    labels: [
      
      "2019",
      "2020",
      "2021",
      "2022",
    ],
    datasets: [
      {
        label: "Highest Package in Lakh",
        data: [ 4, 5, 6, 7],
        fill: true,
        backgroundColor: "rgba(241,97,38, .3)",
        borderColor: "#f16126",
      },
    ],
  };

  const data_average_package = {
    labels: [
      
      "2019",
      "2020",
      "2021",
      "2022",
    ],
    datasets: [
      {
        label: "Average Package in Lakh",
        data: [ 4, 5, 6, 7],
        fill: true,
        backgroundColor: "rgba(241,97,38, .3)",
        borderColor: "#f16126",
      },
    ],
  };

  const data_industries = {
    labels: [
      
      "2019",
      "2020",
      "2021",
      "2022",
    ],
    datasets: [
      {
        label: "No. of Industries",
        data: [ 4, 5, 6, 7],
        fill: true,
        backgroundColor: "rgba(241,97,38, .3)",
        borderColor: "#f16126",
      },
    ],
  };

  return (
    <div>
      <section className="about-section style-4 padding-tb">
        <div className="container">
          <div className="section-header text-center">
            <span className="subtitle">Why to Choose CHARUSAT</span>
            <h2 className="title">Placements</h2>
          </div>
          <div className="about-items">
            <div className="about-item">
              <MDBContainer>
                <Line data={data_highest_package} />
              </MDBContainer>
            </div>
            <div className="about-item"><MDBContainer>
                <Line data={data_average_package} />
              </MDBContainer></div>
            <div className="about-item"><MDBContainer>
                <Line data={data_industries} />
              </MDBContainer></div>
          </div>
        </div>
      </section>
    </div>
  );
}
