import React from 'react';
import * as colors from '../lib/colors';

// We'll use a React Context to pass layout information to the cards
const { Provider, Consumer } = React.createContext({ mod: 0, total: 1 });

export const CardsLayout = ({ children }) => (
  <Provider
    value={{
      mod: children.length % 3, // this is useful for desktop layout
      total: children.length, // this is useful for mobile layout
    }}
  >
    <section>
      <div>{children}</div>
      <style jsx>{`
        @media (min-width: 641px) {
          div {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
          }
        }

        @media (max-width: 640px) {
          section {
            padding-left: 30px;
            margin-bottom: 50px;
            overflow: auto;
          }
          div {
            display: flex;
          }
        }
      `}</style>
    </section>
  </Provider>
);

const getCardImageSrc = (src, mobile) =>
  `/static/images/${src}${mobile ? '--mobile' : ''}.png`;

export const Card = props => (
  <Consumer>
    {({ mod }) => <CardItem {...props} layout={`mod-${mod}`} />}
  </Consumer>
);

const CardItem = ({ title, image, children, layout }) => (
  <div className={`container ${layout}`}>
    <figure className="desktop">
      <CardImage src={image} alt={title} />
    </figure>
    <figure className="mobile">
      <CardImage src={image} alt={title} mobile />
    </figure>
    <div className="copy">
      <h2>{title}</h2>
      <div className="description">{children}</div>
    </div>
    <style jsx>{`
      figure {
        margin: 0;
        padding: 0;
        max-width: 100%;
      }
      @media (min-width: 641px) {
        .container {
          padding-top: 96px;
          width: 33%;
          max-width: 300px;
          text-align: center;
        }
        .container:nth-child(3n-1) {
          margin: 0 auto;
        }

        .container.mod-2:last-child {
          margin: 0;
          margin-left: 7.5%;
        }

        .desktop {
          display: block;
        }
        .mobile {
          display: none;
        }
        h2 {
          font-size: 24px;
          font-weight: 400;
        }
        .description {
          font-size: 14px;
          line-height: 2em;
          color: ${colors.darkGray};
        }
      }
      @media (max-width: 640px) {
        .container {
          margin-right: 30px;
          width: 40%;
          max-width: 150px;
        }
        .desktop {
          display: none;
        }
        .mobile {
          display: block;
        }
        h2 {
          font-size: 14px;
          font-weight: 400;
        }
        .description {
          display: none;
        }
      }
    `}</style>
  </div>
);

const CardImage = ({ src, mobile = false }) => (
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
