import React from 'react';
import Timer from './timer';

export default class TabsNav extends React.Component {
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
    // console.log('CURR', curr);
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
    this.currentIndex();
    return (
      <Timer
        onLap={this.next()}
        duration={10000}
        active={this.state.timerActive}
      >
        {progress => {
          return (
            <ul>
              {tabs.map(tab => (
                <li key={tab.name} onClick={this.handleChange(tab)}>
                  {tab.title} {tab.selected ? `${progress}%` : ''}
                </li>
              ))}
            </ul>
          );
        }}
      </Timer>
    );
  }
}
