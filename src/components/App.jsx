import { Component } from 'react';
import { Sections } from './Section';
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
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Sections title="Please leave feedback"></Sections>

        <Sections title="Statistics"></Sections>
      </div>
    );
  }
}
