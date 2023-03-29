import css from '../FeedbackOptions/FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const styledNameOfBtn = Object.keys(options).map(
    key => key.charAt(0).toUpperCase() + key.slice(1)
  );
  return (
    <ul onClick={onLeaveFeedback} className={css.btnList}>
      {styledNameOfBtn.map(btn => {
        return (
          <li key={btn}>
            <button className={css.btn} type="button">
              {btn}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
