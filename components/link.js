import * as colors from '../lib/colors';
export default ({ children, ...props }) => (
  <a {...props}>
    {children}
    <style jsx>{`
      a {
        color: ${colors.pink};
        font-size: 12px;
        text-transform: uppercase;
        text-decoration: none;
        display: inline-block;
        padding: 1px;
        letter-spacing: 0.03em;
        border-bottom: 2px solid currentcolor;
      }
      @media (max-width: 640px) {
        a {
          display: none;
        }
      }
    `}</style>
  </a>
);
