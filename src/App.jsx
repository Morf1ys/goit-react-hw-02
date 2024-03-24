import React, { useState, useEffect } from 'react';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Description from './components/Description/Description';
import Notification from './components/Notification/Notification';
import css from './index.module.css'

export default function App() {
  const initialFeedback = JSON.parse(localStorage.getItem('feedback')) || {
    good: 0,
    neutral: 0,
    bad: 0
  };
  const [feedback, setFeedback] = useState(initialFeedback);
  
  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = feedbackType => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1
    }));
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage = totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  const handleReset = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div className={css['cont-app']}>
      <Description />
      <Options updateFeedback={updateFeedback} handleReset={handleReset} totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? <Feedback feedback={feedback} /> : <Notification />}
      {totalFeedback > 0 && <p className={css['inf-txt']}>Total feedback: {totalFeedback}</p>}
      {totalFeedback > 0 && <p className={css['inf-txt']}>Positive feedback: {positivePercentage}%</p>}
    </div>
  );
}
