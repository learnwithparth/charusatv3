import React from "react";
import { Link } from "react-router-dom";

const desc = [
  "Intelligence with Character is the true goal of Education. Knowledge gives humility, from humility, one attains Character. The Highest Education is that which makes our life in harmony with all existence.",
  "In the context, CHARUSAT as a University has been quite distinct from day one. It strives to make Charotar – the Land of Sardar Patel the Global Education Hub through knowledge creation, augmentation, and dissemination. For the purpose, CHARUSAT dedicates its efforts towards developing synergy between industry and academia; and community upliftment through education. Importantly, CHARUSAT continually strives to focus on the future with an entrepreneurial spirit.",
];
//const text='From Presidents Desk';
const title = "President's Welcome";
//const subTitle = "About CHARUSAT";

const provost_desc = [
  "Charotar University of Science and Technology (CHARUSAT) has been conceived by Shri Charotar Moti Sattavis Patidar Kelavani Mandal to put India on global education map by making Charotar – the Land of Sardar Patel, a Global Education Hub. Hence, CHARUSAT fosters an aspiration of being a World Class University. It strives, initially, to be in the league of Top 20 Universities at National Level.",
  "The exceptional vision of the President, CHARUSAT and Kelavani Mandal - Shri Surandrabhai Patel (fondly known as Kaka) strengthened by institutional values of Honesty, Integrity and transparency has enabled the university to realize the ambitious goal by 2025.",
];
//const text='From Presidents Desk';
const provost_title = "From the Provost's Desk";
//const subTitle = "About CHARUSAT";

export default function messages() {
  return (
    <section className="about-section style-3 padding-tb">
      <div className="container">
        <div className="row">
          <div className="col-3">
            {/* <span className="subtitle">{subTitle}</span> */}
            <img
              src="assets/images/about/President_sir.png"
              alt="about"
              className="thumbnail"
            />
            <h6 className="subtitle  mt-1">Shri Surendrabhai Patel</h6>
            <h6 className="subtitle ">President, CHARUSAT</h6>
          </div>
          {/* <img src="assets/images/about/President_sir.png" alt="about" />
            <h6 className="subtitle yellow-color mt-1">
              Shri Surendrabhai Patel
            </h6>
            <h6 className="subtitle yellow-color">President, CHARUSAT</h6> */}

          <div className="col-9">
            <div className="section-header">
              <h2 className="subtitle  ">{title}</h2>
              <p style={{ textAlign: "justify" }}>
                {desc} &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/PresidentDesk"> Read More >></Link>{" "}
              </p>
            </div>
            <br />
          </div>
        </div>
        <div className="row pt-4">
          <div className="col-3">
            <div className="about-left ">
              <img src="assets/images/about/Provost_RVU.webp" alt="about" />

              <h6 className="subtitle  mt-1">Dr R V Upadhyay</h6>
              <h6 className="subtitle ">Provost, CHARUSAT</h6>
            </div>
          </div>
          <div className="col-9">
            <div className="about-right">
              <div className="section-header">
                {/* <span className="subtitle">{subTitle}</span> */}
                <h2 className="subtitle  ">{provost_title}</h2>
                <p style={{ textAlign: "justify" }}>
                  {provost_desc} &nbsp; &nbsp;{" "}
                  <a href="./ProvostDesk"> Read More >></a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
