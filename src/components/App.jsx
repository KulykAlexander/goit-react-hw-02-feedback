import { Component } from 'react';
import { Sections } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
          fontSize: 30,
          color: '#010101',
        }}
      >
        <Sections title="Please leave feedback">
          <FeedbackOptions options={this.state}></FeedbackOptions>
        </Sections>

        <Sections title="Statistics"></Sections>
      </div>
    );
  }
}
