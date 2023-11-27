import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AffiliatedColleges = () => {
  const colleges = [
    {
      id: 1,
      name: "College 1",
      image:
        "https://images.unsplash.com/photo-1613896527026-f195d5c818ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60",
      collegeWebsite: "https://www.google.com",
    },
    {
      id: 2,
      name: "College 2",
      image:
        "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2Nob29sJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60",
      collegeWebsite: "https://www.google.com",
    },
    {
      id: 3,
      name: "College 3",
      image:
        "https://images.unsplash.com/photo-1616512659455-111d3367649f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2Nob29sJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60",
      collegeWebsite: "https://www.google.com",
    },
  ];

  const settings = {
    // dots: true,
    navigation: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="affiliated-colleges-slider">
      <br />
      <h2 className="affiliated-colleges-heading">Associated Colleges</h2>
      <Slider {...settings}>
        {colleges.map((college) => (
          <div key={college.id}>
            <img
              src={college.image}
              alt="Slide 1"
              className="affiliated-college-image"
            />
            <div className="affiliated-college-link-container">
              <a
                href={college.collegeWebsite}
                target="_blank"
                className="affiliated-college-link"
              >
                {college.name}
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AffiliatedColleges;
