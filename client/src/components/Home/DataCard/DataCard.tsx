const DataCard = () => {
  const topCollege = [
    {
      iconSrc: "https://cache.careers360.mobi/images/home/ranking.svg",
      title: "Rankings",
      description:
        "1500 Colleges Ranked based on transparent, accurate, government-approved, student-friendly data",
      tags: [
        { text: "Top Engineering Colleges in India", link: "" },
        { text: "Top MBA Colleges in India", link: "" },
        { text: "Top Law Colleges in India", link: "" },
        { text: "Top Medical Colleges in India", link: "" },
        { text: "Top Universities in India", link: "" },
      ],
    },
  ];
  const upcomingExams = [
    {
      iconSrc: "https://cache.careers360.mobi/images/home/exam.svg",
      title: "Exams",
      description:
        "Easy Information and downloads on Exam preparation, dates, counselling, syllabus and more",
      tags: [
        { text: "JEE Main", link: "" },
        { text: "GATE", link: "" },
        { text: "CAT", link: "" },
        { text: "CLAT", link: "" },
        { text: "NEET", link: "" },
        { text: "BITSAT", link: "" },
        { text: "SRMJEEE", link: "" },
        { text: "NIFT Entrance Exam", link: "" },
        { text: "VITEEE", link: "" },
        { text: "MET", link: "" },
        { text: "CUET", link: "" },
      ],
    },
  ];

  return (
    <div className="container-card">
      {topCollege.map((element, key) => (
        <div className="smallBlk" key={key}>
          <h3 className="heading3">
            <img src={element.iconSrc} alt="Icon" className="sIcon" />
            {element.title}
          </h3>
          <p>{element.description}</p>
          <div className="tags">
            {element.tags.map((tag, index) => (
              <a
                key={index}
                href={tag.link}
                target="_blank"
                className="tag"
                rel="noopener noreferrer"
              >
                {tag.text}
              </a>
            ))}
          </div>
        </div>
      ))}

      {upcomingExams.map((element,key) => (
        <div className="smallBlk" key={key}>
          <h3 className="heading3">
            <img src={element.iconSrc} alt="Icon" className="sIcon" />
            {element.title}
          </h3>
          <p>{element.description}</p>
          <div className="tags">
            {element.tags.map((tag, index) => (
              <a
                key={index}
                href={tag.link}
                target="_blank"
                className="tag"
                rel="noopener noreferrer"
              >
                {tag.text}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DataCard;
