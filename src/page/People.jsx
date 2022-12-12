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
    imgAlt: "harish patel",
    cate: "Governing Body",
    title: "Dr. Harish Patel",
    author: "assets/images/course/author/03.jpg",
    authorName: ["Member",<br/>,"Prominent Technocrate, USA",<br />,"Chief Patron: Manikaka Topawala Institute of Nursing, CHARUSAT",<br />,"A Philanthrope of repute"],
    id: 13,
  },
  {
    imgUrl: "assets/images/People/SJHaider.png",
    imgAlt: "S J Haider",
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
    imgAlt: "Nayan patel",
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
  {
    imgUrl: "assets/images/People/DarshanPatel.webp",
    imgAlt: "H T patel",
    cate: "BoM",
    title: "Dr. Darshan Patel",
    author: "assets/images/course/author/03.jpg",
    authorName: ["Ph.D.",<br/>,"Principal : Bapubhai Desaibhai Patel Institute of Paramedical Sciences (BDIPS)",<br/>,"principal.cips@charusat.ac.in"],
    id: 7,
  },
  {
    imgUrl: "assets/images/People/AtulPatel.png",
    imgAlt: "Dr. Atul Patel",
    cate: "BoM",
    title: "Dr. Atul Patel",
    author: "assets/images/course/author/03.jpg",
    authorName: ["Member",<br/>,"Dean: Faculty of Computer Science & Applications",<br />,
    "Principal: Smt. Chandaben Mohanbhai Patel Intitute of Computer Applications (CMPICA)",<br/>,
    "principal.cmpica@carusat.ac.in"],
    id: 8,
  },
  {
    imgUrl: "assets/images/People/BalaGanpathy.webp",
    imgAlt: "Dr. M BalaGanpathy",
    cate: "BoM",
    title: "Dr. M Balaganapathy",
    author: "assets/images/course/author/03.jpg",
    authorName: ["Ph. D.",<br/>,"Dean : Faculty of Medical Sciences",<br />,
    "Principal : Ashok & Rita Patel Institute of Physiotherapy (ARIP)",<br />,
    "principal.arip@charusat.ac.in"],
    id: 9,
  },
  {
    imgUrl: "assets/images/People/DrDevangJoshi-1.png",
    imgAlt: "Dr. Devang Joshi",
    cate: "BoM",
    title: "Dr. Devang Joshi",
    author: "assets/images/course/author/03.jpg",
    authorName: ["Member Secretary",<br/>,"Registrar, CHARUSAT"],
    id: 10,
  },
  {
    imgUrl: "assets/images/People/dr-y-p-kosta.webp",
    imgAlt: "y p kosta",
    cate: "DeansNPrincipals",
    title: "Dr. Y. P. Kosta",
    author: "assets/images/course/author/03.jpg",
    authorName: ["Ph.D.",<br/>,"Principal: Chandubhai S Patel Institute of Technology (CSPIT)",<br />,
    "I/C Principal: Devang Patel Institute of Advanced Technology and Research (DEPSTAR)",<br/>,
    "principal.cspit@charusat.ac.in"],
    id: 1,
  },
  {
    imgUrl: "assets/images/People/Vijay_Chaudhary.webp",
    imgAlt: "Vijay Chaudhary",
    cate: "DeansNPrincipals",
    title: "Dr. Vijay Chaudhary",
    author: "assets/images/course/author/03.jpg",
    authorName: ["Ph.D.",<br/>,"I/C Dean: Faculty of Technology & Engineering",<br />,
    "Head: CHAMOS Matrusanstha Department of Mechanical Engineering",<br />,
    "hod.me@charusat.ac.in"],
    id: 2,
  },
  {
    imgUrl: "assets/images/People/AtulPatel.png",
    imgAlt: "Dr. Atul Patel",
    cate: "DeansNPrincipals",
    title: "Dr. Atul Patel",
    author: "assets/images/course/author/03.jpg",
    authorName: ["Ph.D.",<br/>,"Dean: Faculty of Computer Science & Applications",<br />,
    "Principal: Smt. Chandaben Mohanbhai Patel Intitute of Computer Applications (CMPICA)",<br/>,
    "principal.cmpica@carusat.ac.in"],
    id: 3,
  },
  {
    imgUrl: "assets/images/People/MananRaval.webp",
    imgAlt: "Manan Raval",
    cate: "DeansNPrincipals",
    title: "Dr. Manan Raval",
    author: "assets/images/course/author/03.jpg",
    authorName: ["Ph.D.",<br/>,"Dean: Faculty of Pharmacy",<br />,"Principal: Ramanbhai Patel College of Pharmacy (RPCP)",<br/>,"principal.rpcp@charusat.ac.in"],
    id: 4,
  },
  {
    imgUrl: "assets/images/People/DrBhaskarPandya.png",
    imgAlt: "Bhaskar Pandya",
    cate: "DeansNPrincipals",
    title: "Dr. Bhaskar Pandya",
    author: "assets/images/course/author/03.jpg",
    authorName: ["Ph.D.",<br/>,"Dean: Faculty of Management Studies",<br />,
    "I/C Principal: Indukaka Ipcowala Institute of Management(I2IM)",<br />,
    "principal.iiim@charusat.ac.in"],
    id: 5,
  },
  {
    imgUrl: "assets/images/People/Gayatri-Dave.jpg",
    imgAlt: "Gayatri Dave",
    cate: "DeansNPrincipals",
    title: "Dr. Gayatri Dave",
    author: "assets/images/course/author/03.jpg",
    authorName: ["Ph.D.",<br/>,"Dean : Faculty of Sciences",<br/>,"dean.fas@charusat.ac.in"],
    id: 6,
  },
  {
    imgUrl: "assets/images/People/PalashMandal.webp",
    imgAlt: "Palash Mandal",
    cate: "DeansNPrincipals",
    title: "Dr. Palash Mandal",
    author: "assets/images/course/author/03.jpg",
    authorName: ["Ph.D.",<br/>,"Principal In Charge : P D Patel Institute of Applied Sciences (PDPIAS)",<br />,
    "principal.pdpias@charusat.ac.in"],
    id: 7,
  },
  {
    imgUrl: "assets/images/People/BalaGanpathy.webp",
    imgAlt: "Dr. M BalaGanpathy",
    cate: "DeansNPrincipals",
    title: "Dr. M Balaganapathy",
    author: "assets/images/course/author/03.jpg",
    authorName: ["Ph. D.",<br/>,"Dean : Faculty of Medical Sciences",<br />,
    "Principal : Ashok & Rita Patel Institute of Physiotherapy (ARIP)",<br />,
    "principal.arip@charusat.ac.in"],
    id: 8,
  },
  {
    imgUrl: "assets/images/People/AnilSharma.webp",
    imgAlt: "Dr. Anil Sharma",
    cate: "DeansNPrincipals",
    title: "Dr. Anil Sharma",
    author: "assets/images/course/author/03.jpg",
    authorName: ["Ph. D.",<br/>,"Principal : Manikaka Topawala Institute of Nursing (MTIN)",<br />,
    "principal.mtin@charusat.ac.in"],
    id: 9,
  },
  {
    imgUrl: "assets/images/People/DarshanPatel.webp",
    imgAlt: "H T patel",
    cate: "DeansNPrincipals",
    title: "Dr. Darshan Patel",
    author: "assets/images/course/author/03.jpg",
    authorName: ["Ph.D.",<br/>,"Principal : Bapubhai Desaibhai Patel Institute of Paramedical Sciences (BDIPS)",<br/>,"principal.cips@charusat.ac.in"],
    id: 10,
  },
  {
    imgUrl: "assets/images/People/DrDevangJoshi-1.png",
    imgAlt: "Devang Joshi",
    cate: "University Officers",
    title: "Dr. Devang Joshi",
    author: "assets/images/course/author/03.jpg",
    authorName: ["Registrar, CHARUSAT"],
    id: 1,
  },
  {
    imgUrl: "assets/images/People/HSPatel.png",
    imgAlt: "Hasmukh Patel",
    cate: "University Officers",
    title: "Mr. Hasmukh Patel",
    author: "assets/images/course/author/03.jpg",
    authorName: ["Deputy Registrar (Admissions)",<br/>,
    "Contact for: Admissions, Board Meetings, General Affairs, Hostels",<br />,
    "hasmukhpatel.adm@charusat.ac.in"],
    id: 2,
  },
  {
    imgUrl: "assets/images/People/BhavdipPatel.png",
    imgAlt: "Bhavdip Patel",
    cate: "University Officers",
    title: "Mr. Bhavdip Patel",
    author: "assets/images/course/author/03.jpg",
    authorName: ["Deputy Account Officer",<br/>,
    "Contact for: Fees, Payments, Receipts and Accounts Related Information",<br />,
    "bhavdippatel.adm@charusat.ac.in"],
    id: 3,
  },
  {
    imgUrl: "assets/images/People/PRO.png",
    imgAlt: "Dilip Gosai",
    cate: "University Officers",
    title: "Dr. Dilip Gosai",
    author: "assets/images/course/author/03.jpg",
    authorName: ["Corporate Communication Officer",<br/>,
    "Contact For: School Visit, Sponsorships, Workshops, Seminars, News and General Inquiries, etc.",<br />,
    "dilipgosai.pr@charusat.ac.in"],
    id: 4,
  },
  {
    imgUrl: "assets/images/People/AshwinMakwana.png",
    imgAlt: "Ashwin Makwana",
    cate: "University Officers",
    title: "Dr. Ashwin Makwana",
    author: "assets/images/course/author/03.jpg",
    authorName: ["Head, Career Development and Placement Cell (CDPC)",<br/>,
    "Contact For: Training, Internship, Campus Placement, Career Guidance",<br />,
    "tnp@charusat.ac.in",<br />,"ashwinmakwana.ce@charusat.ac.in"],
    id: 5,
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
              {/* <li onClick={() => setItems(CourseData)}>All</li> */}
              
              <li onClick={() => filterItem("Governing Body")}>Governing Body</li>
              <li onClick={() => filterItem("BoM")}>Board of Management</li>
              <li onClick={() => filterItem("DeansNPrincipals")}>Deans & Principal</li>
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
