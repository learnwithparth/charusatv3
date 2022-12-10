import { Component, useState } from "react";
import { Link } from "react-router-dom";

const title = "Our People";

const CourseData = [
  {
    imgUrl: "assets/images/People/SurendraSir.png",
    imgAlt: "Surendra sir",
    cate: "Governing Body",
    title: "Surendra Patel",
    author: "assets/images/course/author/01.jpg",
    authorName: ["President: Shri Charotar Moti Sattavis Patidar Kelavani Mandal",<br/>,"Former Chairman: Ahmedabad Urban Development Authority",<br/>,"Former Member of Parliament: Rajya Sabha",<br/>," A Renowned Technocrat"],
    id: 1,
  },
  {
    imgUrl: "assets/images/People/RVU_Sir.png",
    imgAlt: "RVU Sir",
    cate: "Governing Body",
    title: "Dr. R V Upadhyay",
    author: "assets/images/course/author/01.jpg",
    authorName: ["Provost:Charotar University of Science and Technology (CHARUSAT)"],
    id: 2,
  },
  {
    imgUrl: "assets/images/People/VirendraPatel.png",
    imgAlt: "virendra patel",
    cate: "Governing Body",
    title: "Shri Virendra S Patel",
    author: "assets/images/course/author/02.jpg",
    authorName: ["Member",<br/>,"Trustee: Shri Charotar Moti Sattavis Patidar Kelavani Mandal",<br/>,"Treasurer: CHRF",<br/>,"Founder: Charusat Educational Foundation"],
    price: "$199.00",
    id: 3,
  },
  {
    imgUrl: "assets/images/People/mipatel-1.png",
    imgAlt: "mipatel",
    cate: "Governing Body",
    title: "Dr. M. I. Patel",
    author: "assets/images/course/author/03.jpg",
    authorName: ["Member",<br/>,"Former Sheriff of Mumbai",<br/>,"Renowned Technocrat and Industrialist based at Mumbai",<br />,"Chief Patron : Smt. Chandaben Mohanbhai Patel Institute of Computer Applications, CHARUSAT"],
    id: 4,
  },
  {
    imgUrl: "assets/images/People/NaginbhaiPatel.png",
    imgAlt: "Naginbhai patel",
    cate: "Governing Body",
    title: "Shri Naginbhai M. Patel",
    author: "assets/images/course/author/03.jpg",
    authorName: ["Member",<br/>,"President : Shri Charotar Moti Sattavis Leuva Patidar Samaj – Mathrusanstha"],
    id: 5,
  },
  {
    imgUrl: "assets/images/People/Bimal-Patel.png",
    imgAlt: "Naginbhai patel",
    cate: "Governing Body",
    title: "Dr. Bimal Patel",
    author: "assets/images/course/author/03.jpg",
    authorName: ["Member",<br/>,"Vice-Chancellor : Rashtriya Raksha University",<br/>,"Member : International Law Commission, UN"],
    id: 6,
  },
  {
    imgUrl: "assets/images/People/MananRaval.webp",
    imgAlt: "Manan Raval",
    cate: "Governing Body",
    title: "Dr. Manan Raval",
    author: "assets/images/course/author/03.jpg",
    authorName: ["Member",<br/>,"Dean: Faculty of Pharmacy",<br />,"Principal: Ramanbhai Patel College of Pharmacy (RPCP)",],
    id: 7,
  },
  {
    imgUrl: "assets/images/People/dr-y-p-kosta.webp",
    imgAlt: "y p kosta",
    cate: "Governing Body",
    title: "Dr. Y. P. Kosta",
    author: "assets/images/course/author/03.jpg",
    authorName: ["Member",<br/>,"Principal: Chandubhai S Patel Institute of Technology (CSPIT)",<br />,"I/C Principal: Devang Patel Institute of Advanced Technology and Research (DEPSTAR)"],
    id: 8,
  },
  {
    imgUrl: "assets/images/People/ManubhaiPatel.png",
    imgAlt: "Manubhai Patel",
    cate: "Governing Body",
    title: "Shri Manubhai Patel",
    author: "assets/images/course/author/03.jpg",
    authorName: ["Member",<br/>,"Prominent Industrialist",<br />,"Managing Director: Sigil India Ltd., Vadodara",<br />,"Patron: P. D. Patel Institute of Applied Science (PDPIAS)"],
    id: 9,
  },
  {
    imgUrl: "assets/images/People/HemalPatel-1.png",
    imgAlt: "Hemal Patel",
    cate: "Governing Body",
    title: "Shri Hemal Patel",
    author: "assets/images/course/author/03.jpg",
    authorName: ["Member",<br/>,"Leading Entrepreneur in IT Industry"],
    id: 10,
  },
  {
    imgUrl: "assets/images/People/PankajPatel-1.png",
    imgAlt: "Pankaj Patel",
    cate: "Governing Body",
    title: "Shri Pankaj R Patel",
    author: "assets/images/course/author/03.jpg",
    authorName: ["Member",<br/>,"Chairman & Managing Director: Cadila Healthcare Ltd",<br />,"Chief Patron: Ramanbhai Patel College of Pharmacy, CHARUSAT",<br />,"Chairman: Ahmedabad Management Association"],
    id: 11,
  },
  {
    imgUrl: "assets/images/People/DevangPatel.png",
    imgAlt: "Devang Patel",
    cate: "Governing Body",
    title: "Shri Devang Patel",
    author: "assets/images/course/author/03.jpg",
    authorName: ["Member",<br/>,"Chief Executive: IPCO Industries & Business Operated at USA",<br />,"Chief Patron: Indukaka Ipcowala Institute of Management, CHARUSAT",<br />,"A Philanthrope of repute"],
    id: 12,
  },
  {
    imgUrl: "assets/images/People/dr_harish_patel.png",
    imgAlt: "y p kosta",
    cate: "Governing Body",
    title: "Dr. Harish Patel",
    author: "assets/images/course/author/03.jpg",
    authorName: ["Member",<br/>,"Prominent Technocrate, USA",<br />,"Chief Patron: Manikaka Topawala Institute of Nursing, CHARUSAT",<br />,"A Philanthrope of repute"],
    id: 13,
  },
  {
    imgUrl: "assets/images/People/SJHaider.png",
    imgAlt: "y p kosta",
    cate: "Governing Body",
    title: "Shri S J Haider, IAS",
    author: "assets/images/course/author/03.jpg",
    authorName: ["Member",<br/>,"Principal Secretary, Education, Govt.of Gujarat"],
    id: 14,
  },
  {
    imgUrl: "assets/images/People/DrDevangJoshi-1.png",
    imgAlt: "Devang Joshi",
    cate: "Governing Body",
    title: "Dr. Devang Joshi",
    author: "assets/images/course/author/03.jpg",
    authorName: ["Member Secretary",<br/>,"Registrar, CHARUSAT"],
    id: 15,
  },
  {
    imgUrl: "assets/images/People/SurendraSir.png",
    imgAlt: "Surendra sir",
    cate: "BoM",
    title: "Surendra Patel",
    author: "assets/images/course/author/01.jpg",
    authorName: ["President: Shri Charotar Moti Sattavis Patidar Kelavani Mandal",<br/>,"Former Chairman: Ahmedabad Urban Development Authority",<br/>,"Former Member of Parliament: Rajya Sabha",<br/>," A Renowned Technocrat"],
    id: 1,
  },
  {
    imgUrl: "assets/images/People/RVU_Sir.png",
    imgAlt: "RVU Sir",
    cate: "BoM",
    title: "Dr. R V Upadhyay",
    author: "assets/images/course/author/01.jpg",
    authorName: ["Provost:Charotar University of Science and Technology (CHARUSAT)"],
    id: 2,
  },
  {
    imgUrl: "assets/images/People/NaginbhaiPatel.png",
    imgAlt: "Naginbhai patel",
    cate: "BoM",
    title: "Shri Naginbhai M. Patel",
    author: "assets/images/course/author/03.jpg",
    authorName: ["Member",<br/>,"President : Shri Charotar Moti Sattavis Leuva Patidar Samaj – Mathrusanstha"],
    id: 3,
  },
  {
    imgUrl: "assets/images/People/nayan_patel_sir.png",
    imgAlt: "Naginbhai patel",
    cate: "BoM",
    title: "Shri Nayan Patel",
    author: "assets/images/course/author/03.jpg",
    authorName: ["Member",<br/>,"Industrialist, Mumbai"],
    id: 4,
  },
  {
    imgUrl: "assets/images/People/user.png",
    imgAlt: "Dipenbhai patel",
    cate: "BoM",
    title: "Shri Dipenbhai Patel",
    author: "assets/images/course/author/03.jpg",
    authorName: ["Member",<br/>,""],
    id: 5,
  },
  {
    imgUrl: "assets/images/People/HTPatel.png",
    imgAlt: "H T patel",
    cate: "BoM",
    title: "Shri H T Patel",
    author: "assets/images/course/author/03.jpg",
    authorName: ["Member",<br/>,"Former President: API Business, Zydus Cadila Healthcare Ltd"],
    id: 6,
  },
];

