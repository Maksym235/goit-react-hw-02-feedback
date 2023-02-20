export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(item => {
        return (
          <button key={item} type="button" onClick={onLeaveFeedback}>
            {item}
          </button>
        );
      })}
    </div>
  );
}
