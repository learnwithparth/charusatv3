import { Link } from "react-router-dom";
import Undertaking from "../../files/Accreditation/Undertaking.pdf";
import RTI from "../../files/Accreditation/RTI_Declaration.pdf";
import IIQA from "../../files/Accreditation/CHAROTAR_UNIVERSITY_OF_SCIENCE_AND_TECHNOLOGY_iiqa.pdf";
import SSR2 from "../../files/Accreditation/SSR-C2.pdf";
import NAACCertificate from "../../files/Accreditation/NAAC A+ Certificate- Cycle-2.pdf";

const title = "NAAC Cycle-2";


const commentList = [
    {
        desc: 'Undertaking',
        link: Undertaking,
    },
    {
        desc: 'RTI Declaration',
        link: RTI,
    },
    {
        desc: 'IIQA',
        link: IIQA,
    },
    {
        desc: 'DVV Clarifications',
        link: 'http://charusat.ac.in/dvv_clarifications.php',
    },
    {
        desc: 'SSR Cycle2',
        link: SSR2,
    },
    {
        desc: 'NAAC Certificate',
        link: NAACCertificate,
    },
    {
        desc: 'NAAC AQAR 2020-2021',
        link: 'https://heyzine.com/flip-book/0e2d6e399a.html',
    },
    
]


const Cycle2 = () => {
    return (
        <div className="comments">
            <h4 className="title-border">{title}</h4>
            <ul className="comment-list">
                {commentList.map((val, i) => (
                    <li className="comment" key={i}>
                        {/* <div className="com-thumb">
                            <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />          
                        </div> */}
                        <div className="com-content">
                            <div className="com-title">
                                <div className="com-title-meta">
                                    {/* <h6>{val.name}</h6>
                                    <span> {val.date} </span> */}
                                    <a href={val.link}><span>{val.desc}</span></a>
                                </div>
                                
                            </div>
                            
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        
    );
}
 
export default Cycle2;