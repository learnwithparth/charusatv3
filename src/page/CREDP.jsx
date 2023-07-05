import { Fragment } from "react";
import Iframe from "react-iframe";

const CREDP = () => {
  return (
    <Fragment>
      {/* <PageHeader title={'4 Results found for: Business'} curPage={'Search Result'} /> */}
      <div className="blog-section padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          <div className="post-content">
                            <h3>
                              Charusat Rural Education Development Program
                              (CREDP)
                            </h3>
                            <hr />
                            <br />
                            <p style={{ fontSize: "1rem" }}>
                              Charusat Rural Education Development Program
                              (CREDP) has been launched with an aim to
                              ameliorate the standards of school education in
                              Charotar region. It is also planned to eventually
                              expand it to the state of Gujarat.
                            </p>
                            <br />
                            <p style={{ fontSize: "1rem" }}>
                              The Program was launched on September 26, 2013 in
                              the august presence of Shri Bhupendrasinh
                              Chudasama, Hon’ble Minister of Education,
                              Government of Gujarat.
                            </p>
                            <br />
                            <p style={{ fontSize: "1rem" }}>
                              The program focuses on Strengthening of school
                              infrastructure facilities through guidance in: lab
                              development, library and other knowledge resource
                              development and deployment of technology and other
                              tools in pedagogy.
                            </p>
                            <h6>
                              The CREDP Cell organizes Education Support
                              Activities like
                            </h6>
                            <ol>
                              {[
                                "Training Programs, Tests, and Competitions for Students",
                                "Training Programs, Workshops and Seminars for Teachers",
                                "Counseling Programs for Parents and School Management",
                                "Awareness and Motivational Programs for Students",
                                "School Visits for Surveys to identify the educational needs of the schools",
                                "CHARUSAT Campus Visit by Schools",
                                " Career Counseling and Awareness Programs / Campaigns",
                              ].map((item, index) => (
                                <li key={index}>{item}</li>
                              ))}
                            </ol>
                            <hr />
                            {/*  */}
                            <div className="course-single-section">
                              <div className="container">
                                <div className="row justify-content-left">
                                  <div className="col">
                                    <div className="main-part">
                                      <div className="course-video">
                                        <div className="course-video-content">
                                          <div
                                            className="accordion"
                                            id="accordionExample"
                                          >
                                            {/*  */}
                                            <div className="accordion-item">
                                              <div
                                                className="accordion-header"
                                                id="accordion01"
                                              >
                                                <button
                                                  className="d-flex flex-wrap justify-content-between"
                                                  data-bs-toggle="collapse"
                                                  data-bs-target="#videolist1"
                                                  aria-expanded="true"
                                                  aria-controls="videolist1"
                                                >
                                                  <span className="text-white">
                                                    Major Activities initiated
                                                    under the CREDP
                                                  </span>{" "}
                                                  <span className="text-white">
                                                    <i class="icofont-square-down"></i>
                                                  </span>{" "}
                                                </button>
                                              </div>
                                              <div
                                                id="videolist1"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="accordion01"
                                                data-bs-parent="#accordionExample"
                                              >
                                                <div
                                                  className="row"
                                                  style={{
                                                    border: "1px solid #e5e5e5",
                                                    margin: "-5px 2px 2px 2px",
                                                    padding: "10px",
                                                  }}
                                                >
                                                  <div className="col">
                                                    <h6>School Surveys</h6>
                                                    <p style={{ fontSize: "1rem" }}>
                                                      With a view to know the
                                                      present status of the
                                                      schools of Charotar region
                                                      through data collection, a
                                                      survey was carried out.
                                                      The survey consisted of
                                                      data about the school
                                                      infrastructure, strength
                                                      of students in each class,
                                                      number of teachers etc.
                                                      Till date total 66 schools
                                                      have been surveyed. Total{" "}
                                                      <strong>22930</strong>{" "}
                                                      students of standard 1 to
                                                      12 from 66 schools within
                                                      the span of 50 kilometers
                                                      have been covered till
                                                      date.
                                                    </p>
                                                  </div>
                                                </div>
                                                <br />
                                              </div>
                                            </div>
                                            {/*  */}
                                            <div className="accordion-item">
                                              <div
                                                className="accordion-header"
                                                id="accordion02"
                                              >
                                                <button
                                                  className="d-flex flex-wrap justify-content-between"
                                                  data-bs-toggle="collapse"
                                                  data-bs-target="#videolist2"
                                                  aria-expanded="true"
                                                  aria-controls="videolist2"
                                                >
                                                  <span className="text-white">
                                                    Teaching – Training Programs
                                                  </span>{" "}
                                                  <span className="text-white">
                                                    <i class="icofont-square-down"></i>
                                                  </span>{" "}
                                                </button>
                                              </div>
                                              <div
                                                id="videolist2"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="accordion02"
                                                data-bs-parent="#accordionExample"
                                              >
                                                <div
                                                  className="row"
                                                  style={{
                                                    border: "1px solid #e5e5e5",
                                                    margin: "-5px 2px 2px 2px",
                                                    padding: "10px",
                                                  }}
                                                >
                                                  <div className="col">
                                                    <h6>
                                                      Teachers’ – Training
                                                      Program
                                                    </h6>
                                                    <p style={{ fontSize: "1rem" }}>
                                                      A Pre – phase Teachers’
                                                      Training Program titled
                                                      Effective Classroom
                                                      Communication was
                                                      conducted at B A Patel
                                                      High School, Changa on
                                                      November 30, 2013,
                                                      Saturday. Total 20
                                                      teachers, teaching the
                                                      four identified subjects
                                                      (Mathematics, Science,
                                                      English and Computer)
                                                      attended the Program. The
                                                      teachers were motivated to
                                                      upgrade their skills
                                                      through further training.
                                                    </p>
                                                    <h6>
                                                      Teaching Aptitude Training
                                                    </h6>
                                                    <p style={{ fontSize: "1rem" }}>
                                                      The CREDP Cellorganized
                                                      Teaching Aptitude Training
                                                      in collaboration with
                                                      Indukaka Ipcowala
                                                      Institute of Management
                                                      (I2IM) from June 3 to 5,
                                                      2014. Total 35 Primary,
                                                      Secondary and Higher
                                                      Secondary teachers of
                                                      SantramVidyalaya, Nadiad
                                                      were trained at CHARUSAT
                                                      Campus. The training
                                                      included topics like
                                                      sustaining teaching
                                                      aptitude, Child
                                                      psychology, student-
                                                      centric classroom
                                                      teaching, soft skills, use
                                                      of ICT in teaching-
                                                      learning process, etc.
                                                    </p>
                                                    <h6>
                                                      One-day Workshop on Oral
                                                      Communication for English
                                                      Teachers of Primary
                                                      Schools
                                                    </h6>
                                                    <p style={{ fontSize: "1rem" }}>
                                                      A One-day Workshop on Oral
                                                      Communication for English
                                                      Teachers of Primary
                                                      Schools of rural area was
                                                      organized on January 23,
                                                      2015, Friday, in
                                                      collaboration with H M
                                                      Patel Institute of English
                                                      Training and Research, V V
                                                      Nagar. Total 21 Teachers
                                                      of English from 18
                                                      different Primary Schools
                                                      of rural area were trained
                                                      by resource persons of
                                                      CHARUSAT, Changa and H M
                                                      Patel Institute of English
                                                      Training and Research, V V
                                                      Nagar.
                                                    </p>
                                                    <h6>
                                                      A One- Day Workshop on
                                                      Education for 21st Century
                                                    </h6>
                                                    <p style={{ fontSize: "1rem" }}>
                                                      A One- Day Workshop on
                                                      Education for 21st Century
                                                      was organized for 48
                                                      trainee Teachers and 10
                                                      teachers of I J Patel B Ed
                                                      College, Mogri. The
                                                      participants were taken on
                                                      visit to CHARUSAT Campus
                                                      in three different groups.
                                                      They were provided with
                                                      information about various
                                                      courses and programs run
                                                      by CHARUSAT. Expert
                                                      sessions on topics like –
                                                      Challenges of 21st
                                                      Century, Problems of 21st
                                                      Century and Opportunities
                                                      of 21st Century were
                                                      arranged for the
                                                      participants. A group
                                                      discussion for teachers
                                                      was organized wherein
                                                      topics like present
                                                      education reforms,
                                                      Necessary improvements and
                                                      changing role of teachers
                                                      were discussed.
                                                    </p>
                                                    <h6>
                                                      Teaching – Learning Model
                                                      Exhibition
                                                    </h6>
                                                    <p style={{ fontSize: "1rem" }}>
                                                      A Teaching- Learning Model
                                                      exhibition was organized
                                                      by CREDP Cell on April 12,
                                                      2014, at I2IM building.
                                                      The exhibition aimed at
                                                      helping students
                                                      conceptualize and
                                                      comprehend the learning
                                                      items more effectively in
                                                      the four identified
                                                      subjects- Mathematics,
                                                      Science, English and
                                                      Computer and complement
                                                      teachers’ approach to
                                                      administering the subject
                                                      matter in a creative way
                                                      by incorporating various
                                                      techniques into the
                                                      learning process.
                                                    </p>
                                                    <p style={{ fontSize: "1rem" }}>
                                                      Total 25 schools
                                                      participated in the
                                                      exhibition and exhibited
                                                      around 40 models. In total
                                                      300 students and teachers
                                                      from rural areas visited
                                                      the exhibition.
                                                    </p>
                                                    <h6>
                                                      Vacation Training Program
                                                      in Spoken English and
                                                      Computer
                                                    </h6>
                                                    <p style={{ fontSize: "1rem" }}>
                                                      The CREDP Cell organized
                                                      Vacation Training Program
                                                      in Spoken English and
                                                      Computer for the students
                                                      of standard 5 to 12 at
                                                      CHARUSAT Campus, Changa
                                                      with an aim to
                                                      helpstudents gain basic
                                                      communication and
                                                      functional skills in
                                                      English and Computer. The
                                                      training program was
                                                      conducted from 2 to 14
                                                      June, 2014. Total 76
                                                      students of standard 5 to
                                                      12 from nearby 14
                                                      villages, studying in 23
                                                      different schools were
                                                      benefited from the
                                                      program. Along with
                                                      teaching English and
                                                      Computer, students were
                                                      taken on visit to CHARUSAT
                                                      campus. The students were
                                                      guided through every
                                                      educational institution.
                                                      The students were
                                                      introduced to the
                                                      facilities provided at
                                                      Laboratories, workshops,
                                                      classrooms, internet labs
                                                      and Knowledge resource
                                                      Center (central library)
                                                      as well as CHARUSAT
                                                      Hospital. They were shown
                                                      a movie about CHARUSAT.
                                                    </p>
                                                    <p style={{ fontSize: "1rem" }}>
                                                      Along with teaching of
                                                      English and computer,
                                                      students were motivated
                                                      through guidance lectures
                                                      on life values, education,
                                                      health and culture. On
                                                      visit to CHARUSAT
                                                      Hospital, Dr. Kalpana
                                                      Patel, delivered an
                                                      awareness lecture on
                                                      adolescence and puberty
                                                      for girl-students. Dr.
                                                      Praful Patel guided
                                                      students on hygienic
                                                      habits. The training
                                                      program was successful as
                                                      there was notable
                                                      improvement in the
                                                      students in terms of
                                                      ability to use English
                                                      language in day-to-day
                                                      life and basic functions
                                                      of computer.
                                                    </p>
                                                    <h6>
                                                      Week-End Training Classes
                                                      on English and Computer
                                                    </h6>

                                                    <p style={{ fontSize: "1rem" }}>
                                                      Week-end Training Program
                                                      in Spoken English and
                                                      Computer for the students
                                                      of standard 5 to 12
                                                      started from July, 2014 at
                                                      CHARUSAT Campus, Changa.
                                                      The Training Program aimed
                                                      at helping students gain
                                                      basic communication and
                                                      functional skills in
                                                      English and Computer. 154
                                                      students of standard 5 to
                                                      12 from nearby villages
                                                      benefited from the
                                                      program. Training classes
                                                      were conducted every
                                                      Saturday (3 to 5 pm) and
                                                      Sunday (10 am to 1 pm).
                                                    </p>
                                                    <h6>
                                                      Essay Writing Competition
                                                      – 2014
                                                    </h6>
                                                    <p style={{ fontSize: "1rem" }}>
                                                      Essay Writing Competition-
                                                      14 was organized for the
                                                      students of standard 6 to
                                                      12 by CREDP Cell at
                                                      CHARUSAT Campus, Changa on
                                                      September 6, 2014. The
                                                      Essay Writing Competition
                                                      – 14 was organized from 11
                                                      am to 12 pm. Participation
                                                      fees for all the students
                                                      was rupees 20/- only. Four
                                                      standard-wise topics were
                                                      announced for the Essay
                                                      Competition.
                                                    </p>
                                                    <p style={{ fontSize: "1rem" }}>
                                                      Total 175 students of
                                                      standard 5 to 9 from
                                                      nearby 19 villages,
                                                      studying in 27 different
                                                      schools participated in
                                                      the competition. The
                                                      students, achieving 1st,
                                                      2nd and 3rd rank were
                                                      awarded prizes as well as
                                                      certificates. All the
                                                      participants were awarded
                                                      with a certificate of
                                                      participation.
                                                    </p>
                                                    <h6>
                                                      One –Day Workshop on
                                                      Career Guidance and Life
                                                      skills at Umreth
                                                    </h6>
                                                    <p style={{ fontSize: "1rem" }}>
                                                      A One- Day workshop on
                                                      Career Guidance and Life
                                                      skills was conducted at
                                                      Deen Dayanand Kumar
                                                      Chhatralay, Umreth on July
                                                      13, 2014, Sunday. The
                                                      workshop was conducted for
                                                      72 students of standard 5
                                                      to 12. The students were
                                                      motivated to adopt good
                                                      life skills and choose an
                                                      appropriate educational
                                                      stream for a better
                                                      career.
                                                    </p>
                                                    <h6>
                                                      Training Program at Saghan
                                                      Shikshan Program at
                                                      Vaghecha and Vyara
                                                    </h6>
                                                    <p style={{ fontSize: "1rem" }}>
                                                      A One-Day intensive
                                                      training program on
                                                      Functional Use of English
                                                      Language was conducted as
                                                      a part of a Five – Day
                                                      Intensive Training program
                                                      on English Language
                                                      organized by Buniyadi
                                                      Shikshan Sangh, Bardoli
                                                      December 12, 2014.
                                                    </p>
                                                    <p style={{ fontSize: "1rem" }}>
                                                      The training was conducted
                                                      for around 2500 students
                                                      of standard 9 of the
                                                      Schools and 200 Teacher
                                                      Trainees in South Gujarat
                                                      that joined Nayee Taleem
                                                      Project at Vaghecha and
                                                      Vyara.
                                                    </p>
                                                  </div>
                                                </div>
                                                <br />
                                              </div>
                                            </div>
                                            {/*  */}
                                            <div className="accordion-item">
                                              <div
                                                className="accordion-header"
                                                id="accordion03"
                                              >
                                                <button
                                                  className="d-flex flex-wrap justify-content-between"
                                                  data-bs-toggle="collapse"
                                                  data-bs-target="#videolist3"
                                                  aria-expanded="true"
                                                  aria-controls="videolist3"
                                                >
                                                  <span className="text-white">
                                                    Awareness / Motivational
                                                    Programs
                                                  </span>{" "}
                                                  <span className="text-white">
                                                    <i class="icofont-square-down"></i>
                                                  </span>{" "}
                                                </button>
                                              </div>
                                              <div
                                                id="videolist3"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="accordion03"
                                                data-bs-parent="#accordionExample"
                                              >
                                                <div
                                                  className="row"
                                                  style={{
                                                    border: "1px solid #e5e5e5",
                                                    margin: "-5px 2px 2px 2px",
                                                    padding: "10px",
                                                  }}
                                                >
                                                  <div className="col">
                                                    <h6>
                                                      Campus visit by Schools
                                                    </h6>
                                                    <p style={{ fontSize: "1rem" }}>
                                                      Every month different
                                                      schools are invited to
                                                      visit CHARUSAT Campus,
                                                      Changa. The students are
                                                      guided through every
                                                      educational institution.
                                                      The students are
                                                      introduced to the
                                                      facilities provided at
                                                      Laboratories, workshops,
                                                      classrooms, internet labs
                                                      and Knowledge Resource
                                                      Center (Central Library)
                                                      as well as CHARUSAT
                                                      Hospital. They are shown a
                                                      movie about CHARUSAT.
                                                      Total 6028 students of
                                                      different schools from
                                                      rural area have visited
                                                      CHARUSAT Campus since the
                                                      inception of CREDP.
                                                    </p>
                                                    <h6>
                                                      Model Exhibition on Space
                                                    </h6>
                                                    <p style={{ fontSize: "1rem" }}>
                                                      Charusat Rural Education
                                                      Development Program Cell
                                                      organize a Model
                                                      Exhibition on Space in
                                                      collaboration with ISRO,
                                                      Ahmedabad and B A Patel
                                                      High School, Changa.
                                                    </p>
                                                    <p style={{ fontSize: "1rem" }}>
                                                      Total 1963 from 32
                                                      Primary, Secondary and
                                                      Higher Secondary Schools
                                                      visited the exhibition on
                                                      27-28 February, 2015.
                                                    </p>
                                                    <h6>Awareness Program</h6>
                                                    <p style={{ fontSize: "1rem" }}>
                                                      Stepping forward in the
                                                      same direction, the CREDP
                                                      Cell initiated a General
                                                      Awareness Program. The
                                                      Awareness Program was
                                                      conducted under the title
                                                      – “શિક્ષણ, વિદ્યાર્થી,
                                                      અંગ્રેજી અને આવનાર યુગ” in
                                                      total 25schools in Phase
                                                      -I. In all, 4353 students
                                                      of standard 5 to 9 have
                                                      been trained under the
                                                      program. The program
                                                      consists of school visit,
                                                      survey, interaction with
                                                      students as well as
                                                      faculty of the schools and
                                                      a motivational lecture.
                                                    </p>
                                                    <h6>
                                                      The lecture covered mainly
                                                      the topics like
                                                    </h6>
                                                    <ol
                                                      style={{
                                                        listStyleType:
                                                          "upper-alpha",
                                                      }}
                                                    >
                                                      {[
                                                        "Importance of education – for better life style, Social – Economic – intellectual growth and development, Employability etc.",
                                                        "Education in India: Education system, Increase importance of education, Higher education for employment, Government initiated motivational schemes, Vocational, professional and skill courses etc.",
                                                        "Education in Gujarat: present status of education in the status, Government initiatives to promote education, job opportunities, opportunities for youth with skills and language competence.",
                                                        "Importance of English Language: as Global language, for cross-culture communication, employment and promotion, business transaction, academic purpose, for higher education and transaction across linguistic boundaries etc.",
                                                        "Role of students skill development, adaptability, innovative, critical and researcher approach, readiness to accept challenges and",
                                                        "Need of the era- multi-talent, competence in communication and use of technology.",
                                                      ].map((item, index) => (
                                                        <li key={index}>
                                                          {item}
                                                        </li>
                                                      ))}
                                                    </ol>
                                                    <h6>
                                                      Career Guidance Lecture
                                                      Seminars
                                                    </h6>
                                                    <p style={{ fontSize: "1rem" }}>
                                                      The CREDP Cell organized
                                                      Career Guidance lectures
                                                      for the students of
                                                      standard 9 and 10 of 3
                                                      different rural Schools.
                                                      Total for 323 students
                                                      were benefitted from the
                                                      lectures.
                                                    </p>
                                                    <p style={{ fontSize: "1rem" }}>
                                                      The students were provided
                                                      with information regarding
                                                      various career
                                                      opportunities and were
                                                      motivated to choose
                                                      appropriate stream after
                                                      standard 10.
                                                    </p>
                                                    <h6>
                                                      Visit to Liberal Arts
                                                      Exhibition
                                                    </h6>
                                                    <p style={{ fontSize: "1rem" }}>
                                                      CREDP Cell arranged a
                                                      Visit to Liberal Arts
                                                      Exhibition organized by
                                                      CHARUSAT. Three schools
                                                      were invited to visit the
                                                      exhibition. Total 147
                                                      students of 3 Schools
                                                      visited the exhibition.
                                                    </p>
                                                    <p style={{ fontSize: "1rem" }}>
                                                      Students were happy to see
                                                      different models of Craft,
                                                      Pottery and Paintings.
                                                      They showed their desire
                                                      to learn that art and
                                                      prepare such models.
                                                    </p>
                                                    <h6>
                                                      Health Awareness Program
                                                    </h6>
                                                    <p style={{ fontSize: "1rem" }}>
                                                      CREDP Cell organized
                                                      Health Awareness Program
                                                      for 483 students of 17
                                                      Schools. Students were
                                                      delivered awareness
                                                      lecture and presentation
                                                      on Personal Hygiene and
                                                      adolescence and puberty
                                                      for girl-students.
                                                    </p>
                                                  </div>
                                                </div>
                                                <br />
                                              </div>
                                            </div>
                                            {/*  */}
                                            <div className="accordion-item">
                                              <div
                                                className="accordion-header"
                                                id="accordion04"
                                              >
                                                <button
                                                  className="d-flex flex-wrap justify-content-between"
                                                  data-bs-toggle="collapse"
                                                  data-bs-target="#videolist4"
                                                  aria-expanded="true"
                                                  aria-controls="videolist4"
                                                >
                                                  <span className="text-white">
                                                    Celebrations and Educational
                                                    Activities
                                                  </span>{" "}
                                                  <span className="text-white">
                                                    <i class="icofont-square-down"></i>
                                                  </span>{" "}
                                                </button>
                                              </div>
                                              <div
                                                id="videolist4"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="accordion04"
                                                data-bs-parent="#accordionExample"
                                              >
                                                <div
                                                  className="row"
                                                  style={{
                                                    border: "1px solid #e5e5e5",
                                                    margin: "-5px 2px 2px 2px",
                                                    padding: "10px",
                                                  }}
                                                >
                                                  <div className="col">
                                                    <h6>
                                                      Independence Day
                                                      Celebration
                                                    </h6>
                                                    <p style={{ fontSize: "1rem" }}>
                                                      CREDP Cell organized
                                                      Independence Day
                                                      Celebration on August 15,
                                                      2014. Total 70 students
                                                      from 12 nearby Schools
                                                      participated in the
                                                      celebration. Students were
                                                      made aware of the
                                                      importance of Independence
                                                      Day, Freedom Fight through
                                                      inspirational lecture on
                                                      Independence Day.
                                                    </p>
                                                    <p style={{ fontSize: "1rem" }}>
                                                      Students participated in
                                                      the Flag hoisting
                                                      ceremony. Students
                                                      delivered speeches on –
                                                      Freedom Fight, Gandhiji,
                                                      Sardar Patel etc. An Open
                                                      – House debate on – મારો
                                                      દેશ કેવો હોવો જોઈએ ! was
                                                      organized for students as
                                                      part of the celebration. A
                                                      Quiz on – Freedom
                                                      Movement, Freedom Fighter,
                                                      National Symbols,
                                                      Geography, Neighboring
                                                      Countries, Government was
                                                      organized for the students
                                                    </p>
                                                    <h6>
                                                      Participation in Run for
                                                      Unity
                                                    </h6>
                                                    <p style={{ fontSize: "1rem" }}>
                                                      Students of nearby Schools
                                                      that have joined hands
                                                      with CHARUSAT participated
                                                      in the Run for Unity
                                                      organized by CHARUSAT as a
                                                      part of the Celebration of
                                                      Birth Anniversary of
                                                      Sardar Patel and National
                                                      Unity Day on October 31,
                                                      2014. In all, 70 students
                                                      of 7 schools participated
                                                      in the Run from Valetava
                                                      to CHARUSAT, Changa.
                                                    </p>
                                                    <h6>
                                                      Celebration of Gandhi
                                                      Jayanti
                                                    </h6>
                                                    <p style={{ fontSize: "1rem" }}>
                                                      CREDP Cell organized
                                                      Celebration of Gandhi
                                                      Jayanti on October 2, 2014
                                                      at CHARUSAT. Total 154
                                                      students of 12 schools
                                                      participated in the
                                                      Celebration. Students were
                                                      delivered a lecture on
                                                      Gandhian Philosophy. Group
                                                      Discussion on Cleanliness
                                                      was also arranged.
                                                      Students were shown a
                                                      movie on Gandhiji.
                                                    </p>
                                                    <h6>
                                                      National Education Day
                                                      Celebration
                                                    </h6>
                                                    <p style={{ fontSize: "1rem" }}>
                                                      CREDP Cell organized
                                                      National Education Day
                                                      celebration for the
                                                      students of standard 5 to
                                                      12 at CHARUSAT Campus,
                                                      Changa on November 11,
                                                      2014. Total 712 students
                                                      from 18 different Primary,
                                                      Secondary and Higher
                                                      Secondary schools
                                                      participated in the
                                                      program. 19 school
                                                      teachers also accompanied
                                                      the students. Different
                                                      curricular and
                                                      co-curricular activities
                                                      like workshops, Seminar,
                                                      Expert lecture and
                                                      awareness programs were
                                                      organized as a part of the
                                                      celebration of National
                                                      Education Day.
                                                    </p>
                                                    <p style={{ fontSize: "1rem" }}>
                                                      A career guidance lecture
                                                      for the students of
                                                      standard 11 and 12 was
                                                      organized at Seminar Hall,
                                                      I2IM Building from 11 to
                                                      12 pm. The students were
                                                      guided for choosing right
                                                      stream and set career
                                                      goals.
                                                    </p>
                                                    <h6>
                                                      An expert lecture on
                                                      Renewable Energy:
                                                    </h6>
                                                    <p style={{ fontSize: "1rem" }}>
                                                      An expert lecture on
                                                      Renewable Energy was
                                                      organized for the students
                                                      of Group A from 1 pm to 2
                                                      pm. Mr. Sameer Vohra,
                                                      Executive from SPRERI, V V
                                                      Nagar gave presentation on
                                                      process, sources and
                                                      advantages of Renewable
                                                      Energy. Students were
                                                      inspired to work in such
                                                      stream.
                                                    </p>
                                                    <p style={{ fontSize: "1rem" }}>
                                                      A Work shop on Decision
                                                      Making and Planning was
                                                      organized for the students
                                                      at I2IM Building from 3 to
                                                      4 pm. Different activities
                                                      to develop decision making
                                                      skills and planning skills
                                                      in students were
                                                      organized.
                                                    </p>
                                                    <p style={{ fontSize: "1rem" }}>
                                                      An Awareness Program on
                                                      fostering familiarity with
                                                      Nature by team of
                                                      Vidyanagar Nature Club, V
                                                      V Nagar
                                                    </p>
                                                    <h6>
                                                      Work shop on Painting
                                                    </h6>
                                                    <h6>
                                                      Lecture on Health
                                                      Awareness
                                                    </h6>
                                                    <h6>
                                                      Workshop on Dictation
                                                    </h6>
                                                    <p style={{ fontSize: "1rem" }}>
                                                      Comprehension ability of
                                                      the students was evaluated
                                                      through a test.
                                                    </p>
                                                    <h6>
                                                      Work shop on Picture
                                                      –Story and Story –Telling
                                                    </h6>
                                                    <p style={{ fontSize: "1rem" }}>
                                                      A Work shop on Picture
                                                      –Story and Story –Telling
                                                      was organized for the
                                                      students of standard 5, 6,
                                                      7 and 8. Students shared
                                                      their group’s stories with
                                                      all the participants.
                                                    </p>
                                                    <p style={{ fontSize: "1rem" }}>
                                                      In all, 123 students of
                                                      Standard 11 and 12; 176
                                                      students of Standard 9 and
                                                      10, and 413 students of
                                                      Standard 5, 6, 7 and 8
                                                      participated in the
                                                      celebration.
                                                    </p>
                                                    <h6>
                                                      Celebration of Republic
                                                      Day
                                                    </h6>
                                                    <p style={{ fontSize: "1rem" }}>
                                                      Students of various rural
                                                      schools that have joined
                                                      hands with CREDP Cell
                                                      participated in the
                                                      Celebration of Republic
                                                      Day organized on January
                                                      26, 2015. Total 80
                                                      students from 12 nearby
                                                      Schools participated in
                                                      the celebration of
                                                      Republic Day.
                                                    </p>
                                                    <p style={{ fontSize: "1rem" }}>
                                                      Students of different
                                                      Schools performed dance,
                                                      Skit, Solo song, Group
                                                      songs, Solo Dance etc. in
                                                      the cultural event.
                                                    </p>
                                                    <h6>
                                                      Celebration of Mahatma
                                                      Gandhi Nirvan Din and
                                                      Martyrs’ Day
                                                    </h6>
                                                    <p style={{ fontSize: "1rem" }}>
                                                      CREDP Cell facilitated and
                                                      organized State Level
                                                      Drawing Competition and
                                                      Painting Competition on
                                                      the theme – Mahatma Gandhi
                                                      and Safai as a part of
                                                      celebration of Mahatma
                                                      Gandhi Nirvan Din and
                                                      Martyrs’ Day on January
                                                      30, 2015.
                                                    </p>
                                                    <p style={{ fontSize: "1rem" }}>
                                                      Total 201 students (Total
                                                      96 Boys and 105 Girls)
                                                      from different educational
                                                      institutes of CHARUSAT
                                                      participated in the
                                                      competition.
                                                    </p>
                                                  </div>
                                                </div>
                                                <br />
                                              </div>
                                            </div>
                                            {/*  */}
                                            <div className="accordion-item">
                                              <div
                                                className="accordion-header"
                                                id="accordion05"
                                              >
                                                <button
                                                  className="d-flex flex-wrap justify-content-between"
                                                  data-bs-toggle="collapse"
                                                  data-bs-target="#videolist5"
                                                  aria-expanded="true"
                                                  aria-controls="videolist5"
                                                >
                                                  <span className="text-white">
                                                    Other Activities
                                                  </span>{" "}
                                                  <span className="text-white">
                                                    <i class="icofont-square-down"></i>
                                                  </span>{" "}
                                                </button>
                                              </div>
                                              <div
                                                id="videolist5"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="accordion05"
                                                data-bs-parent="#accordionExample"
                                              >
                                                <div
                                                  className="row"
                                                  style={{
                                                    border: "1px solid #e5e5e5",
                                                    margin: "-5px 2px 2px 2px",
                                                    padding: "10px",
                                                  }}
                                                >
                                                  <div className="col">
                                                    <h6>
                                                      Campus visit by Senior
                                                      Citizen Forum, Bakrol:
                                                    </h6>
                                                    <p style={{ fontSize: "1rem" }}>
                                                      Senior Citizen Forum,
                                                      Bakrol visited CHARUSAT
                                                      Campus on Tuesday, 11th
                                                      February, 2014. The visit
                                                      was coordinated by CREDP
                                                      Cell. Total 60 members of
                                                      the Forum visited the
                                                      campus. They were led to
                                                      all educational institutes
                                                      and provided with details
                                                      of the activities on the
                                                      campus. They watched movie
                                                      about CHARUSAT and had
                                                      interesting interaction.
                                                    </p>
                                                    <h6>
                                                      Educational Resource
                                                      Development
                                                    </h6>
                                                    <p style={{ fontSize: "1rem" }}>
                                                      CREDP Cell has facilitated
                                                      the establishment of
                                                      Training and Development
                                                      Centre at Nisraya with the
                                                      direction from CHARUSAT. A
                                                      Computer Lab is
                                                      established at the centre
                                                      and establishment of
                                                      Library is in progress.
                                                    </p>
                                                    <h6>
                                                      Felicitation and Prize
                                                      Distribution at Annual Day
                                                      at School
                                                    </h6>
                                                    <p style={{ fontSize: "1rem" }}>
                                                      A presentation of
                                                      activities of CREDP and
                                                      felicitation of winner and
                                                      participants of Essay
                                                      Writing Competition was
                                                      done at Annual Day of R C
                                                      Mission Primary School,
                                                      Samarkha on December 10,
                                                      2014.
                                                    </p>
                                                    <h6>
                                                      Meeting with Educational
                                                      Trust of Rural School
                                                    </h6>
                                                    <p style={{ fontSize: "1rem" }}>
                                                      Convener of REES Mr.
                                                      Suryakantbhai Patel, Dr.
                                                      Sharad Patel, Mr.
                                                      Mahendrabhai Patel, Mr. S
                                                      K Patel and
                                                      representatives of CREDP
                                                      Cell visited rural School
                                                      at Dabhou, Gada, Alindra,
                                                      Khandhali and Tranaja on
                                                      December 23 and 24, 2014.
                                                    </p>
                                                    <p style={{ fontSize: "1rem" }}>
                                                      The members of Kelavani
                                                      Mandals of the villages
                                                      were informed about the
                                                      educational and awareness
                                                      activities carried out by
                                                      CREDP Cell and motivated
                                                      the Schools to help the
                                                      students get benefits from
                                                      the activities organized
                                                      by CREDP.
                                                    </p>
                                                  </div>
                                                </div>
                                                <br />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/* <Author /> */}

                                      {/* <Respond /> */}
                                    </div>
                                  </div>
                                  {/* <div className="col-lg-4"> */}

                                  {/* <div className="sidebar-part"> */}
                                  {/* <CourseSideDetail /> */}
                                  {/* <CourseSideCetagory /> */}
                                  {/* </div> */}
                                  {/* </div> */}
                                </div>
                              </div>
                            </div>
                            {/*  */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/*  */}
            <div className="col-lg-4 col-12">
              <aside>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          <div className="post-content">
                            {/* <Link to="/blog-single"> */}
                            <h3>Contact Person</h3>
                            {/* </Link> */}
                            <div className="meta-post">
                              <ul className="lab-ul">
                                <li
                                  style={{
                                    marginBottom: "10px",
                                  }}
                                >
                                  <i className="icofont-ui-user"></i>
                                  Dr. Atul Patel
                                </li>
                                <li
                                  style={{
                                    marginBottom: "10px",
                                  }}
                                >
                                  <i className="icofont-email"></i>
                                  atulpatel.mca@charusat.ac.in
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CREDP;
