// ExamNotificationAdmin.tsx
import React, { useState } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './ExamNotificationAdmin.css'; // Import the styles for the admin page

const ExamNotificationAdmin: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const resetForm = () => {
    setTitle('');
    setContent('');
    setImageUrl('');
  };

  const handlePublish = async () => {
    try {
      const response = await axios.post('http://localhost:4000/api/notifications', {
        title,
        content,
        imageUrl,
      });
      console.log('Exam Notification published successfully:', response.data);
      resetForm();
    } catch (error) {
      console.error('Error publishing exam notification:', error);
    }
  };

  return (
    <div className="admin-blog-container">
      <h1>Admin Exam Notification</h1>
      <form className="admin-blog-form">
        <label className="admin-blog-label">Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="admin-blog-input"
        />

        <label className="admin-blog-label">Content:</label>
        <ReactQuill
          value={content}
          onChange={(value) => setContent(value)}
          modules={{
            toolbar: [
              [{ 'header': [1, 2, false] }],
              ['bold', 'italic', 'underline', 'strike', 'blockquote'],
              [{'list': 'ordered'}, {'list': 'bullet'}],
              ['link', 'image'],
              [{'color': []}, {'background': []}],
              ['clean']
            ],
          }}
          className="admin-blog-quill-editor"
        />

        <label className="admin-blog-label">Image URL:</label>
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="admin-blog-input"
        />

        <button type="button" onClick={handlePublish} className="admin-blog-button">
          Publish
        </button>
      </form>
    </div>
  );
};

export default ExamNotificationAdmin;