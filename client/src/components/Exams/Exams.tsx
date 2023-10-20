import Navbar from "../Navbar/Navbar";

const Exams = () => {
  const examData = [
    {
      name: "JEE Main",
      date: "April 3, 2023",
      link: "https://jeemain.nta.nic.in/",
    },
    {
      name: "CAT",
      date: "November 28, 2023",
      link: "https://iimcat.ac.in/",
    },
    {
      name: "CLAT",
      date: "May 8, 2023",
      link: "https://consortiumofnlus.ac.in/clat-2023/",
    },
    {
      name: "NEET",
      date: "May 7, 2023",
      link: "https://neet.nta.nic.in/",
    },
    {
      name: "AIIMS MBBS",
      date: "May 28, 2023",
      link: "https://www.aiimsexams.ac.in/",
    },
    {
      name: "GATE",
      date: "February 4-5 & 11-12, 2023",
      link: "https://gate.iitkgp.ac.in/",
    },
    {
      name: "UPSC Civil Services",
      date: "June 4, 2023",
      link: "https://www.upsc.gov.in/",
    },
    {
      name: "SSC CGL",
      date: "June 19 - July 7, 2023",
      link: "https://ssc.nic.in/",
    },
    {
      name: "UGC NET",
      date: "June 4-11, 2023",
      link: "https://ugcnet.nta.nic.in/",
    },
    {
      name: "NDA Exam",
      date: "April 23, 2023",
      link: "https://www.upsc.gov.in/",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Upcoming Major Exams in India</h2>
        {examData.map((exam, index) => (
          <div className="exam-info" key={index}>
            <h3>{exam.name}</h3>
            <p>Date: {exam.date}</p>
            <a href={exam.link} target="_blank" rel="noopener noreferrer">
              Visit Exam Link
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Exams;
