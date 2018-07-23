import React from 'react';
import * as colors from '../lib/colors';
import { CardsLayoutContext } from './cards-layout';
import CardImage from './card-image';

export const Card = props => (
  <CardsLayoutContext.Consumer>
    {({ mod }) => <CardItem {...props} layout={`mod-${mod}`} />}
  </CardsLayoutContext.Consumer>
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

      @keyframes movein {
        0% {
          opacity: 0;
          transform: translateY(10%);
        }

        75% {
          opacity: 1;
        }

        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes fadein {
        0% {
          opacity: 0;
        }

        100% {
          opacity: 1;
        }
      }

      @media (min-width: 641px) {
        .container {
          padding-top: 96px;
          width: 33%;
          max-width: 300px;
          text-align: center;
          animation-name: movein;
          animation-duration: 0.8s;
        }

        .container:nth-child(2n) {
          animation-duration: 0.6s;
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
          animation-name: fadein;
          animation-duration: 1.1s;
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
