import React from 'react'
import App, { Container, DefaultAppIProps, NextAppContext } from 'next/app'
import { Global, css } from '@emotion/core';
import emotionReset from 'emotion-reset';

const globalStyles = css`
${emotionReset}

*, *::after, *::before {
  box-sizing: border-box;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-smoothing: antialiased;
}
`

class MyApp extends App {
  static async getInitialProps({ Component, ctx }: NextAppContext): Promise<DefaultAppIProps> {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <React.Fragment>
        <Global styles={globalStyles} />

        <Container>
          <Component {...pageProps} />
        </Container>
      </React.Fragment>
    )
  }
}

export default MyApp