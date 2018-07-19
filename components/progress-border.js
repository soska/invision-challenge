import React from 'react';
import * as colors from '../lib/colors';

export default ({ selected, progress }) => (
  <div className="outside">
    {selected &&
      progress < 100 && (
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
