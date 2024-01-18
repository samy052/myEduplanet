import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import "./SingleBlogStyles.css";
interface Blog {
  _id: string;
  title: string;
  imageUrl: string;
  content: string;
}

const SingleBlog: React.FC = () => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const { blogId } = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/blogs/${blogId}`
        );
        setBlog(response.data);
      } catch (error) {
        console.error("Error fetching blog:", error);
        setBlog(null); // Set blog to null in case of an error
      }
    };

    fetchBlog();
  }, [blogId]);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <>
      <Navbar />
      <div>
        <div className="blog-container">
          <h1>{blog.title}</h1>
          <img src={blog.imageUrl} alt={blog.title} />
          <p dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
