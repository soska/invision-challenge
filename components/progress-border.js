import React from 'react';
import * as colors from '../lib/colors';

export default ({ selected, progress, timerActive }) => {
  let width = 100;
  if (timerActive) {
    width = Math.floor(progress);
  }

  return (
    <div className="outside">
      {selected &&
        progress < 100 && (
          <div
            className="inside"
            style={{
              width: `${width}%`,
            }}
          />
        )}
      {selected && !timerActive && <div className="inside full" />}
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
          transition-property: width;
          transition-duration: 0.3s;
        }
        .inside.full {
          width: 100%;
        }
      `}</style>
    </div>
  );
};
