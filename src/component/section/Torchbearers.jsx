
import { Link } from "react-router-dom";



const subTitle = "Who Illuminated the Growth-path";
const title = "Our Torchbearers";
const title1 = "Incumbent Doyens";

const torchbearerList = [
    {
        imgUrl: 'assets/images/instructor/01.jpg',
        imgAlt: 'instructor rajibraj91 rajibraj',
        name: 'Late Shri Becharbhai M Patel',
        degi: 'Founder President, Matrusanstha',
        desig: '31/05/87 to 11/09/93(Till Death)',
    },
    {
        imgUrl: 'assets/images/instructor/02.jpg',
        imgAlt: 'instructor rajibraj91 rajibraj',
        name: 'Late Shri Chhotabhai B Patel',
        degi: 'Founder President, Kelavani Mandal',
        desig: 'Matrusanstha 12/09/93 to 22/12/97(Till Death)',
    },
    {
        imgUrl: 'assets/images/instructor/03.jpg',
        imgAlt: 'instructor rajibraj91 rajibraj',
        name: 'Late Shri Dr. K. C. Patel',
        degi: 'Former President, Kelavani Mandal',
        desig: '15/03/98 to 12/02/04 (Till Death)',
    },
]

const doyensList=[
    {
        imgUrl: 'assets/images/instructor/01.jpg',
        imgAlt: 'instructor rajibraj91 rajibraj',
        name: 'Shri Naginbhai M Patel',
        degi: 'President, Matrusanstha',
        desig: 'Founder President, CHRF',
    },
    {
        imgUrl: 'assets/images/instructor/02.jpg',
        imgAlt: 'instructor rajibraj91 rajibraj',
        name: 'Dr. M. C. Patel',
        degi: 'Founder Secretary, Matrusanstha, Kelavani Mandal, CHRF',
        desig: '1st Hon. Provost, CHARUSAT',
    },
    {
        imgUrl: 'assets/images/instructor/03.jpg',
        imgAlt: 'instructor rajibraj91 rajibraj',
        name: 'Shri Surendra M. Patel',
        degi: 'President, Kelavani Mandal',
        desig: 'Founder President, CHARUSAT',
    },
]


const Torchbearers = () => {
    return (
        <div className="instructor-section padding-tb section-bg">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle">{subTitle}</span>
                    <h2 className="title">{title}</h2>
                </div>
                <div className="section-wrapper">
                    <div className="row g-4 justify-content-center row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
                        {torchbearerList.map((val, i) => (
                            <div className="col" key={i}>
                                <div className="instructor-item">
                                    <div className="instructor-inner">
                                        <div className="instructor-thumb">
                                            <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                        </div>
                                        <div className="instructor-content">
                                            <Link to="/team-single"><h4>{val.name}</h4></Link>
                                            <p>{val.degi}</p>
                                            {/* <Rating /> */}
                                        </div>
                                    </div>
                                    <div className="instructor-footer">
                                        <ul className="lab-ul d-flex flex-wrap justify-content-between align-items-center">
                                            <li>{val.desig}</li>
                                            <li>{val.studentAnroll}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <br />
                    
                    {/* <div className="text-center footer-btn">
                        <p>Want to help people learn, grow and achieve more in life?<Link to="/team">Become an instructor</Link></p>
                    </div> */}
                </div>
                {/* Added by JHV */}
                <div className="section-header text-center">
                    <h2 className="title">{title1}</h2>
                </div>

                <div className="section-wrapper">
                    <div className="row g-4 justify-content-center row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
                        {doyensList.map((val, i) => (
                            <div className="col" key={i}>
                                <div className="instructor-item">
                                    <div className="instructor-inner">
                                        <div className="instructor-thumb">
                                            <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                        </div>
                                        <div className="instructor-content">
                                            <Link to="/team-single"><h4>{val.name}</h4></Link>
                                            <p>{val.degi}</p>
                                            {/* <Rating /> */}
                                        </div>
                                    </div>
                                    <div className="instructor-footer">
                                        <ul className="lab-ul d-flex flex-wrap justify-content-between align-items-center">
                                            <li>{val.desig}</li>
                                            <li>{val.studentAnroll}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <br />
                </div>
                {/* added end by jhv */}
            </div>
        </div>
    );
}
 
export default Torchbearers;