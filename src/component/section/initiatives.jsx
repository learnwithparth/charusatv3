import { Link } from "react-router-dom";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';


const subTitle = "Why are we unique?";
const title = "Initiatives";


const eventSliderList = [
    {
        imgUrl: 'assets/images/event/1.jpg',
        imgAlt: 'event rajibraj91 rajibraj',
        title: 'CHARUSAT Space Research and Technology Center',
        btnText: 'Read More',
    },
    {
        imgUrl: 'assets/images/event/2.jpg',
        imgAlt: 'event rajibraj91 rajibraj',
        title: 'Dr. K. C. Patel Research & Development Center',
        btnText: 'Read More',
    },
    {
        imgUrl: 'assets/images/event/05.jpg',
        imgAlt: 'event rajibraj91 rajibraj',
        title: 'CHARUSAT Rural Education Development Program',
        btnText: 'Read More',
    },
    {
        imgUrl: 'assets/images/event/05.jpg',
        imgAlt: 'event rajibraj91 rajibraj',
        title: 'International Cosmology Center (ICC)',
        btnText: 'Read More',
    },
    {
        imgUrl: 'assets/images/event/05.jpg',
        imgAlt: 'event rajibraj91 rajibraj',
        title: 'SDG Handprint Action Lab',
        btnText: 'Read More',
    },
    {
        imgUrl: 'assets/images/event/05.jpg',
        imgAlt: 'event rajibraj91 rajibraj',
        title: 'Pri. B. I. Patel Human Resource Development Center',
        btnText: 'Read More',
    },
    {
        imgUrl: 'assets/images/event/05.jpg',
        imgAlt: 'event rajibraj91 rajibraj',
        title: 'Entrepreneurship Development and Incubation Cell',
        btnText: 'Read More',
    },
    {
        imgUrl: 'assets/images/event/05.jpg',
        imgAlt: 'event rajibraj91 rajibraj',
        title: 'University Industry Interaction Cell',
        btnText: 'Read More',
    },
    {
        imgUrl: 'assets/images/event/05.jpg',
        imgAlt: 'event rajibraj91 rajibraj',
        title: 'NABL & Testing Facilities',
        btnText: 'Read More',
    },
    
]

export default function initiatives() {
    return (
        <div className="event-section style-2 padding-tb section-bg-ash">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle yellow-color">{subTitle}</span>
                    <h2 className="title">{title}</h2>
                </div>
                <div className="section-wrapper">
                    <div className="event-navi-item event-slider-next"><i className="icofont-rounded-double-right"></i></div>
                    <div className="event-navi-item event-slider-prev"><i className="icofont-rounded-double-left"></i></div>
                    <div className="event-sliders overflow-hidden">
                        <Swiper
                            spaceBetween={0}
                            slidesPerView={1}
                            loop={'true'}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            navigation={{
                                prevEl: '.event-slider-prev',
                                nextEl: '.event-slider-next',
                            }}
                            modules={[Autoplay, Navigation]}
                            breakpoints={{
                                0: {
                                    width: 0,
                                    slidesPerView: 1,
                                },
                                768: {
                                    width: 768,
                                    slidesPerView: 2,
                                },
                                1200: {
                                    width: 1200,
                                    slidesPerView: 3.7,
                                },
                            }}
                        >
                            {eventSliderList.map((val, i) => (
                                <SwiperSlide key={i}>
                                    <div className="event-item style-2">
                                        <div className="event-inner">
                                            <div className="event-thumb">
                                                <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                            </div>
                                            <div className="event-content">
                                                <h5>{val.title}</h5>
                                                {/* <h2>{val.price}</h2>
                                                <span>{val.duration}</span>
                                                <ul className="lab-ul">
                                                    {val.servList.map((val, i) => (
                                                        <li key={i}>{val.text}</li>
                                                    ))}
                                                </ul> */}
                                                <Link to="/login" className="lab-btn"><span>{val.btnText}</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
}
