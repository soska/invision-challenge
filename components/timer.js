import React from 'react';
export default class Timer extends React.Component {
  static defaultProps = {
    duration: 5000,
    active: true,
  };

  state = {
    start: null,
    progress: 0,
  };

  raf = null;

  tick = timestamp => {
    if (!this.props.active) {
      return;
    }
    let { start } = this.state;
    if (!start) start = timestamp;
    let delta = timestamp - start;
    this.setState({ start });
    if (delta > this.props.duration) {
      this.setState({ start: null, progress: 0 }, () => {
        console.log('WILL LAP', this.state.progress);
        this.props.onLap();
      });
    }
    this.setState({
      progress: Math.floor((delta / this.props.duration) * 100),
    });
    this.raf = window.requestAnimationFrame(this.tick);
  };

  componentDidMount() {
    this.raf = window.requestAnimationFrame(this.tick);
  }

  componentWillUnmount() {
    if (this.raf) {
      window.cancelAnimationFrame(this.raf);
    }
  }

  render() {
    const progress = this.props.active ? this.state.progress : 100;
    return this.props.children(progress);
  }
}
