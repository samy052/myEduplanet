// Blog.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Blog.css';

interface Blog {
  _id: string;
  title: string;
  imageUrl: string;
  content: string;
}

const Blog: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/blogs');
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="container">
      <h1>All Blogs</h1>
      {blogs.map((blog) => (
        <Link to={`/blogs/${blog._id}`} key={blog._id} className="blog-link">
          <div className="blog-post">
            <h2 className="blog-title">{blog.title}</h2>
            <img className="blog-image" src={blog.imageUrl} alt={blog.title} />
            <p className="blog-content" dangerouslySetInnerHTML={{ __html: blog.content }} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;