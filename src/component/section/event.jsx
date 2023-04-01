const subTitle = "Don’t Miss the Day";
const title = "Upcoming Events";
const desc = "";

const eventListOne = [
  {
    imgUrl: "assets/images/event/01.jpg",
    imgAlt: "upcomming event",
    Date: "13",
    MonthYear: "Nav 2021",
    title: "The Way of Higher Education & Its Difficulties",
    Time: "08:30 am",
    Place: " National Auditorium, Dhaka",
  },
];

const eventListTwo = [
  {
    Date: "13",
    MonthYear: "Nav 2021",
    title: "Convocation and Celebration 2021",
    Time: "08:30 am",
    Place: " National Auditorium, Dhaka",
  },
  {
    Date: "15",
    MonthYear: "Nav 2021",
    title: "Convocation and Celebration 2021",
    Time: "08:30 am",
    Place: " National Auditorium, Dhaka",
  },
  {
    Date: "18",
    MonthYear: "Nav 2021",
    title: "Convocation and Celebration 2021",
    Time: "08:30 am",
    Place: " National Auditorium, Dhaka",
  },
  {
    Date: "25",
    MonthYear: "Nav 2021",
    title: "Convocation and Celebration 2021",
    Time: "08:30 am",
    Place: " National Auditorium, Dhaka",
  },
];

const Event = () => {
  return (
    <div className="event-section padding-tb">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">{subTitle}</span>
          <h2 className="title">{title}</h2>
          <p className="desc">{desc}</p>
        </div>
        <div className="section-wrapper">
          <div className="row row-cols-lg-2 row-cols-1 g-4">
            {eventListOne.map((val, i) => (
              <div className="col" key={i}>
                <div className="event-left">
                  <div className="event-item">
                    <div className="event-inner">
                      <div className="event-thumb">
                        <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                      </div>
                      <div className="event-content">
                        <div className="event-date-info">
                          <div className="edi-box">
                            <h4>{val.Date}</h4>
                            <p>{val.MonthYear}</p>
                          </div>
                        </div>
                        <div className="event-content-info">
                          <a href="./upcoming-events">
                            <h3>{val.title}</h3>
                          </a>
                          <ul className="lab-ul">
                            <li>
                              <i className="icofont-clock-time"></i> {val.Time}
                            </li>
                            <li>
                              <i className="icofont-google-map"></i>
                              {val.Place}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="col">
              <div className="event-right">
                {eventListTwo.map((val, i) => (
                  <div className="event-item" key={i}>
                    <div className="event-inner">
                      <div className="event-content">
                        <div className="event-date-info">
                          <div className="edi-box">
                            <h4>{val.Date}</h4>
                            <p>{val.MonthYear}</p>
                          </div>
                        </div>
                        <div className="event-content-info">
                          <a href="./upcoming-events">
                            <h5>{val.title}</h5>
                          </a>
                          <ul className="lab-ul">
                            <li>
                              <i className="icofont-clock-time"></i> {val.Time}
                            </li>
                            <li>
                              <i className="icofont-google-map"></i> {val.Place}
                            </li>
                          </ul>
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
    </div>
  );
};

export default Event;
