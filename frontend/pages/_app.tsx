import React from 'react'
import App, { Container, DefaultAppIProps, NextAppContext } from 'next/app'
import Head from 'next/head'
import { Global } from '@emotion/core';

import globalStyles from '../styles/global.styles';
import isDevelopment from '../utils/isDevelopment';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }: NextAppContext): Promise<DefaultAppIProps> {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps };
  }

  componentDidMount() {
    if (isDevelopment()) {
      return;
    }

    if ('serviceWorker' in navigator) {
      window.addEventListener('load', async () => {
        try {
          await navigator.serviceWorker.register('/service.worker.js');
        } catch (err) {
          console.error('ServiceWorker registration failed.', err);
        }
      });
    }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <React.Fragment>
        {!isDevelopment() && (
          <Head>
            <link rel="icon" type="image/png" href="/static/images/icon-192.png" />
            <link rel="manifest" href="/manifest.json" />
            <title>Zenbox</title>
          </Head>
        )}

        <Global styles={globalStyles} />

        <Container>
          <Component {...pageProps} />
        </Container>
      </React.Fragment>
    )
  }
}

export default MyApp