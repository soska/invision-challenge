import React from 'react';
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
