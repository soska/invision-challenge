import React from 'react';
import Timer from './timer';
import * as colors from '../lib/colors';
import ProgressTabItem from './progress-tab-item';

export default ({ progress, tabs, changeHandler }) => (
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
