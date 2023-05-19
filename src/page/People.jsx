import { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/people.css";

const title = "Associates";

const CourseData = [
  {
    imgUrl: "assets/images/People/SurendraSir.png",
    imgAlt: "Shri Surendra M. Patel",
    cate: ["Governing Body", "BOM"],
    title: "Surendra Patel",
    author: "assets/images/course/author/01.jpg",
    authorName: [
      "President: Shri Charotar Moti Sattavis Patidar Kelavani Mandal",
      <br />,
      "Former Chairman: Ahmedabad Urban Development Authority",
      <br />,
      "Former Member of Parliament: Rajya Sabha",
      <br />,
      " A Renowned Technocrat",
    ],
    id: 1,
  },
  {
    imgUrl: "assets/images/People/RVU_Sir.png",
    imgAlt: "RVU Sir",
    cate: ["Governing Body", "BOM"],
    title: "Dr. R V Upadhyay",
    author: "assets/images/course/author/01.jpg",
    authorName: [
      "Provost:Charotar University of Science and Technology (CHARUSAT)",
    ],
    id: 2,
  },
  {
    imgUrl: "assets/images/People/VirendraPatel.png",
    imgAlt: "virendra patel",
    cate: ["Governing Body"],
    title: "Shri Virendra S Patel",
    author: "assets/images/course/author/02.jpg",
    authorName: [
      "Member",
      <br />,
      "Trustee: Shri Charotar Moti Sattavis Patidar Kelavani Mandal",
      <br />,
      "Treasurer: CHRF",
      <br />,
      "Founder: Charusat Educational Foundation",
    ],
    price: "$199.00",
    id: 3,
  },
  {
    imgUrl: "assets/images/People/mipatel-1.png",
    imgAlt: "mipatel",
    cate: ["Governing Body"],
    title: "Dr. M. I. Patel",
    author: "assets/images/course/author/03.jpg",
    authorName: [
      "Member",
      <br />,
      "Former Sheriff of Mumbai",
      <br />,
      "Renowned Technocrat and Industrialist based at Mumbai",
      <br />,
      "Chief Patron : Smt. Chandaben Mohanbhai Patel Institute of Computer Applications, CHARUSAT",
    ],
    id: 4,
  },
  {
    imgUrl: "assets/images/People/NaginbhaiPatel.png",
    imgAlt: "Naginbhai patel",
    cate: ["Governing Body", "BOM"],
    title: "Shri Naginbhai M. Patel",
    author: "assets/images/course/author/03.jpg",
    authorName: [
      "Member",
      <br />,
      "President : Shri Charotar Moti Sattavis Leuva Patidar Samaj – Mathrusanstha",
    ],
    id: 5,
  },
  {
    imgUrl: "assets/images/People/Bimal-Patel.png",
    imgAlt: "Dr. Bimal Patel",
    cate: ["Governing Body"],
    title: "Dr. Bimal Patel",
    author: "assets/images/course/author/03.jpg",
    authorName: [
      "Member",
      <br />,
      "Vice-Chancellor : Rashtriya Raksha University",
      <br />,
      "Member : International Law Commission, UN",
    ],
    id: 6,
  },

  {
    imgUrl: "assets/images/People/dr-y-p-kosta.webp",
    imgAlt: "y p kosta",
    cate: ["Governing Body", "DeansNPrincipals"],
    title: "Dr. Y. P. Kosta",
    author: "assets/images/course/author/03.jpg",
    authorName: [
      "Member",
      <br />,
      "Principal: Chandubhai S Patel Institute of Technology (CSPIT)",
      <br />,
      "I/C Principal: Devang Patel Institute of Advanced Technology and Research (DEPSTAR)",
    ],
    id: 8,
  },
  {
    imgUrl: "assets/images/People/ManubhaiPatel.png",
    imgAlt: "Manubhai Patel",
    cate: ["Governing Body"],
    title: "Shri Manubhai Patel",
    author: "assets/images/course/author/03.jpg",
    authorName: [
      "Member",
      <br />,
      "Prominent Industrialist",
      <br />,
      "Managing Director: Sigil India Ltd., Vadodara",
      <br />,
      "Patron: P. D. Patel Institute of Applied Science (PDPIAS)",
    ],
    id: 9,
  },
  {
    imgUrl: "assets/images/People/MananRaval.webp",
    imgAlt: "Manan Raval",
    cate: ["Governing Body", "DeansNPrincipals"],
    title: "Dr. Manan Raval",
    author: "assets/images/course/author/03.jpg",
    authorName: [
      "Member",
      <br />,
      "Dean: Faculty of Pharmacy",
      <br />,
      "Principal: Ramanbhai Patel College of Pharmacy (RPCP)",
    ],
    id: 7,
  },
  {
    imgUrl: "assets/images/People/HemalPatel-1.png",
    imgAlt: "Hemal Patel",
    cate: ["Governing Body"],
    title: "Shri Hemal Patel",
    author: "assets/images/course/author/03.jpg",
    authorName: ["Member", <br />, "Leading Entrepreneur in IT Industry"],
    id: 10,
  },
  {
    imgUrl: "assets/images/People/PankajPatel-1.png",
    imgAlt: "Pankaj Patel",
    cate: ["Governing Body"],
    title: "Shri Pankaj R Patel",
    author: "assets/images/course/author/03.jpg",
    authorName: [
      "Member",
      <br />,
      "Chairman & Managing Director: Cadila Healthcare Ltd",
      <br />,
      "Chief Patron: Ramanbhai Patel College of Pharmacy, CHARUSAT",
      <br />,
      "Chairman: Ahmedabad Management Association",
    ],
    id: 11,
  },
  {
    imgUrl: "assets/images/People/DevangPatel.png",
    imgAlt: "Devang Patel",
    cate: ["Governing Body"],
    title: "Shri Devang Patel",
    author: "assets/images/course/author/03.jpg",
    authorName: [
      "Member",
      <br />,
      "Chief Executive: IPCO Industries & Business Operated at USA",
      <br />,
      "Chief Patron: Indukaka Ipcowala Institute of Management, CHARUSAT",
      <br />,
      "A Philanthrope of repute",
    ],
    id: 12,
  },
  {
    imgUrl: "assets/images/People/dr_harish_patel.png",
    imgAlt: "harish patel",
    cate: ["Governing Body"],
    title: "Dr. Harish Patel",
    author: "assets/images/course/author/03.jpg",
    authorName: [
      "Member",
      <br />,
      "Prominent Technocrate, USA",
      <br />,
      "Chief Patron: Manikaka Topawala Institute of Nursing, CHARUSAT",
      <br />,
      "A Philanthrope of repute",
    ],
    id: 13,
  },
  {
    imgUrl: "assets/images/People/SJHaider.png",
    imgAlt: "S J Haider",
    cate: ["Governing Body"],
    title: "Shri S J Haider, IAS",
    author: "assets/images/course/author/03.jpg",
    authorName: [
      "Member",
      <br />,
      "Principal Secretary, Education, Govt.of Gujarat",
    ],
    id: 14,
  },
  // {
  //   imgUrl: "assets/images/People/DrDevangJoshi-1.png",
  //   imgAlt: "Devang Joshi",
  //   cate: ["University Officers", "BOM"],
  //   title: "Dr. Devang Joshi",
  //   author: "assets/images/course/author/03.jpg",
  //   authorName: ["Member Secretary", <br />, "Registrar, CHARUSAT"],
  //   id: 15,
  // },
  {
    imgUrl: "assets/images/People/nayan_patel_sir.png",
    imgAlt: "Nayan patel",
    cate: ["BOM"],
    title: "Shri Nayan Patel",
    author: "assets/images/course/author/03.jpg",
    authorName: ["Member", <br />, "Industrialist, Mumbai"],
    id: 30,
  },
  {
    imgUrl: "assets/images/People/user.png",
    imgAlt: "Dipenbhai patel",
    cate: ["BOM"],
    title: "Shri Dipenbhai Patel",
    author: "assets/images/course/author/03.jpg",
    authorName: ["Member", <br />, ""],
    id: 16,
  },
  {
    imgUrl: "assets/images/People/HTPatel.png",
    imgAlt: "H T patel",
    cate: ["BOM"],
    title: "Shri H T Patel",
    author: "assets/images/course/author/03.jpg",
    authorName: [
      "Member",
      <br />,
      "Former President: API Business, Zydus Cadila Healthcare Ltd",
    ],
    id: 17,
  },
  {
    imgUrl: "assets/images/People/DarshanPatel.webp",
    imgAlt: "Darshan Patel",
    cate: ["BOM", "DeansNPrincipals"],
    title: "Dr. Darshan Patel",
    author: "assets/images/course/author/03.jpg",
    authorName: [
      "Ph.D.",
      <br />,
      "Principal : Bapubhai Desaibhai Patel Institute of Paramedical Sciences (BDIPS)",
      <br />,
      "principal.cips@charusat.ac.in",
    ],
    id: 18,
  },
  {
    imgUrl: "assets/images/People/AtulPatel.png",
    imgAlt: "Dr. Atul Patel",
    cate: ["Governing Body", "BOM", "University Officers"],
    title: "Dr. Atul Patel",
    author: "assets/images/course/author/03.jpg",
    authorName: [
      "Member",
      <br />,
      "Dean: Faculty of Computer Science & Applications",
      <br />,
      "Principal: Smt. Chandaben Mohanbhai Patel Intitute of Computer Applications (CMPICA)",
      <br />,
      "principal.cmpica@carusat.ac.in",
    ],
    id: 19,
  },
  {
    imgUrl: "assets/images/People/BalaGanpathy.webp",
    imgAlt: "Dr. M BalaGanpathy",
    cate: ["BOM", "DeansNPrincipals"],
    title: "Dr. M Balaganapathy",
    author: "assets/images/course/author/03.jpg",
    authorName: [
      "Ph. D.",
      <br />,
      "Dean : Faculty of Medical Sciences",
      <br />,
      "Principal : Ashok & Rita Patel Institute of Physiotherapy (ARIP)",
      <br />,
      "principal.arip@charusat.ac.in",
    ],
    id: 20,
  },
  {
    imgUrl: "assets/images/People/Vijay_Chaudhary.webp",
    imgAlt: "Vijay Chaudhary",
    cate: ["DeansNPrincipals"],
    title: "Dr. Vijay Chaudhary",
    author: "assets/images/course/author/03.jpg",
    authorName: [
      "Ph.D.",
      <br />,
      "I/C Dean: Faculty of Technology & Engineering",
      <br />,
      "Head: CHAMOS Matrusanstha Department of Mechanical Engineering",
      <br />,
      "hod.me@charusat.ac.in",
    ],
    id: 21,
  },
  {
    imgUrl: "assets/images/People/DrBhaskarPandya.png",
    imgAlt: "Bhaskar Pandya",
    cate: ["DeansNPrincipals"],
    title: "Dr. Bhaskar Pandya",
    author: "assets/images/course/author/03.jpg",
    authorName: [
      "Ph.D.",
      <br />,
      "Dean: Faculty of Management Studies",
      <br />,
      "I/C Principal: Indukaka Ipcowala Institute of Management(I2IM)",
      <br />,
      "principal.iiim@charusat.ac.in",
    ],
    id: 22,
  },
  {
    imgUrl: "assets/images/People/Gayatri-Dave.jpg",
    imgAlt: "Gayatri Dave",
    cate: ["DeansNPrincipals"],
    title: "Dr. Gayatri Dave",
    author: "assets/images/course/author/03.jpg",
    authorName: [
      "Ph.D.",
      <br />,
      "Dean : Faculty of Sciences",
      <br />,
      "dean.fas@charusat.ac.in",
    ],
    id: 23,
  },
  {
    imgUrl:
      "https://charusat.ac.in/wp-content/uploads/Deans_Principal/Dhruv-Dave.webp",
    imgAlt: "Dhruv Dave",
    cate: ["DeansNPrincipals"],
    title: "Dr. Dhruv Dave",
    author:
      "https://charusat.ac.in/wp-content/uploads/Deans_Principal/Dhruv-Dave.webp",
    authorName: [
      "Ph.D.",
      <br />,
      "Dean : Faculty of Medical Sciences",
      <br />,
      "dean.fmd@charusat.ac.in",
    ],
    id: 31,
  },
  {
    imgUrl:
      "https://charusat.ac.in/wp-content/uploads/Deans_Principal/TKU.webp",
    imgAlt: "Dr. Trushit Upadhyay",
    cate: ["DeansNPrincipals"],
    title: "Dr. Trushit Upadhyay",
    author:
      "https://charusat.ac.in/wp-content/uploads/Deans_Principal/TKU.webp",
    authorName: [
      "Ph.D.",
      <br />,
      "Principal : Chandubhai S Patel Institute of Technology(CSPIT)",
      <br />,
      "principal.cspit@charusat.ac.in",
    ],
    id: 32,
  },
  {
    imgUrl: "assets/images/People/user.png",
    imgAlt: "Dr. Samir Patel",
    cate: ["DeansNPrincipals"],
    title: "Dr. Samir Patel",
    author: "assets/images/People/user.png",
    authorName: [
      "Ph.D.",
      <br />,
      "Dean : Faculty of Pharmacy",
      <br />,
      "dean.fph@charusat.ac.in",
    ],
    id: 33,
  },
  {
    imgUrl: "assets/images/People/user.png",
    imgAlt: "Dr. Amit Nayak",
    cate: ["DeansNPrincipals"],
    title: "Dr. Amit Nayak",
    author: "assets/images/People/user.png",
    authorName: [
      "Ph.D.",
      <br />,
      "Principal : Devang Patel Institute of Advance Technology and Research (DEPSTAR)",
      <br />,
      "principal.depstar@charusat.ac.in",
    ],
    id: 34,
  },
  {
    imgUrl:
      "https://charusat.ac.in/wp-content/uploads/Deans_Principal/sanskruti_patel.jpg",
    imgAlt: "Dr. Sanskruti Patel",
    cate: ["DeansNPrincipals"],
    title: "Dr. Sanskruti Patel",
    author:
      "https://charusat.ac.in/wp-content/uploads/Deans_Principal/sanskruti_patel.jpg",
    authorName: [
      "Ph.D.",
      <br />,
      "Dean :  Faculty of Computer Science & Applications",
      <br />,
      "dean.fca@charusat.ac.in",
    ],
    id: 35,
  },
  {
    imgUrl: "assets/images/People/user.png",
    imgAlt: "Dr. Dharmendra Patel",
    cate: ["DeansNPrincipals"],
    title: "Dr. Dharmendra Patel",
    author: "assets/images/People/user.png",
    authorName: [
      "Ph.D.",
      <br />,
      "Principal : Smt. Chandaben Mohanbhai Patel Intitute of Computer Applications (CMPICA)",
      <br />,
      "principal.cmpica@charusat.ac.in",
    ],
    id: 36,
  },
  {
    imgUrl:
      "https://charusat.ac.in/wp-content/uploads/Deans_Principal/Reshma.webp",
    imgAlt: "Dr. Reshma Sable",
    cate: ["DeansNPrincipals"],
    title: "Dr. Reshma Sable",
    author:
      "https://charusat.ac.in/wp-content/uploads/Deans_Principal/Reshma.webp",
    authorName: [
      "Ph.D.",
      <br />,
      "Dean : Faculty of Management Studies",
      <br />,
      "dean.fms@charusat.ac.in",
    ],
    id: 37,
  },
  {
    imgUrl:
      "https://charusat.ac.in/wp-content/uploads/Deans_Principal/Binit-Patel.webp",
    imgAlt: "Dr. Binit Patel",
    cate: ["DeansNPrincipals"],
    title: "Dr. Binit Patel",
    author:
      "https://charusat.ac.in/wp-content/uploads/Deans_Principal/Binit-Patel.webp",
    authorName: [
      "Ph.D.",
      <br />,
      "Principal : Indukaka Ipcowala Institute of Management(I2IM)",
      <br />,
      "principal.iiim@charusat.ac.in",
    ],
    id: 38,
  },
  {
    imgUrl: "assets/images/People/user.png",
    imgAlt: "Dr. Hemant Kumar",
    cate: ["DeansNPrincipals"],
    title: "Dr. Hemant Kumar",
    author: "assets/images/People/user.png",
    authorName: [
      "Ph.D.",
      <br />,
      "Principal : Bapubhai Desaibhai Patel Institute of Paramedical Sciences(BDPIPS)",
      <br />,
      "principal.cips@charusat.ac.in",
    ],
    id: 39,
  },
  // {
  //   imgUrl: "assets/images/People/PalashMandal.webp",
  //   imgAlt: "Palash Mandal",
  //   cate: ["DeansNPrincipals"],
  //   title: "Dr. Palash Mandal",
  //   author: "assets/images/course/author/03.jpg",
  //   authorName: [
  //     "Ph.D.",
  //     <br />,
  //     "Principal In Charge : P D Patel Institute of Applied Sciences (PDPIAS)",
  //     <br />,
  //     "principal.pdpias@charusat.ac.in",
  //   ],
  //   id: 24,
  // },
  {
    imgUrl: "assets/images/People/AnilSharma.webp",
    imgAlt: "Dr. Anil Sharma",
    cate: ["DeansNPrincipals"],
    title: "Dr. Anil Sharma",
    author: "assets/images/course/author/03.jpg",
    authorName: [
      "Ph. D.",
      <br />,
      "Principal : Manikaka Topawala Institute of Nursing (MTIN)",
      <br />,
      "principal.mtin@charusat.ac.in",
    ],
    id: 25,
  },
  // {
  //   imgUrl: "assets/images/People/HSPatel.png",
  //   imgAlt: "Hasmukh Patel",
  //   cate: ["University Officers"],
  //   title: "Mr. Hasmukh Patel",
  //   author: "assets/images/course/author/03.jpg",
  //   authorName: [
  //     "Deputy Registrar (Admissions)",
  //     <br />,
  //     "Contact for: Admissions, Board Meetings, General Affairs, Hostels",
  //     <br />,
  //     "hasmukhpatel.adm@charusat.ac.in",
  //   ],
  //   id: 26,
  // },
  {
    imgUrl: "assets/images/People/BhavdipPatel.png",
    imgAlt: "Bhavdip Patel",
    cate: ["University Officers"],
    title: "Mr. Bhavdip Patel",
    author: "assets/images/course/author/03.jpg",
    authorName: [
      "Deputy Account Officer",
      <br />,
      "Contact for: Fees, Payments, Receipts and Accounts Related Information",
      <br />,
      "bhavdippatel.adm@charusat.ac.in",
    ],
    id: 27,
  },
  {
    imgUrl: "assets/images/People/PRO.png",
    imgAlt: "Dilip Gosai",
    cate: ["University Officers"],
    title: "Dr. Dilip Gosai",
    author: "assets/images/course/author/03.jpg",
    authorName: [
      "Corporate Communication Officer",
      <br />,
      "Contact For: School Visit, Sponsorships, Workshops, Seminars, News and General Inquiries, etc.",
      <br />,
      "dilipgosai.pr@charusat.ac.in",
    ],
    id: 28,
  },
  {
    imgUrl: "assets/images/People/AshwinMakwana.png",
    imgAlt: "Ashwin Makwana",
    cate: ["University Officers"],
    title: "Dr. Ashwin Makwana",
    author: "assets/images/course/author/03.jpg",
    authorName: [
      "Head, Career Development and Placement Cell (CDPC)",
      <br />,
      "Contact For: Training, Internship, Campus Placement, Career Guidance",
      <br />,
      "tnp@charusat.ac.in",
      <br />,
      "ashwinmakwana.ce@charusat.ac.in",
    ],
    id: 29,
  },
];

export default function People() {
  const [items, setItems] = useState(CourseData);
  const [active, setActive] = useState("");

  const filterItem = async (categItem) => {
    // const updateItems = CourseData.filter((curElem) => {
    //   console.log(curElem.cate.includes(categItem));
    //     return curElem.cate.includes(categItem);

    // });
    console.log("items:" + categItem);
    setActive(categItem);
    const updateItems = [];
    CourseData.forEach(async (element) => {
      console.log(element.cate.includes(categItem));
      if (element.cate.includes(categItem)) {
        // console.log(updateItems.length);
        updateItems.push(element);
      }
    });
    console.log(updateItems.length);
    await setItems(updateItems);
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
              {/* <li onClick={() => setItems(CourseData)}>All</li> */}

              <li
                className={`${active === "Governing Body" ? "active" : ""}`}
                onClick={() => filterItem("Governing Body")}
              >
                Governing Body
              </li>
              <li
                className={`${active === "BOM" ? "active" : ""}`}
                onClick={() => filterItem("BOM")}
              >
                Board of Management
              </li>
              <li
                className={`${active === "DeansNPrincipals" ? "active" : ""}`}
                onClick={() => filterItem("DeansNPrincipals")}
              >
                Deans & Principal
              </li>
              <li
                className={`${
                  active === "University Officers" ? "active" : ""
                }`}
                onClick={() => filterItem("University Officers")}
              >
                University Officers
              </li>
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
                <div className="col" style={{ height: "" }} key={id}>
                  <div className="course-item style-4">
                    <div className="course-inner" style={{ height: "450px" }}>
                      <div
                        className="course-thumb"
                        style={{
                          height: "15rem",
                          width: "100%",
                          objectFit: "cover",
                        }}
                      >
                        <img
                          src={imgUrl}
                          alt={imgAlt}
                          style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                          }}
                        />
                        <div className="course-category">
                          {/* <div className="course-cate">
                            <a href="#">{cate}</a>
                            </div> */}
                          {/* <div className="course-reiew">
                                                        <Rating />
                                                    </div> */}
                        </div>
                      </div>
                      <div
                        className="course-content"
                        style={{ background: "", height: "100%" }}
                      >
                        <Link to="/course-single">
                          <h5 style={{ wordWrap: "break-word" }}>{title}</h5>
                          <h6
                            style={{
                              wordWrap: "break-word",
                              fontSize: "0.9rem",
                              fontWeight: "400",
                            }}
                          >
                            {authorName}
                          </h6>
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
