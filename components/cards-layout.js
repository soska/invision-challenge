import React from 'react';
import * as colors from '../lib/colors';
// We'll use a React Context to pass layout information to the cards
export const CardsLayoutContext = React.createContext({ mod: 0, total: 1 });

export const CardsLayout = ({ children }) => (
  <CardsLayoutContext.Provider
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
  </CardsLayoutContext.Provider>
);
