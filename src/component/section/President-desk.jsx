//const subTitle = "Why Choose Us, Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn, Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn Take courses on your any device with our app & learn all time what you want. Just download & install & start to learnTake courses on your any device with our app & learn all time what you want. Just download & install & start to learnTake courses on your any device with our app & learn all time what you want. Just download & install & start to learn Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn";
// const title = "Become Online Instructor";
const desc = ["Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn","Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn",
"Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn",
"Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn",
"Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn",
"Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn",
"Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn",
"Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn",
"Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn",
"Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn",
"Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn",
"Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn",
"Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn",
"Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn"];
//const text='From Presidents Desk';
const title = "From the Provost's Desk";
//const subTitle = "About CHARUSAT";


const PresidentDesk = () => {
    return (
        <div className="about-section style-3 padding-tb section-bg">
                <div className="container">
                    <div className="row justify-content-center row-cols-xl-2 row-cols-1 align-items-center">
                        <div className="col">
                            <div className="about-left">
                                <div className="about-thumb">
                                    <img src="assets/images/about/01.jpg" alt="about" />
                                </div>
                                <h3>Dr. R. V. Upadhayay</h3>
                                <h4>Provost, CHARUSAT</h4>
                            </div>
                        </div>
                        <div className="col">
                            <div className="about-right">
                                <div className="section-header">
                                    {/* <span className="subtitle">{subTitle}</span> */}
                                    <h2 className="title">{title}</h2>
                                    <p style={{textAlign:"justify"}}>{desc}</p>
                                </div>
                                {/* <div className="section-wrapper">
                                    <ul className="lab-ul">
                                        {aboutList.map((val, i) => (
                                            <li key={i}>
                                                <div className="sr-left">
                                                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                </div>
                                                <div className="sr-right">
                                                    <h5>{val.title}</h5>
                                                    <p>{val.desc}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
    );
}
 
export default PresidentDesk;