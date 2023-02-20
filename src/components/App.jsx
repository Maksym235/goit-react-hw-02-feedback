import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/feedbackOptions';
import Section from './Section/section';
import { Statistics } from './Statistics/statistics';
import Notification from './Notification/notification';

const options = [`Good`, `Neutral`, `Bad`];

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addStatOnClick = evt => {
    const btnEvt = evt.target.textContent.toLowerCase();
    this.setState(prevState => {
      return { [btnEvt]: prevState[btnEvt] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  positivePercentage = () => {
    const { good } = this.state;
    return Math.round((good * 100) / this.countTotalFeedback());
  };

  render() {
    const total = this.countTotalFeedback();
    const percent = this.positivePercentage();
    return (
      <Section title={`Please leave feedback`}>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.addStatOnClick}
        />
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics stats={this.state} percent={percent} total={total} />
        )}
      </Section>
    );
  }
}

export default App;
