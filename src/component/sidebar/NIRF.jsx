//import { Link } from "react-router-dom";

const title = "National Institutional Ranking Framework (NIRF)";


const commentList = [
    {
        desc: 'NIRF India Ranking 2023',
        link: 'https://charusat.ac.in/iqac/nirf/NIRF2023/CHARUSAT_20230120.pdf',
    },
    {
        desc: 'NIRF India Ranking 2022',
        link: 'https://charusat.ac.in/iqac/nirf/NIRF2022',
    },
    {
        desc: 'NIRF India Ranking 2021',
        link: 'https://charusat.ac.in/iqac/nirf/NIRF2021',
    },
    {
        desc: 'NIRF India Ranking 2020',
        link: 'https://charusat.ac.in/iqac/nirf/NIRF2020',
    },
    {
        desc: 'NIRF India Ranking 2019',
        link: 'https://charusat.ac.in/iqac/nirf/NIRF2019',
    },
    {
        desc: 'NIRF India Ranking 2018',
        link: 'https://charusat.ac.in/iqac/nirf/NIRF2018',
    },
    
    
]


const NIRF = () => {

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
                                    <a href={val.link} className="csdc-left"><span>{val.desc}</span></a>
                                </div>
                                
                            </div>
                            
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        
    );
}
 
export default NIRF;