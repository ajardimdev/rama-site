import React from 'react'
import Document, { DocumentInitialProps, Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() : JSX.Element {
      return (

        <Html lang="pt">
            <Head>
                <meta charSet="utf-8" />

                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Cantarell&family=Fira+Sans&family=Oxygen:wght@300;400;700&family=Roboto&family=Ubuntu&display=swap" rel="stylesheet" />
                <link rel="icon" href="/R_P.png" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
      )
  }
}
