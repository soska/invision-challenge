import * as colors from '../lib/colors';

export default ({ children, title, subtitle }) => (
  <section>
    <header>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
    </header>
    {children}
    <style jsx>{`
      header {
        padding: 0;
        padding-left: 30px;
        margin: 0;
        padding-bottom: 14px;
      }

      h2 {
        font-size: 20px;
        line-height: 1.3em;
        font-weight: 500;
        margin: 0;
        padding: 0;
      }

      h3 {
        font-size: 12px;
        font-weight: 500;
        line-height: 22px;
        margin: 0;
        padding: 0;
        color: ${colors.gray};
      }

      @media (min-width: 641px) {
        section {
          padding: 0;
          padding-bottom: 140px;
        }

        header {
          display: none;
        }
      }
    `}</style>
  </section>
);
