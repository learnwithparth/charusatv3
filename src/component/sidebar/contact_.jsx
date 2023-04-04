const title = "Course Categories";
const cscContentList = [
    {
        link: '#',
        left: 'Personal Development',
        
    },
    {
        link: '#',
        left: 'Photography',
       
    },
    {
        link: '#',
        left: 'Teaching and Academics',
        
    },
    {
        link: '#',
        left: 'Art and Design',
       
    },
    {
        link: '#',
        left: 'Business',
        
    },
    {
        link: '#',
        left: 'Data Science',
       
    },
    {
        link: '#',
        left: 'Development',
       
    },
    {
        link: '#',
        left: 'Finance',
        
    },
    {
        link: '#',
        left: 'Health & Fitness',
        
    },
    {
        link: '#',
        left: 'Lifestyle',
        
    },
    {
        link: '#',
        left: 'Marketing',
        
    },
    {
        link: '#',
        left: 'Music',
        right: '20',
    },
]


const CourseSideCetagory = () => {
    return (
        <div className="course-side-cetagory">
            <div className="csc-title">
                <h5 className="mb-0">{title}</h5>
            </div>
            <div className="csc-content">
                <div className="csdc-lists">
                    <ul className="lab-ul">
                        {cscContentList.map((val, i) => (
                            <li key={i}>
                                <i className="icofont-ui-user"></i>
                                <div className="csdc-left"><a href={val.link}>{val.left}</a></div>
                                
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
 
export default CourseSideCetagory;