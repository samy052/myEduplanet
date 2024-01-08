import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./BlogsSectionStyles.css";

interface Blog {
  _id: string;
  title: string;
  imageUrl: string;
  content: string;
}

const BlogSection = () => {
  const [blogsData, setBlogsData] = useState<Blog[]>([]);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/blogs");
  };

  const fetchBlogs = async () => {
    try {
      // Replace the URL with your actual backend endpoint
      const response = await axios.get("http://localhost:4000/api/blogs");
      setBlogsData(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []); // Empty dependency array to ensure fetchBlogs is only called once on component mount

  return (
    <>
       

      <div className="blogs-section-container">
        <h1>Blogs</h1>
        <div className="blogs-section-card-container">
          {blogsData.slice(0, 6).map((val) => (
            <Link
              to={`/blogs/${val._id}`}
              key={val._id}
              className="blogs-section-card-link"
            >
              <div className="blogs-section-card">
                <img src={val.imageUrl} alt="" />
                <div className="blogs-section-card-text-section">
                  <h5>{val.title}</h5>
                  <p>
                    <span>By </span>
                    {val.title}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="see-more-button">
          <button onClick={handleClick}>More Like This</button>
        </div>
      </div>
    </>
  );
};

export default BlogSection;
