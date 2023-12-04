const NewsSection = () => {
  const newsData = [
    {
      id: 1,
      newsContent:
        "JEE Advanced 2024: IIT Madras to conduct exam on May 26, 2024 - check key details",
      url: "https://wearecoandco.com/",
      image:
        "https://www.financialexpress.com/wp-content/uploads/2023/11/FE-93.jpg?w=1024",
    },
    {
      id: 2,
      newsContent:
        "‘Nothing we could do but move with the crowd’: Eyewitnesses on Kochi college stampede",
      url: "https://verbalplusvisual.com/",
      image:
        "https://bsmedia.business-standard.com/_media/bs/img/article/2020-01/10/full/1578600734-4954.jpg?im=FeatureCrop,size=(803,452)",
    },
    {
      id: 3,
      newsContent:
        "IIT at 13, Apple employee by 24, but this farmer's son from Bihar has his eyes set elsewhere",
      url: "https://www.monographcomms.ca/",
      image:
        "https://img.freepik.com/free-photo/successful-businessman_1098-18155.jpg?w=740&t=st=1701121004~exp=1701121604~hmac=0227b0bdb89eb6e705768fe505627c53f9803ac578379b051407b61f660524ce",
    },
    {
      id: 4,
      newsContent:
        "US: Three Palestinian college students shot in Vermont during Thanksgiving holiday, shooter still at large",
      url: "https://verbalplusvisual.com/",
      image:
        "https://resize.indiatvnews.com/en/centered/newbucket/1200_675/2023/11/university-of-vermont-1701058071.jpg",
    },
    {
      id: 5,
      newsContent:
        "AKTU VC resigns three days after he was removed by governor",
      timeline: "1 Jan, 2023, 18:34 IST",
      url: "https://www.monographcomms.ca/",
      image:
        "https://static.toiimg.com/thumb/msid-97713121,imgsize-15090,width-400,resizemode-4/97713121.jpg",
    },
    {
      id: 6,
      newsContent:
        "AKTU One View Result 2023 Declared for BTech Regular Exams; Download 2nd and 4th Sem Mark Sheet Here",
      timeline: "1 Jan, 2023, 18:34 IST",
      url: "https://www.monographcomms.ca/",
      image:
        "https://img.jagranjosh.com/images/2023/October/20102023/aktu-one-view-result-2023.jpg",
    },
  ];

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
              </div>
            </div>
          ))}
        </div>
        <div className="see-more-button">
          <button>More Like This</button>
        </div>
      </div>
    </>
  );
};

export default NewsSection;