import React from 'react';

const getCardImageSrc = (src, mobile) =>
  `/static/images/${src}${mobile ? '--mobile' : ''}.png`;

export default ({ src, mobile = false }) => (
  <div>
    {/* <img src={getCardImageSrc(src, mobile)} role="presentation" /> */}
    <style jsx>{`
      @media (min-width: 641px) {
        div {
          display: flex;
          width: 300px;
          height: 270px;
          align-items: center;
          justify-content: center;
          background-image: url(${getCardImageSrc(src, mobile)});
          background-position: center;
          background-size: contain;
          background-repeat: no-repeat;
        }
        img {
          display: none;
        }
      }
      @media (max-width: 640px) {
        div {
          display: flex;
          width: 150px;
          height: 150px;
          align-items: center;
          justify-content: center;
          background-image: url(${getCardImageSrc(src, mobile)});
          background-position: top left;
          background-size: contain;
          background-repeat: no-repeat;
        }
        img {
          display: none;
        }
      }
    `}</style>
  </div>
);
