import css from './Options.module.css'
import ResetButton from '../ResetButton/ResetButton';

const Options = ({ updateFeedback, handleReset, totalFeedback }) => {
  return (
    <div className={css['feed-cont']}>
      <button className={css['feed-btn']} onClick={() => updateFeedback('good')}>Good</button>
      <button className={css['feed-btn']} onClick={() => updateFeedback('neutral')}>Neutral</button>
      <button className={css['feed-btn']} onClick={() => updateFeedback('bad')}>Bad</button>
          <ResetButton handleReset={handleReset} totalFeedback={totalFeedback} />
    </div>
  );
};

export default Options;
