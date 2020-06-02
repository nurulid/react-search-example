import React from 'react';

class ClockClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  // React call this when the clock output is inserted into DOM
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  // React call this if the component is ever removed from the DOM, so the timer stop
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default ClockClass;