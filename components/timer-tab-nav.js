import React from 'react';
import Timer from './timer';
import * as colors from '../lib/colors';

const ProgressBorder = ({ selected, progress }) => (
  <div className="outside">
    {selected && (
      <div
        className="inside"
        style={{
          width: `${progress}%`,
        }}
      />
    )}
    <style jsx>{`
      .outside {
        width: 100%;
        height: 2px;
        background-color: ${colors.progressGray};
        position: absolute;
        left: 0;
        bottom: 0;
      }
      .inside {
        width: 0%;
        height: 4px;
        background-color: ${colors.pink};
        position: absolute;
        left: 0;
        bottom: 0;
      }
    `}</style>
  </div>
);

const ProgressTabItem = ({ title, subtitle, progress, selected, onClick }) => (
  <a href={'#'} onClick={onClick} className={selected ? 'selected' : ''}>
    <span className="title">{title}</span>
    <span className="subtitle">{subtitle}</span>
    <ProgressBorder selected={selected} progress={progress} />
    <style jsx>{`
      a {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 22px;
        position: relative;
        margin: 0 10px;
        text-decoration: none;
      }

      a:first-child {
        margin-left: 0;
      }
      a:last-child {
        margin-right: 0;
      }

      span {
        display: block;
      }
      .title {
        font-weight: 400;
        font-size: 20px;
        color: ${colors.notBlack};
      }
      .subtitle {
        font-weight: 400;
        font-size: 14px;
        color: ${colors.gray};
      }
    `}</style>
  </a>
);

const Nav = ({ progress, tabs, changeHandler }) => (
  <nav>
    {tabs.map(tab => (
      <ProgressTabItem
        key={tab.name}
        onClick={changeHandler(tab)}
        progress={progress}
        {...tab}
      />
    ))}
    <style jsx>{`
      nav {
        display: flex;
      }
    `}</style>
  </nav>
);

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
            <Nav
              progress={progress}
              tabs={tabs}
              changeHandler={this.handleChange}
            />
          );
        }}
      </Timer>
    );
  }
}
