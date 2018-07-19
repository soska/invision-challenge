import React from 'react';
import Timer from './timer';
import * as colors from '../lib/colors';
import ProgressBorder from './progress-border';

export default ({ title, subtitle, progress, selected, onClick }) => (
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