export default function People() {
  const [items, setItems] = useState(CourseData);
  const filterItem = (categItem) => {
    const updateItems = CourseData.filter((curElem) => {
      return curElem.cate === categItem;
    });
    setItems(updateItems);
  };

  return (
    <div className="course-section style-3 padding-tb">
      <div className="course-shape one">
        <img src="assets/images/shape-img/icon/01.png" alt="education" />
      </div>
      <div className="course-shape two">
        <img src="assets/images/shape-img/icon/02.png" alt="education" />
      </div>
      <div className="container">
        <div className="section-header">
          <h2 className="title">{title}</h2>
          <div className="course-filter-group">
            <ul className="lab-ul">
              <li onClick={() => setItems(CourseData)}>All</li>
              <li onClick={() => filterItem("Governing Body")}>Governing Body</li>
              <li onClick={() => filterItem("BoM")}>Board of Management</li>
              <li onClick={() => filterItem("DeansNPrincipal")}>Deans & Principal</li>
              <li onClick={() => filterItem("University Officers")}>University Officers</li>
            </ul>
          </div>
        </div>
        <div className="section-wrapper">
          <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 course-filter">
            {items.map((elem) => {
              const {
                id,
                imgUrl,
                imgAlt,
                cate,
                title,
                author,
                authorName,
                price,
              } = elem;
              return (
                <div className="col" key={id}>
                  <div className="course-item style-4">
                    <div className="course-inner">
                      <div className="course-thumb">
                        <img src={imgUrl} alt={imgAlt} />
                        <div className="course-category">
                          {/* <div className="course-cate">
                            <a href="#">{cate}</a>
                            </div> */}
                          {/* <div className="course-reiew">
                                                        <Rating />
                                                    </div> */}
                        </div>
                      </div>
                      <div className="course-content">
                        <Link to="/course-single">
                          <h5>{title}</h5>
                          <h6>{authorName}</h6>

                        </Link>
                        {/* <div className="course-footer">
                                                    <div className="course-author">
                                                        <img src={author} alt={imgAlt} />
                                                        <Link to="/team-single" className="ca-name">{authorName}</Link>
                                                    </div>
                                                    <div className="course-price">{price}</div>
                                                </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
