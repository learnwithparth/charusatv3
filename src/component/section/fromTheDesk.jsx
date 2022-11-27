import React from 'react';

const subTitle = "From the Desk of";
const title = "Our Leaders";

const achieveList = [
    {
        imgUrl: 'assets/images/achive/president.png',
        imgAlt: 'achive thumb rajibraj91 rajibraj',
        title: 'President',
        desc: 'Intelligence with Character is the true goal of Education. Knowledge gives humility, from humility, one attains Character.',
        btnText: 'Read More',
        siteLink: '#',
    },
    {
        imgUrl: 'assets/images/achive/provost.png',
        imgAlt: 'achive thumb rajibraj91 rajibraj',
        title: 'Provost',
        desc: 'I feel delighted to welcome you to CHARUSAT. It has been conceived by a not for profit premier education trust of India,',
        btnText: 'Read More',
        siteLink: '#',
    },
]

export default function fromTheDesk() {
    
  return (
    <div className="instructor-section padding-tb section-bg">
                <div className="container">
                <div className="section-header">
                <span className="subtitle">{subTitle}</span>
                
                <br />
                <br />
                <h2 className="title">{title}</h2>
                
                <br />
                <br />
                
              </div>
                    <div className="section-wrapper">
                        
                        
                        <div className="achieve-part mt-5">
                            <div className="row g-4 row-cols-1 row-cols-lg-2">
                                {achieveList.map((val, i) => (
                                    <div className="col" key={i}>
                                        <div className="achieve-item">
                                            <div className="achieve-inner">
                                                <div className="achieve-thumb">
                                                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`}  style={{textAlign:'right'}}/>
                                                </div>
                                                <div className="achieve-content">
                                                    <h4>{val.title}</h4>
                                                    <p>{val.desc}</p>
                                                    <a href={val.siteLink} className="lab-btn"><span>{val.btnText}</span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}
