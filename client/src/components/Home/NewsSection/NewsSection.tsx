import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewsSection = () => {
  const newsData = [
    {
      id: 1,
      newsContent: "Examination dates for GATE and CAT are now confirmed.",
      timeline: "1 Jan, 2023, 18:34 IST",
      url: "https://www.bedow.se/",
      image:
        "https://images.unsplash.com/photo-1472313420546-a46e561861d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNvdXJjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    },
    {
      id: 2,
      newsContent: "Examination dates for GATE and CAT are now confirmed.",
      timeline: "1 Jan, 2023, 18:34 IST",
      url: "https://www.etq-amsterdam.com/",
      image:
        "https://plus.unsplash.com/premium_photo-1666345068000-f11cb42d964f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c291cmNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60",
    },
    {
      id: 3,
      newsContent: "Examination dates for GATE and CAT are now confirmed.",
      timeline: "1 Jan, 2023, 18:34 IST",
      url: "https://www.etq-amsterdam.com/",
      image:
        "https://images.unsplash.com/photo-1615232934320-87b37b0ff5ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNvdXJjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    },
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
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
    <div className="news-cointainer">
      <h2 className="news-heading">Exam Notifications</h2>
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
      </div>
    </>
  );
};

export default NewsSection;