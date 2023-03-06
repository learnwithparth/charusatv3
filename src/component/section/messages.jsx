import React from "react";

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
    <section className="about-section style-4 padding-tb">
      <div className="container">
        <div className="row">
          <div className="col-sm-2">
            <div className="about-left ">
              <div className="about-thumb">
                <img src="assets/images/about/President_sir.png" alt="about" />
              </div>
              <h6 className="subtitle yellow-color mt-1">
                Shri Surendra Patel
              </h6>
              <h6 className="subtitle yellow-color">President, CHARUSAT</h6>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="about-right">
              <div className="section-header">
                {/* <span className="subtitle">{subTitle}</span> */}
                <h2 className="subtitle yellow-color ">{title}</h2>
                <p style={{ textAlign: "justify", color: "white" }}>{desc}</p>
                <br />
                <a href="#" style={{ color: "yellow" }}>
                  {" "}
                  Read More >>
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="about-left ">
              <div className="about-thumb">
                <img src="assets/images/about/Provost_RVU.webp" alt="about" />
              </div>
              <h6 className="subtitle yellow-color mt-1">Dr R V Upadhyay</h6>
              <h6 className="subtitle yellow-color">Provost, CHARUSAT</h6>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="about-right">
              <div className="section-header">
                {/* <span className="subtitle">{subTitle}</span> */}
                <h2 className="subtitle yellow-color ">{provost_title}</h2>
                <p style={{ textAlign: "justify", color: "white" }}>
                  {provost_desc}
                </p>
                <br />
                <a href="#" style={{ color: "yellow" }}>
                  {" "}
                  Read More >>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
