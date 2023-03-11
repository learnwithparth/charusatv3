import { Component, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "../sidebar/rating";

const title = "Institutions";

const CourseData = [
  {
    imgUrl: "assets/images/institute/CSPIT.jpg",
    imgAlt: "CSPIT image",
    cate: "Engineering",
    title: "C S Patel Institute of Technology",
    author: "assets/images/course/author/01.jpg",
    authorName: "William Smith",
    price: "$199.00",
    id: 1,
  },
  {
    imgUrl: "assets/images/institute/DEPSTAR.jpg",
    imgAlt: "Depstar image",
    cate: "Engineering",
    title: "Devang Patel Institute of Advance Technology and Research",
    author: "assets/images/course/author/01.jpg",
    authorName: "William Smith",
    price: "$199.00",
    id: 2,
  },
  {
    imgUrl: "assets/images/institute/RPCP.jpg",
    imgAlt: "RPCP image",
    cate: "Pharmacy",
    title: "Ramanbhai Patel College of Pharmacy",
    author: "assets/images/course/author/02.jpg",
    authorName: "Angel Mili",
    price: "$199.00",
    id: 3,
  },
  {
    imgUrl: "assets/images/institute/CMPICA.jpg",
    imgAlt: "CMPICA image",
    cate: "Computer Science and Application",
    title: "Chandaben Mohanbhai Patel Institute of Computer Application",
    author: "assets/images/course/author/03.jpg",
    authorName: "Sajahan Sagor",
    price: "$199.00",
    id: 4,
  },
  {
    imgUrl: "assets/images/institute/I2IM.jpg",
    imgAlt: "I2IM image",
    cate: "Management Studies",
    title: "Indukaka Ippcowala Institute of Management",
    author: "assets/images/course/author/04.jpg",
    authorName: "Ummi Nishat",
    price: "$199.00",
    id: 5,
  },
  {
    imgUrl: "assets/images/institute/PDPIAS.jpg",
    imgAlt: "PDPIAS image",
    cate: "Sciences",
    title: "P. D. Patel Institute of Applied Science",
    author: "assets/images/course/author/05.jpg",
    authorName: "Rassel Hossin",
    price: "$199.00",
    id: 6,
  },
  {
    imgUrl: "assets/images/institute/MTIN.jpg",
    imgAlt: "MTIN image",
    cate: "Medical Sciences",
    title: "Manikaka Topawala Institute of Nursing",
    author: "assets/images/course/author/06.jpg",
    authorName: "Zinat Zaara",
    price: "$199.00",
    id: 7,
  },
  {
    imgUrl: "assets/images/institute/ARIP.jpg",
    imgAlt: "ARIP image",
    cate: "Medical Sciences",
    title: "Ashok & Rita Patel Institute of Physiotherapy",
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
                        <Link to="/course-single">
                          <h5>{title}</h5>
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
