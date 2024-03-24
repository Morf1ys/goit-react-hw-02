
import css from './ResetButton.module.css'

const ResetButton = ({ handleReset, totalFeedback }) => {
  return totalFeedback > 0 ? <button className={css.btn} onClick={handleReset}>Reset</button> : null;
};

export default ResetButton;
