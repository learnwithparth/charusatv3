//const subTitle = "Why Choose Us, Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn, Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn Take courses on your any device with our app & learn all time what you want. Just download & install & start to learnTake courses on your any device with our app & learn all time what you want. Just download & install & start to learnTake courses on your any device with our app & learn all time what you want. Just download & install & start to learn Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn";
// const title = "Become Online Instructor";

//const text='From Presidents Desk';
const title = "President's Welcome";
//const subTitle = "About CHARUSAT";

const PresidentDesk = () => {
  return (
    <div className="blog-section padding-tb section-bg">
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <div className="about-left mt-5">
              <div
                className="about-thumb"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="assets/images/about/President_sir.png"
                  alt="about"
                  style={{ margin: "0 auto" }}
                />
              </div>
              <div style={{ textAlign: "center", marginTop: "10px" }}>
                <h4>Shri Surendra Patel</h4>
                <h5>President, CHARUSAT</h5>
              </div>
            </div>
          </div>
          <div className="col-sm-9">
            <div className="about-right">
              <div className="section-header">
                {/* <span className="subtitle">{subTitle}</span> */}
                <h2 className="title">{title}</h2>
                <p style={{ textAlign: "justify", lineHeight:"1.8rem" }}>
                  Intelligence with Character is the true goal of Education.{" "}
                  <strong>
                    Knowledge gives humility, from humility, one attains
                    Character.
                  </strong>{" "}
                  The Highest Education is that which makes our life in harmony
                  with all existence.
                </p>
                <p style={{ textAlign: "justify", lineHeight:"1.8rem" }}>
                  In the context, CHARUSAT as a University has been quite
                  distinct from day one. It strives to make{" "}
                  <strong>Charotar – the Land of Sardar Patel</strong> the{" "}
                  <strong>Global Education Hub</strong> through knowledge
                  creation, augmentation, and dissemination. For the purpose,
                  CHARUSAT dedicates its efforts towards developing synergy
                  between industry and academia; and community upliftment
                  through education. Importantly, CHARUSAT continually strives
                  to focus on the future with an entrepreneurial spirit.
                </p>
                <p style={{ textAlign: "justify", lineHeight:"1.8rem" }}>
                  As a University, CHARUSAT is emerging with a thrust on
                  socially relevant Research & Development. For the purpose, a
                  <strong>Research and Development Centre</strong> has been
                  established on the Campus. Uniquely,{" "}
                  <strong>Space Research and Technology Centre</strong> is also
                  established to initiate and foster research in Space
                  Technology.
                </p>
                <p style={{ textAlign: "justify", lineHeight:"1.8rem" }}>
                  Efforts are also made for education amelioration in rural
                  schools through a{" "}
                  <strong>Rural Education Development Program.</strong>
                  On-Campus and Outreach Activities are organized for School –
                  Students, Teachers, and Management.{" "}
                  <strong>Human Resource Development Centre</strong> hones
                  competencies of Faculty and Staff on Campus.
                </p>
              </div>
            </div>
          </div>
          <div>
            <p style={{ textAlign: "justify", lineHeight:"1.8rem" }}>
              Through these initiatives and practices, CHARUSAT focuses on
              converting eyes into sight and vision; information into knowledge
              and wisdom; and demography into citizens and harmonious living.
              Further, programs at CHARUSAT enable the students not only to gain
              an understanding but also to develop insights in altered research
              areas. Teachers also dedicate their efforts to construct and
              facilitate opportunities where the{" "}
              <strong>students can practice and experience creativity.</strong>{" "}
              Moving a step ahead towards the purpose of education, CHARUSAT
              aims to make its student’s{" "}
              <strong>Job Creators and not Job Seekers.</strong>
            </p>
            <p style={{ textAlign: "justify", lineHeight:"1.8rem" }}>
              In order to inculcate values in the students, CHARUSAT has been
              established as a University fostering{" "}
              <strong>High Moral Values.</strong> Honesty, Integrity, and
              Transparency have been the benchmarks of CHARUSAT in both – word
              and action.
            </p>
            <p style={{ textAlign: "justify", lineHeight:"1.8rem" }}>
              In the journey, CHARUSAT fosters a niche for a world-class
              education at the rural base. It aspires to be a{" "}
              <strong>World Class University.</strong> Primarily, it strives to
              be among <strong>Top 20 Universities at National Level.</strong>
            </p>
            <p style={{ textAlign: "justify", lineHeight:"1.8rem" }}>
              I, earnestly, request you all to join hands with CHARUSAT and work
              towards the realization of this aspiration. Many have already
              volunteered in this <strong>Seva Yagna</strong> through their
              magnanimity, knowledge, skills and resource sharing; and through
              their association with CHARUSAT either as a Faculty, Staff or
              Student.
            </p>
            <p style={{ textAlign: "justify", lineHeight:"1.8rem" }}>
              On behalf of CHARUSAT Family, I extend a word of gratitude to all
              and also invite all to visit the Campus, witness the development
              and be a part of the Journey.
            </p>
            <p className="">
              <strong>- Mr. Surendra M. Patel</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresidentDesk;
