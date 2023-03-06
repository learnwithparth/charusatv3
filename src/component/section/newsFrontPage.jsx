import { Link } from "react-router-dom";

const subTitle = "University";
const title = "News";

export default function newsFrontPage() {
  return (
    <div className="style-2 padding-tb ">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle ">{subTitle}</span>
          <h2 className="title">{title}</h2>
        </div>
        <div className="section-wrapper">
          <div className="event-sliders overflow-hidden"></div>
        </div>
      </div>
    </div>
  );
}
