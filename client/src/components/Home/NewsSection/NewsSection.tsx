// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { Link } from "react-router-dom";

const NewsSection = () => {
  const newsData = [
    {
      id: 4,
      newsContent: "Examination dates for GATE and CAT are now confirmed.",
      timeline: "1 Jan, 2023, 18:34 IST",
      url: "https://wearecoandco.com/",
      image:
        "https://images.unsplash.com/photo-1635530027421-b793c5c8d045?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNvdXJjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    },
    {
      id: 5,
      newsContent: "Examination dates for GATE and CAT are now confirmed.",
      timeline: "1 Jan, 2023, 18:34 IST",
      url: "https://verbalplusvisual.com/",
      image:
        "https://images.unsplash.com/photo-1585399000684-d2f72660f092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXw5NDc5NTAwfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=700&q=60",
    },
    {
      id: 6,
      newsContent: "Examination dates for GATE and CAT are now confirmed.",
      timeline: "1 Jan, 2023, 18:34 IST",
      url: "https://www.monographcomms.ca/",
      image:
        "https://images.unsplash.com/photo-1625225233840-695456021cde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw5NDc5NTAwfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=700&q=60",
    },
    {
      id: 5,
      newsContent: "Examination dates for GATE and CAT are now confirmed.",
      timeline: "1 Jan, 2023, 18:34 IST",
      url: "https://verbalplusvisual.com/",
      image:
        "https://images.unsplash.com/photo-1585399000684-d2f72660f092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXw5NDc5NTAwfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=700&q=60",
    },
    {
      id: 6,
      newsContent: "Examination dates for GATE and CAT are now confirmed.",
      timeline: "1 Jan, 2023, 18:34 IST",
      url: "https://www.monographcomms.ca/",
      image:
        "https://images.unsplash.com/photo-1625225233840-695456021cde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw5NDc5NTAwfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=700&q=60",
    },
  ];

  // const settings = {
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   cssEase: "linear",
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         centerMode: true,
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  //};

  return (
    <>
      <div className="news-section-container">
        <h1>Exam Notifications</h1>
        <div className="news-section-card-container">
          {newsData.map((val, ind) => (
            <div className="news-section-card" key={ind}>
              <img src={val.image} alt="" />
              <div className="news-section-card-text-section">
                <p>{val.newsContent}</p>
                <div className="news-section-card-more-details">
                  <p>{val.timeline}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="see-more-button1">
            <button><i className="fa-solid fa-arrow-right fa-beat-fade"></i></button>
          </div>
          <div className="see-more-button2">
            <button>More Like This</button>
          </div>
        </div>
      </div>

      {/* <div className="news-cointainer">
        <Link to={"/vlogs"}>
          <h2 className="news-heading">Exam Notifications</h2>
        </Link>
        <Slider {...settings}>
          {newsData.map((news) => (
            <a
              href={news.url}
              target="_blank"
              className="news-card"
              key={news.id}
            >
              <div className="news-card-content">
                <div className="news-image">
                  <img src={news.image} />
                </div>
                <div className="news-content">
                  <h5 className="news-title">{news.newsContent}</h5>
                  <p className="news-timeline"> {news.timeline} </p>
                </div>
              </div>
            </a>
          ))}
        </Slider>
      </div> */}
    </>
  );
};

export default NewsSection;
