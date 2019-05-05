import { Global } from "@emotion/core";
import App, { Container, DefaultAppIProps, NextAppContext } from "next/app";
import Head from "next/head";
import React from "react";

import globalStyles from "../styles/global.styles";
import isDevelopment from "../utils/isDevelopment";

class MyApp extends App {
  public static async getInitialProps({ Component, ctx }: NextAppContext): Promise<DefaultAppIProps> {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  public componentDidMount() {
    if (isDevelopment()) {
      return;
    }

    if ("serviceWorker" in navigator) {
      window.addEventListener("load", async () => {
        try {
          await navigator.serviceWorker.register("/service.worker.js");
        } catch (err) {
          // tslint:disable-next-line
          console.error("ServiceWorker registration failed.", err);
        }
      });
    }
  }

  public render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Alegreya+Sans:400,500,700,800" rel="stylesheet" />
          <link rel="icon" type="image/png" href="/static/images/icon-64.png" />
          <title>Zenspot</title>
        </Head>

        {!isDevelopment() && (
          <Head>
            <link rel="manifest" href="/manifest.json" />
          </Head>
        )}

        <Global styles={globalStyles} />

        <Container>
          <Component {...pageProps} />
        </Container>
      </React.Fragment>
    );
  }
}

export default MyApp;
