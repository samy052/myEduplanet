const BlogSection = () => {
    
    const blogsData = [
      {
        id: 1,
        blogHeading: "Top hardware and networking Institutes In India",
        author: "Ramesh Kumar",
        pageAddress: "https://wearecoandco.com/",
        image:
          "https://img.freepik.com/free-vector/illustration-diverse-people_53876-28662.jpg?w=996&t=st=1701541243~exp=1701541843~hmac=f50c841085ad4fbad99834f23c4f6280eec39fb81443eba6c613e1ad9b4bd9d3",
      },
      {
        id: 2,
        blogHeading: "Top Journalism Institutes in India",
        author: "Jindal Singh",
        pageAddress: "https://verbalplusvisual.com/",
        image:
          "https://img.freepik.com/free-vector/line-art-illustration-microphones-recorders-journalism-symbol_460848-14414.jpg?w=1380&t=st=1701540493~exp=1701541093~hmac=569a5ae7fcce9b092ea911937804145a8f608c25996def742b79c877725e0b64",
      },
      {
        id: 3,
        blogHeading:
          "Difference between mechanical and mechatronics engineering.",
        author: "Manish Mittal",
        pageAddress: "https://www.monographcomms.ca/",
        image:
          "https://img.freepik.com/free-vector/illustration-gear-doodle-icon_53876-5596.jpg?w=996&t=st=1701541162~exp=1701541762~hmac=4cd5fc15f7f7ea3473c427b1484720e93119c0b1c10295a2314505d22080332d",
      },
      {
        id: 4,
        blogHeading: "Top AFCAT Coaching in India",
        author: "Harsih Verma",
        pageAddress: "https://verbalplusvisual.com/",
        image:
          "https://img.freepik.com/free-photo/plane-with-orange-details-white-background_1194-610.jpg?w=1480&t=st=1701541014~exp=1701541614~hmac=759e0e8956df47408f5084514829c3e0cf90997c9620948b5b40a494e11e5542",
      },
      {
        id: 5,
        blogHeading: "How to make the most of online classes",
        author: "Raghvendra Bansal",
        pageAddress: "https://verbalplusvisual.com/",
        image:
          "https://img.freepik.com/premium-vector/vector-isometric-concept_71344-3249.jpg?semt=sph",
      },
      {
        id: 6,
        blogHeading: "Learn how to manage time during exam time",
        author: "Vinay Jain",
        pageAddress: "https://verbalplusvisual.com/",
        image:
          "https://img.freepik.com/free-vector/red-clock-3d-vector-illustration-timer-symbol-social-media-apps-cartoon-style-isolated-white-background-online-communication-digital-marketing-concept_778687-1725.jpg?w=996&t=st=1701542138~exp=1701542738~hmac=876caeabdb24f3731a8025998f745da0f5cdaa34fedbf03ee33f29874a640d40",
      },
    ];
  
    return (
      <>
        <div className="blogs-section-container">
          <h1>Blogs</h1>
          <div className="blogs-section-card-container">
            {blogsData.map((val, ind) => (
              <div className="blogs-section-card" key={ind}>
                <img src={val.image} alt="" />
                <div className="blogs-section-card-text-section">
                  <h5>{val.blogHeading}</h5>
                  <p>
                    <span>By </span>
                    {val.author}
                  </p>
                </div>
              </div>
            ))}
            {/* <div className="see-more-button1">
              <button>
                <i className="fa-solid fa-arrow-right fa-beat-fade"></i>
              </button>
            </div>
            <div className="see-more-button2">
              <button>More Like This</button>
            </div> */}
          </div>
        </div>
      </>
    );
  };
  
  export default BlogSection;