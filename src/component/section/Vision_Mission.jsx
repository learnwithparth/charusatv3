import { Link } from "react-router-dom";

const subTitle = "Loved by 50,000+ students";
const title = "Our Mission and Vision";

const studentList = [
  {
    //imgUrl: 'assets/images/feedback/student/01.jpg',
    //imgAlt: 'student rajibraj91 rajibraj',
    name: "Vision",
    //degi: 'UX designer',
    desc: "To become dynamic global institution in a knowledge driven world through excellence in teaching, research and social contribution",
  },
  {
    //imgUrl: 'assets/images/feedback/student/02.jpg',
    //imgAlt: 'student rajibraj91 rajibraj',
    name: "Mission",
    //degi: 'UX designer',
    desc: "To serve society by striving to transform it through creation, augmentation, dissemination and pepetuation of knowledge",
  },
];

const VisionMission = () => {
  return (
    <div className="student-feedbak-section padding-tb shape-img">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">{subTitle}</span>
          <h2 className="title">{title}</h2>
        </div>
        <div className="section-wrapper">
          <div className="row justify-content-center row-cols-lg-2 row-cols-1">
            <div className="col">
              <div className="sf-left">
                <div className="sfl-thumb" style={{ overflow: "hidden" }}>
                  <iframe
                    style={{
                      aspectRatio: "16/9",
                      width: "100%",
                    }}
                    src="https://www.youtube-nocookie.com/embed/tNv3Kx5nEsg"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                  {/* <img src="assets/images/feedback/01.jpg" alt="student feedback" />
                                    <a href="https://www.youtube.com/embed/tNv3Kx5nEsg" className="video-button popup" target="_blank"><i className="icofont-ui-play"></i></a> */}
                </div>
              </div>
            </div>
            <div className="col">
              {studentList.map((val, i) => (
                <div className="stu-feed-item" key={i}>
                  <div className="stu-feed-inner">
                    <div className="stu-feed-top">
                      <div className="sft-left">
                        {/* <div className="sftl-thumb">
                                                    <img src={`${val.imgUrl}`} alt={val.imgAlt} />
                                                </div> */}
                        <div className="sftl-content">
                          <Link to="/team-single">
                            <h6>{val.name}</h6>
                          </Link>
                          {/* <span>{val.degi}</span> */}
                        </div>
                      </div>
                    </div>
                    <div className="stu-feed-bottom">
                      <p>{val.desc}</p>
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

export default VisionMission;
