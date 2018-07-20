import React from 'react';
import Timer from './timer';
import * as colors from '../lib/colors';
import ProgressTabItem from './progress-tab-item';

export default ({ progress, tabs, changeHandler, timerActive }) => (
  <nav>
    {tabs.map(tab => (
      <ProgressTabItem
        key={tab.name}
        onClick={changeHandler(tab)}
        progress={progress}
        timerActive={timerActive}
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
