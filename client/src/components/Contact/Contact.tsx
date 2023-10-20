import Navbar from "../Navbar/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>
          If you have any questions or inquiries, feel free to get in touch with
          us using the details below:
        </p>

        <div className="contact-info">
          <div className="info-item">
            <h3>Address:</h3>
            <p>123 Main Street, City, Country</p>
          </div>

          <div className="info-item">
            <h3>Email:</h3>
            <p>info@example.com</p>
          </div>

          <div className="info-item">
            <h3>Phone:</h3>
            <p>(123) 456-7890</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
