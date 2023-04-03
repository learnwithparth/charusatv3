//import { Link } from "react-router-dom";

const title = "NAAC Cycle-1";


const commentList = [
    {
        desc: 'NAAC AQAR 2019-2020',
        link: 'https://charusat.ac.in/iqac/naac/2019_20/',
    },
    {
        desc: 'NAAC AQAR 2018-2019',
        link: 'https://charusat.ac.in/iqac/naac/2018_19/',
    },
    {
        desc: 'NAAC AQAR 2017-2018',
        link: 'https://charusat.ac.in/iqac/naac/2017_18/mobile/index.html',
    },
    {
        desc: 'NAAC AQAR 2016-2017',
        link: 'https://charusat.ac.in/iqac/naac/2016_17/mobile/index.html',
    },
    
]


const Cycle1 = () => {

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
 
export default Cycle1;