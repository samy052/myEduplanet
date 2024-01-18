import Navbar from "../Navbar/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      {/* <div classNameName="about-container">
        <h2>About Us</h2>
        <p>
          Welcome to our website! We are dedicated to providing valuable
          information about courses, exams, and more to help you make informed
          decisions about your education.
        </p>
        <p>
          Our mission is to empower students and professionals with the
          knowledge and resources they need to succeed in their academic and
          career pursuits.
        </p>
        <p>
          Feel free to explore our website and discover a wealth of information
          on a wide range of educational topics.
        </p>
      </div> */}

      <div className="about-content">
        <div className="about-head-foot" id="about-welcome">
          <p>
            <span>Welcome</span> to University 360, your trusted partner in
            navigating the exciting journey of career exploration and college
            information. Our mission is to empower individuals like you to make
            informed decisions about your future by providing comprehensive and
            personalized guidance.
          </p>
        </div>

        <div className="about-right">
          <h2>Who are we?</h2>
          <p>
            At University 360, we are a team of dedicated professionals
            passionate about helping you unlock your full potential. With a deep
            understanding of the complexities of career choices and the vast
            landscape of educational opportunities, we strive to be your go-to
            resource for all things related to career counseling and college
            information.
          </p>
          <br />
        </div>

        <div className="about-left">
          <h2>Our Vision</h2>
          <p>
            At Feast Finderz, we believe that food is not just sustenance; it's
            an art form, a cultural expression, and a source of joy. Our vision
            is to celebrate this universal language of taste by offering an
            extensive menu of dishes that reflect the beauty and diversity of
            global cuisines. Whether you're a fan of classNameic comfort foods
            or crave the thrill of bold and exotic flavors, we've got something
            special for you.
          </p>
        </div>

        <div className="about-right">
          <h2>What Sets Us Apart</h2>
          <p>
            <span id="text-orange">Personalized Guidance</span>: We believe in
            the power of individuality. Our approach is tailored to your unique
            strengths, interests, and aspirations, ensuring that the advice you
            receive is as unique as you are.
          </p>
          <p>
            <span id="text-orange">Comprehensive Resources</span>: Navigate
            through a wealth of resources, from in-depth articles on various
            careers and industries to detailed college profiles. Our
            comprehensive database is designed to provide you with all the
            information you need to make informed decisions.
          </p>
          <p>
            <span id="text-orange">Expert Insights</span>: Benefit from the
            wisdom of experienced career counselors and education experts. Our
            team is committed to staying abreast of the latest trends in
            education and the job market, ensuring that you receive the most
            relevant and accurate guidance.
          </p>

          <br />
        </div>

        <div className="about-left">
          <h2>Our Services</h2>
          <p>
            <span id="text-orange">Career Counseling</span>: Unlock your
            potential with one-on-one career counseling sessions. Our
            experienced counselors are here to help you explore career options,
            set goals, and create a roadmap for success.
          </p>
          <p>
            <span id="text-orange">College Information</span>: Access detailed
            information on colleges and universities, including admission
            requirements, campus life, and academic programs. Make informed
            decisions about your higher education journey.
          </p>
          <p>
            <span id="text-orange">Skill Development</span>: Enhance your skill
            set with our curated resources on professional development,
            certifications, and training programs. Stay competitive in today's
            dynamic job market.
          </p>
        </div>

        <div className="about-head-foot" id="about-vision">
          <h2>Join Us on our journey </h2>
          <p>
            Embark on your journey to success with University 360. Whether
            you're a high school student planning for college or a professional
            seeking a career change, we're here to support you. Explore,
            discover, and make informed decisions with confidence.
          </p>

          <p>
            At University 360, your future is our priority. Welcome to a world
            of possibilities!
          </p>
          {/* <p>Thank You!</p> */}
          <p>
            Thank You!
            <br />
            The University 360 Team
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
