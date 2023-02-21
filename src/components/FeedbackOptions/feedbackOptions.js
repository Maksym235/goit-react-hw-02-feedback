import { Button, ButtonWrapper } from './feedbackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ButtonWrapper>
      {options.map(item => {
        return (
          <Button key={item} type="button" onClick={onLeaveFeedback}>
            {item}
          </Button>
        );
      })}
    </ButtonWrapper>
  );
}
