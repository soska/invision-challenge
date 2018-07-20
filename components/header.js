export default () => (
  <header>
    <h1>Design better. Faster. Together.</h1>
    <style jsx>{`
      header {
        padding: 140px 0 50px 0;
      }
      h1 {
        font-weight: 400;
        text-align: center;
        font-size: 56px;
        margin: 0;
        padding: 0;
        line-height: 1em;
      }

      @media (max-width: 640px) {
        header {
          padding: 50px 30px;
        }
        h1 {
          text-align: left;
          font-size: 40px;
          line-height: 1.3em;
          letter-spacing: -0.05em;
        }
      }
    `}</style>
  </header>
);
