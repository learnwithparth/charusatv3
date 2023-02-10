import React from "react";

export default function initiatives() {
  const title = (
    <h2>
      <span>About</span> Lincon Senses
    </h2>
  );
  const desc =
    "Lincon Senses is Senior English Teacher of Professor University. I am Sharing my knowledge with my lovely students";

  const countList1 = [
    {
      iconName: "icofont-light-bulb",
      count: "12600",
      desc: "Improve Skill",
    },
    {
      iconName: "icofont-credit-card",
      count: "50",
      desc: "Creative Thinking",
    },
    {
      iconName: "icofont-graduate",
      count: "350",
      desc: "Self Learning",
    },
  ];

  const countList2 = [
    {
      iconName: "icofont-paper-plane",
      count: "Knowledge",
      desc: "Knowledge",
    },
    {
      iconName: "icofont-site-map",
      count: "50",
      desc: "Self Development",
    },
    {
      iconName: "icofont-users-alt-3",
      count: "Community Building",
      desc: "Community Building",
    },
  ];

  const countList3 = [
    {
      iconName: "icofont-chart-line",
      count: "Career Building",
      desc: "Career Building",
    },
    {
      iconName: "icofont-dollar",
      count: "50",
      desc: "Start Earning",
    },
    {
      iconName: "icofont-flag",
      count: "350",
      desc: "Be confident",
    },
  ];
  return (
    <section className="about-section style-4 padding-tb">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle yellow-color">Why to Choose CHARUSAT</span>
          <h2 className="title" style={{ color: "white" }}>
            Our Goals
          </h2>
        </div>
        <div className="about-items">
          <div className="about-item">
            <div className="counter-part">
              {countList1.map((val, i) => (
                <div className="count-item" key={i}>
                  <div className="count-inner">
                    <div className="count-icon">
                      <i className={val.iconName}></i>
                    </div>
                    <div className="count-content">
                      <h4>
                        <span className="count">{val.desc}</span>
                      </h4>
                      {/* <p>{val.desc}</p> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="about-item">
            <div className="counter-part">
              {countList2.map((val, i) => (
                <div className="count-item" key={i}>
                  <div className="count-inner">
                    <div className="count-icon">
                      <i className={val.iconName}></i>
                    </div>
                    <div className="count-content">
                      <h4>
                        <span className="count">{val.desc}</span>
                      </h4>
                      {/* <p>{val.desc}</p> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="about-item">
            <div className="counter-part">
              {countList3.map((val, i) => (
                <div className="count-item" key={i}>
                  <div className="count-inner">
                    <div className="count-icon">
                      <i className={val.iconName}></i>
                    </div>
                    <div className="count-content">
                      <h4>
                        <span className="count">{val.desc}</span>
                      </h4>
                      {/* <p>{val.desc}</p> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
