// Feedback.jsx
import css from './Feedback.module.css';

const Feedback = ({ feedback, totalFeedback, positivePercentage }) => {
  const { good, neutral, bad } = feedback;

  return (
    <div className={css['cont-feed']}>
      <p>Good: <span className={css.list}>{good}</span></p>
      <p>Neutral: <span className={css['sp-lis-ne']}>{neutral}</span></p>
      <p>Bad: <span className={css['sp-lis-bd']}>{bad}</span></p>
      <p>Total feedback: {totalFeedback}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

export default Feedback;
