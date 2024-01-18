// ExamNotification.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Navbar from '../Navbar/Navbar';

interface ExamNotification {
  _id: string;
  title: string;
  imageUrl: string;
  content: string;
}

const ExamNotification: React.FC = () => {
  const [examNotifications, setExamNotifications] = useState<ExamNotification[]>([]);

  useEffect(() => {
    const fetchExamNotifications = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/notifications');
        setExamNotifications(response.data);
      } catch (error) {
        console.error('Error fetching exam notifications:', error);
      }
    };

    fetchExamNotifications();
  }, []);

  return (
    <>
      <Navbar />
      <div className="blogs-section-container-h">
        <h1>Exam Notifications</h1>
        <div className="blogs-section-card-container">
          {examNotifications.map((val, ind) => (
            <Link to={`/notifications/${val._id}`} key={val._id}>
              <div className="blogs-section-card" key={ind}>
                <img src={val.imageUrl} alt="" />
                <div className="blogs-section-card-text-section">
                  <h5>{val.title}</h5>
                  <p>
                    <span>By </span>
                    {/* {val.author} */}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExamNotification;