import React from 'react';
import Timer from './timer';
import * as colors from '../lib/colors';
import ProgressBorder from './progress-border';

export default ({
  title,
  subtitle,
  progress,
  selected,
  onClick,
  timerActive,
}) => (
  <a href={'#'} onClick={onClick} className={selected ? 'selected' : ''}>
    <span className="title">{title}</span>
    <span className="subtitle">{subtitle}</span>
    <ProgressBorder
      selected={selected}
      progress={progress}
      timerActive={timerActive}
    />
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
        color: ${colors.notBlack};
      }

      a.selected {
        color: ${colors.pink};
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
        color: inherit;
        transition-property: color;
        transition-duration: 0.3s;
      }
      .subtitle {
        font-weight: 400;
        font-size: 14px;
        color: ${colors.gray};
      }
    `}</style>
  </a>
);
