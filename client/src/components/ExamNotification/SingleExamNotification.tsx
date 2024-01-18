import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';

interface ExamNotification {
  _id: string;
  title: string;
  imageUrl: string;
  content: string;
}

const SingleExamNotification: React.FC = () => {
  const [examNotification, setExamNotification] = useState<ExamNotification | null>(null);
  const { notificationId } = useParams();

  useEffect(() => {
    const fetchExamNotification = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/notifications/${notificationId}`);
        setExamNotification(response.data);
      } catch (error) {
        console.error('Error fetching exam notification:', error);
        setExamNotification(null); // Set exam notification to null in case of an error
      }
    };

    fetchExamNotification();
  }, [notificationId]);

  if (!examNotification) {
    return <div>Exam Notification not found</div>;
  }

  return (
    <>
      <Navbar />
      <div>
      <div className="blog-container">
        <h1>{examNotification.title}</h1>
        <img src={examNotification.imageUrl} alt={examNotification.title} />
        <p dangerouslySetInnerHTML={{ __html: examNotification.content }} />
      </div>
      </div>
    </>
  );
};

export default SingleExamNotification;