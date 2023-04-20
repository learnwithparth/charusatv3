import { Component, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "../sidebar/rating";

const title = "Institutions";

const CourseData = [
  {
    imgUrl: "assets/images/institute/CSPIT.jpg",
    imgAlt: "CSPIT image",
    cate: "B. Tech,M. Tech,Ph. d.",
    title: "C S Patel Institute of Technology",
    link: "https://www.charusat.ac.in/cspit/",
    author: "assets/images/course/author/01.jpg",
    authorName: "William Smith",
    price: "$199.00",
    id: 1,
  },
  {
    imgUrl: "assets/images/institute/DEPSTAR.jpg",
    imgAlt: "Depstar image",
    cate: "B.Tech,M.Tech,Phd",
    title: "Devang Patel Institute of Advance Technology and Research",
    link: "https://www.charusat.ac.in/depstar/",
    author: "assets/images/course/author/01.jpg",
    authorName: "William Smith",
    price: "$199.00",
    id: 2,
  },
  {
    imgUrl: "assets/images/institute/RPCP.jpg",
    imgAlt: "RPCP image",
    cate: "B.Pharm,M.Pharm,Ph. D.",
    title: "Ramanbhai Patel College of Pharmacy",
    link: "https://www.charusat.ac.in/rpcp/",
    author: "assets/images/course/author/02.jpg",
    authorName: "Angel Mili",
    price: "$199.00",
    id: 3,
  },
  {
    imgUrl: "assets/images/institute/CMPICA.jpg",
    imgAlt: "CMPICA image",
    cate: "BCA,MCA,BscIT,MscIT,Ph. D.",
    title: "Chandaben Mohanbhai Patel Institute of Computer Application",
    link: "https://www.charusat.ac.in/cmpica/",
    author: "assets/images/course/author/03.jpg",
    authorName: "Sajahan Sagor",
    price: "$199.00",
    id: 4,
  },
  {
    imgUrl: "assets/images/institute/I2IM.jpg",
    imgAlt: "I2IM image",
    cate: "BBA,MBA,Ph. D.",
    title: "Indukaka Ippcowala Institute of Management",
    link: "https://www.charusat.ac.in/i2im/",
    author: "assets/images/course/author/04.jpg",
    authorName: "Ummi Nishat",
    price: "$199.00",
    id: 5,
  },
  {
    imgUrl: "assets/images/institute/PDPIAS.jpg",
    imgAlt: "PDPIAS image",
    cate: "B. Sc,M. Sc,Ph. D.",
    title: "P. D. Patel Institute of Applied Science",
    link: "https://www.charusat.ac.in/pdpias/",
    author: "assets/images/course/author/05.jpg",
    authorName: "Rassel Hossin",
    price: "$199.00",
    id: 6,
  },
  {
    imgUrl: "assets/images/institute/MTIN.jpg",
    imgAlt: "MTIN image",
    cate: "GNM,B. Sc., M. Sc.",
    title: "Manikaka Topawala Institute of Nursing",
    link: "https://www.charusat.ac.in/mtin/",
    author: "assets/images/course/author/06.jpg",
    authorName: "Zinat Zaara",
    price: "$199.00",
    id: 7,
  },
  {
    imgUrl: "assets/images/institute/ARIP.jpg",
    imgAlt: "ARIP image",
    cate: "BPT,MPT,Phd",
    title: "Ashok & Rita Patel Institute of Physiotherapy",
    link: "https://www.charusat.ac.in/arip/",
    author: "assets/images/course/author/01.jpg",
    authorName: "William Smith",
    price: "$199.00",
    id: 8,
  },
  {
    imgUrl: "assets/images/institute/ARIP.jpg",
    imgAlt: "BDIPS image",
    cate: "Medical Sciences",
    title: "Bapubhai Desaibhai Patel Institute of Paramedical Sciences",
    link: "https://www.charusat.ac.in/cips/",
    author: "assets/images/course/author/02.jpg",
    authorName: "Angel Mili",
    price: "$199.00",
    id: 9,
  },
];

export default function Faculties() {
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
        <h2 className="title text-center">{title}</h2>
        <div className="section-header">
          <div className="course-filter-group">
            <ul className="lab-ul">
              <li onClick={() => setItems(CourseData)}>All</li>
              <li onClick={() => filterItem("Engineering")}>Engineering</li>
              <li onClick={() => filterItem("Pharmacy")}>Pharmacy</li>
              <li
                onClick={() => filterItem("Computer Science and Application")}
              >
                Computer Sci and Appl
              </li>
              <li onClick={() => filterItem("Management Studies")}>
                Management Studies
              </li>
              <li onClick={() => filterItem("Sciences")}>Sciences</li>
              <li onClick={() => filterItem("Medical Sciences")}>
                Medical Sciences
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
                link,
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
                          <div className="course-cate">
                            <a href="#">{cate}</a>
                          </div>
                          {/* <div className="course-reiew">
                                                        <Rating />
                                                    </div> */}
                        </div>
                      </div>
                      <div className="course-content">
                        <a href={link}>
                          <h5>{title}</h5>
                        </a>
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
