import React from 'react';
import Timer from './timer';
import Nav from './progress-nav';

export default class TabsNav extends React.Component {
  static defaultProps = {
    duration: 40000,
  };

  state = {
    timerActive: true,
  };

  currentIndex = () => {
    const { tabs } = this.props;
    const selected = tabs.find(tab => tab.selected);
    const index = tabs.indexOf(selected);
    return index;
  };

  next = () => {
    const { tabs } = this.props;
    let curr = this.currentIndex() + 1;
    if (curr >= tabs.length) {
      curr = 0;
    }
    return this.handleChange(tabs[curr]);
  };

  prev = () => {
    const { tabs } = this.props;
    let curr = this.currentIndex() - 1;
    if (curr < 0) {
      curr = tabs.length - 1;
    }
    return this.handleChange(tabs[curr]);
  };

  handleChange = tab => e => {
    if (e) {
      e.preventDefault();
      this.setState({ timerActive: false });
    }
    this.props.onChange(tab);
  };

  render() {
    const { tabs, onChange } = this.props;
    const { timerActive } = this.state;
    this.currentIndex();
    return (
      <Timer
        onLap={this.next()}
        duration={this.props.duration}
        active={timerActive}
      >
        {progress => {
          return (
            <Nav
              progress={progress}
              tabs={tabs}
              changeHandler={this.handleChange}
              timerActive={timerActive}
            />
          );
        }}
      </Timer>
    );
  }
}
