import NextHead from 'next/head';
import { string } from 'prop-types';

const Head = props => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>Invision {props.title ? `| ${props.title}` : ''}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/static/favicon.ico" />
    <link rel="stylesheet" href="/_next/static/style.css" />
  </NextHead>
);

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string,
};

export default Head;
