import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ReviewSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const data = [
    {
      id: 1,
      name: "Baapu",
      position: "Politician",
      review:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. e leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image:
        "https://imgk.timesnownews.com/story/DkE2JpOVsAA6Kqz_1.jpg?tr=w-400,h-300,fo-auto",
    },
    {
      id: 2,
      name: "Charlie Chaplin",
      position: "Painter/ Artist",
      review:
        "It is a long established fact that a reader will be distracted by the readable content  desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose",
      image: "https://ehistory.osu.edu/sites/default/files/Hitler-Adolf_0.jpg",
    },
    {
      id: 3,
      name: "Koba",
      position: "Capitaisit",
      review:
        "ontrary to popular belief, Lorem Ipsum is not simply random text. nsectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  (The Extremes of Good and Evil) by Cicero, written in 45 BC. ",
      image:
        "https://cdn.britannica.com/50/221250-138-7BA5F519/who-was-Joseph-Stalin.jpg?w=800&h=450&c=crop",
    },
  ];
  return (
    <>
      <div className="review-cointainer">
        <div className="review-section" data-aos="fade-right">
          <br />
          <br />
          <h1 className="review-section">What people think about us?</h1>
          <div className="review-pannel">
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
            >
              {data.map((user) => (
                <SwiperSlide key={user.id}>
                  <div className="review-content">
                    <div className="user-image">
                      <img src={user["image"]} alt="" />
                    </div>
                    <div className="text-section">
                      <h2 className="user-name">{user.name}</h2>
                      <h4 className="user-position">{user.position}</h4>
                      <p className="user-review">" {user.review} "</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <br />
        <br />
      </div>
    </>
  );
};

export default ReviewSection;
