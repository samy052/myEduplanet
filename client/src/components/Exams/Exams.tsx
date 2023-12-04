import { useState } from "react";
import Navbar from "../Navbar/Navbar";

const Exams = () => {
  const [filter, setFilter] = useState("Engineering");

  const filterBtns = [
    "Engineering",
    "Medical",
    "Commerce",
    "Management",
    "Design",
    "Law",
    "Arts",
    "Science",
  ];

  const engineering = [
    {
      tag: "Engineering",
      name: "JEE Main",
      Fullform: "Joint Entrance Examination Main",
      date: "Twice a year(Jan/Feb and April)",
      mode: "Online",
    },
    {
      tag: "Engineering",
      name: "JEE Advanced",
      Fullform: "Joint Entrance Examination Advanced",
      date: "Once a year(May)",
      mode: "Online",
    },
    {
      tag: "Engineering",
      name: "BITSAT",
      Fullform: "Birla Institute of Technology and Science Aptitude Test",
      date: "Once a year(May)",
      mode: "Online",
    },
    {
      tag: "Engineering",
      name: "GATE",
      Fullform: "Graduate Aptitude Test in Engineering",
      date: "Once a year(February)",
      mode: "Online",
    },
  ];
  const medical = [
    {
      tag: "Medical",
      name: "NEET",
      Fullform: "National Eligibility cum Entrance Test",
      date: "Once a year (May)",
      mode: "Offline",
    },
    {
      tag: "Medical",
      name: "AIIMS MBBS",
      Fullform: "All India Institute of Medical Sciences MBBS Entrance Exam",
      date: "Once a year (May/June)",
      mode: "Online",
    },
    {
      tag: "Medical",
      name: "JIPMER MBBS",
      Fullform:
        "Jawaharlal Institute of Postgraduate Medical Education and Research MBBS Entrance Exam",
      date: "Once a year (June)",
      mode: "Online",
    },
    {
      tag: "Medical",
      name: "PGIMER PG Entrance",
      Fullform:
        "Postgraduate Institute of Medical Education and Research PG Entrance Exam",
      date: "Twice a year (January and July)",
      mode: "Online",
    },
  ];
  const commerce = [
    {
      name: "CA Foundation",
      Fullform: "Chartered Accountancy Foundation",
      date: "Twice a year (May and November)",
      mode: "Offline",
    },
    {
      name: "CMA Foundation",
      Fullform: "Cost and Management Accountancy Foundation",
      date: "Twice a year (June and December)",
      mode: "Online",
    },
    {
      name: "CS Foundation",
      Fullform: "Company Secretaryship Foundation",
      date: "Twice a year (June and December)",
      mode: "Online",
    },
    {
      name: "BBA Entrance Exam",
      Fullform: "Bachelor of Business Administration Entrance Exam",
      date: "Varies by university",
      mode: "Varies (Online/Offline)",
    },
  ];
  const management = [
    {
      name: "CAT",
      Fullform: "Common Admission Test",
      date: "Once a year (November)",
      mode: "Online",
    },
    {
      name: "MAT",
      Fullform: "Management Aptitude Test",
      date: "Four times a year (February, May, September, December)",
      mode: "Online/Offline",
    },
    {
      name: "XAT",
      Fullform: "Xavier Aptitude Test",
      date: "Once a year (January)",
      mode: "Online",
    },
    {
      name: "GMAT",
      Fullform: "Graduate Management Admission Test",
      date: "Throughout the year",
      mode: "Online",
    },
  ];
  const design = [
    {
      name: "NID Entrance Exam",
      Fullform: "National Institute of Design Entrance Exam",
      date: "Once a year",
      mode: "Offline",
    },
    {
      name: "NIFT Entrance Exam",
      Fullform: "National Institute of Fashion Technology Entrance Exam",
      date: "Once a year",
      mode: "Offline/Online",
    },
    {
      name: "CEED",
      Fullform: "Common Entrance Exam for Design",
      date: "Once a year",
      mode: "Online",
    },
    {
      name: "UCEED",
      Fullform: "Undergraduate Common Entrance Exam for Design",
      date: "Once a year",
      mode: "Online",
    },
  ];
  const law = [
    {
      name: "CLAT",
      Fullform: "Common Law Admission Test",
      date: "Once a year",
      mode: "Online",
    },
    {
      name: "AILET",
      Fullform: "All India Law Entrance Test",
      date: "Once a year",
      mode: "Offline",
    },
    {
      name: "LSAT India",
      Fullform: "Law School Admission Test India",
      date: "Multiple times a year",
      mode: "Online",
    },
    {
      name: "MH CET Law",
      Fullform: "Maharashtra Common Entrance Test for Law",
      date: "Once a year",
      mode: "Online",
    },
  ];
  const arts = [
    {
      name: "DUET",
      Fullform: "Delhi University Entrance Test",
      date: "Varies by course",
      mode: "Online",
    },
    {
      name: "JNU Entrance Exam",
      Fullform: "Jawaharlal Nehru University Entrance Exam",
      date: "Varies by course",
      mode: "Online",
    },
    {
      name: "FTII Entrance Exam",
      Fullform: "Film and Television Institute of India Entrance Exam",
      date: "Once a year",
      mode: "Offline",
    },
    {
      name: "NATA",
      Fullform: "National Aptitude Test in Architecture",
      date: "Twice a year",
      mode: "Online/Offline",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="filter-btns">
        {filterBtns.map((value, index) => (
          <button
            key={index}
            onClick={() => {
              setFilter(value);
            }}
            className={
              filter === `${value}` ? "active-filter-btn" : "filter-btn"
            }
          >
            {value}
          </button>
        ))}
      </div>

      {filter === "Engineering" && (
        <div className="exam-card-container">
          {engineering.map((value, index) => (
            <div className="exam-card" key={index}>
              <div className="exam-card-top">
                <img
                  src="https://previews.123rf.com/images/wavebreakmediamicro/wavebreakmediamicro1604/wavebreakmediamicro160414861/55282985-worMedical-exam-against-red-apple-on-pile-of-books.jpg"
                  alt=""
                />
                <div className="exam-card-text-section">
                  <h3>{value["name"]}</h3>
                  <p>{value["Fullform"]}</p>
                  <p>{value["date"]}</p>
                  <p>{value["mode"]}</p>
                </div>
              </div>

              <div className="exam-card-text-section-btns">
                <button className="read-more-btn">Read More</button>
                <button className="read-more-btn">Get Updates</button>
                <button className="app-now">
                  <span>Get Brochure</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {filter === "Medical" && (
        <div className="exam-card-container">
          {medical.map((value, index) => (
            <div className="exam-card" key={index}>
              <div className="exam-card-top">
                <img
                  src="https://previews.123rf.com/images/wavebreakmediamicro/wavebreakmediamicro1604/wavebreakmediamicro160414861/55282985-worMedical-exam-against-red-apple-on-pile-of-books.jpg"
                  alt=""
                />
                <div className="exam-card-text-section">
                  <h3>{value["name"]}</h3>
                  <p>{value["Fullform"]}</p>
                  <p>{value["date"]}</p>
                  <p>{value["mode"]}</p>
                </div>
              </div>

              <div className="exam-card-text-section-btns">
                <button className="read-more-btn">Read More</button>
                <button className="read-more-btn">Get Updates</button>
                <button className="app-now">
                  <span>Get Brochure</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {filter === "Commerce" && (
        <div className="exam-card-container">
          {commerce.map((value, index) => (
            <div className="exam-card" key={index}>
              <div className="exam-card-top">
                <img
                  src="https://previews.123rf.com/images/wavebreakmediamicro/wavebreakmediamicro1604/wavebreakmediamicro160414861/55282985-worMedical-exam-against-red-apple-on-pile-of-books.jpg"
                  alt=""
                />
                <div className="exam-card-text-section">
                  <h3>{value["name"]}</h3>
                  <p>{value["Fullform"]}</p>
                  <p>{value["date"]}</p>
                  <p>{value["mode"]}</p>
                </div>
              </div>

              <div className="exam-card-text-section-btns">
                <button className="read-more-btn">Read More</button>
                <button className="read-more-btn">Get Updates</button>
                <button className="app-now">
                  <span>Get Brochure</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {filter === "Management" && (
        <div className="exam-card-container">
          {management.map((value, index) => (
            <div className="exam-card" key={index}>
              <div className="exam-card-top">
                <img
                  src="https://previews.123rf.com/images/wavebreakmediamicro/wavebreakmediamicro1604/wavebreakmediamicro160414861/55282985-worMedical-exam-against-red-apple-on-pile-of-books.jpg"
                  alt=""
                />
                <div className="exam-card-text-section">
                  <h3>{value["name"]}</h3>
                  <p>{value["Fullform"]}</p>
                  <p>{value["date"]}</p>
                  <p>{value["mode"]}</p>
                </div>
              </div>

              <div className="exam-card-text-section-btns">
                <button className="read-more-btn">Read More</button>
                <button className="read-more-btn">Get Updates</button>
                <button className="app-now">
                  <span>Get Brochure</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {filter === "Design" && (
        <div className="exam-card-container">
          {design.map((value, index) => (
            <div className="exam-card" key={index}>
              <div className="exam-card-top">
                <img
                  src="https://previews.123rf.com/images/wavebreakmediamicro/wavebreakmediamicro1604/wavebreakmediamicro160414861/55282985-worMedical-exam-against-red-apple-on-pile-of-books.jpg"
                  alt=""
                />
                <div className="exam-card-text-section">
                  <h3>{value["name"]}</h3>
                  <p>{value["Fullform"]}</p>
                  <p>{value["date"]}</p>
                  <p>{value["mode"]}</p>
                </div>
              </div>

              <div className="exam-card-text-section-btns">
                <button className="read-more-btn">Read More</button>
                <button className="read-more-btn">Get Updates</button>
                <button className="app-now">
                  <span>Get Brochure</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {filter === "Law" && (
        <div className="exam-card-container">
          {law.map((value, index) => (
            <div className="exam-card" key={index}>
              <div className="exam-card-top">
                <img
                  src="https://previews.123rf.com/images/wavebreakmediamicro/wavebreakmediamicro1604/wavebreakmediamicro160414861/55282985-worMedical-exam-against-red-apple-on-pile-of-books.jpg"
                  alt=""
                />
                <div className="exam-card-text-section">
                  <h3>{value["name"]}</h3>
                  <p>{value["Fullform"]}</p>
                  <p>{value["date"]}</p>
                  <p>{value["mode"]}</p>
                </div>
              </div>

              <div className="exam-card-text-section-btns">
                <button className="read-more-btn">Read More</button>
                <button className="read-more-btn">Get Updates</button>
                <button className="app-now">
                  <span>Get Brochure</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {filter === "Arts" && (
        <div className="exam-card-container">
          {arts.map((value, index) => (
            <div className="exam-card" key={index}>
              <div className="exam-card-top">
                <img
                  src="https://previews.123rf.com/images/wavebreakmediamicro/wavebreakmediamicro1604/wavebreakmediamicro160414861/55282985-worMedical-exam-against-red-apple-on-pile-of-books.jpg"
                  alt=""
                />
                <div className="exam-card-text-section">
                  <h3>{value["name"]}</h3>
                  <p>{value["Fullform"]}</p>
                  <p>{value["date"]}</p>
                  <p>{value["mode"]}</p>
                </div>
              </div>

              <div className="exam-card-text-section-btns">
                <button className="read-more-btn">Read More</button>
                <button className="read-more-btn">Get Updates</button>
                <button className="app-now">
                  <span>Get Brochure</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {filter === "Science" && (
        <div className="exam-card-container">
          {engineering.map((value, index) => (
            <div className="exam-card" key={index}>
              <div className="exam-card-top">
                <img
                  src="https://previews.123rf.com/images/wavebreakmediamicro/wavebreakmediamicro1604/wavebreakmediamicro160414861/55282985-worMedical-exam-against-red-apple-on-pile-of-books.jpg"
                  alt=""
                />
                <div className="exam-card-text-section">
                  <h3>{value["name"]}</h3>
                  <p>{value["Fullform"]}</p>
                  <p>{value["date"]}</p>
                  <p>{value["mode"]}</p>
                </div>
              </div>

              <div className="exam-card-text-section-btns">
                <button className="read-more-btn">Read More</button>
                <button className="read-more-btn">Get Updates</button>
                <button className="app-now">
                  <span>Get Brochure</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Exams;
