import CountUp from "react-countup";

const achievementList = [
  {
    iconName: "icofont-papers",
    count: "600",
    desc: "Publications",
  },
  {
    iconName: "icofont-molecule",
    count: "30",
    desc: "Research Labs",
  },
  {
    iconName: "icofont-businessman",
    count: "30",
    desc: "Entrepreneurs",
  },
  {
    iconName: "icofont-bill",
    count: "45 ",
    desc: "Highest Package(Lacs)",
  },
];

const AchievementThree = () => {
  return (
    <div className="achievement-section style-2 p-4  ">
      <div className="container">
        <div className="section-wrapper">
          <div className="counter-part">
            <div className="row g-4 row-cols-lg-4 row-cols-sm-2 row-cols-1 justify-content-center">
              {achievementList.map((val, i) => (
                <div className="col" key={i}>
                  <div className="count-item">
                    <div className="count-inner" data-aos="fade-down">
                      <div className="count-icon">
                        <i className={val.iconName}></i>
                      </div>
                      <div className="count-content">
                        <h2>
                          <span className="count">
                            <CountUp end={val.count} />
                          </span>
                          <span>+</span>
                        </h2>
                        <p>{val.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementThree;
