//const subTitle = "Why Choose Us, Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn, Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn Take courses on your any device with our app & learn all time what you want. Just download & install & start to learnTake courses on your any device with our app & learn all time what you want. Just download & install & start to learnTake courses on your any device with our app & learn all time what you want. Just download & install & start to learn Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn";
// const title = "Become Online Instructor";
const desc = ["Intelligence with Character is the true goal of Education. Knowledge gives humility, from humility, one attains Character. The Highest Education is that which makes our life in harmony with all existence.",
"In the context, CHARUSAT as a University has been quite distinct from day one. It strives to make Charotar – the Land of Sardar Patel the Global Education Hub through knowledge creation, augmentation, and dissemination. For the purpose, CHARUSAT dedicates its efforts towards developing synergy between industry and academia; and community upliftment through education. Importantly, CHARUSAT continually strives to focus on the future with an entrepreneurial spirit.",<br/>,
"As a University, CHARUSAT is emerging with a thrust on socially relevant Research & Development. For the purpose, a Research and Development Centre has been established on the Campus. Uniquely, Space Research and Technology Centre is also established to initiate and foster research in Space Technology.",<br/>,
"Efforts are also made for education amelioration in rural schools through a Rural Education Development Program. On-Campus and Outreach Activities are organized for School – Students, Teachers, and Management. Human Resource Development Centre hones competencies of Faculty and Staff on Campus.",<br/>,
"Through these initiatives and practices, CHARUSAT focuses on converting eyes into sight and vision; information into knowledge and wisdom; and demography into citizens and harmonious living. Further, programs at CHARUSAT enable the students not only to gain an understanding but also to develop insights in altered research areas. Teachers also dedicate their efforts to construct and facilitate opportunities where the students can practice and experience creativity. Moving a step ahead towards the purpose of education, CHARUSAT aims to make its student’s Job Creators and not Job Seekers.",<br/>,
"In order to inculcate values in the students, CHARUSAT has been established as a University fostering High Moral Values. Honesty, Integrity, and Transparency have been the benchmarks of CHARUSAT in both – word and action.",<br/>,
"In the journey, CHARUSAT fosters a niche for a world-class education at the rural base. It aspires to be a World Class University. Primarily, it strives to be among Top 20 Universities at National Level.",<br/>,
"I, earnestly, request you all to join hands with CHARUSAT and work towards the realization of this aspiration. Many have already volunteered in this Seva Yagna through their magnanimity, knowledge, skills and resource sharing; and through their association with CHARUSAT either as a Faculty, Staff or Student.",<br/>,
"On behalf of CHARUSAT Family, I extend a word of gratitude to all and also invite all to visit the Campus, witness the development and be a part of the Journey."
];
//const text='From Presidents Desk';
const title = "President's Welcome";
//const subTitle = "About CHARUSAT";


const PresidentDesk = () => {
    return (
        <div className="about-section style-3 padding-tb section-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="about-left">
                                <div className="about-thumb">
                                    <img src="assets/images/about/President_sir.png" alt="about" />
                                </div>
                                <h3>Shri Surendra Patel</h3>
                                <h4>President, CHARUSAT</h4>
                            </div>
                        </div>
                        <div className="col-sm-9">
                            <div className="about-right">
                                <div className="section-header">
                                    {/* <span className="subtitle">{subTitle}</span> */}
                                    <h2 className="title">{title}</h2>
                                    <p style={{textAlign:"justify"}}>{desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
    );
}
 
export default PresidentDesk;