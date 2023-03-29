import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistic } from './Statistic/Statistic';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleAddVote = e => {
    this.setState(prevState => {
      if (e.target.type === 'button') {
        const objVariable = e.target.textContent.toLowerCase();
        return {
          [objVariable]: prevState[objVariable] + 1,
        };
      }
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => {
      acc += value;
      return acc;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const PositiveFeedback = Math.round((this.state.good / total) * 100);
    return PositiveFeedback;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleAddVote}
          />
        </Section>
        <Section title="Statistic">
          {this.countTotalFeedback() ? (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
