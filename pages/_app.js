import React from 'react';
import NextApp, { Container } from 'next/app';
import Head from '../components/head';
import Header from '../components/header';
import '../lib/css/fonts.css';

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head title="Challenge" />
        <Header />
        <div>
          <Component {...pageProps} />
        </div>
        <style jsx>{`
          :global(body) {
            margin: 0;
            padding: 0;
            font-family: 'Maison Neue';
          }

          :global(h1),
          :global(h2),
          :global(h3),
          :global(h4),
          :global(h5) {
            font-family: 'Eina 03';
          }
          div {
            margin: 0 auto;
            max-width: 1070px;
          }
        `}</style>
      </Container>
    );
  }
}
