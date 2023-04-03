//import { Link } from "react-router-dom";

const title = "Gujarat State Institutional Ranking Framework (GSIRF)";


const commentList = [
    {
        desc: 'GSIRF 2021',
        link: 'https://charusat.ac.in/iqac/gsirf/GSIRF-2021-Score%20Card.pdf',
    },
    {
        desc: 'GSIRF 2020',
        link: 'https://charusat.ac.in/iqac/gsirf/GSIRF%202020%20-%20SCORE%20CARDS%20-%20CHARUSAT.pdf',
    },
    {
        desc: 'GSIRF 2019',
        link: 'https://charusat.ac.in/iqac/gsirf/GSIRF%202019_SCORE%20CARD%20of%20CHARUSAT.pdf',
    },
    
]


const GSIRF = () => {

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
                                <div className="com-title-meta lab-ul">
                                    {/* <h6>{val.name}</h6>
                                    <span> {val.date} </span> */}
                                    <a href={val.link} className="csdc-left" ><span>{val.desc}</span></a>
                                </div>
                                
                            </div>
                            
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        
    );
}
 
export default GSIRF;